"use client";

import { motion } from "framer-motion";
import {
  Github,
  Instagram,
  Twitter,
  Mail,
  Phone,
  FileText,
} from "lucide-react";
import cv from "../resources/cv-2026-01.pdf";

const FooterBottom = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <footer className="border-t border-white/10 bg-glass backdrop-blur-xl text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -z-10 animate-pulse delay-500"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-6 py-20 relative z-10"
      >
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent inline-block">
              Walter Da Conceição
            </h3>
            <p className="text-foreground/70 text-base leading-relaxed max-w-sm">
              Building the future, one line of code at a time. Let’s create
              something amazing together.
            </p>
          </motion.div>

          {/* Resources Section */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Resources
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-primary rounded-full"></span>
            </h4>
            <ul className="space-y-4 text-foreground/70">
              <FooterLink
                href={cv}
                icon={<FileText className="w-4 h-4" />}
                text="Resume / CV"
              />
              <FooterLink
                href="https://github.com/waltershaquil"
                icon={<Github className="w-4 h-4" />}
                text="GitHub"
              />
              <FooterLink
                href="https://www.behance.net/waltershaquil"
                icon={
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.5 10.962c.722 0 1.356-.178 1.902-.534a2.79 2.79 0 001.166-1.482c.105-.36.158-.753.158-1.178 0-.738-.178-1.344-.534-1.818-.356-.474-.89-.825-1.602-1.053-.356-.114-.77-.171-1.242-.171H0v13.548h6.82c.564 0 1.08-.057 1.548-.171a3.56 3.56 0 001.254-.516c.356-.228.64-.51.852-.843.213-.333.319-.72.319-1.161 0-.474-.098-.876-.294-1.206a2.355 2.355 0 00-.786-.834 3.517 3.517 0 00-1.137-.48c-.425-.097-.873-.146-1.346-.146h-1.73v-2.955zm-3.5-3.678h2.62c.394 0 .725.073.993.22.268.146.46.36.576.642.116.282.174.617.174 1.005 0 .38-.058.7-.174.96a1.254 1.254 0 01-.576.594c-.268.138-.599.207-.993.207H3v-3.628zm3.034 7.678c.41 0 .76-.073 1.05-.22.29-.146.51-.355.66-.626.15-.27.225-.588.225-.954 0-.38-.075-.713-.225-1-.15-.287-.37-.51-.66-.668-.29-.158-.64-.237-1.05-.237H3v3.705h3.034zM19.5 7.2v-1.8h-7.5v1.8h7.5zm-1.788 11.1c.394 0 .748-.073 1.062-.22.314-.146.576-.347.786-.603.21-.256.364-.556.462-.9.098-.344.147-.715.147-1.113v-5.1h-5.844c-.722 0-1.356.171-1.902.514a3.56 3.56 0 00-1.254 1.386c-.314.588-.471 1.26-.471 2.016 0 .746.157 1.413.471 2.001.314.588.748 1.053 1.302 1.395.554.342 1.188.513 1.902.513h3.339zm-5.844-7.2h3.132v3.6c0 .36-.073.677-.22.951a1.67 1.67 0 01-.603.645 1.67 1.67 0 01-.879.237h-.636c-.394 0-.742-.073-1.044-.22a2.04 2.04 0 01-.723-.603 2.644 2.644 0 01-.42-.867 3.91 3.91 0 01-.138-1.053c0-.36.046-.7.138-1.02.092-.32.23-.6.414-.84.184-.24.418-.428.702-.564.284-.136.617-.204.999-.204z" />
                  </svg>
                }
                text="Behance"
              />
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Contact
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-primary rounded-full"></span>
            </h4>
            <ul className="space-y-4 text-foreground/70">
              <FooterLink
                href="mailto:waltershaquil@gmail.com"
                icon={<Mail className="w-4 h-4" />}
                text="waltershaquil@gmail.com"
              />
              <FooterLink
                href="tel:+258846957899"
                icon={<Phone className="w-4 h-4" />}
                text="+258 84 69 57 899"
              />
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10"
        >
          <p className="text-foreground/70 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Walter Da Conceição. All Rights
            Reserved.
          </p>

          <div className="flex items-center gap-4">
            <SocialIcon
              href="https://www.instagram.com/walter_shaquil/profilecard"
              icon={<Instagram className="w-5 h-5" />}
            />
            <SocialIcon
              href="https://twitter.com"
              icon={<Twitter className="w-5 h-5" />}
            />
            <SocialIcon
              href="https://github.com/waltershaquil"
              icon={<Github className="w-5 h-5" />}
            />
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

// Subcomponents for cleaner JSX
const FooterLink = ({ href, icon, text }) => (
  <li>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 hover:text-primary transition-all group"
    >
      <span className="text-primary group-hover:scale-110 transition-transform p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20">
        {icon}
      </span>
      <span className="group-hover:translate-x-1 transition-transform">{text}</span>
    </a>
  </li>
);

const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-white/5 hover:bg-primary hover:text-white transition-all hover:scale-110 hover:rotate-12 border border-white/10 hover:border-primary/50"
  >
    {icon}
  </a>
);

export default FooterBottom;
