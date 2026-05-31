import type { Metadata } from "next";
import { Suspense } from "react";
import { businessData } from "@/data/business";
import CollectionsPageClient from "./CollectionsPageClient";

export const metadata: Metadata = {
  title: `${businessData.company.name} | Collections`,
  description: businessData.collectionsPage.hero.subtitle,
};

export default function CollectionsPage() {
  return (
    <Suspense
      fallback={
        <main className="bg-[var(--color-ivory)] min-h-screen flex items-center justify-center">
          <p className="text-sm text-[var(--color-text-muted)] font-body">Loading collections...</p>
        </main>
      }
    >
      <CollectionsPageClient />
    </Suspense>
  );
}