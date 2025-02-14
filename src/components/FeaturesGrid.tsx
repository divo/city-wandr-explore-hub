import { Globe, Map, CircleDollarSign, CloudDownload } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Access detailed guides for cities worldwide, including the most popular destinations.",
  },
  {
    icon: Map,
    title: "Custom Itineraries",
    description: "Create personalized travel plans that match your interests and schedule.",
  },
  {
    icon: CircleDollarSign,
    title: "No Subscriptions",
    description: "Your first guide is completely free, any you buy are yours forever.",
  },
  {
    icon: CloudDownload,
    title: "Fully Offline",
    description: "Explore without the internet, perfect when roaming far from home.",
  },
];

const FeaturesGrid = () => {
  return (
    <section className="bg-peach-200 py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-teal-900 mb-4">
              Your perfect companion to explore the cities you love
            </h2>
            <p className="text-teal-900/70 max-w-2xl mx-auto">
              Our comprehensive features ensure you'll have the best possible travel experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-peach-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-terracotta-500/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-terracotta-500" />
                </div>
                <h3 className="text-xl font-semibold text-teal-900 mb-2">{feature.title}</h3>
                <p className="text-teal-900/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
