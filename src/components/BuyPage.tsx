import React from 'react';
import { VerifiedIcon } from 'lucide-react';

const BuyPage = () => {
  const goToHome = () => {
    window.location.href = '/'; // Navigate to the main page
  };

  const goToWallet = () => {
    window.location.href = '/wallet'; // Navigate to wallet page
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white p-8 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-6">CR Block&nbsp;
        <VerifiedIcon className="h-12 w-12 inline-block text-green-500" />
      </h1>
      <h2 className="text-2xl font-bold mb-2">Welcome to CR Block Dashboard.</h2>
      <p className="text-lg mb-8 text-center">
         To reach the dashboard, connect your wallet first!
      </p>
      <div className="mt-8 flex space-x-4">
        <button 
          onClick={goToHome} 
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded transition duration-300"
        >
          Go to Home
        </button>
        <button 
          onClick={goToWallet} 
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded transition duration-300"
        >
          Go to Wallet
        </button>
      </div>
    </div>
  );
};

export default BuyPage;
