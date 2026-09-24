"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet map sizing issue on initial load
function MapResizer() {
  const map = useMap();
  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 250);
  }, [map]);
  return null;
}

// Fix missing marker icons in leaflet
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function MapComponent({ 
  center 
}: { 
  center: [number, number] 
}) {
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative z-0">
      <MapContainer 
        center={center} 
        zoom={15} 
        scrollWheelZoom={true} 
        style={{ height: "100%", width: "100%", zIndex: 0 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="map-tiles"
        />
        <MapResizer />
        
        {/* Mock Study Spot Pins */}
        <Marker position={[40.7128, -74.0060]} icon={icon}>
          <Popup className="custom-popup">
            <strong>Main Library - Quiet Floor</strong><br/>
            Rating: 4.8 / 5
          </Popup>
        </Marker>
        
        <Marker position={[40.7140, -74.0040]} icon={icon}>
          <Popup>
            <strong>Student Center Cafe</strong><br/>
            Rating: 4.2 / 5
          </Popup>
        </Marker>

      </MapContainer>
      
      {/* Dark mode filter for the map tiles */}
      <style jsx global>{`
        .map-tiles {
          filter: invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%);
        }
        .leaflet-container {
          background: #000;
        }
      `}</style>
    </div>
  );
}
