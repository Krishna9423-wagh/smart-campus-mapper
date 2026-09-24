"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

// Dynamically import the map component with no SSR because Leaflet uses the window object
const MapComponent = dynamic(
  () => import("@/components/MapComponent"),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-full border border-white/10 rounded-2xl relative overflow-hidden bg-gradient-to-br from-[#1a1a24] to-[#0a0a14] opacity-50 flex items-center justify-center">
        <div className="animate-pulse text-white text-lg font-bold tracking-widest uppercase flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          Loading Map...
        </div>
      </div>
    )
  }
);

export default function MapPage() {
  const center: [number, number] = [40.7128, -74.0060]; // Defaulting to NYC for demo

  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col font-sans">
      <header className="flex items-center justify-between py-6 px-4">
        <h1 className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
          Campus Study Spots
        </h1>
        <button className="bg-white/10 hover:bg-white/20 transition px-6 py-2 rounded-full border border-white/20 backdrop-blur-md">
          + Add New Spot
        </button>
      </header>

      <div className="flex-1 flex flex-col md:flex-row gap-6 h-[calc(100vh-120px)] mt-4">
        {/* Sidebar */}
        <div className="w-full md:w-1/3 flex flex-col gap-4 overflow-y-auto pr-2 custom-scrollbar">
          {[
            { name: "Main Library - Quiet Floor", tags: ["Silent", "Fast Wi-Fi"], rating: 4.8 },
            { name: "Student Center Cafe", tags: ["Ambient Noise", "Food", "Outlets"], rating: 4.2 },
            { name: "Engineering Quad", tags: ["Crowded", "Average Wi-Fi"], rating: 3.5 }
          ].map((spot, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-5 rounded-2xl cursor-pointer hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold">{spot.name}</h3>
                <span className="bg-purple-500/20 text-purple-300 text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1">
                  ★ {spot.rating}
                </span>
              </div>
              <div className="flex gap-2 flex-wrap mt-3">
                {spot.tags.map(tag => (
                  <span className="text-xs bg-white/10 px-2 py-1 rounded text-gray-300" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Map Container */}
        <div className="flex-1 relative rounded-2xl overflow-hidden group">
          <MapComponent center={center} />
        </div>
      </div>
    </div>
  );
}
