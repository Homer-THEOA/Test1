import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";
import AboutUs from "./components/AboutUs";
import Modal from "./components/Modal";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      
      <main className="flex-1 p-4 md:p-8">
        {/* About Us Section */}
        <section id="about" className="mb-12">
          <AboutUs />
        </section>

        {/* Timeline Section */}
        <section id="timeline" className="mb-12">
          <Timeline />
        </section>
      </main>

      <Footer />
      
      {/* Auto-close Modal */}
      <Modal />
    </div>
  );
}
