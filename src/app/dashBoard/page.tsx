"use client";
import SideBar from "@/components/sidebar/SideBar";
import React, { useState } from "react";

export default function DashBoard() {
  const [selectedMenu, setSelectedMenu] = useState("dashboard");

  const handleMenuSelect = (menu: string) => {
    setSelectedMenu(menu);
  };

  const renderContent = () => {
    switch (selectedMenu) {
      case "dashboard":
        return <div>Dashboard Content</div>;
      case "product":
        return <div>Product Content</div>;
      case "testimonial":
        return <div>Testimonial Content</div>;
      default:
        return <div>Select a menu item</div>;
    }
  };
  return (
    <div className="flex w-full">
      <SideBar onMenuSelect={handleMenuSelect} />
      <main className="flex-grow p-4">{renderContent()}</main>
    </div>
  );
}
