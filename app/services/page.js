import { ServiceItemCard } from "@/components/reuseable";

// Dummy data for services
const services = [
    {
      id: 1,
      title: 'Architectural Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum urna at consectetur tincidunt. Cras euismod sollicitudin elit non dapibus.',
      price: '$1000 - $5000',
      duration: '1-3 months',
    },
    {
      id: 2,
      title: 'Photography Sessions',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      price: '$100 - $500',
      duration: '1-2 hours',
    },
    {
      id: 3,
      title: 'Makeup Services',
      description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
      price: '$50 - $200',
      duration: '30 minutes - 2 hours',
    },
    // Add more services as needed
  ];
  
  
export default function ServicesPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Our Services</h1>
            {/* List of Services */}
            {services.map((service, index) => (
                <ServiceItemCard
                    key={index}
                    serviceItem={service}
                />
            ))}
            {/* Testimonials */}
            {/* Call-to-Action */}
            <div className="mt-8 text-center">
                <a href="#" className="bg-indigo-600 text-white py-2 px-6 rounded-md text-lg hover:bg-indigo-700">Inquire Now</a>
            </div>
        </main>
    );
};
  