"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// Replace with your Mapbox access token
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

interface MapComponentProps {
  className?: string;
}

const MapComponent = ({ className = "" }: MapComponentProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [38.7593536, 9.0353134], // Exact coordinates from Google Maps
      zoom: 14, // Increased zoom for better detail of the building
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Add marker with popup
    const marker = new mapboxgl.Marker({
      color: "#FF6B00", // Orange color to match your theme
    })
      .setLngLat([38.7593536, 9.0353134])
      .addTo(map.current);

    // Add popup to marker
    const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
        <div class="p-2">
          <h3 class="font-semibold text-[#1F3758]">The i-Capital Africa Institute</h3>
          <p class="text-sm text-gray-600">#604, Arada Sub-City</p>
          <p class="text-sm text-gray-600">Arat-Killo, Addis Ababa</p>
          <p class="text-xs text-gray-500 mt-1">Plus Code: 2QP5+4P</p>
        </div>
      `);

    marker.setPopup(popup);

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div
      ref={mapContainer}
      className={`h-full w-full rounded-lg ${className}`}
    />
  );
};

export default MapComponent;
