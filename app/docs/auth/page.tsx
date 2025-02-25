"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Key, Shield, Lock, RefreshCcw } from "lucide-react";

export default function AuthenticationPage() {
  const authFlows = [
    {
      title: "Email & Password",
      description: "Traditional authentication using email and password",
      steps: [
        "User submits email and password",
        "Server validates credentials",
        "JWT token is generated",
        "Token is returned to client"
      ]
    },
    {
      title: "API Key Authentication",
      description: "Secure API access using API keys",
      steps: [
        "Generate API key in dashboard",
        "Include key in request header",
        "Server validates API key",
        "Access granted to resources"
      ]
    },
    {
      title: "Token Refresh",
      description: "Maintaining secure sessions with token refresh",
      steps: [
        "Access token expires",
        "Use refresh token to request new access token",
        "Validate refresh token",
        "Issue new access token"
      ]
    }
  ];

  const codeExamples = [
    {
      language: "JavaScript",
      code: `const login = async (email, password) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });
  
  const { token } = await response.json();
  return token;
};`
    },
    {
      language: "Python",
      code: `import requests

def login(email, password):
    response = requests.post(
        'https://api.kisanai.com/auth/login',
        json={'email': email, 'password': password}
    )
    return response.json()['token']`
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent mb-8">
        Authentication
      </h1>
      
      <div className="prose prose-invert max-w-none mb-12">
        <p className="text-xl text-emerald-400/60">
          Secure authentication methods for accessing Kisan AI's services.
        </p>
      </div>

      {/* Authentication Flows */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {authFlows.map((flow, index) => (
          <div key={index} className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl p-8 border border-white/10">
            <div className="text-emerald-400 p-4 bg-emerald-400/10 rounded-xl inline-block mb-6">
              {index === 0 ? <Key className="w-6 h-6" /> :
               index === 1 ? <Shield className="w-6 h-6" /> :
               <RefreshCcw className="w-6 h-6" />}
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              {flow.title}
            </h3>
            <p className="text-gray-400 mb-6">
              {flow.description}
            </p>
            <ol className="space-y-2">
              {flow.steps.map((step, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-300">
                  <div className="w-6 h-6 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>

      {/* Code Examples */}
      <div className="space-y-8 mb-16">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Implementation Examples
        </h2>
        {codeExamples.map((example, index) => (
          <div key={index} className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl overflow-hidden border border-white/10">
            <div className="px-6 py-3 border-b border-white/10">
              <span className="text-emerald-400 font-semibold">
                {example.language}
              </span>
            </div>
            <pre className="p-6 text-sm text-gray-300 font-mono overflow-x-auto">
              {example.code}
            </pre>
          </div>
        ))}
      </div>

      {/* Security Best Practices */}
      <div className="bg-emerald-500/10 rounded-xl p-8 border border-emerald-500/20 mb-16">
        <h2 className="text-2xl font-semibold text-emerald-400 mb-6">
          Security Best Practices
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Token Storage",
              description: "Store tokens securely in HttpOnly cookies or secure storage"
            },
            {
              title: "API Key Protection",
              description: "Never expose API keys in client-side code or repositories"
            },
            {
              title: "Regular Rotation",
              description: "Rotate API keys periodically and after team member changes"
            },
            {
              title: "Error Handling",
              description: "Implement proper error handling for authentication failures"
            }
          ].map((practice, index) => (
            <div key={index} className="bg-black/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                {practice.title}
              </h3>
              <p className="text-gray-300">
                {practice.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Next Steps */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
          Ready to Implement?
        </h2>
        <p className="text-gray-300 mb-8">
          Start integrating secure authentication in your application.
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