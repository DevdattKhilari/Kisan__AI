// 'use client';

// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Calendar } from '@/components/ui/calendar';
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from '@/components/ui/popover';
// import { format } from 'date-fns';
// import { Calendar as CalendarIcon } from 'lucide-react';
// import { cn } from '@/lib/utils';

// export default function ScheduleDemo() {
//   const [date, setDate] = useState<Date>();
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   return (
//     <div className="min-h-screen bg-[#0a0c10] text-white py-24">
//       <div className="container mx-auto px-4 max-w-2xl">
//         <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">
//           Schedule a Demo
//         </h1>

//         {submitted ? (
//           <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-8 text-center">
//             <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
//               Thank You!
//             </h2>
//             <p className="text-emerald-100/80">
//               We've received your demo request. Our team will contact you
//               shortly to confirm the details.
//             </p>
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="space-y-2">
//               <label className="text-sm font-medium text-emerald-200">
//                 Name
//               </label>
//               <Input
//                 required
//                 className="bg-[#1a1a1a] border-emerald-500/20 focus:border-emerald-500 text-white"
//                 placeholder="Enter your name"
//               />
//             </div>

//             <div className="space-y-2">
//               <label className="text-sm font-medium text-emerald-200">
//                 Email
//               </label>
//               <Input
//                 required
//                 type="email"
//                 className="bg-[#1a1a1a] border-emerald-500/20 focus:border-emerald-500 text-white"
//                 placeholder="Enter your email"
//               />
//             </div>

//             <div className="space-y-2">
//               <label className="text-sm font-medium text-emerald-200">
//                 Preferred Date
//               </label>
//               <Popover>
//                 <PopoverTrigger asChild>
//                   <Button
//                     variant="outline"
//                     className={cn(
//                       'w-full justify-start text-left font-normal bg-[#1a1a1a] border-emerald-500/20',
//                       !date && 'text-muted-foreground'
//                     )}
//                   >
//                     <CalendarIcon className="mr-2 h-4 w-4" />
//                     {date ? format(date, 'PPP') : <span>Pick a date</span>}
//                   </Button>
//                 </PopoverTrigger>
//                 <PopoverContent className="w-auto p-0 bg-[#1a1a1a] border-emerald-500/20">
//                   <Calendar
//                     mode="single"
//                     selected={date}
//                     onSelect={setDate}
//                     initialFocus
//                     className="bg-[#1a1a1a]"
//                   />
//                 </PopoverContent>
//               </Popover>
//             </div>

//             <div className="space-y-2">
//               <label className="text-sm font-medium text-emerald-200">
//                 Message
//               </label>
//               <Textarea
//                 required
//                 className="bg-[#1a1a1a] border-emerald-500/20 focus:border-emerald-500 text-white min-h-[120px]"
//                 placeholder="Tell us about your needs"
//               />
//             </div>

//             <Button
//               type="submit"
//               size="lg"
//               className="w-full bg-emerald-500 text-white hover:bg-emerald-600"
//             >
//               Submit Request
//             </Button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }


'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function ScheduleDemo() {
  const [date, setDate] = useState<Date>();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0c10] text-white py-24 relative">
      <Link 
        href="/"
        className="absolute top-8 left-8 inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
      >
        <ChevronLeft className="w-5 h-5 mr-1" />
        <span>Back to Home</span>
      </Link>

      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">
          Schedule a Demo
        </h1>

        {submitted ? (
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
              Thank You!
            </h2>
            <p className="text-emerald-100/80">
              We've received your demo request. Our team will contact you
              shortly to confirm the details.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-emerald-200">
                Name
              </label>
              <Input
                required
                className="bg-[#1a1a1a] border-emerald-500/20 focus:border-emerald-500 text-white"
                placeholder="Enter your name"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-emerald-200">
                Email
              </label>
              <Input
                required
                type="email"
                className="bg-[#1a1a1a] border-emerald-500/20 focus:border-emerald-500 text-white"
                placeholder="Enter your email"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-emerald-200">
                Preferred Date
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      'w-full justify-start text-left font-normal bg-[#1a1a1a] border-emerald-500/20',
                      !date && 'text-muted-foreground'
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, 'PPP') : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-[#1a1a1a] border-emerald-500/20">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    className="bg-[#1a1a1a]"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-emerald-200">
                Message
              </label>
              <Textarea
                required
                className="bg-[#1a1a1a] border-emerald-500/20 focus:border-emerald-500 text-white min-h-[120px]"
                placeholder="Tell us about your needs"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-emerald-500 text-white hover:bg-emerald-600"
            >
              Submit Request
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}