import SideBar from "../sidebar/SideBar";

export default function Comapny() {
  return (
    <div className="w-full bg-[#F9FAFB]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div className="md:p-4 divide-y">
          <div>
            <h1 className="md:leading-[45px] md:text-[36px] font-bold text-[30px] leading-[37px]">
              Work with tools you already use
            </h1>
            <p className="md:text-[20px] text-[16px] md:leading-[30px] leading-[24px] text-[#6B7280]">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions.Accelerate critical development work,
              eliminate toil, and deploy changes with ease.
            </p>
          </div>
          <div className="py-4">
            <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                  aria-hidden="true"
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
                <span className="text-[#111928] text-[16px] leading-[24px]">
                  Continuous integration and deployment
                </span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                  aria-hidden="true"
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
                <span className="text-[#111928] text-[16px] leading-[24px]">
                  Development workflow
                </span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                  aria-hidden="true"
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
                <span className="text-[#111928] text-[16px] leading-[24px]">
                  Knowledge management
                </span>
              </li>
            </ul>
          </div>
          <p className="text-[20px] leading-[30px] text-[#6B7280]">
            Deliver great service experiences fast - without the complexity of
            traditional ITSM solutions.
          </p>
        </div>
        <div className="w-full ">
          <div
            className="w-full h-full bg-no-repeat"
            style={{
              backgroundImage: "url(/sidebar_pic.png)",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div className="w-full flex  ">
          <SideBar />
        </div>
        <div className="md:p-4 divide-y">
          <div>
            <h1 className="md:leading-[45px] md:text-[36px] font-bold text-[30px] leading-[37px]">
              Work with tools you already use
            </h1>
            <p className="md:text-[20px] text-[16px] md:leading-[30px] leading-[24px] text-[#6B7280]">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions.Accelerate critical development work,
              eliminate toil, and deploy changes with ease.
            </p>
          </div>
          <div className="py-4">
            <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                  aria-hidden="true"
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
                <span className="text-[#111928] text-[16px] leading-[24px]">
                  Continuous integration and deployment
                </span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                  aria-hidden="true"
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
                <span className="text-[#111928] text-[16px] leading-[24px]">
                  Development workflow
                </span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                  aria-hidden="true"
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
                <span className="text-[#111928] text-[16px] leading-[24px]">
                  Knowledge management
                </span>
              </li>
            </ul>
          </div>
          <p className="text-[20px] leading-[30px] text-[#6B7280]">
            Deliver great service experiences fast - without the complexity of
            traditional ITSM solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
