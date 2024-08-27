import Card from "@/ui/Card";

export default function Testimonial() {
  return (
    <div className="bg-[#FFFFFF] space-y-6 p-4">
      <div className="flex justify-center ">
        <div>
          <h1 className="md:text-[36px] md:leading-[45px] md:text-center text-start text-[30px] leading-[37px]  text-[#111928]">
            Testimonials
          </h1>
          <p className="md:text-[20px] md:leading-[30px] text-[16px] leading-[24px] text-[#6B7280] font-thin md:text-center">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </p>
        </div>
      </div>
      <div className="w-full p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-md ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex flex-col justify-center items-center py-6 ">
          <button
            type="button"
            className="text-[#111928] bg-[#FFFFFF] border border-[#E5E7EB] hover:bg-[#e9e8e8] w-full md:max-w-[150px] focus:outline-none  font-small rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            View more
          </button>
        </div>
      </div>
    </div>
  );
}
