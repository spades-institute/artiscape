'use client'

import { CallToActionButton, FeaturedWorkCard, SocialMediaLinks, featuredWork } from '@/components/reuseable';

export default function Home() {
  const featuredWorkData = featuredWork;

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Artiscape</h1>
        <p className="text-lg text-gray-600 mb-8">Showcasing creativity at its finest</p>
        <CallToActionButton />
      </section>
      <section className="my-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Featured Work</h2>
        <section className="my-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredWorkData.map((data, index) => (
            <FeaturedWorkCard key={index} featuredWork={data} />
          ))}
        </section>
      </section>
      <section className="my-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">About Me</h2>
        <p className="text-lg text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor vel
          justo vestibulum, vel suscipit ex varius. Sed id pharetra lectus. Mauris vitae lorem
          vestibulum, mattis est at, posuere sapien.
        </p>
        <CallToActionButton />
      </section>
      <section className="my-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Me</h2>
        <p className="text-lg text-gray-600 mb-4">Feel free to get in touch:</p>
        <p className="text-lg text-gray-600 mb-4">Email: example@example.com</p>
        <p className="text-lg text-gray-600 mb-4">Phone: +1234567890</p>
        <div className="flex justify-center">
          <SocialMediaLinks />
        </div>
      </section>
    </main>
  );
};