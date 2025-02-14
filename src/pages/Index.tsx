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
    >
      <div className="flex flex-col bg-peach-200">
        <div className="relative bg-peach-100 pb-[13%]">
          <div className="absolute inset-0 bg-[url('/paris.jpg')] bg-cover bg-center opacity-25" />
          <div className="relative">
            <HeroSection />
          </div>
        </div>
        <div className="-mt-[13%]">
          <PhonePreview />
        </div>
        <div className="bg-peach-200">
          <FeaturesGrid />
          <NewsletterSection />
        </div>
      </div>
    </motion.div>
  );
};

export default Index;
