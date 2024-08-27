import Image from "next/image";

export default function Card() {
  return (
    <div className="bg-[#F9FAFB] max-w-full h-auto p-4 rounded-md">
      <h1 className="text-[18px] text-[#111928] leading-[22px] font-semibold">
        Solid foundation for any project
      </h1>
      <p className="text-[14px] leading-[21px] text-[#6B7280] text-justify">
        This is a very complex and beautiful set of elements. Under the hood it
        comes with the best things from 2 different worlds: Figma and Tailwind.
      </p>

      <div className="flex items-center gap-4">
        <img
          className="w-10 h-10 rounded-full"
          src="/images/profile_pic.png"
          alt="img"
        />
        <div className="font-medium dark:text-white">
          <div>Bonnie Green</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Web developer @themesberg
          </div>
        </div>
      </div>
    </div>
  );
}
