"use client";

import { Card } from "@/components/ui/card";

interface ValueChainCardProps {
  icon: React.ReactNode;
  title: string;
}

export default function ValueChainCard({ icon, title }: ValueChainCardProps) {
  return (
    <Card className="group relative p-8 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] hover:from-[#222222] hover:to-[#141414] transition-all duration-300 border-white/10 hover:border-emerald-500/20">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative flex flex-col items-center gap-4">
        <div className="text-emerald-400 transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-white group-hover:text-emerald-300 transition-colors duration-300 text-center">
          {title}
        </h3>
      </div>
    </Card>
  );
}