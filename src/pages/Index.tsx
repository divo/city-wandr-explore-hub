
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import NewsletterSection from "@/components/NewsletterSection";
import PhonePreview from "@/components/PhonePreview";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <div className="relative">
        {/* Extended hero background section */}
        <div className="relative">
          <div 
            className="w-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/paris.jpg')",
              height: "100vh", // Set initial height to viewport height
              paddingBottom: "33.33%", // Add 1/3 extra height
            }}
          >
            <div className="absolute inset-0 bg-black/40" /> {/* Overlay for better text readability */}
          </div>
          <div className="absolute inset-0 flex flex-col">
            <HeroSection />
            <PhonePreview />
          </div>
        </div>
        <FeaturesGrid />
        <NewsletterSection />
      </div>
    </motion.div>
  );
};

export default Index;
