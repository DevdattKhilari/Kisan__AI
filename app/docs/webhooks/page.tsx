"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Webhook, Bell, Shield, Code } from "lucide-react";

export default function WebhooksPage() {
  const events = [
    {
      name: "crop.analysis.completed",
      description: "Triggered when crop analysis is completed",
      payload: {
        crop_id: "crop_123",
        health_score: 0.85,
        analysis_date: "2024-04-15T10:30:00Z",
        recommendations: ["Increase irrigation", "Monitor nitrogen levels"]
      }
    },
    {
      name: "alert.created",
      description: "Triggered when a new alert is generated",
      payload: {
        alert_id: "alert_456",
        severity: "high",
        type: "pest_detection",
        message: "Potential pest infestation detected in Field A"
      }
    },
    {
      name: "resource.threshold.exceeded",
      description: "Triggered when resource usage exceeds threshold",
      payload: {
        resource_type: "water",
        current_value: 150,
        threshold: 100,
        field_id: "field_789",
        timestamp: "2024-04-15T14:20:00Z"
      }
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent mb-8">
        Webhooks
      </h1>
      
      <div className="prose prose-invert max-w-none mb-12">
        <p className="text-xl text-emerald-400/60">
          Real-time event notifications through secure webhooks.
        </p>
      </div>

      {/* Setup Guide */}
      <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl p-8 border border-white/10 mb-16">
        <h2 className="text-2xl font-semibold text-white mb-6">Getting Started</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: <Code className="w-6 h-6" />,
              title: "Configure Endpoint",
              content: "Set up a publicly accessible HTTPS endpoint to receive webhook events"
            },
            {
              icon: <Shield className="w-6 h-6" />,
              title: "Generate Secret",
              content: "Create a webhook secret to verify event authenticity"
            },
            {
              icon: <Bell className="w-6 h-6" />,
              title: "Subscribe to Events",
              content: "Choose which events you want to receive notifications for"
            },
            {
              icon: <Webhook className="w-6 h-6" />,
              title: "Handle Events",
              content: "Process webhook payloads and implement your business logic"
            }
          ].map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="text-emerald-400 p-3 bg-emerald-400/10 rounded-lg">
                {step.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-300">
                  {step.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event Types */}
      <div className="space-y-8 mb-16">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Available Events
        </h2>
        {events.map((event, index) => (
          <div key={index} className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <Webhook className="w-5 h-5 text-emerald-400" />
              <h3 className="text-xl font-semibold text-white">{event.name}</h3>
            </div>
            <p className="text-gray-400 mb-6">{event.description}</p>
            <div className="bg-black/20 rounded-lg p-4">
              <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
                {JSON.stringify(event.payload, null, 2)}
              </pre>
            </div>
          </div>
        ))}
      </div>

      {/* Security */}
      <div className="bg-emerald-500/10 rounded-xl p-8 border border-emerald-500/20 mb-16">
        <h2 className="text-2xl font-semibold text-emerald-400 mb-6">
          Security Considerations
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Signature Verification",
              description: "Always verify webhook signatures using your secret key"
            },
            {
              title: "HTTPS Only",
              description: "Only accept webhooks over secure HTTPS connections"
            },
            {
              title: "Timeout Handling",
              description: "Implement proper timeout handling for webhook processing"
            },
            {
              title: "Retry Logic",
              description: "Handle failed deliveries with exponential backoff"
            }
          ].map((item, index) => (
            <div key={index} className="bg-black/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Implementation Example */}
      <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl overflow-hidden border border-white/10 mb-16">
        <div className="px-6 py-3 border-b border-white/10">
          <span className="text-emerald-400 font-semibold">
            Node.js Example
          </span>
        </div>
        <pre className="p-6 text-sm text-gray-300 font-mono overflow-x-auto">
{`const express = require('express');
const crypto = require('crypto');

const app = express();

app.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {
  const signature = req.headers['x-kisan-signature'];
  const payload = req.body;
  
  // Verify signature
  const isValid = verifySignature(payload, signature, process.env.WEBHOOK_SECRET);
  if (!isValid) {
    return res.status(400).send('Invalid signature');
  }

  // Handle the event
  const event = JSON.parse(payload);
  console.log('Received event:', event.type);
  
  res.json({received: true});
});`}</pre>
      </div>

      {/* Next Steps */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
          Ready to Implement Webhooks?
        </h2>
        <p className="text-gray-300 mb-8">
          Start receiving real-time updates for your application.
        </p>
        <Button 
          className="bg-emerald-500 text-white hover:bg-emerald-600 group"
        >
          <span>View API Documentation</span>
          <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
}