// "use client";

// import Link from "next/link";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";

// interface SolutionCardProps {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   ctaLink: string;
// }

// export default function SolutionCard({ icon, title, description, ctaLink }: SolutionCardProps) {
//   return (
//     <Card className="group relative p-8 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] hover:from-[#222222] hover:to-[#141414] transition-all duration-300 border-white/10 hover:border-emerald-500/20">
//       <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//       <div className="relative flex flex-col gap-6">
//         <div className="text-emerald-400 transform group-hover:scale-110 transition-transform duration-300">
//           {icon}
//         </div>
//         <h3 className="text-2xl font-semibold text-white group-hover:text-emerald-300 transition-colors duration-300">
//           {title}
//         </h3>
//         <p className="text-gray-200 leading-relaxed">
//           {description}
//         </p>
//         <Link href={ctaLink} className="mt-auto">
//           <Button 
//             variant="secondary" 
//             className="w-full group/btn bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white border-none shadow-lg"
//           >
//             <span>Learn More</span>
//             <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
//           </Button>
//         </Link>
//       </div>
//     </Card>
//   );
// }

'use client';

import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  ctaLink: string;
  expandedContent: React.ReactNode;
}

export default function SolutionCard({
  icon,
  title,
  description,
  ctaLink,
  expandedContent,
}: SolutionCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl p-8 space-y-6 h-full transition-all duration-300">
        <div className="text-emerald-400">{icon}</div>
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="text-emerald-400/60">{description}</p>
        <Button
          variant="ghost"
          className="group text-emerald-400 hover:text-emerald-300"
          onClick={() => setIsExpanded(true)}
        >
          Learn More
          <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl p-8 max-w-2xl w-full m-4 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold text-emerald-400">{title}</h3>
              <Button
                variant="ghost"
                size="icon"
                className="text-emerald-400 hover:text-emerald-300"
                onClick={() => setIsExpanded(false)}
              >
                <X className="w-6 h-6" />
              </Button>
            </div>
            <div className="prose prose-invert prose-emerald max-w-none">
              {expandedContent}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}