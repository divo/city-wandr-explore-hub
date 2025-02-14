import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-peach-100">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-display font-semibold text-teal-900 mb-8 text-center">Contact Us</h1>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <div className="space-y-4 text-center">
            <p className="text-teal-900/80">
              Have questions or feedback? We'd love to hear from you.
            </p>
            <div className="text-teal-900/80">
              <p>Email: support@citywandr.com</p>
            </div>
          </div>
          {/* Form commented out for later implementation
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-teal-900 mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-peach-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-teal-900 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-peach-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-teal-900 mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-peach-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Your message"
              />
            </div>
            <Button className="w-full bg-teal-900 hover:bg-teal-800 text-white">
              Send Message
            </Button>
          </form>
          */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact; 