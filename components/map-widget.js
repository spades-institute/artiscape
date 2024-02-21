'use client'

import { useRef } from "react";
import { useIsVisible } from "./useIsVisible";


export default function MapWidget () {
  const ref = useRef();
  const isVisible1 = useIsVisible(ref);

  return (
    <div ref={ref} className={`bg-gray-200 rounded-md overflow-hidden shadow-md transition-opacity ease-linear duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"} `}>
      {/* Replace the src with your map provider's embed URL */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.3088974676593!2d2.294694815320139!3d48.85837338799032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f0222c7a721%3A0x5412f3421e8f5e0a!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1633549861063!5m2!1sen!2sfr"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="async"
        title="Google Map"
      />
    </div>
  );
};
  