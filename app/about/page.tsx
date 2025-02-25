


// "use client";

// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";
// import { useState } from 'react';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Mail, Send, CheckCircle2 } from "lucide-react";

// export default function AboutPage() {
//   const [open, setOpen] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Here you would typically send the form data to your backend
//     setIsSubmitted(true);
//     setTimeout(() => {
//       setOpen(false);
//       setIsSubmitted(false);
//       setFormData({ name: '', email: '', message: '' });
//     }, 2000);
//   };

//   return (
//     <main className="min-h-screen bg-[#0a0c10] text-white">
//       <div className="container mx-auto px-4 py-24">
//         {/* Hero Section */}
//         <div className="text-center mb-16 space-y-4">
//           <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">
//             About Kisan AI
//           </h1>
//           <p className="text-xl text-emerald-400/60 max-w-3xl mx-auto">
//             Revolutionizing agriculture through artificial intelligence and smart farming solutions
//           </p>
//         </div>

//         {/* Mission & Vision */}
//         <div className="grid md:grid-cols-2 gap-12 mb-24">
//           <div className="space-y-6">
//             <h2 className="text-3xl font-bold text-emerald-400">Our Mission</h2>
//             <p className="text-gray-200 leading-relaxed">
//               To empower farmers with cutting-edge AI technology, enabling them to make data-driven decisions and optimize their agricultural practices for sustainable food production.
//             </p>
//             <Button 
//               className="group bg-emerald-500 text-white hover:bg-emerald-600"
//             >
//               <span>Learn More</span>
//               <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </div>
//           <div className="space-y-6">
//             <h2 className="text-3xl font-bold text-emerald-400">Our Vision</h2>
//             <p className="text-gray-200 leading-relaxed">
//               To create a future where agriculture is sustainable, efficient, and profitable through the integration of artificial intelligence, machine learning and smart farming technologies.
//             </p>
//             <Button 
//               variant="outline"
//               className="group bg-emerald-500 text-white hover:bg-emerald-600"
//             >
//               <span>Our Goals</span>
//               <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </div>
//         </div>

//         {/* Team Section */}
//         <div className="mb-24">
//           <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">
//             Our Leadership Team
//           </h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[1, 2, 3, 4].map((i) => (
//               <div key={i} className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] p-6 rounded-xl border border-white/10">
//                 <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-6">
//                   <Image
//                      src={`https://raw.githubusercontent.com/shubham5027/KisanAI_Website_Images/main/A${i}.jpg`}
//                     alt="Team member"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 <h3 className="text-xl font-semibold text-emerald-400 mb-2">
//                   {i === 1 ? 'Mr. Shubham Kumbhar' : 
//                    i === 2 ? 'Mr. Devdatt Khilari' : 
//                    i === 3 ? 'Mr. Atharva Athanikar' :
//                    'Mr. Sahil Borkar'}
//                 </h3>
//                 <p className="text-gray-400 mb-4">
//                   {i === 1 ? 'AI/ML Engineer' : 
//                    i === 2 ? 'Software Engineer' : 
//                    i === 3 ? 'System Engineer' : 
//                    'Solution Engineer'}
//                 </p>
//                 <p className="text-gray-200 leading-relaxed">
//                   {i === 1 
//                     ? '3+ years of expertise in a Machine Learning & AI systems, developed 80+ AI-driven ML Models for in predictive analytics, computer vision and large language models.'
//                     : i === 2 
//                     ? 'Proficient in MERN stacks application, with expertise in building RESTful APIs, WebSockets for real-time Systems, and working with multiple full stack web projects.'
//                     : i === 3
//                     ? 'Expertise in requirements analysis, system integration, performance optimization, and troubleshooting. I have worked with diverse teams to ensure system efficiency, scalability, and security.'
//                     : 'Work on system integration to ensure that the solution works seamlessly, collaborate with the product or engineering team to design customized solutions based on client requirements'}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Contact Section */}
//         <div className="flex justify-center items-center flex-col">
//           <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">
//             Get in Touch
//           </h2>
//           <p className="text-gray-200 mb-8 max-w-2xl mx-auto text-center">
//             Want to learn more about how Kisan AI can transform your agricultural operations? Contact us today.
//           </p>
//           <Button 
//             size="lg"
//             className="bg-emerald-500 text-white hover:bg-emerald-600 px-8 flex items-center gap-2"
//             onClick={() => setOpen(true)}
//           >
//             <Mail className="w-4 h-4" />
//             Contact Us
//           </Button>

