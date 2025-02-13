
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import NewsletterSection from "@/components/NewsletterSection";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-peach-100"
    >
      <HeroSection />
      <FeaturesGrid />
      <NewsletterSection />
    </motion.div>
  );
};

export default Index;
