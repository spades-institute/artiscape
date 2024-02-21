import { PortfolioItem } from '@/components/reuseable';

// Dummy data for portfolio items
export const portfolioItems = [
  {
    id: 1,
    title: 'Architecture Project 1',
    category: 'Architecture',
    imageUrl: [
      { url: '/architecture.jpg', description: 'Image Description 1' },
      { url: '/architecture.jpg', description: 'Image Description 2' },
      { url: '/architecture.jpg', description: 'Image Description 3' },
      { url: '/architecture.jpg', description: 'Image Description 4' },
    ],
  },
  {
    id: 2,
    title: 'Photography Series 1',
    category: 'Photography',
    imageUrl: [
      { url: '/photography-2.jpg', description: 'Image Description 1' },
      { url: '/photography-1.jpg', description: 'Image Description 2' },
      { url: '/photography-2.jpg', description: 'Image Description 3' },
      { url: '/photography-1.jpg', description: 'Image Description 4' },
    ],
  },
  {
    id: 3,
    title: 'Makeup Artistry Showcase 1',
    category: 'Makeup Artistry',
    imageUrl: [
      { url: '/make-up.jpg', description: 'Image Description 1' },
      { url: '/make-up.jpg', description: 'Image Description 2' },
      { url: '/make-up.jpg', description: 'Image Description 3' },
      { url: '/make-up.jpg', description: 'Image Description 4' },
    ],
  },
  // Add more portfolio items as needed
];

export default function PortfolioPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Portfolio</h1>
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
