"use client";

import React, { useState } from "react";
import {
  Sprout,
  Leaf,
  Coffee,
  Factory,
  Building2,
  Landmark,
  BadgeDollarSign,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import ValueChainCard from "./components/ValueChainCard";
import SolutionCard from "./components/SolutionCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useRouter } from "next/navigation";

interface VideoCard {
  thumbnail: string;
  videoUrl: string;
  title: string;
  duration: string;
  channel: string;
  embedId: string;
}

export default function Home() {
  const router = useRouter();

  const handleScheduleDemo = () => {
    router.push("/schedule-demo");
  };

  const handleCaseStudies = () => {
    router.push("/case-studies");
  };

  const valueChainCards = [
    { icon: <Sprout size={28} />, title: "Smart Farming" },
    { icon: <Leaf size={28} />, title: "Crop Management" },
    { icon: <Coffee size={28} />, title: "Yield Optimization" },
    { icon: <Factory size={28} />, title: "Resource Planning" },
    { icon: <Building2 size={28} />, title: "Farm Analytics" },
    { icon: <BadgeDollarSign size={28} />, title: "Cost Optimization" },
    { icon: <Landmark size={28} />, title: "Compliance Tools" },
    { icon: <ShieldCheck size={28} />, title: "Quality Assurance" },
  ];

  const solutions = [
    {
      icon: <Sprout className="w-14 h-14" />,
      title: "AI Crop Analysis",
      description:
        "Advanced machine learning algorithms analyze crop health, predict yields, and provide actionable insights for optimal farming decisions.",
      ctaLink: "/solutions/crop-analysis",
      expandedContent: (
        <div className="space-y-6">
          <p>
            Our AI Crop Analysis system uses cutting-edge machine learning
            algorithms to revolutionize how you monitor and manage your crops.
            Here's what makes our solution unique:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Real-time Monitoring:</strong> Advanced sensors and
              satellite imagery provide continuous crop health assessment
            </li>
            <li>
              <strong>Predictive Analytics:</strong> AI-powered yield prediction
              with up to 95% accuracy
            </li>
            <li>
              <strong>Disease Detection:</strong> Early warning system for pest
              infestations and crop diseases
            </li>
            <li>
              <strong>Growth Tracking:</strong> Detailed growth stage monitoring
              and optimization recommendations
            </li>
          </ul>
          <div className="border-l-4 border-emerald-500 pl-4 my-6">
            <p className="text-emerald-400 italic">
              "The AI Crop Analysis system helped us increase our yield by 40%
              while reducing resource waste." - John Smith, Agricultural
              Director
            </p>
          </div>
          <h4 className="text-lg font-semibold text-emerald-400 mt-6">
            Key Benefits:
          </h4>
          <ul className="list-disc pl-6 space-y-3">
            <li>Increased crop yields through optimized growing conditions</li>
            <li>Reduced crop loss from early disease detection</li>
            <li>Better resource allocation based on predictive analytics</li>
            <li>Data-driven decision making for improved farm management</li>
          </ul>
        </div>
      ),
    },
    {
      icon: <Building2 className="w-14 h-14" />,
      title: "Smart Resource Management",
      description:
        "Intelligent resource allocation system that optimizes water usage, fertilizer application, and farm operations using real-time data.",
      ctaLink: "/solutions/resource-management",
      expandedContent: (
        <div className="space-y-6">
          <p>
            Smart Resource Management transforms traditional farming practices
            through intelligent automation and data-driven decision making:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Precision Irrigation:</strong> AI-controlled water
              distribution based on soil moisture and weather forecasts
            </li>
            <li>
              <strong>Fertilizer Optimization:</strong> Custom fertilization
              schedules based on soil composition and crop needs
            </li>
            <li>
              <strong>Equipment Tracking:</strong> Real-time monitoring of farm
              machinery and automated maintenance scheduling
            </li>
            <li>
              <strong>Labor Management:</strong> Intelligent workforce
              allocation and task optimization
            </li>
          </ul>
          <div className="bg-emerald-900/20 p-4 rounded-lg my-6">
            <h4 className="text-emerald-400 font-semibold mb-2">
              Resource Savings:
            </h4>
            <ul className="space-y-2">
              <li>Water usage reduced by up to 30%</li>
              <li>Fertilizer efficiency improved by 25%</li>
              <li>Equipment maintenance costs reduced by 40%</li>
              <li>Labor efficiency increased by 35%</li>
            </ul>
          </div>
          <p className="text-sm text-emerald-400/60">
            Our system integrates with existing farm infrastructure and provides
            real-time monitoring through our mobile app.
          </p>
        </div>
      ),
    },
    {
      icon: <ShieldCheck className="w-14 h-14" />,
      title: "Precision Agriculture",
      description:
        "Data-driven precision farming tools that enable targeted interventions, reduce waste, and maximize agricultural productivity.",
      ctaLink: "/solutions/precision-farming",
      expandedContent: (
        <div className="space-y-6">
          <p>
            Precision Agriculture combines advanced technology with traditional
            farming wisdom to maximize efficiency and productivity:
          </p>
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-emerald-900/20 p-4 rounded-lg">
              <h4 className="text-emerald-400 font-semibold mb-2">
                Field Mapping
              </h4>
              <ul className="text-sm space-y-2">
                <li>High-resolution soil mapping</li>
                <li>Topographic analysis</li>
                <li>Yield potential mapping</li>
              </ul>
            </div>
            <div className="bg-emerald-900/20 p-4 rounded-lg">
              <h4 className="text-emerald-400 font-semibold mb-2">
                Smart Applications
              </h4>
              <ul className="text-sm space-y-2">
                <li>Variable rate seeding</li>
                <li>Targeted pest control</li>
                <li>Custom fertilization</li>
              </ul>
            </div>
          </div>
          <h4 className="text-lg font-semibold text-emerald-400">
            Technology Stack:
          </h4>
          <ul className="list-disc pl-6 space-y-3">
            <li>GPS-guided machinery with centimeter accuracy</li>
            <li>Drone-based crop monitoring and mapping</li>
            <li>IoT sensors for real-time field conditions</li>
            <li>Machine learning for predictive analytics</li>
          </ul>
          <div className="border-t border-emerald-800 mt-6 pt-6">
            <p className="text-emerald-400 font-semibold">Results:</p>
            <p className="text-sm text-emerald-400/60">
              Farmers using our Precision Agriculture system report up to 20%
              increase in yield and 30% reduction in input costs within the
              first year.
            </p>
          </div>
        </div>
      ),
    },
  ];

  const videos: VideoCard[] = [
    {
      thumbnail: "https://img.youtube.com/vi/KfB2sx9uCkI/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=KfB2sx9uCkI",
      title:
        "The Futuristic Farms That Will Feed the World | Freethink | Future of Food",
      duration: "6:19",
      channel: "Free Think",
      embedId: "KfB2sx9uCkI",
    },
    {
      thumbnail: "https://img.youtube.com/vi/1IwKWYNycj8/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=1IwKWYNycj8",
      title:
        "Awesome Hydroponic Strawberries Farming - Modern Agriculture Technology - Strawberries Harvesting",
      duration: "10:32",
      channel: "National Geographic",
      embedId: "1IwKWYNycj8",
    },
    {
      thumbnail: "https://img.youtube.com/vi/J4SaSfnHK3I/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=J4SaSfnHK3I",
      title: "Vertical Farming: The Future of Agriculture",
      duration: "8:15",
      channel: "National Geographic",
      embedId: "J4SaSfnHK3I",
    },
    {
      thumbnail: "https://img.youtube.com/vi/Qmla9NLFBvU/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=Qmla9NLFBvU",
      title: "The Future of Farming",
      duration: "12.28",
      channel: "TDC",
      embedId: "Qmla9NLFBvU",
    },
  ];

  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);

  const agricultureData = [
    { month: "Jan", yield: 4000, rainfall: 240 },
    { month: "Feb", yield: 3000, rainfall: 139 },
    { month: "Mar", yield: 2000, rainfall: 980 },
    { month: "Apr", yield: 2780, rainfall: 390 },
    { month: "May", yield: 1890, rainfall: 480 },
    { month: "Jun", yield: 2390, rainfall: 380 },
    { month: "Jul", yield: 3490, rainfall: 430 },
  ];

  return (
    <main className="min-h-screen bg-[#0a0c10] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/29418729/pexels-photo-29418729/free-photo-of-bangladeshi-farmers-working-in-lush-paddy-field.png')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 to-blue-900/90" />

        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-8">
              <h1 className="text-6xl font-bold leading-tight bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">
                Transform Your Farm with AI
              </h1>
              <p className="text-2xl text-emerald-100/80 leading-relaxed">
                Harness the power of artificial intelligence to optimize your
                agricultural operations and maximize yields
              </p>
              <a href="https://kisanai.tech" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="group bg-emerald-500 text-white hover:bg-emerald-600 px-8 text-lg"
              >
                <span>Kisan AI</span>
                <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Button>
              </a>
            </div>
            <div className="lg:w-1/2">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="https://images.pexels.com/photos/29418729/pexels-photo-29418729/free-photo-of-bangladeshi-farmers-working-in-lush-paddy-field.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Smart Farming Technology"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">
            Intelligent Farming Solutions
          </h2>
          <p className="text-xl text-emerald-400/60">
            Comprehensive AI-powered tools for modern agriculture
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mb-24">
          <div className="lg:w-3/4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {valueChainCards.map((card, index) => (
                <ValueChainCard
                  key={index}
                  icon={card.icon}
                  title={card.title}
                />
              ))}
            </div>
          </div>
          <div className="lg:w-1/4">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
                alt="Agricultural Innovation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/30" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              ctaLink={solution.ctaLink}
              expandedContent={solution.expandedContent}
            />
          ))}
        </div>
      </div>

      {/* Dynamic Agriculture Graph Section */}
      <div className="container mx-auto px-4 py-24 max-w-6xl">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">
          Agricultural Performance Analytics
        </h2>

        <div className="h-[600px] bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-emerald-400 mb-2">
              Crop Yield vs Rainfall Patterns
            </h3>
            <p className="text-emerald-400/60">
              Historical data analysis with predictive trend modeling
            </p>
          </div>

          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={agricultureData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#2d3748" />
              <XAxis
                dataKey="month"
                stroke="#cbd5e0"
                tick={{ fill: "#94a3b8" }}
              />
              <YAxis stroke="#cbd5e0" tick={{ fill: "#94a3b8" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "none",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
                }}
              />
              <Legend
                wrapperStyle={{ paddingTop: "20px" }}
                formatter={(value) => (
                  <span className="text-emerald-300/80">{value}</span>
                )}
              />
              <Line
                type="monotone"
                dataKey="yield"
                stroke="#10b981"
                strokeWidth={2}
                name="Crop Yield (kg)"
                dot={{ fill: "#10b981", strokeWidth: 2 }}
              />
              <Line
                type="monotone"
                dataKey="rainfall"
                stroke="#3b82f6"
                strokeWidth={2}
                name="Rainfall (mm)"
                dot={{ fill: "#3b82f6", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Video Content Section */}
      <div className="container mx-auto px-4 py-24">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">
          Learn Modern Farming
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <a
              href={video.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="group relative block"
              onMouseEnter={() => setHoveredVideo(index)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              <div className="relative aspect-video overflow-hidden rounded-2xl">
                {hoveredVideo === index ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.embedId}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${video.embedId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    className="object-cover w-full h-full"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-emerald-500/90 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-400">
                        <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1" />
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-6 right-6 px-2 py-1 bg-black/80 rounded text-sm font-medium">
                      {video.duration}
                    </div>
                  </>
                )}

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-white group-hover:text-emerald-300 transition-colors duration-300">
                      {video.title}
                    </h3>
                    <p className="text-sm text-emerald-400">{video.channel}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="flex justify-center gap-8 mt-16">
          <Button
            size="lg"
            className="bg-emerald-500 text-white hover:bg-emerald-600 px-8"
            onClick={handleScheduleDemo}
          >
            Schedule a Demo
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 hover:text-white px-8"
            onClick={handleCaseStudies}
          >
            Case Studies
          </Button>
        </div>
      </div>
    </main>
  );
}
