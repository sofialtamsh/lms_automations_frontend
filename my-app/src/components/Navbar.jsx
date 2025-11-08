import React from "react";
import { Button } from "antd";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      {/* Left Text */}
      <div className="text-2xl font-semibold text-gray-800 cursor-pointer">
        Automation
      </div>

      {/* Right Login Button */}
      <Button type="primary" className="rounded-md">
        Login
      </Button>
    </nav>
  );
};

export default Navbar;
