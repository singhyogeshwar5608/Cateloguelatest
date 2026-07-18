"use client";

import { useCallback, useSyncExternalStore } from "react";
import DesktopLayout from "@/components/justdial/DesktopLayout";
import MobileLayout from "@/components/justdial/MobileLayout";

function useWindowSize() {
  return useSyncExternalStore(
    subscribeToResize,
    getSnapshot,
    getServerSnapshot,
  );
}

function subscribeToResize(callback: () => void) {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
}

function getSnapshot() {
  return window.innerWidth;
}

function getServerSnapshot() {
  return 1024;
}

export default function Home() {
  const width = useWindowSize();
  const isMobile = width < 768;

  if (isMobile) {
    return <MobileLayout />;
  }

  return <DesktopLayout />;
}