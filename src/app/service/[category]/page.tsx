"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { useParams } from "next/navigation";
import { getServiceCategory, getServiceProviders } from "@/lib/service-category-data";
import MobileServiceCategoryPage from "@/components/justdial/MobileServiceCategoryPage";
import DesktopServiceCategoryPage from "@/components/justdial/DesktopServiceCategoryPage";

function subscribeToResize(callback: () => void) {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
}
function getSnapshot() { return window.innerWidth; }
function getServerSnapshot() { return 1024; }

export default function ServiceCategoryPage() {
  const width = useSyncExternalStore(subscribeToResize, getSnapshot, getServerSnapshot);
  const isMobile = width < 768;
  const params = useParams();
  const categorySlug = params.category as string;
  const category = getServiceCategory(categorySlug);
  const providers = getServiceProviders(categorySlug);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!category || providers.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Service Category Not Found</h1>
          <p className="text-gray-500 mb-6">The service category you&apos;re looking for doesn&apos;t exist.</p>
          <a href="/services" className="text-[#0056b3] font-medium hover:underline">← Back to Services</a>
        </div>
      </div>
    );
  }

  // Avoid hydration mismatch: server renders desktop, client may render mobile
  if (!mounted) {
    return null;
  }

  if (isMobile) {
    return <MobileServiceCategoryPage selectedCategory={categorySlug} />;
  }
  return <DesktopServiceCategoryPage selectedCategory={categorySlug} />;
}