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
        <div className="w-full max-w-[300px]">
          <div className="relative">
            <div className="relative w-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <video 
                  src="/CityWikiVideo.mp4" 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  className="w-[91%] h-auto rounded-lg object-cover z-10"
                  style={{ marginTop: '0%' }}
                />
              </div>
              <img 
                src="/phone_frame.png" 
                alt="App Preview Frame" 
                className="relative w-full h-auto z-20"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PhonePreview; 