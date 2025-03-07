import React from 'react';

const roadmapItems = [
  {
    quarter: 'Q1 2025',
    title: 'Testnet Launch',
    description: 'Public testnet launch with core functionality and initial developer tools.',
    completed: true,
  },
  {
    quarter: 'Q2 2025',
    title: 'Mainnet Alpha',
    description: 'Limited mainnet launch with staking and basic transaction capabilities.',
    completed: true,
  },
  {
    quarter: 'Q3 2025',
    title: 'Smart Contracts',
    description: 'Introduction of smart contract functionality and developer SDK.',
    completed: false,
  },
  {
    quarter: 'Q4 2025',
    title: 'Mainnet Beta',
    description: 'Full mainnet launch with complete feature set and ecosystem tools.',
    completed: false,
  },
  {
    quarter: 'Q1 2026',
    title: 'Cross-Chain Bridge',
    description: 'Implementation of cross-chain bridges to major blockchains.',
    completed: false,
  },
  {
    quarter: 'Q2 2026',
    title: 'Layer 2 Solutions',
    description: 'Launch of Layer 2 scaling solutions for specific use cases.',
    completed: false,
  },
];

const Roadmap = () => {
  return (
    <div id="roadmap" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-purple-400 font-semibold tracking-wide uppercase">Roadmap</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Our Development Journey
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            Follow our progress as we build the future of blockchain technology.
          </p>
        </div>

        <div className="mt-16">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600 to-blue-500"></div>
            
            <div className="space-y-16">
              {roadmapItems.map((item, index) => (
                <div key={index} className={`relative ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''} flex flex-col lg:flex-row`}>
                  <div className="lg:w-1/2"></div>
                  
                  {/* Center dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className={`h-8 w-8 rounded-full border-4 ${item.completed ? 'bg-purple-600 border-purple-300' : 'bg-gray-800 border-gray-600'} z-10`}></div>
                  </div>
                  
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'} relative`}>
                    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                        {item.quarter}
                      </span>
                      <h3 className="mt-3 text-xl font-bold text-white">{item.title}</h3>
                      <p className="mt-2 text-gray-400">{item.description}</p>
                      {item.completed && (
                        <span className="mt-4 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                          Completed
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-white">Future Development</h3>
          <p className="mt-4 max-w-3xl mx-auto text-gray-400">
            Our roadmap is constantly evolving as we respond to community feedback and technological advancements. Stay tuned for more exciting features and improvements.
          </p>
          <div className="mt-8">
            <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700">
              View Detailed Roadmap
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;