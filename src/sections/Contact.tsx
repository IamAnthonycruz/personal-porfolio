import React from "react";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
function ContactSection() {
  return (
    <div className="py-16">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center">
          <h2 className="font-serif text-2xl">
            Let's create something amazing together
          </h2>
          <p className="text-sm mt-2">Let's connect</p>
          <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl">
            <span className="font-semibold">Contact Me</span>
            <ArrowUpRightIcon className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
