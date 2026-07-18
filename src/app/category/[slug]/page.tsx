"use client";

import { use, Suspense } from "react";
import { useSyncExternalStore } from "react";
import { useParams } from "next/navigation";
import { getCategoryLanding } from "@/lib/category-landing-data";
import MobileCategoryLandingPage from "@/components/justdial/MobileCategoryLandingPage";
import DesktopCategoryLandingPage from "@/components/justdial/DesktopCategoryLandingPage";

function subscribeToResize(callback: () => void) {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
}
function getSnapshot() { return window.innerWidth; }
function getServerSnapshot() { return 1024; }

function CategoryContent() {
  const width = useSyncExternalStore(subscribeToResize, getSnapshot, getServerSnapshot);
  const isMobile = width < 768;
  const params = useParams();
  const slug = params.slug as string;
  const category = getCategoryLanding(slug);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-6xl mb-4">{"\ud83d\udd0d"}</div>
          <h1 className="text-xl font-bold text-gray-800">Category Not Found</h1>
          <p className="text-sm text-gray-400 mt-1">The category you&apos;re looking for doesn&apos;t exist.</p>
          <a href="/" className="inline-block mt-4 text-sm font-medium text-[#0056b3] hover:underline">{"\u2190"} Back to Home</a>
        </div>
      </div>
    );
  }

  if (isMobile) return <MobileCategoryLandingPage category={category} />;
  return <DesktopCategoryLandingPage category={category} />;
}

export default function CategoryPage() {
  return (
    <Suspense fallback={null}>
      <CategoryContent />
    </Suspense>
  );
}