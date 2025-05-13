
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  LogOut,
  UserRound, 
  LayoutDashboard 
} from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-vtu-blue font-bold text-xl">AICTE Tracker</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="text-gray-700 hover:text-vtu-blue px-3 py-2 font-medium">
                Home
              </Link>
              <Link to="/" className="text-gray-700 hover:text-vtu-blue px-3 py-2 font-medium">
                Features
              </Link>
              <Link to="/" className="text-gray-700 hover:text-vtu-blue px-3 py-2 font-medium">
                FAQ
              </Link>
              <div className="flex items-center ml-4 space-x-3">
                <Button variant="ghost" size="icon" className="text-gray-700 hover:text-vtu-blue">
                  <LayoutDashboard className="h-5 w-5" />
                  <span className="sr-only">Dashboard</span>
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-700 hover:text-vtu-blue">
                  <UserRound className="h-5 w-5" />
                  <span className="sr-only">Profile</span>
                </Button>
                <Button variant="outline" className="border-vtu-blue text-vtu-blue hover:bg-vtu-blue hover:text-white">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            </div>
          </div>
          <div className="md:hidden flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="text-gray-700 hover:text-vtu-blue">
              <LayoutDashboard className="h-5 w-5" />
              <span className="sr-only">Dashboard</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-700 hover:text-vtu-blue">
              <UserRound className="h-5 w-5" />
              <span className="sr-only">Profile</span>
            </Button>
            <Button variant="ghost" size="sm">
              Menu
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
