"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { Search, Map as MapIcon, Heart, LayoutGrid, User, LogOut, ChevronDown, Plus, Minus, Home, Settings, Bell, BookOpen, Coffee } from "lucide-react";
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
  const [activeTab, setActiveTab] = useState("map");
  const [vibe, setVibe] = useState("quiet");
  const [type, setType] = useState("library");

  return (
    <div className="flex h-screen bg-[#111116] text-white font-sans overflow-hidden selection:bg-purple-500/30">
      
      {/* Very Left Navigation Sidebar */}
      <nav className="w-20 bg-[#15151c] border-r border-white/5 flex flex-col items-center py-6 gap-8 z-20">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center font-bold text-xl mb-4 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
          C
        </div>
        
        <div className="flex flex-col gap-8 w-full">
          <button onClick={() => setActiveTab("map")} className={`flex flex-col items-center gap-1 relative transition-colors ${activeTab === 'map' ? 'text-purple-400' : 'text-gray-500 hover:text-white'}`}>
            {activeTab === 'map' && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-purple-500 rounded-r-full"></div>}
            <MapIcon className="w-6 h-6" />
            <span className="text-[10px] uppercase tracking-wider font-semibold">Map</span>
          </button>
          
          <button onClick={() => setActiveTab("favorites")} className={`flex flex-col items-center gap-1 relative transition-colors ${activeTab === 'favorites' ? 'text-purple-400' : 'text-gray-500 hover:text-white'}`}>
            {activeTab === 'favorites' && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-purple-500 rounded-r-full"></div>}
            <Heart className="w-6 h-6" />
            <span className="text-[10px] uppercase tracking-wider">Favorites</span>
          </button>
          
          <button onClick={() => setActiveTab("categories")} className={`flex flex-col items-center gap-1 relative transition-colors ${activeTab === 'categories' ? 'text-purple-400' : 'text-gray-500 hover:text-white'}`}>
            {activeTab === 'categories' && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-purple-500 rounded-r-full"></div>}
            <LayoutGrid className="w-6 h-6" />
            <span className="text-[10px] uppercase tracking-wider">Categories</span>
          </button>
          
          <button onClick={() => setActiveTab("profile")} className={`flex flex-col items-center gap-1 relative transition-colors ${activeTab === 'profile' ? 'text-purple-400' : 'text-gray-500 hover:text-white'}`}>
            {activeTab === 'profile' && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-purple-500 rounded-r-full"></div>}
            <User className="w-6 h-6" />
            <span className="text-[10px] uppercase tracking-wider">Profile</span>
          </button>
        </div>
        
        <div className="mt-auto">
          <button className="text-gray-500 hover:text-white transition-colors p-3 rounded-xl hover:bg-white/5" onClick={() => alert("Logging out...")}>
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
              <button onClick={() => setVibe("quiet")} className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${vibe === 'quiet' ? 'bg-white/10 border-white/20 text-white' : 'bg-black/40 border-white/5 text-gray-400 hover:bg-white/5'}`}>quiet</button>
              <button onClick={() => setVibe("social")} className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${vibe === 'social' ? 'bg-white/10 border-white/20 text-white' : 'bg-black/40 border-white/5 text-gray-400 hover:bg-white/5'}`}>social</button>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center cursor-pointer group hover:bg-white/5 p-2 rounded-lg -ml-2 transition-colors">
              <h3 className="text-sm text-gray-400 font-semibold group-hover:text-gray-300">Ambiance</h3>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>
          
          <div>
            <h3 className="text-sm text-gray-400 mb-3 font-semibold">Type</h3>
            <div className="flex gap-2">
              <button onClick={() => setType("library")} className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${type === 'library' ? 'bg-white/10 border-white/20 text-white' : 'bg-black/40 border-white/5 text-gray-400 hover:bg-white/5'}`}>library</button>
              <button onClick={() => setType("cafe")} className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${type === 'cafe' ? 'bg-white/10 border-white/20 text-white' : 'bg-black/40 border-white/5 text-gray-400 hover:bg-white/5'}`}>cafe</button>
              <button onClick={() => setType("lounge")} className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${type === 'lounge' ? 'bg-white/10 border-white/20 text-white' : 'bg-black/40 border-white/5 text-gray-400 hover:bg-white/5'}`}>lounge</button>
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
          <button onClick={() => setActiveTab("profile")} className="w-full flex items-center gap-3 hover:bg-white/5 p-2 rounded-xl transition-colors text-left">
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
          </button>
        </div>
      </div>

      {/* Right Main Area */}
      <div className="flex-1 flex flex-col p-6 bg-gradient-to-br from-[#111116] to-[#0a0a0d] relative gap-6 overflow-y-auto">
        
        {activeTab === "map" && (
          <>
            {/* Top Header Label */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
              <div className="bg-black/60 backdrop-blur-md border border-white/10 px-6 py-2 rounded-full text-xs font-semibold text-gray-300 shadow-2xl">
                Interactive Campus Map (Fall Term)
              </div>
            </div>

            {/* Interactive Map Area */}
            <div className="flex-1 w-full min-h-[400px] relative rounded-3xl overflow-hidden border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
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
            <div className="h-48 shrink-0 w-full bg-[#1c1c24]/60 backdrop-blur-xl border border-white/5 rounded-3xl p-6 shadow-2xl flex flex-col">
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
          </>
        )}

        {activeTab === "favorites" && (
          <div className="flex-1 bg-[#1c1c24]/60 rounded-3xl p-8 border border-white/5 flex flex-col">
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-3"><Heart className="text-pink-500" /> Your Favorite Spots</h2>
            <p className="text-gray-400 mb-8">Quickly access the places you love studying at the most.</p>
            <div className="grid grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors cursor-pointer flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{i % 2 === 0 ? 'Engineering Quad Lounge' : 'Main Library Quiet Zone'}</h3>
                    <div className="flex gap-2">
                      <span className="text-xs px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full">Fast Wi-Fi</span>
                      <span className="text-xs px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full">Outlets Available</span>
                    </div>
                  </div>
                  <button className="text-pink-500"><Heart className="w-6 h-6 fill-current" /></button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "categories" && (
          <div className="flex-1 bg-[#1c1c24]/60 rounded-3xl p-8 border border-white/5 flex flex-col">
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-3"><LayoutGrid className="text-blue-500" /> Browse by Category</h2>
            <p className="text-gray-400 mb-8">Find exactly what you need based on the environment type.</p>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:scale-105 transition-transform">
                <BookOpen className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold">Libraries</h3>
                <p className="text-sm text-gray-400 mt-2">Maximum focus and silence.</p>
              </div>
              <div className="bg-gradient-to-br from-orange-500/20 to-pink-500/20 border border-orange-500/30 rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:scale-105 transition-transform">
                <Coffee className="w-12 h-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-bold">Cafes & Dining</h3>
                <p className="text-sm text-gray-400 mt-2">Ambient noise and caffeine.</p>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 border border-green-500/30 rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:scale-105 transition-transform">
                <Home className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold">Student Lounges</h3>
                <p className="text-sm text-gray-400 mt-2">Comfortable group studying.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "profile" && (
          <div className="flex-1 bg-[#1c1c24]/60 rounded-3xl p-8 border border-white/5 flex flex-col">
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-3"><User className="text-indigo-500" /> Your Profile</h2>
            <p className="text-gray-400 mb-8">Manage your account settings and preferences.</p>
            <div className="flex gap-8">
              <div className="w-1/3 flex flex-col items-center bg-white/5 rounded-2xl p-8 border border-white/10">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-1 mb-4">
                  <div className="w-full h-full rounded-full bg-[#1c1c24] overflow-hidden">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold">Alex R.</h3>
                <p className="text-gray-400 mb-6">Computer Science Major</p>
                <button className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-xl font-bold transition-colors">Edit Profile</button>
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Settings className="text-gray-400" />
                    <div>
                      <h4 className="font-bold text-lg">Account Settings</h4>
                      <p className="text-gray-400 text-sm">Update your email, password, and security</p>
                    </div>
                  </div>
                  <ChevronDown className="text-gray-500 -rotate-90" />
                </div>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Bell className="text-gray-400" />
                    <div>
                      <h4 className="font-bold text-lg">Notifications</h4>
                      <p className="text-gray-400 text-sm">Manage push and email alerts for crowded spots</p>
                    </div>
                  </div>
                  <ChevronDown className="text-gray-500 -rotate-90" />
                </div>
              </div>
            </div>
          </div>
        )}
        
      </div>
      
    </div>
  );
}
