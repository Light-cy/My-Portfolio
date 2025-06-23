
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
        <p className="text-lg theme-text-secondary font-space">
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
              className={`group relative overflow-hidden rounded-2xl theme-project-${contact.color} backdrop-blur border transition-all duration-150`}
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
              <div className="relative p-6 h-full flex flex-col">
                {/* Header with icon and label */}
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className={`p-3 rounded-xl bg-${contact.color}-100/80 dark:bg-${contact.color}-500/20 border border-${contact.color}-300 dark:border-${contact.color}-500/30 transition-colors duration-150`}
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <IconComponent className={`w-5 h-5 theme-icon-${contact.color} transition-colors duration-150`} />
                  </motion.div>
                  <div>
                    <h3 className={`font-bold text-lg theme-gradient-${contact.color} transition-colors duration-150 font-orbitron`}>
                      {contact.label}
                    </h3>
                    <p className="text-sm theme-text-muted font-space">
                      {contact.description}
                    </p>
                  </div>
                </div>

                {/* Contact value with copy functionality */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="mb-4">
                    <p className="theme-text-primary font-medium break-all font-space text-sm leading-relaxed">
                      {contact.value}
                    </p>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2">
                    <motion.a
                      href={contact.href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener' : undefined}
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-${contact.color}-100 dark:bg-${contact.color}-500/20 hover:bg-${contact.color}-200 dark:hover:bg-${contact.color}-500/30 border border-${contact.color}-300 dark:border-${contact.color}-500/30 hover:border-${contact.color}-400 dark:hover:border-${contact.color}-400/50 theme-text-${contact.color} transition-all duration-150 text-sm font-medium font-space`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Connect</span>
                      <ExternalLink className="w-3 h-3" />
                    </motion.a>

                    <motion.button
                      onClick={() => handleCopy(contact.value, index)}
                      className={`px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700/50 hover:bg-gray-200 dark:hover:bg-gray-600/50 border border-gray-300 dark:border-gray-600/50 hover:border-gray-400 dark:hover:border-gray-500/50 theme-text-secondary transition-all duration-150`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      title="Copy to clipboard"
                    >
                      {copiedIndex === index ? (
                        <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Call to action */}
      <motion.div
        className="text-center mt-8 p-6 rounded-2xl theme-project-orange border"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-bold theme-gradient-orange mb-2 font-orbitron">
          Let's Build Something Amazing Together
        </h3>
        <p className="theme-text-secondary font-space">
          I'm always excited to work on new projects and collaborate with fellow developers.
        </p>
      </motion.div>
    </div>
  );
}
