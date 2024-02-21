'use client'

import { useRef, useState } from 'react';
import { useIsVisible } from './useIsVisible';

const BookingForm = () => {
  const ref = useRef();
  const isVisible1 = useIsVisible(ref);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend or external service)
    console.log(formData);
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      date: '',
      message: ''
    });
  };

    return (
        <form ref={ref} onSubmit={handleSubmit} className={`max-w-lg mx-auto transition-opacity ease-linear duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"} `}>
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-400 font-medium mb-1">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-2 py-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-400 font-medium mb-1">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-2 py-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="date" className="block text-gray-700 dark:text-gray-400 font-medium mb-1">Date</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-2 py-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-400 font-medium mb-1">Additional Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                    className="w-full px-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                ></textarea>
            </div>
            <button type="submit" className="bg-indigo-600 text-white py-2 px-6 rounded-md text-lg hover:bg-indigo-700">Book Now</button>
        </form>
    );
};

export default BookingForm;
