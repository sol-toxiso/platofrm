/**
 * Crossmint Mint NFT API client.
 * Uses x-client-secret and x-project-id (Mint API), not X-API-KEY (Headless Checkout).
 *
 * ENV: CROSSMINT_CLIENT_SECRET, CROSSMINT_PROJECT_ID, CROSSMINT_COLLECTION_ID
 * Optional: CROSSMINT_BASE_URL (default production; use https://staging.crossmint.com/api/2022-06-09 for staging)
 */

const DEFAULT_BASE_URL = "https://www.crossmint.com/api/2022-06-09";

export type CrossmintRecipientChain = "solana" | "base" | "polygon" | "ethereum";

export interface CrossmintMintPayload {
  /** Recipient: `solana:<address>`, `base:<address>`, etc. */
  recipient: string;
  /** Metadata: JSON URI string or inline metadata object per Crossmint schema */
  metadata: string | { name: string; image: string; description: string; [key: string]: unknown };
  sendNotification?: boolean;
  locale?: string;
}

export interface CrossmintMintResponse {
  id: string;
  onChain: { status: string; chain?: string };
  actionId?: string;
}

export interface CrossmintNftStatusResponse {
  id: string;
  onChain: { status: string; chain?: string };
  [key: string]: unknown;
}

export interface CrossmintApiConfig {
  clientSecret: string;
  projectId: string;
  collectionId: string;
  baseUrl?: string;
}

export class CrossmintApi {
  private readonly baseUrl: string;
  private readonly clientSecret: string;
  private readonly projectId: string;
  private readonly collectionId: string;

  constructor(config: CrossmintApiConfig) {
    this.clientSecret = config.clientSecret;
    this.projectId = config.projectId;
    this.collectionId = config.collectionId;
    this.baseUrl = config.baseUrl ?? DEFAULT_BASE_URL;
  }

  private get headers(): Record<string, string> {
    return {
      accept: "application/json",
      "content-type": "application/json",
      "x-client-secret": this.clientSecret,
      "x-project-id": this.projectId,
    };
  }

  /**
   * Create (mint) an NFT and return the mint response (id, onChain.status, etc.).
   */
  async mintNft(payload: CrossmintMintPayload): Promise<CrossmintMintResponse> {
    const url = `${this.baseUrl}/collections/${this.collectionId}/nfts`;
    const res = await fetch(url, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        recipient: payload.recipient,
        metadata: payload.metadata,
        ...(payload.sendNotification !== undefined && { sendNotification: payload.sendNotification }),
        ...(payload.locale && { locale: payload.locale }),
      }),
    });

    const json = (await res.json()) as CrossmintMintResponse & { error?: boolean; message?: string };
    if (!res.ok) {
      throw new Error(json.message ?? `Crossmint mint failed: ${res.status}`);
    }
    return json;
  }

  /**
   * Get NFT mint status by id.
   */
  async getNftStatus(nftId: string): Promise<CrossmintNftStatusResponse> {
    const url = `${this.baseUrl}/collections/${this.collectionId}/nfts/${nftId}`;
    const res = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-client-secret": this.clientSecret,
        "x-project-id": this.projectId,
      },
    });

    const json = (await res.json()) as CrossmintNftStatusResponse & { error?: boolean; message?: string };
    if (!res.ok) {
      throw new Error(json.message ?? `Crossmint get status failed: ${res.status}`);
    }
    return json;
  }

  /**
   * Mint NFT and poll until onChain.status is "success" or maxAttempts reached.
   */
  async mintNftAndWait(
    payload: CrossmintMintPayload,
    options: { pollIntervalMs?: number; maxAttempts?: number } = {}
  ): Promise<CrossmintNftStatusResponse> {
    const pollIntervalMs = options.pollIntervalMs ?? 8000;
    const maxAttempts = options.maxAttempts ?? 60;

    const mintRes = await this.mintNft(payload);
    if (mintRes.onChain?.status !== "pending") {
      const status = await this.getNftStatus(mintRes.id);
      if (status.onChain?.status === "success") return status;
      throw new Error(`Unexpected initial status: ${mintRes.onChain?.status}`);
    }

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      await new Promise((resolve) => setTimeout(resolve, pollIntervalMs));
      const status = await this.getNftStatus(mintRes.id);
      if (status.onChain?.status === "success") return status;
      if (status.onChain?.status === "failed") {
        throw new Error("Mint delivery failed");
      }
    }

    throw new Error("Timed out waiting for mint confirmation");
  }

  /**
   * Build recipient string for a chain and address.
   */
  static recipient(chain: CrossmintRecipientChain, address: string): string {
    return `${chain}:${address}`;
  }
}

/**
 * Create CrossmintApi from environment variables.
 */
export function createCrossmintApiFromEnv(): CrossmintApi {
  const clientSecret = process.env.CROSSMINT_CLIENT_SECRET;
  const projectId = process.env.CROSSMINT_PROJECT_ID;
  const collectionId = process.env.CROSSMINT_COLLECTION_ID ?? process.env.NEXT_PUBLIC_CROSSMINT_COLLECTION_ID;

  if (!clientSecret || !projectId || !collectionId) {
    throw new Error(
      "Missing Crossmint env: CROSSMINT_CLIENT_SECRET, CROSSMINT_PROJECT_ID, CROSSMINT_COLLECTION_ID (or NEXT_PUBLIC_CROSSMINT_COLLECTION_ID)"
    );
  }

  const baseUrl =
    process.env.CROSSMINT_BASE_URL ?? process.env.NEXT_PUBLIC_CROSSMINT_BASE_URL ?? undefined;

  return new CrossmintApi({
    clientSecret,
    projectId,
    collectionId,
    baseUrl,
  });
}
