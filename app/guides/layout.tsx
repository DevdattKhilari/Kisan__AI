"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const guideName = pathname.split('/').pop();
  const formattedGuideName = guideName?.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return (
    <div className="min-h-screen bg-[#0a0c10] text-white">
      <div className="container mx-auto px-4 py-24">
        <Link href="/support" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Support Center
        </Link>
        {children}
      </div>
    </div>
  );
}