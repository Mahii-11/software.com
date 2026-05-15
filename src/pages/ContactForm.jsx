/* eslint-disable no-unused-vars */
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/Textarea";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { useState } from "react";
import { submitContactForm } from "../services/api";

export function ContactForm() {

   const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
  if (!form.name || !form.email || !form.message) {
    toast.error("All fields are required!");
    return false;
  }
  return true;
};

  // submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("subject", form.subject);
      formData.append("email", form.email);
      formData.append("message", form.message);

      const res = await submitContactForm(formData);

      toast.success(res.message || "Message sent successfully!");

      // reset form
      setForm({ name: "", subject: "", email: "", message: "" });

      // 🔥 auto close modal after 1s
      setTimeout(() => {
        navigate(-1);
      }, 3000);
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };




  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mt-12 sm:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Info */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-3xl md:text-5xl mb-6"
            >
              Let's build something <br />
              <span className="text-gradient">extraordinary.</span>
            </motion.h2>
            
            <p className="text-muted-foreground text-lg mb-12">
              Have a project in mind? We'd love to hear about it. Send us a message and let's start the conversation.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email Us</h4>
                  <p className="text-muted-foreground">hello@novatech.agency</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-secondary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Visit Us</h4>
                  <p className="text-muted-foreground">123 Innovation Blvd, Suite 400<br/>San Francisco, CA 94103</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-purple-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Call Us</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

      
            {/* Form */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  className="glass-card p-6 md:p-10 rounded-3xl shadow-xl"
>
  <form className="space-y-7" onSubmit={handleSubmit} >
    
    {/* Name + Email */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="space-y-2">
        <label className="text-sm font-medium text-black">
          Full Name
        </label>
        <Input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
           placeholder="John Doe"
           className="w-full bg-[#f8fafc] border border-[#dbeafe] rounded-xl px-4 py-3
           text-slate-700 placeholder:text-slate-400
           focus:outline-none focus:ring-2 focus:ring-[#93c5fd]
           focus:border-[#93c5fd] transition"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-black">
          Email Address
        </label>
        <Input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
           placeholder="john@example.com"
           className="w-full bg-[#f8fafc] border border-[#dbeafe] rounded-xl px-4 py-3
           text-slate-700 placeholder:text-slate-400
           focus:outline-none focus:ring-2 focus:ring-[#93c5fd]
           focus:border-[#93c5fd] transition"
        />
      </div>
    </div>

    {/* Subject */}
    <div className="space-y-2">
      <label className="text-sm font-medium text-black">
        Subject
      </label>
      <Input
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="Project Inquiry"
          className="w-full bg-[#f8fafc] border border-[#dbeafe] rounded-xl px-4 py-3
           text-slate-700 placeholder:text-slate-400
           focus:outline-none focus:ring-2 focus:ring-[#93c5fd]
           focus:border-[#93c5fd] transition"
      />
    </div>

    {/* Message */}
    <div className="space-y-2">
      <label className="text-sm font-medium text-black">
        Message
      </label>
      <Textarea
       name="message"
          value={form.message}
         onChange={handleChange}
         rows="4"
         placeholder="Tell us about your project goals, timeline, and requirements..."
         className="w-full min-h-[160px] bg-[#f8fafc] border border-[#dbeafe] rounded-xl p-4
           text-slate-700 placeholder:text-slate-400 resize-none
           focus:outline-none focus:ring-2 focus:ring-[#93c5fd]
           focus:border-[#93c5fd] transition"
      />
    </div>

    {/* Button */}
    <Button
      type="submit"
      disabled={loading}
      className="w-full h-12 text-base font-medium rounded-xl 
                 bg-gradient-to-r from-primary to-secondary 
                 hover:opacity-90 active:scale-[0.99] transition-all"
    >
       {loading ? "Sending..." : "Send Message"}
      <Send className="ml-2 w-4 h-4" />
    </Button>
  </form>
</motion.div>
        </div>
      </div>
    </section>
  );
}