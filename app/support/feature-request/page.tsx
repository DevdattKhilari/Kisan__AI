"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Lightbulb, Target, Users, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FeatureRequestPage() {
  const categories = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Core Functionality",
      description: "Improvements to existing features"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User Experience",
      description: "Interface and usability enhancements"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "New Features",
      description: "Suggest completely new capabilities"
    }
  ];

  const popularRequests = [
    {
      title: "Advanced Data Export",
      votes: 234,
      status: "Under Review"
    },
    {
      title: "Batch Processing",
      votes: 189,
      status: "Planned"
    },
    {
      title: "Custom Dashboards",
      votes: 156,
      status: "In Development"
    },
    {
      title: "API Enhancements",
      votes: 132,
      status: "Under Review"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0c10] text-white">
      <div className="container mx-auto px-4 py-24">
        <Link href="/support" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Support Center
        </Link>

        <div className="mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent mb-6">
            Feature Requests
          </h1>
          <p className="text-xl text-emerald-400/60 max-w-3xl">
            Help shape the future of Kisan AI by suggesting new features and improvements.
          </p>
        </div>

        {/* Feature Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <div key={index} className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl p-8 border border-white/10">
              <div className="text-emerald-400 p-4 bg-emerald-400/10 rounded-xl inline-block mb-6">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {category.title}
              </h3>
              <p className="text-gray-400 mb-6">
                {category.description}
              </p>
              <Button className="w-full bg-emerald-500 text-white hover:bg-emerald-600">
                Submit Request
              </Button>
            </div>
          ))}
        </div>

        {/* Popular Requests */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl p-8 border border-white/10 mb-16">
          <h2 className="text-2xl font-semibold text-emerald-400 mb-6">
            Popular Requests
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {popularRequests.map((request, index) => (
              <div key={index} className="bg-black/20 p-6 rounded-lg flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {request.title}
                  </h3>
                  <p className="text-emerald-400">
                    {request.status}
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">
                    {request.votes}
                  </div>
                  <div className="text-sm text-gray-400">
                    votes
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Request Form */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl p-8 border border-white/10 mb-16">
          <h2 className="text-2xl font-semibold text-emerald-400 mb-6">
            Submit Feature Request
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block text-white mb-2">Feature Category</label>
              <select className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-gray-200">
                <option>Select category</option>
                <option>Core Functionality</option>
                <option>User Experience</option>
                <option>New Features</option>
              </select>
            </div>
            <div>
              <label className="block text-white mb-2">Feature Title</label>
              <input 
                type="text"
                className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-gray-200"
                placeholder="Enter a concise title for your feature request..."
              />
            </div>
            <div>
              <label className="block text-white mb-2">Description</label>
              <textarea 
                className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-gray-200 h-32"
                placeholder="Describe the feature and its benefits in detail..."
              />
            </div>
            <div>
              <label className="block text-white mb-2">Use Cases</label>
              <textarea 
                className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-gray-200 h-32"
                placeholder="Describe specific scenarios where this feature would be useful..."
              />
            </div>
            <Button className="w-full bg-emerald-500 text-white hover:bg-emerald-600">
              Submit Request
            </Button>
          </form>
        </div>

        {/* Guidelines */}
        <div className="bg-emerald-500/10 rounded-xl p-8 border border-emerald-500/20">
          <h2 className="text-2xl font-semibold text-emerald-400 mb-6">
            Request Guidelines
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Writing Effective Requests</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                  Be specific and detailed
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                  Explain the problem it solves
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                  Provide clear use cases
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                  Include examples if possible
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">What Happens Next</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                  Community voting period
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                  Review by product team
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                  Feasibility assessment
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                  Development prioritization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}