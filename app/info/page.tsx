// "use client";

// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Book, FileText, HelpCircle, Phone } from "lucide-react";
// import Link from "next/link";

// export default function InfoPage() {
//   const resources = [
//     {
//       icon: <Book className="w-8 h-8" />,
//       title: "User Guides",
//       description: "Comprehensive guides on using Kisan AI platform features and tools.",
//     },
//     {
//       icon: <FileText className="w-8 h-8" />,
//       title: "Documentation",
//       description: "Technical documentation and API references for developers.",
//     },
//     {
//       icon: <HelpCircle className="w-8 h-8" />,
//       title: "FAQs",
//       description: "Answers to commonly asked questions about our services.",
//     },
//     {
//       icon: <Phone className="w-8 h-8" />,
//       title: "Support",
//       description: "24/7 customer support for technical assistance.",
//     },
//   ];

//   return (
//     <main className="min-h-screen bg-[#0a0c10] text-white">
//       <div className="container mx-auto px-4 py-24">
//         {/* Hero Section */}
//         <div className="text-center mb-16 space-y-4">
//           <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">
//             Information Center
//           </h1>
//           <p className="text-xl text-emerald-400/60 max-w-3xl mx-auto">
//             Everything you need to know about Kisan AI's smart farming solutions
//           </p>
//         </div>

//         {/* Resources Grid */}
//         <div className="grid md:grid-cols-2 gap-8 mb-24">
//           {resources.map((resource, index) => (
//             <Card key={index} className="group bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border-white/10 hover:border-emerald-500/20 p-8">
//               <div className="text-emerald-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
//                 {resource.icon}
//               </div>
//               <h3 className="text-2xl font-semibold text-white group-hover:text-emerald-300 transition-colors duration-300 mb-4">
//                 {resource.title}
//               </h3>
//               <p className="text-gray-200 mb-6 leading-relaxed">
//                 {resource.description}
//               </p>
//               <Link href="/support">
//                 <Button
//                   variant="secondary"
//                   className="w-full group/btn bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white border-none shadow-lg"
//                 >
//                   <span>Access Now</span>
//                   <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
//                 </Button>
//               </Link>
//             </Card>
//           ))}
//         </div>

//         {/* Latest Updates */}
//         <div className="mb-24">
//           <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">
//             Latest Updates
//           </h2>
//           <div className="space-y-6">
//             {[
//               {
//                 date: "April 15, 2024",
//                 title: "New AI Model Release",
//                 description: "Enhanced crop prediction accuracy with our latest AI model update."
//               },
//               {
//                 date: "April 10, 2024",
//                 title: "Mobile App Update",
//                 description: "New features added to the Kisan AI mobile application."
//               },
//               {
//                 date: "April 5, 2024",
//                 title: "Partnership Announcement",
//                 description: "Strategic partnership with leading agricultural research institutes."
//               }
//             ].map((update, index) => (
//               <div key={index} className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10 rounded-xl p-6">
//                 <div className="text-sm text-emerald-400 mb-2">{update.date}</div>
//                 <h3 className="text-xl font-semibold text-white mb-2">{update.title}</h3>
//                 <p className="text-gray-200">{update.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Newsletter Signup */}
//         <div className="text-center">
//           <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">
//             Stay Updated
//           </h2>
//           <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
//             Subscribe to our newsletter to receive the latest updates and insights about smart farming.
//           </p>
//           <Link href="/support">
//             <Button
//               size="lg"
//               className="bg-emerald-500 text-white hover:bg-emerald-600 px-8"
//             >
//               Subscribe Now
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </main>
//   );
// }

// // 'use client';

// // import { Card } from '@/components/ui/card';
// // import { Button } from '@/components/ui/button';
// // import { ArrowRight, Book, FileText, HelpCircle, Phone } from 'lucide-react';
// // import Link from 'next/link';

// // export default function InfoPage() {
// //   const resources = [
// //     {
// //       icon: <Book className="w-8 h-8" />,
// //       title: 'User Guides',
// //       description:
// //         'Comprehensive guides on using Kisan AI platform features and tools.',
// //       route: '/guides',
// //     },
// //     {
// //       icon: <FileText className="w-8 h-8" />,
// //       title: 'Documentation',
// //       description: 'Technical documentation and API references for developers.',
// //       route: '/docs',
// //     },
// //     {
// //       icon: <HelpCircle className="w-8 h-8" />,
// //       title: 'FAQs',
// //       description: 'Answers to commonly asked questions about our services.',
// //       route: '/faqs',
// //     },
// //     {
// //       icon: <Phone className="w-8 h-8" />,
// //       title: 'Support',
// //       description: '24/7 customer support for technical assistance.',
// //       route: '/support',
// //     },
// //   ];

// //   return (
// //     <main className="min-h-screen bg-[#0a0c10] text-white">
// //       <div className="container mx-auto px-4 py-24">
// //         {/* Hero Section */}
// //         <div className="text-center mb-16 space-y-4">
// //           <h1 className="text-5xl font-bold text-white">Information Center</h1>
// //           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
// //             Everything you need to know about Kisan AI's smart farming
// //             solutions.
// //           </p>
// //         </div>

