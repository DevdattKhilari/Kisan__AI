import { ArrowLeft } from 'lucide-react';
import React from 'react';

export default function CaseStudies() {
  const cases = [
    {
      title: 'Sustainable Rice Farming in Southeast Asia',
      image:
        'https://ricenewstoday.com/wp-content/uploads/2024/05/rice-1.jpg',
      description:
        'How AI-powered irrigation systems helped increase yield by 40% while reducing water usage by 30%',
      results: [
        '40% yield increase',
        '30% water reduction',
        '50% cost savings',
      ],
    },
    {
      title: 'Smart Vineyard Management in California',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-H-5Zczxi40uIFD5Fa1SxAJs0YoqYU52ZXw&s',
      description:
        'Precision agriculture techniques leading to premium wine grape production',
      results: [
        '25% quality improvement',
        '35% resource optimization',
        '45% labor efficiency',
      ],
    },
    {
      title: 'Vertical Farming Revolution in Urban Areas',
      image:
        'https://img-cdn.thepublive.com/filters:format(webp)/thetatva/media/post_attachments/wp-content/uploads/2024/02/eden-green-vertical-produce.jpg',
      description:
        'Transforming unused urban spaces into productive agricultural centers',
      results: [
        '90% space efficiency',
        '70% water savings',
        'Year-round production',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0c10] text-white py-24 relative">
      <a
        href="/"
        className="absolute top-8 left-8 flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
      >
        <ArrowLeft size={20} />
        <span className="font-medium">Back to Home</span>
      </a>
      
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-16 bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent text-center">
          Success Stories
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((study, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative h-48">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-emerald-400">
                  {study.title}
                </h3>
                <p className="text-emerald-100/80">{study.description}</p>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-emerald-300">
                    Key Results:
                  </h4>
                  <ul className="space-y-1">
                    {study.results.map((result, i) => (
                      <li
                        key={i}
                        className="text-sm text-emerald-100/60 flex items-center"
                      >
                        <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}