import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // This would connect to a backend API or email service
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-b from-peach-50 to-cream-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600">
            We'd love to hear from you! Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="font-serif text-2xl font-semibold text-gray-800 mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clementine-400 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clementine-400 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clementine-400 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clementine-400 focus:border-transparent"
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-cream-100 rounded-lg p-6">
              <h3 className="font-serif text-xl font-semibold text-gray-800 mb-4">
                Contact Information
              </h3>
              <div className="space-y-3 text-gray-600">
                <p>
                  <span className="font-semibold">Email:</span><br />
                  hello@clementinecrafts.com
                </p>
                <p>
                  <span className="font-semibold">Response Time:</span><br />
                  We typically respond within 24-48 hours
                </p>
              </div>
            </div>

            <div className="bg-peach-50 rounded-lg p-6">
              <h3 className="font-serif text-xl font-semibold text-gray-800 mb-4">
                Follow Us
              </h3>
              <p className="text-gray-600 mb-4">
                Stay connected for new product launches, behind-the-scenes peeks, and special offers.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-clementine-500 hover:text-clementine-600 transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-clementine-500 hover:text-clementine-600 transition-colors"
                >
                  Pinterest
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-serif text-xl font-semibold text-gray-800 mb-4">
                Custom Orders
              </h3>
              <p className="text-gray-600">
                Interested in a custom piece? We'd love to work with you! Send us a message
                with your ideas and we'll get back to you with details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
