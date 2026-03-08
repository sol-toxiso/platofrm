"use client";

import { useEffect, useState } from "react";
import { Navigation } from "@/components/navigation";

// Match LaunchMyNFT working example: https://storage.googleapis.com/scriptslmt/0.1.4/solana.js + solana.css
const LAUNCHMYNFT_SCRIPT_VERSION = "0.1.4";
const LAUNCHMYNFT_BASE = `https://storage.googleapis.com/scriptslmt/${LAUNCHMYNFT_SCRIPT_VERSION}`;

const OWNER_ID =
  process.env.NEXT_PUBLIC_LAUNCHMYNFT_OWNER_ID ??
  "HZoRNhbNssNneqBmLoUm1BGu8AHfKEt3DefEnQoAN3gL";
const COLLECTION_ID =
  process.env.NEXT_PUBLIC_LAUNCHMYNFT_COLLECTION_ID ?? "afp1Fqh9W7qjSeXYNCPZ";

/** Parse Solana tx error (e.g. { err: { InstructionError: [2, "ProgramFailedToComplete"] }, slot } ) into a short message and hint. */
function parseSolanaTxError(reason: unknown): { message: string; hint: string | null } {
  if (reason == null || typeof reason !== "object") return { message: String(reason), hint: null };
  const obj = reason as Record<string, unknown>;
  const err = obj.err ?? obj.error;
  if (err != null && typeof err === "object") {
    const errObj = err as Record<string, unknown>;
    const instructionError = errObj.InstructionError as [number, string] | undefined;
    if (Array.isArray(instructionError)) {
      const [ixIndex, code] = instructionError;
      const codeStr = typeof code === "string" ? code : JSON.stringify(code);
      const message = `Instruction ${ixIndex} failed: ${codeStr}`;
      const hint =
        codeStr === "ProgramFailedToComplete"
          ? "Usually means the program ran out of compute (CU limit) or hit an internal error. Try minting 1 at a time, or contact LaunchMyNFT—they may need to raise the transaction compute budget for this collection."
          : null;
      return { message, hint };
    }
  }
  const msg = (obj.message as string) ?? JSON.stringify(reason);
  return { message: msg, hint: null };
}

export default function MintPage() {
  const [ready, setReady] = useState(false);
  const [txError, setTxError] = useState<string | null>(null);
  const [txErrorDetail, setTxErrorDetail] = useState<string | null>(null);
  const [txErrorHint, setTxErrorHint] = useState<string | null>(null);

  // Load order per LaunchMyNFT docs: 1) set window.ownerId & window.collectionId, 2) script (solana.js), 3) stylesheet (solana.css)
  useEffect(() => {
    if (typeof window === "undefined") return;

    (window as unknown as { ownerId: string }).ownerId = OWNER_ID;
    (window as unknown as { collectionId: string }).collectionId = COLLECTION_ID;

    const script = document.createElement("script");
    script.type = "module";
    script.src = `${LAUNCHMYNFT_BASE}/solana.js`;
    script.defer = true;
    script.onload = () => setReady(true);
    document.head.appendChild(script);

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `${LAUNCHMYNFT_BASE}/solana.css`;
    document.head.appendChild(link);

    return () => {
      script.remove();
      link.remove();
    };
  }, []);

  useEffect(() => {
    const onUnhandledRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason;
      const parsed = parseSolanaTxError(reason);
      const message =
        parsed.message ||
        (reason?.message ?? (typeof reason === "string" ? reason : JSON.stringify(reason)));
      const detail =
        (reason as Error)?.stack ??
        (typeof reason === "object" && reason !== null ? JSON.stringify(reason, null, 2) : String(reason));
      console.error("[Mint] Unhandled rejection:", reason);
      setTxError(message);
      setTxErrorDetail(detail);
      setTxErrorHint(parsed.hint);
    };

    const onError = (event: ErrorEvent) => {
      const message = event.message ?? String(event.error);
      const detail = event.error?.stack ?? event.filename ?? "";
      console.error("[Mint] Error:", event.error);
      setTxError(message);
      setTxErrorDetail(detail || null);
    };

    window.addEventListener("unhandledrejection", onUnhandledRejection);
    window.addEventListener("error", onError);
    return () => {
      window.removeEventListener("unhandledrejection", onUnhandledRejection);
      window.removeEventListener("error", onError);
    };
  }, []);

  const copyError = () => {
    const text = [txError, txErrorDetail].filter(Boolean).join("\n\n");
    if (text) void navigator.clipboard.writeText(text);
  };

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section className="container mx-auto px-4 pt-24 pb-20">
        <div id="main-container" className="flex flex-col items-center justify-center gap-2">
          <div id="mint-button-container" className="min-h-[120px]" />
          <div id="slider-container" className="flex gap-2 items-center">
            <span id="mint-slider" style={{ width: 200 }} />
            <span id="mint-slider-amount" />
          </div>
          <div id="mint-counter" className="min-h-[2rem]" style={{ color: "wheat" }} />
          {!ready && (
            <p className="text-sm text-muted-foreground">Loading mint widget…</p>
          )}

          {txError && (
            <div
              className="mt-6 w-full max-w-xl rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-left"
              role="alert"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-semibold text-destructive">Transaction error</span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={copyError}
                    className="text-xs px-2 py-1 rounded bg-muted hover:bg-muted/80"
                  >
                    Copy
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setTxError(null);
                      setTxErrorDetail(null);
                      setTxErrorHint(null);
                    }}
                    className="text-xs px-2 py-1 rounded bg-muted hover:bg-muted/80"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
              <p className="text-sm text-foreground break-words">{txError}</p>
              {txErrorHint && (
                <p className="mt-2 text-sm text-amber-600 dark:text-amber-400 bg-amber-500/10 rounded p-2">
                  {txErrorHint}
                </p>
              )}
              {txErrorDetail && (
                <pre className="mt-2 text-xs text-muted-foreground overflow-auto max-h-40 p-2 rounded bg-muted/50">
                  {txErrorDetail}
                </pre>
              )}
              <p className="mt-2 text-xs text-muted-foreground">
                Check the browser console (F12 → Console) for more. Common causes: insufficient SOL, wrong network (e.g. need Devnet), or rejected by user.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
