'use client';

import { useState } from "react";
import Image from "next/image";
import Stripes from "@/public/images/stripes-dark.svg";

export default function CtaForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Добавляем access_key для Web3Forms
    formData.append("access_key", "06e4b181-92ef-473d-b279-d490ed8aaddb");

    // Преобразуем formData в JSON
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();

      if (result.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Сброс полей формы после успешной отправки
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("An error occurred while submitting the form.");
    }
  }

  return (
      <section id="contactForm"         className="scroll-mt-20  justify-center py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div
              className="relative overflow-hidden rounded-2xl text-center shadow-xl before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gray-900"
              data-aos="zoom-y-out"
          >
            {/* Glow */}
            <div
                className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
                aria-hidden="true"
            >
              <div className="h-56 w-[480px] rounded-full border-[20px] border-blue-500 blur-3xl" />
            </div>
            {/* Stripes illustration */}
            <div
                className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
                aria-hidden="true"
            >
              <Image
                  className="max-w-none"
                  src={Stripes}
                  width={768}
                  height={432}
                  alt="Stripes"
              />
            </div>

            {/* Form content */}
            <div className="px-4 py-12 md:px-12 md:py-20">
              <h2 className="mb-6 border-y text-3xl font-bold text-gray-200 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.700/.7),transparent)1] md:mb-12 md:text-4xl">
                Get in touch with us
              </h2>
              <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full rounded-md px-4 py-3 text-gray-800 focus:outline-none"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Phone or Email"
                    className="w-full rounded-md px-4 py-3 text-gray-800 focus:outline-none"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    className="w-full rounded-md px-4 py-3 text-gray-800 focus:outline-none"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button
                    type="submit"
                    className="w-full rounded-md bg-gradient-to-t from-blue-600 to-blue-500 py-3 text-white shadow hover:bg-[length:100%_150%] focus:outline-none"
                >
                  Submit
                </button>
                {status && <p className="text-green-400">{status}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
  );
}
