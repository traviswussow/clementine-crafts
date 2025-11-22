export default function FAQ() {
  const faqs = [
    {
      question: "How long does shipping take?",
      answer: "Most orders ship within 3-5 business days. Domestic shipping typically takes 5-7 business days, while international orders may take 2-3 weeks depending on location."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for unused items in original condition. Please contact us to initiate a return. Buyer is responsible for return shipping costs unless the item is defective."
    },
    {
      question: "Do you offer custom orders?",
      answer: "Yes! We love creating custom pieces. Contact us through our Contact page with your ideas, and we'll work with you to bring your vision to life. Custom orders typically take 2-4 weeks depending on complexity."
    },
    {
      question: "How do I care for my handmade items?",
      answer: "Most items can be spot cleaned with mild soap and water. For tote bags, we recommend hand washing in cold water and air drying. Avoid harsh detergents and bleach to preserve the quality and color."
    },
    {
      question: "Are your products environmentally friendly?",
      answer: "We prioritize sustainable practices whenever possible, using natural fibers and eco-friendly materials. Each item is made to last, reducing the need for frequent replacements."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes! We ship to most countries worldwide. International shipping rates are calculated at checkout based on your location."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-b from-peach-50 to-cream-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            FAQ & Policies
          </h1>
          <p className="text-lg text-gray-600">
            Everything you need to know about ordering, shipping, and care
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* FAQs */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl font-semibold text-gray-800 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-serif text-xl font-semibold text-gray-800 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Policies */}
        <div className="space-y-8">
          <div className="bg-cream-100 rounded-lg p-8">
            <h2 className="font-serif text-2xl font-semibold text-gray-800 mb-4">
              Shipping Policy
            </h2>
            <div className="text-gray-600 space-y-2">
              <p>• Orders are processed within 3-5 business days</p>
              <p>• You will receive a tracking number via email once your order ships</p>
              <p>• We are not responsible for delays caused by shipping carriers</p>
              <p>• International orders may be subject to customs fees (buyer's responsibility)</p>
            </div>
          </div>

          <div className="bg-peach-50 rounded-lg p-8">
            <h2 className="font-serif text-2xl font-semibold text-gray-800 mb-4">
              Return & Exchange Policy
            </h2>
            <div className="text-gray-600 space-y-2">
              <p>• Items must be returned within 30 days of delivery</p>
              <p>• Products must be unused and in original condition</p>
              <p>• Contact us before returning any items</p>
              <p>• Refunds will be processed within 5-7 business days of receiving returned items</p>
              <p>• Custom orders are final sale and cannot be returned</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="font-serif text-2xl font-semibold text-gray-800 mb-4">
              Care Instructions
            </h2>
            <div className="text-gray-600 space-y-2">
              <p><strong>Tote Bags:</strong> Hand wash in cold water with mild soap. Air dry flat. Avoid machine washing to preserve shape and quality.</p>
              <p><strong>Accessories:</strong> Spot clean with damp cloth as needed. Keep away from excessive moisture.</p>
              <p><strong>Leather Items:</strong> Treat with leather conditioner periodically. Avoid prolonged exposure to water.</p>
              <p><strong>Storage:</strong> Store in a cool, dry place when not in use.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
