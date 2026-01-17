import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
// import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleVideoLoaded = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-16 h-16 border-4 border-[#FF8437]/30 border-t-[#FF8437] rounded-full animate-spin" />
              <span className="text-white/70 text-sm">Loading...</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="font-inter">
        <Header />
        <Hero onAssetLoaded={handleVideoLoaded} isLoaded={!isLoading} />
        <About />
        {/* <Experience /> */}
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;