export default function HeroSection() {
    return (
    <div className="w-full font-inter p-3 ">
        <h1
        className="font-extrabold text-center
            text-[36px] leading-[36px]
            md:text-[60px] md:leading-[60px] md:tracking-[-0.01em]"
    >
        We invest in the world’s potential
    </h1>

    <p className="text-[#9CA3AF] md:text-[18px] md:leading-[30px]  text-center text-[16px] leading-[24px] font-[100px]">
        Here at flowbite we focus on markets where technology, innovation, and
        capital can unlock long-term value and drive economic growth.
    </p>
    <div className="flex flex-col md:flex-row md:justify-center items-center mt-4 space-y-3 md:space-y-0 md:space-x-3">
        <button
        type="button"
        className="w-full md:w-auto text-center text-white bg-[#1A56DB] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center items-center dark:focus:ring-[#3b5998]/55"
        >
        Free trial for 30 days
        </button>
        <button
        type="button"
        className="w-full md:w-auto text-center text-[#111928] bg-[#FFFFFF] border hover:bg-[#FFFFFF]/90 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center items-center dark:focus:ring-[#3b5998]/55"
        >
        Pricing & FAQ
        <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 14 10"
        >
            <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
            />
        </svg>
        </button>
    </div>
    </div>
);
}
