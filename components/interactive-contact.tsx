"use client";

import type React from "react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import emailjs from "@emailjs/browser";

export default function InteractiveContact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitHovered, setIsSubmitHovered] = useState(false);
  const [activeContact, setActiveContact] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);

    const time = new Date().toLocaleString();
    const formData = new FormData(formRef.current);
    formData.set("time", time);

    try {
      await emailjs.sendForm(
        "service_cwtz66s",        // 👈 Replace this
        "template_vs1xjh6",
        formRef.current,
        "Xnno1IIcuOZkN6QrM"
      );
      alert("✅ Message sent successfully!");
      formRef.current.reset();
      setFormState({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      alert("❌ Failed to send message.");
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-purple-400" />,
      title: "Email",
      value: "g.p.rajkumar5@gmail.com",
      color: "bg-purple-900/30",
      textColor: "text-purple-400",
      hoverColor: "text-purple-300",
    },
    {
      icon: <Phone className="w-6 h-6 text-cyan-400" />,
      title: "Phone",
      value: "+91 9655955623",
      color: "bg-cyan-900/30",
      textColor: "text-cyan-400",
      hoverColor: "text-cyan-300",
    },
    {
      icon: <MapPin className="w-6 h-6 text-purple-400" />,
      title: "Location",
      value: "Puducherry, India",
      color: "bg-purple-900/30",
      textColor: "text-purple-400",
      hoverColor: "text-purple-300",
    },
  ];

  const socialLinks = [
    {
      name: "Github",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/Rajkumar5723",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/rajkumarg-aspiringdata",
    },
    {
      name: "Medium",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
        </svg>
      ),
      href: "https://medium.com/@rajkumarg-aspiringdata",
    },
    {
      name: "Quora",
      icon: (
        <div className="relative w-5 h-5">
          <Image src="/icons/quora.png" alt="Quora" fill className="object-contain" />
        </div>
      ),
      href: "https://www.quora.com/profile/Rajkumar-G-201",
    },
  ];

  const titleVariants = {
    initial: { backgroundPosition: "0% 0%" },
    hover: {
      backgroundPosition: "100% 0%",
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <div className="grid md:grid-cols-2 gap-12">
      {/* Left: Contact Info */}
      <div>
        <motion.h3
          className="text-2xl font-bold mb-8 bg-clip-text bg-gradient-to-r from-white via-purple-400 to-cyan-400 bg-[length:200%_auto]"
          variants={titleVariants}
          initial="initial"
          whileHover="hover"
          style={{ WebkitTextFillColor: "transparent" }}
        >
          Contact Information
        </motion.h3>

        <div className="space-y-6">
          {contactInfo.map((contact, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4"
              onMouseEnter={() => setActiveContact(index)}
              onMouseLeave={() => setActiveContact(null)}
              whileHover={{ x: 5 }}
            >
              <motion.div
                className={`p-3 ${contact.color} rounded-2xl`}
                animate={{
                  scale: activeContact === index ? [1, 1.1, 1] : 1,
                  rotate: activeContact === index ? [0, 5, -5, 0] : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                {contact.icon}
              </motion.div>
              <div>
                <motion.h4
                  className={`text-lg font-medium ${
                    activeContact === index ? contact.hoverColor : contact.textColor
                  }`}
                  animate={{ x: activeContact === index ? 3 : 0 }}
                >
                  {contact.title}
                </motion.h4>
                <motion.p className="text-gray-300">{contact.value}</motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <div className="mt-12">
          <motion.h4
            className="text-lg font-bold mb-4 bg-clip-text bg-gradient-to-r from-white via-purple-400 to-cyan-400 bg-[length:200%_auto]"
            variants={titleVariants}
            initial="initial"
            whileHover="hover"
            style={{ WebkitTextFillColor: "transparent" }}
          >
            Follow Me
          </motion.h4>
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <motion.div key={index} whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                <Link
                  href={link.href}
                  className="p-3 bg-[#1a1a2e] rounded-full hover:bg-[#1a1a2e]/80 transition-colors"
                >
                  {link.icon}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Contact Form */}
      <div>
        <motion.h3
          className="text-2xl font-bold mb-8 bg-clip-text bg-gradient-to-r from-white via-purple-400 to-cyan-400 bg-[length:200%_auto]"
          variants={titleVariants}
          initial="initial"
          whileHover="hover"
          style={{ WebkitTextFillColor: "transparent" }}
        >
          Send Me a Message
        </motion.h3>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Name"
                className="bg-[#1a1a2e] border-gray-700 focus:border-purple-500 rounded-2xl"
                value={formState.name}
                onChange={handleInputChange}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Your Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="User@example.com"
                className="bg-[#1a1a2e] border-gray-700 focus:border-purple-500 rounded-2xl"
                value={formState.email}
                onChange={handleInputChange}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-2">
              Subject
            </label>
            <Input
              id="subject"
              name="subject"
              placeholder="Project Inquiry"
              className="bg-[#1a1a2e] border-gray-700 focus:border-purple-500 rounded-2xl"
              value={formState.subject}
              onChange={handleInputChange}
              onFocus={() => setFocusedField("subject")}
              onBlur={() => setFocusedField(null)}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="I'd like to discuss a project..."
              className="bg-[#1a1a2e] border-gray-700 focus:border-purple-500 rounded-2xl"
              rows={6}
              value={formState.message}
              onChange={handleInputChange}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
            />
          </div>

          <input type="hidden" name="time" />

          <motion.div
            className="relative"
            onMouseEnter={() => setIsSubmitHovered(true)}
            onMouseLeave={() => setIsSubmitHovered(false)}
          >
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 rounded-2xl"
            >
              <Send className="w-4 h-4 mr-2" />
              {loading ? "Sending..." : "Send Message"}
            </Button>

            {isSubmitHovered && (
              <motion.div
                className="absolute -right-2 -top-2 w-6 h-6 rounded-full bg-cyan-400"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
              />
            )}
          </motion.div>
        </form>
      </div>
    </div>
  );
}
