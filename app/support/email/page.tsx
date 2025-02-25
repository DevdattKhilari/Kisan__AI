"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Clock, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function EmailSupportPage() {
  const emailCategories = [
    {
      title: "Technical Support",
      email: "tech.support@kisanai.com",
      responseTime: "Within 4 hours",
      description: "For technical issues and troubleshooting"
    },
    {
      title: "Account Support",
      email: "accounts@kisanai.com",
      responseTime: "Within 2 hours",
      description: "For billing and account-related queries"
    },
    {
      title: "Integration Support",
      email: "integration@kisanai.com",
      responseTime: "Within 6 hours",
      description: "For API and integration assistance"
    }
  ];

  const supportHours = [
    {
      day: "Monday - Friday",
      hours: "9:00 AM - 8:00 PM IST"
    },
    {
      day: "Saturday",
      hours: "10:00 AM - 6:00 PM IST"
    },
    {
      day: "Sunday",
      hours: "Emergency Support Only"
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
            Email Support
          </h1>
          <p className="text-xl text-emerald-400/60 max-w-3xl">
            Get expert assistance through our dedicated email support channels.
          </p>
        </div>

        {/* Email Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {emailCategories.map((category, index) => (
            <div key={index} className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl p-8 border border-white/10">
              <div className="text-emerald-400 p-4 bg-emerald-400/10 rounded-xl inline-block mb-6">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {category.title}
              </h3>
              <p className="text-gray-400 mb-4">
                {category.description}
              </p>
              <div className="space-y-2 mb-6">
                <p className="text-emerald-400 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {category.responseTime}
                </p>
                <p className="text-sm text-gray-400">
                  {category.email}
                </p>
              </div>
              <Link href={`mailto:${category.email}`}>
                <Button className="w-full bg-emerald-500 text-white hover:bg-emerald-600">
                  Send Email
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Support Hours */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl p-8 border border-white/10 mb-16">
          <h2 className="text-2xl font-semibold text-emerald-400 mb-6">
            Support Hours
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {supportHours.map((schedule, index) => (
              <div key={index} className="bg-black/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {schedule.day}
                </h3>
                <p className="text-gray-400">
                  {schedule.hours}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Email Guidelines */}
        <div className="bg-emerald-500/10 rounded-xl p-8 border border-emerald-500/20">
          <h2 className="text-2xl font-semibold text-emerald-400 mb-6">
            Email Support Guidelines
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Include Account Details",
                description: "Provide your account ID and farm name for faster assistance"
              },
              {
                title: "Describe the Issue",
                description: "Clearly explain the problem and include any error messages"
              },
              {
                title: "Add Screenshots",
                description: "Include relevant screenshots or videos when applicable"
              },
              {
                title: "Follow Up",
                description: "Use the same email thread for follow-up questions"
              }
            ].map((guideline, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-white mb-1">
                    {guideline.title}
                  </h3>
                  <p className="text-gray-300">
                    {guideline.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}