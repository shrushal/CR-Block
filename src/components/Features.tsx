import React from 'react';
import { Shield, Zap, Globe, Code, Server, Lock } from 'lucide-react';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-purple-500 transition-all duration-300">
    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      title: "High Throughput",
      description: "Process over 100,000 transactions per second with near-instant finality, enabling real-world applications at scale."
    },
    {
      icon: <Shield className="h-6 w-6 text-white" />,
      title: "Enhanced Security",
      description: "Innovative consensus mechanism that provides robust security guarantees while maintaining high performance."
    },
    {
      icon: <Globe className="h-6 w-6 text-white" />,
      title: "True Decentralization",
      description: "Designed from the ground up to enable thousands of nodes to participate without compromising performance."
    },
    {
      icon: <Code className="h-6 w-6 text-white" />,
      title: "Developer Friendly",
      description: "Comprehensive SDKs and APIs that make it easy to build decentralized applications on CR Block Network."
    },
    {
      icon: <Server className="h-6 w-6 text-white" />,
      title: "Interoperability",
      description: "Seamlessly connect with other blockchain networks through our advanced cross-chain communication protocol."
    },
    {
      icon: <Lock className="h-6 w-6 text-white" />,
      title: "Privacy Features",
      description: "Optional privacy-preserving transactions that protect user data while maintaining compliance capabilities."
    }
  ];

  return (
    <section id="features" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Revolutionary Features
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            CR Block Network combines cutting-edge technology with practical design to solve the blockchain trilemma.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;