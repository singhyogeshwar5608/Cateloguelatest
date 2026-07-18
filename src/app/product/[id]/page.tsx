"use client";

import { useSyncExternalStore } from "react";
import { useParams } from "next/navigation";
import { getProductById } from "@/lib/product-data";
import MobileProductPage from "@/components/justdial/MobileProductPage";
import DesktopProductPage from "@/components/justdial/DesktopProductPage";

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

export default function ProductPage() {
  const width = useSyncExternalStore(subscribeToResize, getSnapshot, getServerSnapshot);
  const isMobile = width < 768;
  const params = useParams();
  const productId = params.id as string;
  const product = getProductById(productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Product Not Found</h1>
          <p className="text-gray-500 mb-6">The product you&apos;re looking for doesn&apos;t exist.</p>
          <a href="/" className="text-[#0056b3] font-medium hover:underline">← Back to Home</a>
        </div>
      </div>
    );
  }

  if (isMobile) {
    return <MobileProductPage product={product} />;
  }

  return <DesktopProductPage product={product} />;
}