// //         {/* Resources Grid */}
// //         <div className="grid md:grid-cols-2 gap-8 mb-24">
// //           {resources.map((resource, index) => (
// //             <Card
// //               key={index}
// //               className="group bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border-white/10 hover:border-emerald-500/20 p-8"
// //             >
// //               <div className="text-white mb-6 transform group-hover:scale-110 transition-transform duration-300">
// //                 {resource.icon}
// //               </div>
// //               <h3 className="text-2xl font-semibold text-white group-hover:text-emerald-300 transition-colors duration-300 mb-4">
// //                 {resource.title}
// //               </h3>
// //               <p className="text-gray-300 mb-6 leading-relaxed">
// //                 {resource.description}
// //               </p>
// //               <Link href={resource.route}>
// //                 <Button
// //                   variant="secondary"
// //                   className="w-full group/btn bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white border-none shadow-lg"
// //                 >
// //                   <span>Access Now</span>
// //                   <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
// //                 </Button>
// //               </Link>
// //             </Card>
// //           ))}
// //         </div>

// //         {/* Latest Updates */}
// //         <div className="mb-24">
// //           <h2 className="text-4xl font-bold text-center mb-12 text-white">
// //             Latest Updates
// //           </h2>
// //           <div className="space-y-6">
// //             {[
// //               {
// //                 date: 'April 15, 2024',
// //                 title: 'New AI Model Release',
// //                 description:
// //                   'Enhanced crop prediction accuracy with our latest AI model update.',
// //               },
// //               {
// //                 date: 'April 10, 2024',
// //                 title: 'Mobile App Update',
// //                 description:
// //                   'New features added to the Kisan AI mobile application.',
// //               },
// //               {
// //                 date: 'April 5, 2024',
// //                 title: 'Partnership Announcement',
// //                 description:
// //                   'Strategic partnership with leading agricultural research institutes.',
// //               },
// //             ].map((update, index) => (
// //               <div
// //                 key={index}
// //                 className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10 rounded-xl p-6"
// //               >
// //                 <div className="text-sm text-gray-400 mb-2">{update.date}</div>
// //                 <h3 className="text-xl font-semibold text-white mb-2">
// //                   {update.title}
// //                 </h3>
// //                 <p className="text-gray-300">{update.description}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Newsletter Signup */}
// //         <div className="text-center">
// //           <h2 className="text-4xl font-bold mb-8 text-white">Stay Updated</h2>
// //           <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
// //             Subscribe to our newsletter to receive the latest updates and
// //             insights about smart farming.
// //           </p>
// //           <Link href="/support">
// //             <Button
// //               size="lg"
// //               className="bg-emerald-500 text-white hover:bg-emerald-600 px-8"
// //             >
// //               Subscribe Now
// //             </Button>
// //           </Link>
// //         </div>
// //       </div>
// //     </main>
// //   );
// // }

'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Book, FileText, HelpCircle, Phone } from 'lucide-react';
import Link from 'next/link';

export default function InfoPage() {
  const resources = [
    {
      id: 'userguide',
      icon: <Book className="w-8 h-8" />,
      title: 'User Guides',
      description:
        'Comprehensive guides on using Kisan AI platform features and tools.',
    },
    {
      id: 'documentation',
      icon: <FileText className="w-8 h-8" />,
      title: 'Documentation',
      description: 'Technical documentation and API references for developers.',
    },
    {
      id: 'faq',
      icon: <HelpCircle className="w-8 h-8" />,
      title: 'FAQs',
      description: 'Answers to commonly asked questions about our services.',
    },
    {
      id: 'supp',
      icon: <Phone className="w-8 h-8" />,
      title: 'Support',
      description: '24/7 customer support for technical assistance.',
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0c10] text-white">
      <div className="container mx-auto px-4 py-24">
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">
            Information Center
          </h1>
          <p className="text-xl text-emerald-400/60 max-w-3xl mx-auto">
            Everything you need to know about Kisan AI's smart farming solutions
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {resources.map((resource, index) => (
            <Card
              key={index}
              className="group bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border-white/10 hover:border-emerald-500/20 p-8"
            >
              <div className="text-emerald-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {resource.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white group-hover:text-emerald-300 transition-colors duration-300 mb-4">
                {resource.title}
              </h3>
              <p className="text-gray-200 mb-6 leading-relaxed">
                {resource.description}
              </p>
              <Link href={`/support/${resource.id}`}>
                <Button
                  variant="secondary"
                  className="w-full group/btn bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white border-none shadow-lg"
                >
                  <span>Access Now</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        {/* Latest Updates */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">
            Latest Updates
          </h2>
          <div className="space-y-6">
            {[
              {
                date: 'April 15, 2024',
                title: 'New AI Model Release',
                description:
                  'Enhanced crop prediction accuracy with our latest AI model update.',
              },
              {
                date: 'April 10, 2024',
                title: 'Mobile App Update',
                description:
                  'New features added to the Kisan AI mobile application.',
              },
              {
                date: 'April 5, 2024',
                title: 'Partnership Announcement',
                description:
                  'Strategic partnership with leading agricultural research institutes.',
              },
            ].map((update, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10 rounded-xl p-6"
              >
                <div className="text-sm text-emerald-400 mb-2">
                  {update.date}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {update.title}
                </h3>
                <p className="text-gray-200">{update.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">
            Stay Updated
          </h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest updates and
            insights about smart farming.
          </p>
          <Link href="/support">
            <Button
              size="lg"
              className="bg-emerald-500 text-white hover:bg-emerald-600 px-8"
            >
              Subscribe Now
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
