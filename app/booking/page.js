
import BookingForm from "@/components/booking-form";
import MapWidget from "@/components/map-widget";
import { ContactInfo, SocialMediaLinks } from "@/components/reuseable";


export default function ContactPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <section className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Booking Form</h1>
                {/* Embedded contact form component goes here */}
                <BookingForm />
            </section>
            <ContactInfo />
            <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Location and Hours</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">1234 Street Name, City, Country</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Monday - Friday: 9:00 AM - 5:00 PM</p>
                {/* Map integration component goes here */}
                <MapWidget />
            </section>
        </main>
    );
  };
  