import React from 'react';
import { Wallet, ShoppingBag, Landmark, Cpu, Layers, Code } from 'lucide-react';

const ecosystemItems = [
  {
    title: 'CR Block Wallet',
    description: 'Secure, user-friendly wallet for managing your assets and interacting with dApps.',
    icon: Wallet,
    color: 'from-purple-500 to-purple-700',
  },
  {
    title: 'DEX Platform',
    description: 'Decentralized exchange with high throughput and minimal slippage.',
    icon: ShoppingBag,
    color: 'from-blue-500 to-blue-700',
  },
  {
    title: 'DeFi Protocols',
    description: 'Lending, borrowing, and yield farming with competitive rates.',
    icon: Landmark,
    color: 'from-indigo-500 to-indigo-700',
  },
  {
    title: 'Smart Contracts',
    description: 'Build powerful dApps with our Turing-complete smart contract platform.',
    icon: Code,
    color: 'from-purple-500 to-purple-700',
  },
  {
    title: 'Layer 2 Solutions',
    description: 'Scale even further with our Layer 2 solutions for specific use cases.',
    icon: Layers,
    color: 'from-blue-500 to-blue-700',
  },
  {
    title: 'Developer Tools',
    description: 'Comprehensive SDK and tools for building on CR Block.',
    icon: Cpu,
    color: 'from-indigo-500 to-indigo-700',
  },
];

const Ecosystem = () => {
  return (
    <div id="ecosystem" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-purple-400 font-semibold tracking-wide uppercase">Ecosystem</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            A Complete Blockchain Ecosystem
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            CR Block provides a comprehensive suite of tools and services for users, developers, and enterprises.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ecosystemItems.map((item) => (
            <div 
              key={item.title} 
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105"
              onClick={() => window.location.href = '/buy'}
            >
              <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
              <div className="px-6 py-8">
                <div className="flex items-center">
                  <div className={`p-3 rounded-md bg-gradient-to-r ${item.color}`}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-white">{item.title}</h3>
                </div>
                <p className="mt-4 text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
            <div className="px-6 py-12 sm:px-12 lg:px-16">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                  <h2 className="text-3xl font-extrabold text-white">
                    Build the Future with CR Block
                  </h2>
                  <p className="mt-4 text-lg text-gray-400">
                    Join our developer community and start building decentralized applications that can scale to millions of users. Our comprehensive documentation, SDKs, and developer support make it easy to Buy Now.
                  </p>
                  <div className="mt-8">
                    <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700">
                      Start Building
                    </a>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-0.5 md:grid-cols-3">
                  <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-800">
                    <img className="max-h-12" src="https://via.placeholder.com/150x50/4F46E5/FFFFFF?text=Partner+1" alt="Partner 1" />
                  </div>
                  <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-800">
                    <img className="max-h-12" src="https://via.placeholder.com/150x50/4F46E5/FFFFFF?text=Partner+2" alt="Partner 2" />
                  </div>
                  <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-800">
                    <img className="max-h-12" src="https://via.placeholder.com/150x50/4F46E5/FFFFFF?text=Partner+3" alt="Partner 3" />
                  </div>
                  <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-800">
                    <img className="max-h-12" src="https://via.placeholder.com/150x50/4F46E5/FFFFFF?text=Partner+4" alt="Partner 4" />
                  </div>
                  <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-800">
                    <img className="max-h-12" src="https://via.placeholder.com/150x50/4F46E5/FFFFFF?text=Partner+5" alt="Partner 5" />
                  </div>
                  <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-800">
                    <img className="max-h-12" src="https://via.placeholder.com/150x50/4F46E5/FFFFFF?text=Partner+6" alt="Partner 6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;
