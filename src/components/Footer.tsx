const Footer = () => {
  return (
    <footer className="bg-peach-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex gap-8 text-sm text-teal-900/80">
            <a href="/contact" className="hover:text-teal-900">Contact Us</a>
            <a href="/privacy" className="hover:text-teal-900">Privacy Policy</a>
            <a href="/license" className="hover:text-teal-900">License</a>
          </div>
          <div className="text-sm text-teal-900/60">
            © {new Date().getFullYear()} City Wandr. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 