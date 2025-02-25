'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Book, FileText, HelpCircle, Phone } from 'lucide-react';
import Link from 'next/link';

export default function userguide() {
  const resources = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Support',
      description: 'Get help from our dedicated support team.',
      content: [
        { title: '24/7 Technical Support', link: '/support/technical' },
        { title: 'Email Support', link: '/support/email' },
        { title: 'Live Chat', link: '/support/chat' },
        { title: 'Schedule a Call', link: '/support/schedule' },
        { title: 'Report an Issue', link: '/support/report' },
        { title: 'Feature Request', link: '/support/feature-request' },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0c10] text-white">
      <div className="container mx-auto px-4 py-24">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/info"
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Information Center
          </Link>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent mb-6">
            Support Center
          </h1>
          <p className="text-xl text-emerald-400/60 max-w-3xl">
            Find comprehensive guides, documentation, and support resources to
            help you make the most of Kisan AI.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid gap-12">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl p-8 border border-white/10"
            >
              <div className="flex items-start gap-6">
                <div className="text-emerald-400 p-4 bg-emerald-400/10 rounded-xl">
                  {resource.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    {resource.title}
                  </h2>
                  <p className="text-gray-400 mb-8">{resource.description}</p>

                  <div className="grid md:grid-cols-2 gap-4">
                    {resource.content.map((item, i) => (
                      <Link key={i} href={item.link}>
                        <Button
                          variant="secondary"
                          className="w-full justify-start bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/20 text-white"
                        >
                          {item.title}
                        </Button>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
