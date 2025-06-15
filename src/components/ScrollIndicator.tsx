
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <motion.div
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center"
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <ChevronDown className="w-8 h-8 text-cyan-400 animate-pulse" />
      <span className="mt-2 text-xs text-cyan-300/60 tracking-wide">Scroll</span>
    </motion.div>
  );
}
