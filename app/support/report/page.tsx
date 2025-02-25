"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle, Bug, Lightbulb, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ReportIssuePage() {
  const issueTypes = [
    {
      icon: <Bug className="w-6 h-6" />,
      title: "Technical Bug",
      description: "Report software bugs or technical issues"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "System Error",
      description: "Report system crashes or errors"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Improvement Suggestion",
      description: "Suggest improvements or enhancements"
    }
  ];

  const priorityLevels = [
    {
      level: "Critical",
      description: "System down or severe impact on operations",
      response: "Within 1 hour"
    },
    {
      level: "High",
      description: "Major feature not working",
      response: "Within 4 hours"
    },
    {
      level: "Medium",
      description: "Feature working with limitations",
      response: "Within 24 hours"
    },
    {
      level: "Low",
      description: "Minor issues or cosmetic problems",
      response: "Within 48 hours"
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
            Report an Issue
          </h1>
          <p className="text-xl text-emerald-400/60 max-w-3xl">
            Submit detailed reports about technical issues or system problems.
          </p>
        </div>

        {/* Issue Types */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {issueTypes.map((type, index) => (
            <div key={index} className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl p-8 border border-white/10">
              <div className="text-emerald-400 p-4 bg-emerald-400/10 rounded-xl inline-block mb-6">
                {type.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {type.title}
              </h3>
              <p className="text-gray-400 mb-6">
                {type.description}
              </p>
              <Button className="w-full bg-emerald-500 text-white hover:bg-emerald-600">
                Report {type.title}
              </Button>
            </div>
          ))}
        </div>

        {/* Priority Levels */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl p-8 border border-white/10 mb-16">
          <h2 className="text-2xl font-semibold text-emerald-400 mb-6">
            Priority Levels
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {priorityLevels.map((priority, index) => (
              <div key={index} className="bg-black/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {priority.level}
                </h3>
                <p className="text-gray-400 mb-2">
                  {priority.description}
                </p>
                <p className="text-sm text-emerald-400">
                  Response time: {priority.response}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Report Form */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl p-8 border border-white/10 mb-16">
          <h2 className="text-2xl font-semibold text-emerald-400 mb-6">
            Submit Report
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block text-white mb-2">Issue Type</label>
              <select className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-gray-200">
                <option>Select issue type</option>
                <option>Technical Bug</option>
                <option>System Error</option>
                <option>Improvement Suggestion</option>
              </select>
            </div>
            <div>
              <label className="block text-white mb-2">Priority Level</label>
              <select className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-gray-200">
                <option>Select priority</option>
                <option>Critical</option>
                <option>High</option>
                 <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
            <div>
              <label className="block text-white mb-2">Description</label>
              <textarea 
                className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-gray-200 h-32"
                placeholder="Describe the issue in detail..."
              />
            </div>
            <div>
              <label className="block text-white mb-2">Steps to Reproduce</label>
              <textarea 
                className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-gray-200 h-32"
                placeholder="List the steps to reproduce this issue..."
              />
            </div>
            <Button className="w-full bg-emerald-500 text-white hover:bg-emerald-600">
              Submit Report
            </Button>
          </form>
        </div>

        {/* Report Guidelines */}
        <div className="bg-emerald-500/10 rounded-xl p-8 border border-emerald-500/20">
          <h2 className="text-2xl font-semibold text-emerald-400 mb-6">
            Reporting Guidelines
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">What to Include</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                  Clear issue description
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                  Steps to reproduce
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                  Expected vs actual results
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                  Screenshots or videos
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">After Submission</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                  Track via issue ID
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                  Respond to follow-up questions
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                  Test proposed solutions
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                  Verify issue resolution
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}