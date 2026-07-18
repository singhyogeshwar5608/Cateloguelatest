"use client";

import { use } from "react";
import { useSyncExternalStore } from "react";
import { getTouristPlaceBySlug } from "@/lib/tourist-place-data";
import TouristPlaceDetailPage from "@/components/justdial/TouristPlaceDetailPage";
import DesktopTouristPlaceDetailPage from "@/components/justdial/DesktopTouristPlaceDetailPage";

function useWindowSize() {
  return useSyncExternalStore(
    (cb) => { window.addEventListener("resize", cb); return () => window.removeEventListener("resize", cb); },
    () => window.innerWidth,
    () => 1024,
  );
}

export default function TouristPlacePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const place = getTouristPlaceBySlug(slug);
  const isMobile = useWindowSize() < 768;

  if (!place) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-xl font-bold text-gray-800">Place Not Found</h1>
          <p className="text-sm text-gray-400 mt-1">The tourist place you're looking for doesn't exist.</p>
          <a href="/" className="inline-block mt-4 text-sm font-medium text-[#0056b3] hover:underline">
            Go Home
          </a>
        </div>
      </div>
    );
  }

  if (isMobile) {
    return <TouristPlaceDetailPage place={place} />;
  }

  return <DesktopTouristPlaceDetailPage place={place} />;
}