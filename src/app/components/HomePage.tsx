"use client";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import "../../../public/hero.jpg";
import "../../../public/robot.jpg";
import "../../../public/simplified.jpg";
import "../../../public/templates.jpg";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
export default function HomePage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section
        id="home"
        className="h-screen flex flex-col lg:flex-row justify-center items-center relative px-4"
      >
        {/* Hero Image */}
        <motion.div
          className="relative hidden lg:block lg:w-1/2 align-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src="hero.jpg" alt="Hero" className="object-cover w-[80%]" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 lg:w-1/2 lg:pl-12 text-center lg:text-left px-4 md:px-8 lg:px-12 lg:pl-24">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-gray-900"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typewriter
              options={{
                strings: ["FillUp.io"],
                autoStart: true,
                loop: true,
              }}
            />
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Create, share, and analyze surveys effortlessly.
            <br />
            Perfect for collecting feedback, conducting research, or organizing
            events.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-8 rounded-full text-lg shadow-xl transform hover:scale-105 transition-all duration-300">
              <a href="/signin">Get Started</a>
            </button>
            <button className="bg-gray-100 hover:bg-gray-300 text-gray-900 py-3 px-8 rounded-full text-lg shadow-xl transform hover:scale-105 transition-all duration-300">
              <a href="/#features">Explore Features</a>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-100"
      >
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold mb-12 text-gray-900"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Cutting-Edge Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex justify-center mb-4">
                <img
                  src="robot.jpg"
                  alt="AI-Powered Surveys"
                  className="object-cover w-24 h-24 sm:w-32 sm:h-32"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">
                AI-Powered Surveys
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Leverage AI to create smart, adaptive surveys that enhance
                response quality and completion rates.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex justify-center mb-4">
                <img
                  src="simplified.jpg"
                  alt="Simplified Interface"
                  className="object-cover w-24 h-24 sm:w-32 sm:h-32"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">
                Simplified
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Experience a clean and simple interface that lets you create and
                manage surveys with ease.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex justify-center mb-4">
                <img
                  src="templates.jpg"
                  alt="Customizable Templates"
                  className="object-cover w-24 h-24 sm:w-32 sm:h-32"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">
                Customizable Templates
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Choose from a variety of templates and customize them to reflect
                your brand’s identity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 sm:py-20 bg-blue-900">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Unmatched Security
          </motion.h2>
          <p className="text-base sm:text-lg text-gray-200 mt-6 mb-6">
            Your data is safeguarded with industry-leading security measures,
            including end-to-end encryption and regular audits.
          </p>
          <motion.button
            className="bg-blue-500 hover:bg-blue-700 text-white py-4 px-8 sm:px-10 rounded-full text-lg shadow-xl transform hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <a href="/security">Learn More About Our Security</a>
          </motion.button>
        </div>
      </section>

      {/* Developers Section */}
      <section
        id="developers"
        className="py-16 sm:py-20 bg-gradient-to-b from-gray-100 to-white"
      >
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold mb-12 text-gray-900"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Meet the Developers
          </motion.h2>
          <div className="flex flex-col sm:flex-row justify-center space-y-8 sm:space-y-0 sm:space-x-12">
            {[
              {
                name: "Sanket Kore",
                img: "https://avatars.githubusercontent.com/u/117569459?v=4",
                role: "Developer",
              },
              {
                name: "Aryan Belle",
                img: "https://avatars.githubusercontent.com/u/117569459?v=4",
                role: "Developer",
              },
            ].map((dev, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <img
                  src={dev.img}
                  alt={dev.name}
                  className="object-cover w-24 h-24 sm:w-32 sm:h-32 rounded-full mb-4"
                />
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">
                  {dev.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">{dev.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 sm:px-6 text-center text-white">
          <p>
            &copy; {new Date().getFullYear()} FillUp.io. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-white text-2xl hover:text-gray-400" />
            </a>

            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-white text-2xl hover:text-gray-400" />
            </a>

            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-white text-2xl hover:text-gray-400" />
            </a>
          </div>
          <div className="mt-4">
            <p className="flex items-center justify-center space-x-2">
              <FaPhone className="text-white" />
              <span>+1 (123) 456-7890</span>
            </p>
            <p className="flex items-center justify-center space-x-2 mt-2">
              <FaEnvelope className="text-white" />
              <a
                href="mailto:aryanbelle692@gmail.com"
                className="hover:underline"
              >
                aryanbelle692@gmail.com
              </a>
            </p>
            <p className="flex items-center justify-center space-x-2 mt-2">
              <FaEnvelope className="text-white" />
              <a
                href="mailto:sanketkore960@gmail.com"
                className="hover:underline"
              >
                sanketkore960@gmail.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
