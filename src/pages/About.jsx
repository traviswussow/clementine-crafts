export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-b from-peach-50 to-cream-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            Our Story
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="font-serif text-3xl font-semibold text-gray-800 mb-4">
              Handcrafted with Purpose
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Welcome to Clementine Crafts! Every piece we create is thoughtfully designed
              and carefully handmade with attention to detail and quality craftsmanship.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our journey began with a simple belief: everyday items should be beautiful,
              functional, and made to last. Each tote bag and accessory is crafted from
              premium materials, combining traditional techniques with contemporary design.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We're passionate about creating pieces that become part of your daily life—
              whether it's carrying your groceries, heading to the beach, or organizing
              your essentials. Thank you for supporting handmade craftsmanship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-cream-100 rounded-lg p-6">
              <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-3">
                Our Values
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>✦ Quality craftsmanship in every stitch</li>
                <li>✦ Sustainable and thoughtful material choices</li>
                <li>✦ Timeless designs for everyday use</li>
                <li>✦ Made with care, designed to last</li>
              </ul>
            </div>

            <div className="bg-peach-50 rounded-lg p-6">
              <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-3">
                The Process
              </h3>
              <p className="text-gray-600">
                Each item is handcrafted in small batches, ensuring attention to detail
                and consistent quality. From selecting materials to the final stitch,
                we take pride in creating pieces you'll love to use every day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