//           {/* Contact Form Dialog */}
//           <Dialog open={open} onOpenChange={setOpen}>
//             <DialogContent className="sm:max-w-[425px]">
//               {isSubmitted ? (
//                 <div className="py-12 text-center">
//                   <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
//                   <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
//                   <p className="text-gray-600">We'll get back to you as soon as possible.</p>
//                 </div>
//               ) : (
//                 <>
//                   <DialogHeader>
//                     <DialogTitle>Get in touch</DialogTitle>
//                     <DialogDescription>
//                       Send us a message and we'll get back to you as soon as possible.
//                     </DialogDescription>
//                   </DialogHeader>
//                   <form onSubmit={handleSubmit} className="space-y-4">
//                     <div className="space-y-2">
//                       <Label htmlFor="name">Name</Label>
//                       <Input
//                         id="name"
//                         value={formData.name}
//                         onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                         placeholder="Your name"
//                         required
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="email">Email</Label>
//                       <Input
//                         id="email"
//                         type="email"
//                         value={formData.email}
//                         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                         placeholder="your@email.com"
//                         required
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="message">Message</Label>
//                       <Textarea
//                         id="message"
//                         value={formData.message}
//                         onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                         placeholder="How can we help you?"
//                         required
//                       />
//                     </div>
//                     <DialogFooter>
//                       <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600">
//                         <Send className="w-4 h-4 mr-2" />
//                         Send Message
//                       </Button>
//                     </DialogFooter>
//                   </form>
//                 </>
//               )}
//             </DialogContent>
//           </Dialog>
//         </div>
//       </div>
//     </main>
//   );
// }






"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, CheckCircle2, Target, Lightbulb } from "lucide-react";

