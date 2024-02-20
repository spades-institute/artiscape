import { PortfolioItem } from '@/components/reuseable';
import Link from 'next/link';

// Dummy data for portfolio items
export const portfolioItems = [
  {
    id: 1,
    title: 'Architecture Project 1',
    category: 'Architecture',
    imageUrl: '/images/portfolio/architecture1.jpg',
  },
  {
    id: 2,
    title: 'Photography Series 1',
    category: 'Photography',
    imageUrl: '/images/portfolio/photography1.jpg',
  },
  {
    id: 3,
    title: 'Makeup Artistry Showcase 1',
    category: 'Makeup Artistry',
    imageUrl: '/images/portfolio/makeup1.jpg',
  },
  // Add more portfolio items as needed
];

export default function PortfolioPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            {/* Portfolio Grid */}
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {portfolioItems.map((item, index) => (
                    <PortfolioItem
                        key={index}
                        item={item}
                    />
                ))}
            </section>
            {/* Filter Options */}
            {/* Individual Project Pages */}
            {/* Navigation or Breadcrumbs */}
        </main>
    );
};
