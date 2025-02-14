import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-peach-200 text-teal-900">
            <MapPin size={16} className="text-terracotta-500" />
            <span className="text-sm font-medium">Your Personal Travel Companion</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-semibold text-teal-900 tracking-tight">
            Explore the World's
            <br />
            Best Cities
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg text-teal-900/80">
            Discover unique destinations, create unforgettable memories, and travel like a local with our curated city guides.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button
              size="lg"
              className="bg-black hover:bg-black/90 text-white inline-flex items-center gap-2 p-0 h-[44px]"
              asChild
            >
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                <img src="/app-store-badge.svg" alt="Download on App Store" className="h-full" />
              </a>
            </Button>
            <div className="flex flex-col items-center">
              <Button
                size="lg"
                className="bg-black/50 hover:bg-black/65 text-white inline-flex items-center gap-2 p-0 h-[44px]"
                disabled
                asChild
              >
                <a href="#" className="cursor-not-allowed">
                  <img src="/play_store.png" alt="Get it on Google Play" className="h-full opacity-50" />
                </a>
              </Button>
              <span className="text-sm text-teal-900 mt-1">Coming Soon</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
