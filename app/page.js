'use client'

import { CallToActionButton, FeaturedWorkCard, SocialMediaLinks, featuredWork } from '@/components/reuseable';
import { useIsVisible } from '@/components/useIsVisible';
import { Skeleton } from '@mui/material';
import Link from 'next/link';
import { useRef } from 'react';
import { FaGreaterThan } from 'react-icons/fa6';

export default function Home() {
  const ref = useRef();
  const isVisible1 = useIsVisible(ref);

  const featuredWorkData = featuredWork;

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-indigo-600 mb-4">Welcome to Artiscape</h1>
        <p className="text-lg text-gray-600 dark:text-white mb-8">Showcasing creativity at its finest</p>
        <CallToActionButton link={'/portfolio'} title={"Explore Portfolio"} />
      </header>

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
      <section className="my-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
        <p ref={ref} className={`text-lg text-gray-600 mb-8 dark:text-gray-400 transition-opacity ease-linear duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"} `}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor vel
          justo vestibulum, vel suscipit ex varius. Sed id pharetra lectus. Mauris vitae lorem
          vestibulum, mattis est at, posuere sapien.
        </p>
        <Link href="/about" className="flex items-center text-indigo-600 gap-2 rounded-md hover:text-white dark:hover:text-gray-600">Learn more <FaGreaterThan className='text-xs mt-0.5' /> </Link>
      </section>
      
      <section ref={ref} className={`my-12 transition-opacity ease-linear duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"} `}>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 dark:text-white">Contact Me</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">Feel free to get in touch:</p>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">Email: example@example.com</p>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">Phone: +1234567890</p>
        <div className="flex justify-center">
          <SocialMediaLinks />
        </div>
      </section>
    </main>
  );
};