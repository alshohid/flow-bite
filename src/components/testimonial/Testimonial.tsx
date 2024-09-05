"use client"
import Card from "@/ui/Card";
import { useEffect, useState } from "react";
export interface TestimonialData {
  id: number;
  title: string;
  description: string;
  imgCdn: string;
  imgDescription: string;
}
export default function Testimonial() {
    const [testimonials, setTestimonials] = useState<TestimonialData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      const fetchTestimonials = async () => {
        try {
          const response = await fetch(
            "http://localhost:3000/api/dashboard/testimonial/retrive/"
          );

          if (!response.ok) {
            throw new Error("Failed to fetch testimonials");
          }

          const data = await response.json();
          setTestimonials(data?.data);
          setLoading(false)
        } catch (error: any) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchTestimonials();
    }, []);

  return (
    <div
      className="bg-[#FFFFFF] space-y-6 p-4  wow  animate__fadeInUp "
      data-wow-duration="2s"
      data-wow-iteration="1"
    >
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
          {loading ? <div>Loading</div> : <>{testimonials.length > 0 ? <>
          {testimonials.map((item :any,index:any)=>{
            return <Card item={item} key={index}/>;
          })}
          </>:<div className="">No data records</div>}</>}
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
