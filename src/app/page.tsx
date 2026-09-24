import Hero3D from "@/components/Hero3D";
import { Search, MapPin, Wifi, Battery, VolumeX, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden font-sans text-white">
      {/* 3D Background */}
      <Hero3D />

      {/* Main Content */}
      <div className="z-10 w-full max-w-5xl px-6 py-20 flex flex-col items-center text-center mt-20">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
          <span className="text-sm font-medium tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Powered by AI & PostgreSQL
          </span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
          <span className="text-white">Campus</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400">
            Study Spot Finder
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl font-light">
          Discover your perfect focus zone based on noise levels, Wi-Fi speed, outlet availability, and real-time crowdedness.
        </p>
        
        {/* Search Bar UI Mockup */}
        <div className="w-full max-w-3xl relative mb-20 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative flex items-center bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl">
            <Search className="w-6 h-6 text-gray-400 ml-4 mr-2" />
            <input 
              type="text" 
              placeholder="Search for a building, library, or cafe..." 
              className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none p-3 text-lg"
            />
            <Link href="/map" className="bg-white text-black px-8 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors">
              Find Spots
            </Link>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {[
            { icon: <VolumeX className="w-8 h-8 text-purple-400" />, title: "Noise Level", desc: "Find pin-drop silence or ambient chatter." },
            { icon: <Wifi className="w-8 h-8 text-blue-400" />, title: "Wi-Fi Quality", desc: "Never drop a connection during a quiz." },
            { icon: <Battery className="w-8 h-8 text-green-400" />, title: "Outlets", desc: "Charge your devices without hunting." },
            { icon: <Users className="w-8 h-8 text-pink-400" />, title: "Crowdedness", desc: "Real-time updates on available seating." }
          ].map((feature, i) => (
            <Link href="/map" key={i} className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-colors duration-300 flex flex-col items-start text-left group cursor-pointer">
              <div className="bg-white/10 p-3 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <Link href="/map" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-white/50 hover:text-white transition-colors cursor-pointer">
        <span className="text-xs uppercase tracking-widest mb-2 font-semibold">Explore Map</span>
        <MapPin className="w-5 h-5" />
      </Link>
    </main>
  );
}
