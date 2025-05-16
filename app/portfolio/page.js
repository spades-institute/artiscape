import { PortfolioItem } from '@/components/reuseable';
import { Skeleton } from '@mui/material';

// Dummy data for portfolio items
export const portfolioItems = [
  {
    id: 1,
    title: 'African Queen 👸',
    category: 'Photography',
    imageUrl: [
      { url: '/african_queen.jpg', description: 'Image Description 1' },
      { url: '/african_queen.jpg', description: 'Image Description 2' },
      { url: '/african_queen.jpg', description: 'Image Description 3' },
      { url: '/african_queen.jpg', description: 'Image Description 4' },
    ],
  },
  {
    id: 2,
    title: 'PhotoArt',
    category: 'Photography Art',
    imageUrl: [
      { url: '/photography-2.jpg', description: 'Image Description 1' },
      { url: '/photography-1.jpg', description: 'Image Description 2' },
      { url: '/photography-2.jpg', description: 'Image Description 3' },
      { url: '/photography-1.jpg', description: 'Image Description 4' },
    ],
  },
  {
    id: 3,
    title: 'Time Passes Irrevobaly',
    category: 'Makeup Artistry',
    imageUrl: [
      { url: '/time.jpg', description: 'Image Description 1' },
      { url: '/time.jpg', description: 'Image Description 2' },
      { url: '/time.jpg', description: 'Image Description 3' },
      { url: '/time.jpg', description: 'Image Description 4' },
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
                {portfolioItems
                ?
                portfolioItems.map((item, index) => (
                    <PortfolioItem
                        key={index}
                        item={item}
                    />
                ))
                :
                <Skeleton>
                  <PortfolioItem />
                </Skeleton>}
            </section>
            {/* Filter Options */}
            {/* Individual Project Pages */}
            {/* Navigation or Breadcrumbs */}
        </main>
    );
};
