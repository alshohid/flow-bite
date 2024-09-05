

export default function Card({item}:any) {
  return (
    <div className="bg-[#F9FAFB] max-w-full h-auto p-4 rounded-md">
      <h1 className="text-[18px] text-[#111928] leading-[22px] font-semibold">
        {item?.title}
      </h1>
      <p className="text-[14px] leading-[21px] text-[#6B7280] text-justify">
        {item?.description}
      </p>

      <div className="flex items-center gap-4">
        <img
          className="w-10 h-10 rounded-full"
          src={item.imgCdn ?? "/images/profile_pic.png"}
          alt="img"
        />
        <div className="font-medium dark:text-white">
          <div>Bonnie Green</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {item?.imgDescription}
          </div>
        </div>
      </div>
    </div>
  );
}
