"use client";
import { ErrorToast, SuccessToast } from "@/utill/FormHelper";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import styles
import { useRouter } from "next/navigation";
const TestimonialDataEntryForm = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imgCdn: "",
    imgDescription: "",
  });

  const handleQuillChange = (field: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3000/api/dashboard/testimonial/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();

      if (response.ok && data.status === "success") {
        SuccessToast("Testimonial added  successfully!");
        router.replace("/")
      } else {
        ErrorToast("Something went wrong");
      }
    } catch (error) {
      console.error("Network error:", error);
      // Handle network error
    }
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="w-full mx-auto p-6 bg-white shadow-md rounded-md space-y-6"
      >
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title (ReactQuill)
          </label>
          <ReactQuill
            value={formData.title}
            onChange={(value) => handleQuillChange("title", value)}
            className="mt-1"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description (ReactQuill)
          </label>
          <ReactQuill
            value={formData.description}
            onChange={(value) => handleQuillChange("description", value)}
            className="mt-1"
          />
        </div>

        <div>
          <label
            htmlFor="imgCdn"
            className="block text-sm font-medium text-gray-700"
          >
            Image CDN (ReactQuill)
          </label>
          <ReactQuill
            value={formData.imgCdn}
            onChange={(value) => handleQuillChange("imgCdn", value)}
            className="mt-1"
          />
        </div>

        <div>
          <label
            htmlFor="imgDescription"
            className="block text-sm font-medium text-gray-700"
          >
            Image Description (ReactQuill)
          </label>
          <ReactQuill
            value={formData.imgDescription}
            onChange={(value) => handleQuillChange("imgDescription", value)}
            className="mt-1"
          />
        </div>

        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="max-w-2xl  py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default TestimonialDataEntryForm;
