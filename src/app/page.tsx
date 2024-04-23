"use client";

import About from "@/component/About";
import Contact from "@/component/Contact";
import Navbar from "@/component/Navbar";
import Resume from "@/component/Resume";
import Sidebar from "@/component/Sidebar";
import { useState } from "react";

export default function Home() {
  const [nav, setNav] = useState("about");
  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <Navbar nav={nav} setState={setNav} />

        <About nav={nav} />
        <Resume nav={nav} />
        <Contact nav={nav} />
      </div>
    </main>
  );
}
