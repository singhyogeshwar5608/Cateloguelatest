"use client";

import { useSyncExternalStore } from "react";
import MobileBusinessListingPage from "@/components/justdial/MobileBusinessListingPage";
import DesktopBusinessListingPage from "@/components/justdial/DesktopBusinessListingPage";

function useWindowSize() {
  return useSyncExternalStore(
    (cb) => { window.addEventListener("resize", cb); return () => window.removeEventListener("resize", cb); },
    () => window.innerWidth,
    () => 1024,
  );
}

export default function ExplorePage() {
  const isMobile = useWindowSize() < 768;

  if (isMobile) {
    return <MobileBusinessListingPage />;
  }

  return <DesktopBusinessListingPage />;
}