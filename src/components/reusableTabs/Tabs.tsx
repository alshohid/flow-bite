"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type TabItem = {
  label: string;
  url: string;
};

type TabsProps = {
  tabs: TabItem[];
  localStorageKey: string;
};

const Tabs: React.FC<TabsProps> = ({ tabs, localStorageKey }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    const savedIndex = localStorage.getItem(localStorageKey);
    if (savedIndex !== null) {
      setActiveIndex(parseInt(savedIndex, 10));
    }
  }, [localStorageKey]);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    localStorage.setItem(localStorageKey, index.toString());
    router.push(tabs[index].url);
  };

  return (
    <div className=" dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        {tabs.map((tab, index) => (
          <li key={index} className="me-2">
            <button
              onClick={() => handleTabClick(index)}
              className={`inline-flex items-center justify-center p-4 border-b-2 ${
                index === activeIndex
                  ? "text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500"
                  : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              } rounded-t-lg group`}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