export default function AboutPage() {
  const [open, setOpen] = useState(false);
  const [learnMoreOpen, setLearnMoreOpen] = useState(false);
  const [goalsOpen, setGoalsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    setIsSubmitted(true);
    setTimeout(() => {
      setOpen(false);
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-[#0a0c10] text-white">
      <div className="container mx-auto px-4 py-24">
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">
            About Kisan AI
          </h1>
          <p className="text-xl text-emerald-400/60 max-w-3xl mx-auto">
            Revolutionizing agriculture through artificial intelligence and smart farming solutions
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-emerald-400">Our Mission</h2>
            <p className="text-gray-200 leading-relaxed">
              To empower farmers with cutting-edge AI technology, enabling them to make data-driven decisions and optimize their agricultural practices for sustainable food production.
            </p>
            <Button 
              className="group bg-emerald-500 text-white hover:bg-emerald-600"
              onClick={() => setLearnMoreOpen(true)}
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-emerald-400">Our Vision</h2>
            <p className="text-gray-200 leading-relaxed">
              To create a future where agriculture is sustainable, efficient, and profitable through the integration of artificial intelligence, machine learning and smart farming technologies.
            </p>
            <Button 
              variant="outline"
              className="group bg-emerald-500 text-white hover:bg-emerald-600"
              onClick={() => setGoalsOpen(true)}
            >
              <span>Our Goals</span>
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Learn More Dialog */}
        <Dialog open={learnMoreOpen} onOpenChange={setLearnMoreOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-emerald-500" />
                About Kisan AI
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-emerald-600">Our Technology</h3>
                <p className="text-gray-600">
                  We leverage advanced AI and machine learning algorithms to provide:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Predictive analytics for crop yield optimization</li>
                  <li>Real-time pest and disease detection</li>
                  <li>Smart irrigation management systems</li>
                  <li>Soil health monitoring and recommendations</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-emerald-600">Our Impact</h3>
                <p className="text-gray-600">
                  Through our innovative solutions, we've helped:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Increase crop yields by up to 30%</li>
                  <li>Reduce water usage by 40%</li>
                  <li>Minimize pesticide application by 50%</li>
                  <li>Support over 10,000 farmers across India</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-emerald-600">Sustainability Focus</h3>
                <p className="text-gray-600">
                  Our commitment to sustainable agriculture includes promoting organic farming practices, reducing chemical usage, and optimizing resource utilization through smart technology integration.
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Goals Dialog */}
        <Dialog open={goalsOpen} onOpenChange={setGoalsOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-emerald-500" />
                Our Strategic Goals
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-emerald-600">Short-term Goals (2024-2025)</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Expand our AI-powered crop monitoring system to 5 new states</li>
                  <li>Launch mobile app for real-time farm management</li>
                  <li>Establish partnerships with 20 agricultural institutions</li>
                  <li>Develop advanced weather prediction models</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-emerald-600">Medium-term Goals (2025-2027)</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Implement blockchain for supply chain transparency</li>
                  <li>Create AI-driven marketplace for farmers</li>
                  <li>Develop precision farming solutions for small-scale farmers</li>
                  <li>Expand operations to Southeast Asian markets</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-emerald-600">Long-term Vision (2027+)</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Achieve carbon-neutral farming practices</li>
                  <li>Establish global presence in 20+ countries</li>
                  <li>Create autonomous farming systems</li>
                  <li>Develop advanced crop genetics prediction models</li>
                </ul>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Team Section */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">
            Our Leadership Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] p-6 rounded-xl border border-white/10">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-6">
                  <Image
                    src={`https://raw.githubusercontent.com/shubham5027/KisanAI_Website_Images/main/A${i}.jpg`}
                    alt="Team member"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-emerald-400 mb-2">
                  {i === 1 ? 'Mr. Shubham Kumbhar' : 
                   i === 2 ? 'Mr. Devdatt Khilari' : 
                   i === 3 ? 'Mr. Atharva Athanikar' :
                   'Mr. Sahil Borkar'}
                </h3>
                <p className="text-gray-400 mb-4">
                  {i === 1 ? 'AI/ML Engineer' : 
                   i === 2 ? 'Software Engineer' : 
                   i === 3 ? 'System Engineer' : 
                   'Solution Engineer'}
                </p>
                <p className="text-gray-200 leading-relaxed">
                  {i === 1 
                    ? '3+ years of expertise in a Machine Learning & AI systems, developed 80+ AI-driven ML Models for in predictive analytics, computer vision and large language models.'
                    : i === 2 
                    ? 'Proficient in MERN stacks application, with expertise in building RESTful APIs, WebSockets for real-time Systems, and working with multiple full stack web projects.'
                    : i === 3
                    ? 'Expertise in requirements analysis, system integration, performance optimization, and troubleshooting. I have worked with diverse teams to ensure system efficiency, scalability, and security.'
                    : 'Work on system integration to ensure that the solution works seamlessly, collaborate with the product or engineering team to design customized solutions based on client requirements'}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto text-center">
            Want to learn more about how Kisan AI can transform your agricultural operations? Contact us today.
          </p>
          <Button 
            size="lg"
            className="bg-emerald-500 text-white hover:bg-emerald-600 px-8 flex items-center gap-2"
            onClick={() => setOpen(true)}
          >
            <Mail className="w-4 h-4" />
            Contact Us
          </Button>

          {/* Contact Form Dialog */}
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[425px]">
              {isSubmitted ? (
                <div className="py-12 text-center">
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <>
                  <DialogHeader>
                    <DialogTitle>Get in touch</DialogTitle>
                    <DialogDescription>
                      Send us a message and we'll get back to you as soon as possible.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="How can we help you?"
                        required
                      />
                    </div>
                    <DialogFooter>
                      <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </DialogFooter>
                  </form>
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </main>
  );
}