import Footer from "@/components/core/Footer";
import Navbar from "@/components/core/Navbar";
import React from "react";

interface LayoutProps {
  children?: React.ReactNode;
}

export default function LayoutClient({ children }: LayoutProps) {
  return (
    <>
      <div className="container">
        <Navbar />
        <div className="md:mt-[100px] md:px-10">{children}</div>
      </div>
      <Footer />
    </>
  );
}
