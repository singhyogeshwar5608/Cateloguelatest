"use client";

import { useSyncExternalStore, Suspense } from "react";
import MobileCategoryListingPage from "@/components/category/MobileCategoryListingPage";
import DesktopCategoryListingPage from "@/components/category/DesktopCategoryListingPage";

function useWindowSize() {
  return useSyncExternalStore(
    (cb) => {
      window.addEventListener("resize", cb);
      return () => window.removeEventListener("resize", cb);
    },
    () => window.innerWidth,
    () => 1024,
  );
}

function CategoryView() {
  const isMobile = useWindowSize() < 768;

  if (isMobile) return <MobileCategoryListingPage />;
  return <DesktopCategoryListingPage />;
}

export default function CategoriesPage() {
  // useSearchParams() inside Mobile/Desktop components requires a Suspense
  // boundary for static prerender to succeed.
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
      <CategoryView />
    </Suspense>
  );
}
