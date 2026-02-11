import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl text-center max-w-lg mx-auto transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-4 tracking-tight">
          RADOS Workspace Platform
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
          Production-ready autonomous workspace platform.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
            Get Started
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
            Learn More
          </button>
        </div>
      </div>
      <footer className="mt-12 text-gray-500 text-sm">
        &copy; Ervin Remus Radosavlevici
      </footer>
    </div>
  );
};

export default App;