"use client";

export default function Statistics() {
  return (
    <div className="bg-[#F9FAFB]">
      <div className="grid grid-cols-1  md:grid-cols-2 gap-3 divide-x">
        <div className="md:p-16 p-8 divide-y">
          <h1 className="text-[#111928] md:text-[36px] md:leading-[45px] text-[30px] leading-[37px] font-bold">
            Stats that matter
          </h1>
          <p className="md:text-[20px] text-justify md:leading-[30px] text-[#6B7280] text-[16px] leading-[24px] ">
            Our rigorous security and compliance standards are at the heart of
            all we do. We work tirelessly to protect you and your customers.
          </p>
          <div>
            <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
                <span className="text-[#111928]">Individual configuration</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
                <span className="text-[#111928]">No setup, or hidden fees</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
                <span className="text-[#111928]">
                  Team size:{" "}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    1 developer
                  </span>
                </span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
                <span className="text-[#111928]">
                  Premium support:
                  <span className="font-semibold text-gray-900 dark:text-white">
                    6 months
                  </span>
                </span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
                <span className="text-[#111928]">
                  Free updates:
                  <span className="font-semibold text-gray-900 dark:text-white">
                    6 months
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            backgroundImage: 'url("/card_img.png")',
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "350px",
          }}
        ></div>
      </div>
    </div>
  );
}
