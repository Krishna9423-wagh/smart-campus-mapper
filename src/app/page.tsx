"use client";

import dynamic from "next/dynamic";
import { Search, Map as MapIcon, Heart, LayoutGrid, User, LogOut, ChevronDown, Plus, Minus, Home } from "lucide-react";
import Hero3D from "@/components/Hero3D";

// Dynamically import the map component with no SSR
const MapComponent = dynamic(
  () => import("@/components/MapComponent"),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-full border border-white/10 rounded-2xl relative overflow-hidden bg-[#111116] flex items-center justify-center">
        <div className="animate-pulse text-purple-500 font-bold tracking-widest uppercase">
          Loading Interactive Map...
        </div>
      </div>
    )
  }
);

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-[#111116] text-white font-sans overflow-hidden selection:bg-purple-500/30">
      
      {/* Very Left Navigation Sidebar */}
      <nav className="w-20 bg-[#15151c] border-r border-white/5 flex flex-col items-center py-6 gap-8 z-20">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center font-bold text-xl mb-4 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
          C
        </div>
        
        <div className="flex flex-col gap-8 w-full">
          <button className="flex flex-col items-center gap-1 text-purple-400 relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-purple-500 rounded-r-full"></div>
            <MapIcon className="w-6 h-6" />
            <span className="text-[10px] uppercase tracking-wider font-semibold">Map</span>
          </button>
          
          <button className="flex flex-col items-center gap-1 text-gray-500 hover:text-white transition-colors">
            <Heart className="w-6 h-6" />
            <span className="text-[10px] uppercase tracking-wider">Favorites</span>
          </button>
          
          <button className="flex flex-col items-center gap-1 text-gray-500 hover:text-white transition-colors">
            <LayoutGrid className="w-6 h-6" />
            <span className="text-[10px] uppercase tracking-wider">Categories</span>
          </button>
          
          <button className="flex flex-col items-center gap-1 text-gray-500 hover:text-white transition-colors">
            <User className="w-6 h-6" />
            <span className="text-[10px] uppercase tracking-wider">Profile</span>
          </button>
        </div>
        
        <div className="mt-auto">
          <button className="text-gray-500 hover:text-white transition-colors p-3 rounded-xl hover:bg-white/5">
            <LogOut className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Left Content Panel (Glassmorphic) */}
      <div className="w-[380px] h-full flex flex-col bg-[#1c1c24]/80 backdrop-blur-xl border-r border-white/5 relative z-10 p-6 overflow-y-auto custom-scrollbar">
        
        <div className="text-center mb-6">
          <h2 className="text-gray-400 text-xs font-bold tracking-[0.2em] uppercase mb-2">Campus Findr</h2>
          <h1 className="text-2xl font-black uppercase tracking-wide leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
            Discover The Ideal<br/>Study Haven
          </h1>
        </div>
        
        {/* 3D Crystal Container */}
        <div className="w-full h-64 relative rounded-2xl overflow-hidden mb-8 border border-white/5 bg-black/20 shadow-inner">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1c1c24] z-10 pointer-events-none"></div>
          <Hero3D />
        </div>
        
        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
          <input 
            type="text" 
            placeholder="Find Study Spots..." 
            className="w-full bg-black/40 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-purple-500/50 transition-colors placeholder:text-gray-600"
          />
        </div>
        
        {/* Filters */}
        <div className="flex flex-col gap-6 mb-8 flex-1">
          <div>
            <h3 className="text-sm text-gray-400 mb-3 font-semibold">Vibe</h3>
            <div className="flex gap-2">
              <button className="px-4 py-1.5 rounded-full bg-white/10 text-sm border border-white/20 text-white">quiet</button>
              <button className="px-4 py-1.5 rounded-full bg-black/40 text-sm border border-white/5 text-gray-400 hover:bg-white/5">social</button>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center cursor-pointer group">
              <h3 className="text-sm text-gray-400 font-semibold group-hover:text-gray-300">Ambiance</h3>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>
          
          <div>
            <h3 className="text-sm text-gray-400 mb-3 font-semibold">Type</h3>
            <div className="flex gap-2">
              <button className="px-4 py-1.5 rounded-full bg-white/10 text-sm border border-white/20 text-white">library</button>
              <button className="px-4 py-1.5 rounded-full bg-black/40 text-sm border border-white/5 text-gray-400 hover:bg-white/5">cafe</button>
              <button className="px-4 py-1.5 rounded-full bg-black/40 text-sm border border-white/5 text-gray-400 hover:bg-white/5">lounge</button>
            </div>
          </div>
        </div>
        
        {/* Bottom Profile */}
        <div className="mt-auto pt-4 border-t border-white/5">
          <div className="relative mb-4">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full bg-black/40 border border-white/5 rounded-xl py-2 pl-9 pr-4 text-xs focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-[2px]">
              <div className="w-full h-full rounded-full bg-[#1c1c24] flex items-center justify-center overflow-hidden">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Avatar" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <div className="font-bold text-sm">Alex R.</div>
              <div className="text-xs text-green-400 flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                Online
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Main Area (Map & Featured Spots) */}
      <div className="flex-1 flex flex-col p-6 bg-gradient-to-br from-[#111116] to-[#0a0a0d] relative gap-6">
        
        {/* Top Header Label */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
          <div className="bg-black/60 backdrop-blur-md border border-white/10 px-6 py-2 rounded-full text-xs font-semibold text-gray-300 shadow-2xl">
            Interactive Campus Map (Fall Term)
          </div>
        </div>

        {/* Interactive Map Area */}
        <div className="flex-1 w-full relative rounded-3xl overflow-hidden border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <MapComponent center={[40.7128, -74.0060]} />
          
          {/* Map Legends Overlay */}
          <div className="absolute bottom-6 left-6 z-[400] bg-[#1c1c24]/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl w-48 shadow-2xl">
            <h4 className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider">Map Legend</h4>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.6)] border-2 border-white/20"></div>
              <span className="text-sm font-medium">Quiet</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)] border-2 border-white/20"></div>
              <span className="text-sm font-medium">Vibrant</span>
            </div>
          </div>
          
          <div className="absolute bottom-6 right-6 z-[400] bg-[#1c1c24]/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl w-48 shadow-2xl flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider">Controls</h4>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.6)]"></div>
                <span className="text-sm font-medium">Quiet</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]"></div>
                <span className="text-sm font-medium">Vibrant</span>
              </div>
            </div>
            {/* Zoom Controls overlay mockup */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
              <button className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 border border-white/5"><Plus className="w-4 h-4"/></button>
              <button className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 border border-white/5"><Minus className="w-4 h-4"/></button>
            </div>
          </div>
        </div>

        {/* Featured Spots Cards */}
        <div className="h-48 w-full bg-[#1c1c24]/60 backdrop-blur-xl border border-white/5 rounded-3xl p-6 shadow-2xl flex flex-col">
          <h3 className="text-lg font-bold mb-4">Featured Spots</h3>
          
          <div className="flex gap-4 flex-1">
            <div className="flex-1 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-4 flex flex-col justify-between hover:border-purple-500/50 transition-colors cursor-pointer group">
              <div className="flex gap-3 items-center">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Home className="w-5 h-5 text-gray-300" />
                </div>
                <div>
                  <h4 className="font-bold">Central Library</h4>
                  <div className="flex gap-1 mt-1">
                    {[1,2,3,4].map(i => <div key={i} className="w-1 h-3 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: `${i*0.2}s`}}></div>)}
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center text-xs font-semibold">
                <span className="text-gray-400">Quiet • <span className="text-blue-400">98% Available</span></span>
                <span className="text-yellow-500 flex items-center gap-1">4.9 ★</span>
              </div>
            </div>
            
            <div className="flex-1 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-4 flex flex-col justify-between hover:border-blue-500/50 transition-colors cursor-pointer group">
              <div className="flex gap-3 items-center">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <User className="w-5 h-5 text-gray-300" />
                </div>
                <div>
                  <h4 className="font-bold">Law Grounds Cafe</h4>
                  <div className="flex gap-1 mt-1">
                    {[1,2,3,4].map(i => <div key={i} className="w-1 h-3 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: `${i*0.2}s`}}></div>)}
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center text-xs font-semibold">
                <span className="text-gray-400">Vibrant • <span className="text-blue-400">85% Available</span></span>
                <span className="text-yellow-500 flex items-center gap-1">4.7 ★</span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
  );
}
