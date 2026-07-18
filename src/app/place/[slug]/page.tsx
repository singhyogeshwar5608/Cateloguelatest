"use client";

import { use } from "react";
import { useSyncExternalStore, Suspense } from "react";
import { getTouristPlaceBySlug } from "@/lib/tourist-place-data";
import MobilePlaceDetailPage from "@/components/justdial/MobilePlaceDetailPage";
import DesktopPlaceDetailPage from "@/components/justdial/DesktopPlaceDetailPage";

function useWindowSize() {
  return useSyncExternalStore(
    (cb) => { window.addEventListener("resize", cb); return () => window.removeEventListener("resize", cb); },
    () => window.innerWidth,
    () => 1024,
  );
}

function PlaceContent({ slug }: { slug: string }) {
  const isMobile = useWindowSize() < 768;
  const place = getTouristPlaceBySlug(slug);

  if (!place) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center px-4">
          <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h1 className="text-xl font-bold text-gray-800">Place Not Found</h1>
          <p className="text-sm text-gray-400 mt-2">The tourist place you are looking for does not exist or has been removed.</p>
          <a href="/" className="inline-block mt-6 px-6 py-2.5 bg-[#0056b3] text-white text-sm font-semibold rounded-xl active:scale-95 transition-transform">
            Go Home
          </a>
        </div>
      </div>
    );
  }

  if (isMobile) {
    return <MobilePlaceDetailPage place={place} />;
  }
  return <DesktopPlaceDetailPage place={place} />;
}

export default function PlacePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  return (
    <Suspense fallback={null}>
      <PlaceContent slug={slug} />
    </Suspense>
  );
}