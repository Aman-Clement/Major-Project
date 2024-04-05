import React from 'react'
import Translate from '@/components/Translate'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import "../globals.css";

const page = () => {
  return (
      <div className="flex flex-col min-h-screen mx-auto px-4 pt-8 pb-16">
        <div className="flex-grow">
          <Navbar />
          <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <Translate />
          </div>
        </div>
        <Footer />
      </div>
  );
}

export default page