import React, { useState } from 'react';
import { Menu, X, ChevronDown, Network } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center">
                <Network className="h-8 w-8 text-purple-500" />
                <span className="ml-2 text-xl font-bold">CR Block</span>
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#features" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800">Features</a>
                <a href="#ecosystem" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800">Ecosystem</a>
                <a href="#roadmap" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800">Roadmap</a>
                <a href="#community" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800">Community</a>
                <div className="relative group">
                  <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 flex items-center">
                    Resources
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-900 ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">Documentation</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">Whitepaper</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <button 
              onClick={() => window.location.href = '/buy'}
              className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-bold py-2 px-6 rounded-full"
            >
              Buy Now
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900">
            <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">Features</a>
            <a href="#ecosystem" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">Ecosystem</a>
            <a href="#roadmap" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">Roadmap</a>
            <a href="#community" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">Community</a>
            <div className="relative">
              <button className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="px-4 py-2 space-y-1">
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">Documentation</a>
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">Whitepaper</a>
                <a href="https://github.com/shrushal/CR-Block" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">GitHub</a>
              </div>
            </div>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="px-2">
              <button 
                onClick={() => window.location.href = '/buy'}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
