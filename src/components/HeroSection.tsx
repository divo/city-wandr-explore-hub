
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white mb-6 backdrop-blur-sm">
            <MapPin size={16} className="text-rust-500" />
            <span className="text-sm font-medium">Your Personal Travel Companion</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-semibold text-white tracking-tight">
            Explore the World's
            <br />
            Hidden Gems
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg text-white/90 mt-6">
            Discover unique destinations, create unforgettable memories, and travel like a local with our curated city guides.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button size="lg" className="bg-rust-500 hover:bg-rust-500/90 text-white">
              Start Exploring
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white">
              View Destinations
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
