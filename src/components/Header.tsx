
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-white/20">
      <div className="container mx-auto px-4 py-6">
        <div className=" flex items-center justify-center flex-col">
          <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex gap-2">
       

           ConsciousDay Agent 
          </h1>
          </div>
          <p className="text-gray-600 mt-2 text-lg">
            Your AI-powered morning reflection companion
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
