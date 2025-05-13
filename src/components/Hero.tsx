
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight text-vtu-blue sm:text-5xl mb-6">
              Never Miss an AICTE Activity Again
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Track your AICTE points, discover nearby activities, and store your certificates - all in one place. 
              The smart way for VTU students to ensure graduation requirements.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-vtu-blue hover:bg-vtu-lightBlue text-white px-8 py-6 text-lg">
                Get Started
              </Button>
              <Button variant="outline" className="border-vtu-blue text-vtu-blue hover:bg-vtu-blue/10 px-8 py-6 text-lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in">
            <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-2 w-full max-w-md">
              <div className="rounded-lg bg-vtu-blue/5 p-8 flex flex-col items-center">
                <div className="w-20 h-20 bg-vtu-blue rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-lg text-vtu-blue mb-2">Your AICTE Points</h3>
                  <div className="text-5xl font-bold text-vtu-green mb-2">65/100</div>
                  <p className="text-gray-600">You're on your way! Just 35 more points to go.</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-6">
                  <div className="bg-vtu-green h-2.5 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
