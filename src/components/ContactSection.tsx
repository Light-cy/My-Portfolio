
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ExternalLink, Copy, CheckCircle } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  { 
    label: "Email", 
    value: "qaseebahmed@gmail.com", 
    href: "mailto:qaseebahmed@gmail.com",
    icon: Mail,
    color: "cyan",
    description: "Drop me a line"
  },
  { 
    label: "LinkedIn", 
    value: "linkedin.com/in/qaseeb-ahmad-a97805293", 
    href: "https://linkedin.com/in/qaseeb-ahmad-a97805293",
    icon: Linkedin,
    color: "blue",
    description: "Let's connect professionally"
  },
  { 
    label: "GitHub", 
    value: "github.com/Light-cy", 
    href: "https://github.com/Light-cy",
    icon: Github,
    color: "purple",
    description: "Check out my code"
  }
];

export default function ContactSection() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="space-y-6 w-full">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-lg font-space dark:text-gray-300 text-slate-600">
          Ready to bring your ideas to life? Let's start a conversation.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
        {contactInfo.map((contact, index) => {
          const IconComponent = contact.icon;
          const isExternal = contact.href.startsWith('http');
          
          return (
            <motion.div
              key={index}
              className={`group relative overflow-hidden rounded-2xl backdrop-blur border transition-all duration-150
                dark:bg-gradient-to-br dark:from-${contact.color}-500/10 dark:via-black/50 dark:to-black/80 dark:border-${contact.color}-500/20 dark:hover:border-${contact.color}-400/40
                bg-gradient-to-br from-${contact.color}-50/80 via-white/70 to-white/90 border-${contact.color}-200/50 hover:border-${contact.color}-400/70 shadow-lg hover:shadow-xl`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                transition: { duration: 0.15 }
              }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Animated background gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-150
                  dark:from-${contact.color}-500/20 dark:to-transparent
                  from-${contact.color}-100/30 to-transparent`}
                animate={{
                  background: [
                    `linear-gradient(45deg, rgb(var(--${contact.color}-500) / 0.1), transparent)`,
                    `linear-gradient(225deg, rgb(var(--${contact.color}-500) / 0.2), transparent)`,
                    `linear-gradient(45deg, rgb(var(--${contact.color}-500) / 0.1), transparent)`,
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <div className="relative p-6 h-full flex flex-col">
                {/* Header with icon and label */}
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className={`p-3 rounded-xl border transition-colors duration-150
                      dark:bg-${contact.color}-500/20 dark:border-${contact.color}-500/30 dark:group-hover:border-${contact.color}-400/50
                      bg-${contact.color}-100/80 border-${contact.color}-300/60 group-hover:border-${contact.color}-500/80`}
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <IconComponent className={`w-5 h-5 transition-colors duration-150
                      dark:text-${contact.color}-300 dark:group-hover:text-${contact.color}-200
                      text-${contact.color}-600 group-hover:text-${contact.color}-700`} />
                  </motion.div>
                  <div>
                    <h3 className={`font-bold text-lg font-orbitron transition-colors duration-150
                      dark:text-${contact.color}-300 dark:group-hover:text-${contact.color}-200
                      text-${contact.color}-700 group-hover:text-${contact.color}-800`}>
                      {contact.label}
                    </h3>
                    <p className="text-sm font-space dark:text-gray-400 text-slate-500">
                      {contact.description}
                    </p>
                  </div>
                </div>

                {/* Contact value with copy functionality */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="mb-4">
                    <p className="font-medium break-all font-space text-sm leading-relaxed
                      dark:text-white text-slate-700">
                      {contact.value}
                    </p>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2">
                    <motion.a
                      href={contact.href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener' : undefined}
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border transition-all duration-150 text-sm font-medium font-space
                        dark:bg-${contact.color}-500/20 dark:hover:bg-${contact.color}-500/30 dark:border-${contact.color}-500/30 dark:hover:border-${contact.color}-400/50 dark:text-${contact.color}-200 dark:hover:text-${contact.color}-100
                        bg-${contact.color}-100/80 hover:bg-${contact.color}-200/80 border-${contact.color}-300/60 hover:border-${contact.color}-500/80 text-${contact.color}-700 hover:text-${contact.color}-800`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Connect</span>
                      <ExternalLink className="w-3 h-3" />
                    </motion.a>

                    <motion.button
                      onClick={() => handleCopy(contact.value, index)}
                      className={`px-3 py-2 rounded-lg border transition-all duration-150
                        dark:bg-gray-700/50 dark:hover:bg-gray-600/50 dark:border-gray-600/50 dark:hover:border-gray-500/50 dark:text-gray-300 dark:hover:text-white
                        bg-slate-100/80 hover:bg-slate-200/80 border-slate-300/60 hover:border-slate-400/80 text-slate-600 hover:text-slate-700`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      title="Copy to clipboard"
                    >
                      {copiedIndex === index ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </motion.button>
                  </div>
                </div>

                {/* Subtle border glow effect */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl border transition-all duration-150 pointer-events-none
                    dark:border-${contact.color}-400/0 dark:group-hover:border-${contact.color}-400/30
                    border-${contact.color}-300/0 group-hover:border-${contact.color}-400/50`}
                  animate={{
                    boxShadow: [
                      `0 0 0 0px rgb(var(--${contact.color}-500) / 0)`,
                      `0 0 20px 2px rgb(var(--${contact.color}-500) / 0.1)`,
                      `0 0 0 0px rgb(var(--${contact.color}-500) / 0)`,
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Call to action */}
      <motion.div
        className="text-center mt-8 p-6 rounded-2xl border
          dark:bg-gradient-to-r dark:from-orange-500/10 dark:via-pink-500/10 dark:to-purple-500/10 dark:border-orange-500/20
          bg-gradient-to-r from-orange-50/80 via-pink-50/80 to-purple-50/80 border-orange-200/60 shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-bold mb-2 font-orbitron
          dark:text-orange-300 text-orange-700">
          Let's Build Something Amazing Together
        </h3>
        <p className="font-space dark:text-gray-300 text-slate-600">
          I'm always excited to work on new projects and collaborate with fellow developers.
        </p>
      </motion.div>
    </div>
  );
}
