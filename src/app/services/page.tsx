"use client";

import { useState, useEffect, useSyncExternalStore, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import MobileServiceCategoryPage from "@/components/justdial/MobileServiceCategoryPage";
import DesktopServiceCategoryPage from "@/components/justdial/DesktopServiceCategoryPage";

function useWindowSize() {
  return useSyncExternalStore(
    (cb) => { window.addEventListener("resize", cb); return () => window.removeEventListener("resize", cb); },
    () => window.innerWidth,
    () => 1024,
  );
}

function ServicesContent() {
  const isMobile = useWindowSize() < 768;
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category") || undefined;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid hydration mismatch: server renders desktop (1024), client may render mobile.
  // Show nothing until client-side mount confirms the correct layout.
  if (!mounted) {
    return null;
  }

  if (isMobile) {
    return <MobileServiceCategoryPage selectedCategory={selectedCategory} />;
  }

  return <DesktopServiceCategoryPage selectedCategory={selectedCategory} />;
}

export default function ServicesPage() {
  return (
    <Suspense fallback={null}>
      <ServicesContent />
    </Suspense>
  );
}