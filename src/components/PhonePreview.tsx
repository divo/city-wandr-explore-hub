import { motion } from "framer-motion";

const PhonePreview = () => {
  return (
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mx-auto w-full flex justify-center"
      >
        <div className="relative w-full max-w-[300px]">
          <div className="relative w-full pt-[200%]">
            <video 
              src="/CityWikiVideo.mp4" 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="absolute top-[4%] left-[4.5%] w-[91%] h-auto rounded-lg object-cover z-10"
            />
            <img 
              src="/phone_frame.png" 
              alt="App Preview" 
              className="absolute inset-0 w-full h-full object-contain z-20"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PhonePreview; 