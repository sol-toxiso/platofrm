"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { siteConfig } from "@/lib/site-config";

const LAUNCHMYNFT_SCRIPT_VERSION = "0.1.4";
const LAUNCHMYNFT_BASE = `https://storage.googleapis.com/scriptslmt/${LAUNCHMYNFT_SCRIPT_VERSION}`;

const OWNER_ID =
  process.env.NEXT_PUBLIC_LAUNCHMYNFT_OWNER_ID ??
  "56i2c7nrm66VnZqdPm52XYNf9opZF6ExDaDj9zb1ZPXJ";
const COLLECTION_ID =
  process.env.NEXT_PUBLIC_LAUNCHMYNFT_COLLECTION_ID ?? "TsAezYyFpiu9Ut2DO55p";

export function NFTPassSectionV2() {
  const [ready, setReady] = useState(false);
  const [txError, setTxError] = useState<string | null>(null);

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
    const onRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason;
      const message =
        reason?.message ?? (typeof reason === "string" ? reason : JSON.stringify(reason));
      setTxError(message);
    };
    window.addEventListener("unhandledrejection", onRejection);
    return () => window.removeEventListener("unhandledrejection", onRejection);
  }, []);

  return (
    <div className="flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="w-full max-w-md"
      >
        <Card className="overflow-hidden border border-border/60 shadow-2xl bg-card">
          <div className="p-6">
            <p className="text-center text-sm font-medium text-foreground mb-1">
              {siteConfig.nftPass.mintTitle}
            </p>
            <p className="text-center text-xs text-muted-foreground mb-4">
              {siteConfig.nftPass.mintSubtitle}
            </p>
            <p className="text-center text-xs text-muted-foreground mb-4">
              {siteConfig.nftPass.priceLine1} · {siteConfig.nftPass.priceLine2}
            </p>

            <div className="flex justify-center mb-4">
              <WalletMultiButton className="!bg-primary !text-primary-foreground hover:!bg-primary/90 !border-0 !rounded-lg !px-4 !py-2 !text-sm !font-medium" />
            </div>

            <div id="main-container" className="flex flex-col items-center justify-center gap-2">
              <div id="mint-button-container" className="min-h-[100px]" />
              <div id="slider-container" className="flex gap-2 items-center">
                <span id="mint-slider" style={{ width: 200 }} />
                <span id="mint-slider-amount" className="text-sm text-muted-foreground" />
              </div>
              <div id="mint-counter" className="text-sm text-muted-foreground min-h-[1.5rem]" />
            </div>

            {!ready && (
              <p className="text-center text-xs text-muted-foreground mt-2">
                Loading mint widget…
              </p>
            )}

            {txError && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-3 bg-destructive/10 border border-destructive/30 rounded-lg"
              >
                <p className="text-destructive text-xs">{txError}</p>
                <button
                  type="button"
                  onClick={() => setTxError(null)}
                  className="mt-2 text-xs text-muted-foreground underline"
                >
                  Dismiss
                </button>
              </motion.div>
            )}
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
