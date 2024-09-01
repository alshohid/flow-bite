import React from "react";

type TabProps = {
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
};

const Tab: React.FC<TabProps> = ({ label, icon, isActive, onClick }) => {
  return (
    <li className="me-2">
      <a
        href="#"
        onClick={onClick}
        className={`inline-flex items-center justify-center p-4 border-b-2 ${
          isActive
            ? "text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500"
            : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
        } rounded-t-lg`}
      >
        <svg
          className={`w-4 h-4 me-2 ${
            isActive
              ? "text-blue-600 dark:text-blue-500"
              : "text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
          }`}
          aria-hidden="true"
        >
          {icon}
        </svg>
        {label}
      </a>
    </li>
  );
};

export default Tab;
