"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Table, Key, Link } from "lucide-react";

export default function DataModelsPage() {
  const models = [
    {
      name: "Farm",
      description: "Core farm entity with location and configuration",
      fields: [
        { name: "id", type: "uuid", description: "Unique identifier" },
        { name: "name", type: "string", description: "Farm name" },
        { name: "location", type: "object", description: "Geographical coordinates" },
        { name: "size", type: "number", description: "Total area in hectares" },
        { name: "created_at", type: "timestamp", description: "Creation timestamp" }
      ]
    },
    {
      name: "Field",
      description: "Individual farm fields or plots",
      fields: [
        { name: "id", type: "uuid", description: "Unique identifier" },
        { name: "farm_id", type: "uuid", description: "Reference to farm" },
        { name: "name", type: "string", description: "Field name" },
        { name: "area", type: "number", description: "Field size in hectares" },
        { name: "soil_type", type: "string", description: "Soil classification" }
      ]
    },
    {
      name: "Crop",
      description: "Crop data and growth metrics",
      fields: [
        { name: "id", type: "uuid", description: "Unique identifier" },
        { name: "field_id", type: "uuid", description: "Reference to field" },
        { name: "type", type: "string", description: "Crop variety" },
        { name: "planting_date", type: "date", description: "Date planted" },
        { name: "expected_harvest", type: "date", description: "Expected harvest date" }
      ]
    }
  ];

  const relationships = [
    {
      name: "Farm to Fields",
      description: "One-to-many relationship between farms and their fields",
      constraint: "farm_id references farms(id)"
    },
    {
      name: "Field to Crops",
      description: "One-to-many relationship between fields and crops",
      constraint: "field_id references fields(id)"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent mb-8">
        Data Models
      </h1>
      
      <div className="prose prose-invert max-w-none mb-12">
        <p className="text-xl text-emerald-400/60">
          Comprehensive documentation of Kisan AI's data models and relationships.
        </p>
      </div>

      {/* Data Models */}
      <div className="space-y-8 mb-16">
        {models.map((model, index) => (
          <div key={index} className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl p-8 border border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <Database className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-semibold text-white">{model.name}</h2>
            </div>
            <p className="text-gray-400 mb-6">{model.description}</p>
            <div className="bg-black/20 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-emerald-400">Field</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-emerald-400">Type</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-emerald-400">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {model.fields.map((field, i) => (
                    <tr key={i} className="border-b border-white/10 last:border-0">
                      <td className="px-4 py-3 text-sm text-white">{field.name}</td>
                      <td className="px-4 py-3 text-sm text-gray-400">{field.type}</td>
                      <td className="px-4 py-3 text-sm text-gray-300">{field.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      {/* Relationships */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-white mb-6">Relationships</h2>
        <div className="grid gap-6">
          {relationships.map((rel, index) => (
            <div key={index} className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <Link className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-semibold text-white">{rel.name}</h3>
              </div>
              <p className="text-gray-400 mb-3">{rel.description}</p>
              <div className="bg-black/20 rounded-lg px-4 py-2">
                <code className="text-sm text-emerald-400">{rel.constraint}</code>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next Steps */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
          Ready to Start Building?
        </h2>
        <p className="text-gray-300 mb-8">
          Explore our API documentation to start integrating with Kisan AI.
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