'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { socialIcons } from '@/lib/constants'
import { Mail, Phone } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi Shaik Munawar,%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0ASubject: ${formData.subject}%0A%0AMessage:%0A${formData.message}`;
    window.open(`https://wa.me/916303774539?text=${whatsappMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    // Main container
    <div className="min-h-screen bg-accent-yellow py-20 px-4">
      
      {/* Contact Detail Container */}
      <div className="max-w-6xl mx-auto my-6 rounded-sm overflow-hidden">
        
        {/* Header Section */}
        <div className="text-center p-8 m-2 bg-[rgba(229,229,229,0.45)] dark:bg-[rgba(32,32,32,0.35)] backdrop-blur-xl rounded-lg">
          <h1 className="text-4xl font-extrabold text-foreground-3 font-gorgia">Contact Me</h1>
        </div>

        <div className="p-8 m-2 bg-[rgba(229,229,229,0.45)] dark:bg-[rgba(32,32,32,0.35)] backdrop-blur-xl rounded-lg">
          {/* Single Column Layout */}
          <div className="space-y-8">
            
            {/* Social Media & Other Channels */}
            <div className="bg-surface-2 p-6 rounded-lg">
              <h2 className="font-extrabold text-2xl font-doto text-foreground mb-4">Social Media & Other Channels</h2>
              <p className="text-secondary mb-6">Please feel free to contact me to discuss further details, or if you have an offer or idea for collaboration. You can use any of the following channels to get in touch with me.</p>
              
              {/* Contact Links */}
              <div className="flex justify-center flex-wrap gap-2 sm:gap-3 md:gap-4 text-foreground-2 font-extrabold font-sans">
                <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=shaikmunawar907@gmail.com" className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 md:px-4 py-2 bg-accent-blue rounded-sm hover:opacity-90 transition-opacity text-xs sm:text-sm">
                  <div className="w-6 h-6 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center bg-foreground-3 rounded-sm">
                    <Mail className="w-3 h-3 sm:w-5 sm:h-5 text-foreground-2" />
                  </div>
                  <span className="hidden sm:inline">Email</span>
                </Link>
                <Link href="https://linkedin.com/in/shaik-abdul-munawar-b35821284" target="_blank" className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 md:px-4 py-2 bg-accent-blue rounded-sm hover:opacity-90 transition-opacity text-xs sm:text-sm">
                  <div className="w-6 h-6 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center bg-foreground-3 rounded-sm">
                    <Image src={socialIcons.LinkedIn} alt="LinkedIn" width={20} height={20} className="w-3 h-3 sm:w-5 sm:h-5" />
                  </div>
                  <span className="hidden sm:inline">LinkedIn</span>
                </Link>
                <Link href="https://github.com/S-Munawar" target="_blank" className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 md:px-4 py-2 bg-accent-blue rounded-sm hover:opacity-90 transition-opacity text-xs sm:text-sm">
                  <div className="w-6 h-6 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center bg-foreground-3 rounded-sm">
                    <Image src={socialIcons.GitHub} alt="GitHub" width={20} height={20} className="w-3 h-3 sm:w-5 sm:h-5" />
                  </div>
                  <span className="hidden sm:inline">GitHub</span>
                </Link>
                <Link href="https://leetcode.com/Shaik_Munawar" target="_blank" className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 md:px-4 py-2 bg-accent-blue rounded-sm hover:opacity-90 transition-opacity text-xs sm:text-sm">
                  <div className="w-6 h-6 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center bg-foreground-3 rounded-sm">
                    <Image src={socialIcons.LeetCode} alt="LeetCode" width={20} height={20} className="w-3 h-3 sm:w-5 sm:h-5" />
                  </div>
                  <span className="hidden sm:inline">LeetCode</span>
                </Link>
                <Link href="tel:+916303774539" className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 md:px-4 py-2 bg-accent-blue rounded-sm hover:opacity-90 transition-opacity text-xs sm:text-sm">
                  <div className="w-6 h-6 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center bg-foreground-3 rounded-sm">
                    <Phone className="w-3 h-3 sm:w-5 sm:h-5 text-foreground-2" />
                  </div>
                  <span className="hidden sm:inline">Phone</span>
                </Link>
              </div>
            </div>

            {/* Direct Message Section */}
            <div className="bg-surface-2 p-6 rounded-lg">
              <h2 className="font-extrabold text-2xl font-doto text-foreground mb-4">Direct Message</h2>
              <p className="text-secondary mb-6">Send me a message directly through this form.</p>
              
              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-foreground font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue" 
                    placeholder="Your Name" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-foreground font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue" 
                    placeholder="your.email@example.com" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-foreground font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue" 
                    placeholder="Message Subject" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-foreground font-medium mb-2">Message</label>
                  <textarea 
                    rows={5} 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue" 
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-accent-red text-foreground-3 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium">
                  Send Message via WhatsApp
                </button>
              </form>
            </div>
          </div>

          {/* Data Protection Note */}
          <div className="bg-surface-2 my-8 p-6 rounded-lg">
            <p className="text-secondary text-sm leading-relaxed">
              <span className="font-bold text-foreground">Note on data protection:</span><br />
              Your personal information will be handled with care and used only for responding to your inquiry. 
              I do not share your data with third parties and follow best practices for data security.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact
