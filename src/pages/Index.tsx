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
      className="min-h-screen bg-peach-100"
    >
      <div className="flex flex-col">
        <HeroSection />
        <div className="container mx-auto px-4">
          <PhonePreview />
        </div>
        <FeaturesGrid />
        <NewsletterSection />
      </div>
    </motion.div>
  );
};

export default Index;
