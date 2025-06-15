
import { motion } from "framer-motion";

const contactInfo = [
  { label: "Email", value: "qaseeb.ahmad@email.com", href: "mailto:qaseeb.ahmad@email.com" },
  { label: "LinkedIn", value: "linkedin.com/in/qaseebahmad", href: "https://linkedin.com/in/qaseebahmad" },
  { label: "GitHub", value: "github.com/qaseebahmad", href: "https://github.com/qaseebahmad" }
];

export default function ContactSection() {
  return (
    <div className="space-y-4">
      {contactInfo.map((contact, index) => (
        <motion.div
          key={index}
          className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur border border-white/10 hover:border-orange-500/30 transition-all duration-200"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.02, x: 10 }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
          viewport={{ once: true }}
        >
          <span className="font-semibold text-orange-300 min-w-[80px]">{contact.label}:</span>
          <a
            href={contact.href}
            target={contact.href.startsWith('http') ? '_blank' : undefined}
            rel={contact.href.startsWith('http') ? 'noopener' : undefined}
            className="text-white hover:text-orange-300 transition-colors underline decoration-orange-500/50 hover:decoration-orange-300"
          >
            {contact.value}
          </a>
        </motion.div>
      ))}
    </div>
  );
}
