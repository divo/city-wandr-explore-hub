
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-peach-100">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-[0.02]" />
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-peach-200 text-teal-900 mb-6">
            <MapPin size={16} className="text-terracotta-500" />
            <span className="text-sm font-medium">Your Personal Travel Companion</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-semibold text-teal-900 tracking-tight">
            Explore the World's
            <br />
            Hidden Gems
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg text-teal-900/80 mt-6">
            Discover unique destinations, create unforgettable memories, and travel like a local with our curated city guides.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button size="lg" className="bg-terracotta-500 hover:bg-terracotta-500/90 text-white">
              Start Exploring
            </Button>
            <Button size="lg" variant="outline" className="border-teal-900/20 hover:bg-peach-200">
              View Destinations
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
