"use client"


import { transitionVariantPage } from "@/Utils/motion-transition";
import { AnimatePresence, motion } from "framer-motion";

const TransitionPage = () => {
    return ( 
  <AnimatePresence mode="wait">
    <div>
        <motion.div className="fixed top-0 bottom-0 
        right-full w-screen z-30 bg-[#170C79]"
        
          variants={transitionVariantPage}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
         >

        </motion.div>
    </div>
  </AnimatePresence>
     );
}
 
export default TransitionPage;