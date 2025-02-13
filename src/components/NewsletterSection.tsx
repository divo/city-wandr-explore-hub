
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";

const NewsletterSection = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter.",
    });
  };

  return (
    <section className="py-24 bg-teal-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-[0.15]" />
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-peach-100 mb-4">
            Stay Updated with Travel Tips
          </h2>
          <p className="text-peach-100/70 max-w-2xl mx-auto mb-8">
            Join our newsletter and get the latest travel guides, tips, and inspiration delivered directly to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              required
            />
            <Button type="submit" className="bg-terracotta-500 hover:bg-terracotta-500/90 text-white">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
