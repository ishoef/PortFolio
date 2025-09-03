import React, { useState } from "react";
import axios from "axios";
import {
  Mail,
  Phone,
  MessageSquare,
  Send,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import { BsGithub } from "react-icons/bs";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await axios.post("/api/contact", formData); // Replace with your API route
      setStatus(res.data.msg);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus(err.response?.data?.msg || "Something went wrong");
    }
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-16"
    >
      <h1 className="text-4xl font-bold mb-10 text-center">
        <span className="text-blue-400">Get in Touch</span>
        <div className="w-24 h-1 bg-green-400 mt-2 mx-auto"></div>
      </h1>

      <div className="w-11/12 md:w-8/12 mx-auto grid md:grid-cols-2 gap-8">
        {/* Left - Contact Info */}
        <div className="bg-[#121f36] p-8 rounded-xl shadow-md">
          <h3 className="text-green-400 text-xl font-semibold mb-2">
            📎 Let's Connect
          </h3>
          <p className="text-sm text-gray-300 mb-6">
            I'm always interested in hearing about new opportunities and
            exciting projects. Whether you have a question or just want to say
            hi, feel free to reach out!
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-[#16213d] p-4 rounded-lg">
              <Mail className="text-green-400" />
              <div>
                <p className="text-sm font-semibold">Email</p>
                <a
                  href="mailto:ismailhossennayeb@gmail.com"
                  className="text-sm text-gray-300"
                >
                  ismailhossennayeb@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#192b47] p-4 rounded-lg">
              <Phone className="text-blue-400" />
              <div>
                <p className="text-sm font-semibold">Phone</p>
                <p className="text-sm text-gray-300">+20 1554151689</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#2b1d3a] p-4 rounded-lg">
              <MessageSquare className="text-purple-400" />
              <div>
                <p className="text-sm font-semibold">WhatsApp</p>
                <p className="text-sm text-gray-300">+20 1554151689</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/ishoef"
              className="bg-[#1f2d40] p-2 rounded-full"
              target="_blank"
            >
              <BsGithub className="text-white w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ismailnayef"
              className="bg-[#1f2d40] p-2 rounded-full"
              target="_blank"
            >
              <Linkedin className="text-white w-5 h-5" />
            </a>
            <a className="bg-[#1f2d40] p-2 rounded-full" target="_blank">
              <ExternalLink className="text-white w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right - Message Form */}
        <div className="bg-[#121f36] p-8 rounded-xl shadow-md">
          <h3 className="text-blue-400 text-xl font-semibold mb-2">
            🡒 Send a Message
          </h3>
          <p className="text-sm text-gray-300 mb-6">
            Fill out the form below and I'll get back to you as soon as
            possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-[#0e1c2f] border border-gray-600 p-3 rounded-md text-sm"
              />
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-[#0e1c2f] border border-gray-600 p-3 rounded-md text-sm"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="What's this about?"
              value={formData.subject}
              onChange={handleChange}
              required
              className="bg-[#0e1c2f] border border-gray-600 p-3 rounded-md text-sm w-full"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your message…"
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-[#0e1c2f] border border-gray-600 p-3 rounded-md text-sm w-full"
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-medium py-3 rounded-md flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>

            {status && (
              <p className="mt-2 text-sm text-center text-blue-400">{status}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
