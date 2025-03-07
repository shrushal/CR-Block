import React from 'react';
import { Twitter, Github, Disc as Discord, MessageCircle, Globe } from 'lucide-react';
const Community = () => {
  return (
    <div id="community" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-purple-400 font-semibold tracking-wide uppercase">Community</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Join the CR Block Community
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            Connect with developers, enthusiasts, and users from around the world.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <a href="#" className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-700">
            <div className="px-6 py-8 text-center">
              <div className="flex justify-center">
                <Twitter className="h-12 w-12 text-blue-400" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">Twitter</h3>
              <p className="mt-2 text-gray-400">Follow us for the latest updates and announcements</p>
            </div>
          </a>
          
          <a href="#" className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-700">
            <div className="px-6 py-8 text-center">
              <div className="flex justify-center">
                <Discord className="h-12 w-12 text-indigo-400" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">Discord</h3>
              <p className="mt-2 text-gray-400">Join our community of developers and enthusiasts</p>
            </div>
          </a>
          
          <a href="#" className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-700">
            <div className="px-6 py-8 text-center">
              <div className="flex justify-center">
                <Github className="h-12 w-12 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">GitHub</h3>
              <p className="mt-2 text-gray-400">Explore our open-source code and contribute</p>
            </div>
          </a>
          
          <a href="#" className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-700">
            <div className="px-6 py-8 text-center">
              <div className="flex justify-center">
                <Globe className="h-12 w-12 text-green-400" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">Forum</h3>
              <p className="mt-2 text-gray-400">Discuss ideas and get help from the community</p>
            </div>
          </a>
        </div>

        <div className="mt-20 bg-gray-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="px-6 py-12 sm:px-12 lg:px-16">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-white">
                Subscribe to Our Newsletter
              </h2>
              <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                Stay up to date with the latest news, updates, and events from the CR Block Network.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-5 py-3 w-full sm:max-w-xs rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="px-6 py-3 rounded-md bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:from-purple-700 hover:to-blue-600">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
