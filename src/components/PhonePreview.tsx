import { motion } from "framer-motion";

const PhonePreview = () => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-peach-100" />
        <div className="h-2/3 bg-peach-200" />
      </div>
      <div className="relative container mx-auto px-4 py-8">
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
    </div>
  );
};

export default PhonePreview; 