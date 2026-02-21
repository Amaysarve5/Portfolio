import React, { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bzbhoaq",      //EmailJS service ID
        "template_2lbnmfc",     //EmailJS template ID
        form.current,
        "NSsbHeDrqMH1ByViX"     //EmailJS public key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); // reset form fields
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'dark',
          });
        },
        (error) => {
          toast.error("Error Sending Message", error)
          toast.error("Failed to send message. Please try again!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'dark',
          });
          console.error("EmailJS Error:", error.text);
        }
      );
  };

  return (
    <>
      <section
        id="contact"
        className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-heading">Contact</h2>
          <div className="w-32 h-1 bg-accent mx-auto mt-4 rounded-sm"></div>
          <p className="text-muted mt-4 text-lg font-semibold">
            I'd love to hear from you — reach out for any opportunities or questions!
          </p>
        </div>

        {/* contact form */}
        <div className="mt-8 w-full max-w-md bg-gray-900/80 p-8 rounded-2xl shadow-xl border border-gray-700/50 mx-auto" style={{ boxShadow: '0 0 30px rgba(46,166,255,0.1)' }}>
          <h3 className="text-2xl font-semibold text-heading text-center">
            Connect With Me
          </h3>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="mt-6 flex flex-col space-y-4"
          >
            <div>
              <label className="text-body text-sm font-medium block mb-2">Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="your@email.com"
                required
                className="w-full p-3 rounded-lg bg-[#0a0f1a] text-heading border border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent placeholder-gray-600"
              />
            </div>
            <div>
              <label className="text-body text-sm font-medium block mb-2">Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-lg bg-[#0a0f1a] text-heading border border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent placeholder-gray-600"
              />
            </div>
            <div>
              <label className="text-body text-sm font-medium block mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Project Discussion"
                required
                className="w-full p-3 rounded-lg bg-[#0a0f1a] text-heading border border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent placeholder-gray-600"
              />
            </div>
            <div>
              <label className="text-body text-sm font-medium block mb-2">Message</label>
              <textarea
                name="message"
                placeholder="Share your thoughts or opportunity..."
                rows="4"
                className="w-full p-3 rounded-lg bg-[#0a0f1a] text-heading border border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent placeholder-gray-600 resize-none"
              ></textarea>
            </div>

            {/* send button */}
            <button
              type="submit"
              className="w-full py-3 mt-6 font-semibold rounded-lg text-black hover:scale-105 transition shadow-lg"
              style={{
                background: 'linear-gradient(90deg, #00f0ff, #2EA6FF)',
                boxShadow: '0 0 20px rgba(46,166,255,0.3)'
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Toast notifications */}
      <ToastContainer />
    </>
  );
};

export default Contact;
