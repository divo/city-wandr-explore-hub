import { motion } from "framer-motion";

const PhonePreview = () => {
  return (
    <div className="relative -mt-[150px] -mb-[150px] h-[300px] z-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mx-auto"
      >
        <div className="relative w-[300px] flex justify-center items-center mx-auto">
          <video 
            src="/CityWikiVideo.mp4" 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="absolute w-[91%] h-auto z-0 rounded-lg object-cover"
          />
          <img 
            src="/phone_frame.png" 
            alt="App Preview" 
            className="absolute w-full z-10"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default PhonePreview; 