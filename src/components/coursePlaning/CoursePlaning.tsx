import CoursePlaneCard from "@/ui/CoursePlaneCard";
import Table from "@/ui/Table";

export default function CoursePlaning() {
  return (
    <div className="w-full">
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 md:text-[36px]  font-extrabold tracking-tight leading-none text-gray-900  dark:text-white">
            We invest in the world’s potential
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
          <div
            className="inline-flex space-x-2 rounded-md shadow-sm"
            role="group"
          >
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-black border rounded-sm border-gray-200  hover:bg-gray-100    dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              Monthly
            </button>
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-black border-t border  rounded-sm   border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              Yearly
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 p-4">
          <CoursePlaneCard />
          <CoursePlaneCard />
          <CoursePlaneCard />
        </div>
        <div>
            <Table/>
        </div>
      </section>
    </div>
  );
}
