"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Video, Phone, Users } from "lucide-react";
import Link from "next/link";

export default function ScheduleCallPage() {
  const callTypes = [
    {
      icon: <Video className="w-6 h-6" />,
      title: "Video Consultation",
      description: "Screen sharing and face-to-face discussion",
      duration: "30 minutes"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Consultation",
      description: "Voice call with our support team",
      duration: "30 minutes"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Training",
      description: "Group session for your team",
      duration: "60 minutes"
    }
  ];

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM"
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
            Schedule a Call
          </h1>
          <p className="text-xl text-emerald-400/60 max-w-3xl">
            Book a consultation with our expert support team at your convenience.
          </p>
        </div>

        {/* Call Types */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {callTypes.map((type, index) => (
            <div key={index} className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl p-8 border border-white/10">
              <div className="text-emerald-400 p-4 bg-emerald-400/10 rounded-xl inline-block mb-6">
                {type.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {type.title}
              </h3>
              <p className="text-gray-400 mb-4">
                {type.description}
              </p>
              <div className="flex items-center gap-2 text-emerald-400 mb-6">
                <Clock className="w-4 h-4" />
                <span>{type.duration}</span>
              </div>
              <Button className="w-full bg-emerald-500 text-white hover:bg-emerald-600">
                Select
              </Button>
            </div>
          ))}
        </div>

        {/* Calendar Section */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl p-8 border border-white/10 mb-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-emerald-400 mb-6">
                Select Date
              </h2>
              <div className="bg-black/20 p-6 rounded-lg">
                {/* Calendar Component would go here */}
                <div className="text-center text-gray-400">
                  Calendar integration coming soon
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-emerald-400 mb-6">
                Available Time Slots
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {timeSlots.map((slot, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="border-emerald-500/20 hover:border-emerald-500 hover:bg-emerald-500/10"
                  >
                    {slot}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Preparation Guidelines */}
        <div className="bg-emerald-500/10 rounded-xl p-8 border border-emerald-500/20">
          <h2 className="text-2xl font-semibold text-emerald-400 mb-6">
            Prepare for Your Call
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Required Information</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                  Account ID and farm details
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                  Specific issues or questions
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                  Relevant screenshots or data
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Technical Requirements</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                  Stable internet connection
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                  Updated browser for video calls
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                  Working microphone and camera
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}