// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Menu } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useState } from "react";

// export default function Navbar() {
//   const pathname = usePathname();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navItems = [
//     { href: "/", label: "Home" },
//     { href: "/about", label: "About Us" },
//     { href: "/info", label: "Info" },
//   ];

//   return (
//     <nav className="sticky top-0 z-50 bg-[#0a0c10]/80 backdrop-blur-md border-b border-white/10">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           <Link href="/" className="flex items-center space-x-2">
//             <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">
//               Kisan AI
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex space-x-8">
//             {navItems.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className={`text-lg font-medium transition-colors hover:text-emerald-400 ${
//                   pathname === item.href
//                     ? "text-emerald-200"
//                     : "text-gray-200"
//                 }`}
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <Button
//             variant="ghost"
//             size="icon"
//             className="md:hidden text-gray-200 hover:text-emerald-400"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             <Menu className="h-6 w-6" />
//           </Button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden py-4">
//             <div className="flex flex-col space-y-4">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   className={`text-sm font-medium transition-colors hover:text-emerald-400 ${
//                     pathname === item.href
//                       ? "text-emerald-400"
//                       : "text-gray-200"
//                   }`}
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/info', label: 'Info' },
    { href: '/Reviews', label: 'Reviews' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0c10]/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">
              Kisan AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-lg font-medium transition-colors hover:text-emerald-400 ${
                  pathname === item.href ? 'text-emerald-200' : 'text-gray-200'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-200 hover:text-emerald-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-emerald-400 ${
                    pathname === item.href
                      ? 'text-emerald-400'
                      : 'text-gray-200'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
