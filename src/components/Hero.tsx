import React from 'react';
import { ArrowRight } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

const Hero = () => {

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              <span className="block">The Future of</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                Blockchain Technology
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              CR Block Network combines the best of blockchain and DAG technologies to create a scalable, secure, and decentralized platform for the next generation of applications.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => window.location.href = '/buy'}
                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-full flex items-center justify-center"
              >
                Buy Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="bg-transparent hover:bg-gray-800 text-white font-bold py-3 px-8 border border-gray-600 rounded-full flex items-center justify-center">
                View Whitepaper
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-75"></div>
            <div className="relative bg-gray-900 p-6 rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="CR Block Network Visualization" 
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">100K+</h3>
            <p className="mt-2 text-gray-400">Transactions Per Second</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">0.1s</h3>
            <p className="mt-2 text-gray-400">Confirmation Time</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">1M+</h3>
            <p className="mt-2 text-gray-400">Active Users</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">100+</h3>
            <p className="mt-2 text-gray-400">Ecosystem Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;