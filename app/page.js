'use client';

import YouTubeVideoSlider from '@/components/ContentSlider';
import Header from '@/components/Header';
import { ContactInfo, FeaturedWorkCard, featuredWork } from '@/components/reuseable';
import { useIsVisible } from '@/components/useIsVisible';
import { Skeleton } from '@mui/material';
import Link from 'next/link';
import { useRef } from 'react';
import { FaGreaterThan } from 'react-icons/fa6';

const videoLinks =[
  'DoTmwO2VpCQ', // Rick Astley - Never Gonna Give You Up
  'cMyJZEJknQw', // PSY - Gangnam Style
  '5Dny7rV4OtM', // Mark Ronson - Uptown Funk ft. Bruno Mars
  '98ksXFFdPB8', // Sia - Chandelier
  'DoTmwO2VpCQ', // Rick Astley - Never Gonna Give You Up
  'cMyJZEJknQw', // PSY - Gangnam Style
  '5Dny7rV4OtM', // Mark Ronson - Uptown Funk ft. Bruno Mars
  '98ksXFFdPB8', // Sia - Chandelier
];

export default function Home() {
  const ref = useRef();
  const isVisible1 = useIsVisible(ref);

  const featuredWorkData = featuredWork;

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <Header />

      {/* Featured works */}
      <section className="my-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Featured Work</h2>
        <section className="my-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredWorkData
          ? featuredWorkData.map((data, index) => (
            <FeaturedWorkCard key={index} featuredWork={data} />
          ))
          :
          <Skeleton sx={{
            backgroundColor: 'white'
          }}>
            <FeaturedWorkCard />
          </Skeleton>}
        </section>
      </section>

      {/* About Section */}
      <section ref={ref} className={`my-12 ${isVisible1 ? "opacity-100" : "opacity-0"} `}>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">About US</h2>
        <p className={`text-lg text-gray-600 mb-8 dark:text-gray-400 transition-opacity ease-linear duration-700 `}>
          SiblingsPhotography studios seeks to provide services to individuals, corporate organizations, couples, and families that emphasizes and enhances the quality of their relationships through photographic imaging. Our mission is to create lasting memories with fun, creativity and nativity in mind and is also determined to handle each and every client in a family like manner.
        </p>
        <Link href="/about" className="flex items-center text-indigo-600 gap-2 rounded-md hover:text-white dark:hover:text-gray-600">Learn more <FaGreaterThan className='text-xs mt-0.5' /> </Link>
      </section>
      
      <ContactInfo />
      
      <section ref={ref} className={`my-12 transition-opacity ease-linear duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"} `}>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 dark:text-white">My Videos</h2>
        <YouTubeVideoSlider videoLinks={videoLinks} />
      </section>
    </main>
  );
};