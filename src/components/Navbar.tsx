
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { 
  LogOut,
  UserRound, 
  LayoutDashboard 
} from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem,
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const Navbar = () => {
  const navigate = useNavigate();
  
  // Mock student data - in a real app this would come from your authentication context/state
  const studentData = {
    name: "John Doe",
    vtuId: "1VT20CS001",
    college: "VTU Engineering College"
  };

  const handleProfileClick = () => {
    navigate('/dashboard');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="mr-2 text-gray-700 hover:text-vtu-blue">
              <LayoutDashboard className="h-5 w-5" />
              <span className="sr-only">Dashboard</span>
            </Button>
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
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Avatar className="h-8 w-8 border-2 border-gray-200 cursor-pointer hover:border-vtu-blue transition-colors">
                            <AvatarFallback>
                              <UserRound className="h-4 w-4" />
                            </AvatarFallback>
                          </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={handleProfileClick}>
                            Dashboard
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            Profile Settings
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <LogOut className="h-4 w-4 mr-2" />
                            Logout
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-64 p-4">
                    <div className="flex flex-col space-y-1">
                      <h4 className="text-sm font-semibold">{studentData.name}</h4>
                      <p className="text-sm text-gray-500">VTU ID: {studentData.vtuId}</p>
                      <p className="text-sm text-gray-500">{studentData.college}</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                <Button variant="outline" className="border-vtu-blue text-vtu-blue hover:bg-vtu-blue hover:text-white">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            </div>
          </div>
          <div className="md:hidden flex items-center space-x-2">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Avatar className="h-7 w-7 border border-gray-200 cursor-pointer" onClick={handleProfileClick}>
                  <AvatarFallback>
                    <UserRound className="h-3.5 w-3.5" />
                  </AvatarFallback>
                </Avatar>
              </HoverCardTrigger>
              <HoverCardContent className="w-64 p-4">
                <div className="flex flex-col space-y-1">
                  <h4 className="text-sm font-semibold">{studentData.name}</h4>
                  <p className="text-sm text-gray-500">VTU ID: {studentData.vtuId}</p>
                  <p className="text-sm text-gray-500">{studentData.college}</p>
                </div>
              </HoverCardContent>
            </HoverCard>
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
