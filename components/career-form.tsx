"use client";

import axios from "axios";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

const CareerForm = () => {
  const [isSending, setIsSending] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "job-career",
    message: "",
  });

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsSending(true);

      console.log(formData);
      await axios.post("/api/career", formData);

      toast.success("Form submitted successfully", {
        description:
          "Thank you for showing interest in ADPI Pharmaceuticals. We will get back to you soon.",
      });
      setFormData({
        name: "",
        phone: "",
        email: "",
        interest: "job-career",
        message: "",
      });
    } catch (error) {
      let errTitle = "Failed to send message";
      let errDescription = "Please try again later.";

      if (axios.isAxiosError(error)) {
        errTitle = error.response?.data && error.response?.data?.error;
        errDescription = error.response?.data && error.response?.data.details;
      }

      toast.error(errTitle, {
        description: errDescription,
      });

      console.log("Error: ", {
        errTitle,
        errDescription,
        error,
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="space-y-4 bg-gray-900/50 p-6 rounded-xl border border-gray-800"
      data-aos="fade-left"
    >
      <h3 className="text-2xl font-semibold text-gray-200 mb-4">
        Express Your Interest
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label
            className="mb-1 block text-sm font-medium text-gray-300"
            htmlFor="name"
          >
            Name
          </label>
          <input
            value={formData.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, name: e.target.value })
            }
            id="name"
            type="text"
            className="form-input w-full rounded-lg border-gray-700 bg-gray-800 text-gray-200 focus:border-teal-500 focus:ring-teal-500 placeholder:text-gray-500"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label
            className="mb-1 block text-sm font-medium text-gray-300"
            htmlFor="phone"
          >
            Phone
          </label>
          <input
            value={formData.phone}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            id="phone"
            type="tel"
            minLength={10}
            maxLength={10}
            className="form-input w-full rounded-lg border-gray-700 bg-gray-800 text-gray-200 focus:border-teal-500 focus:ring-teal-500 placeholder:text-gray-500"
            placeholder="Your Phone"
            required
          />
        </div>
      </div>
      <div>
        <label
          className="mb-1 block text-sm font-medium text-gray-300"
          htmlFor="email"
        >
          Email
        </label>
        <input
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          id="email"
          type="email"
          className="form-input w-full rounded-lg border-gray-700 bg-gray-800 text-gray-200 focus:border-teal-500 focus:ring-teal-500 placeholder:text-gray-500"
          placeholder="you@example.com"
          required
        />
      </div>
      <div>
        <label
          className="mb-1 block text-sm font-medium text-gray-300"
          htmlFor="interest"
        >
          Area of Interest
        </label>
        <select
          value={formData.interest}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setFormData({ ...formData, interest: e.target.value })
          }
          id="interest"
          className="form-select w-full rounded-lg border-gray-700 bg-gray-800 text-gray-200 focus:border-teal-500 focus:ring-teal-500"
        >
          <option value="job-career">Job / Career</option>
          <option value="franchise">Franchise</option>
          <option value="distribution-partnership">
            Distribution / Partnership
          </option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label
          className="mb-1 block text-sm font-medium text-gray-300"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          value={formData.message}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setFormData({ ...formData, message: e.target.value })
          }
          id="message"
          rows={4}
          className="form-textarea w-full rounded-lg border-gray-700 bg-gray-800 text-gray-200 focus:border-teal-500 focus:ring-teal-500 placeholder:text-gray-500"
          placeholder="Tell us about your interest..."
          required
        ></textarea>
      </div>
      <div className="pt-4">
        <button
          type="submit"
          disabled={isSending}
          className="btn w-full bg-gradient-to-t from-teal-600 to-teal-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] disabled:opacity-50"
        >
          {isSending ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            "Submit Application"
          )}
        </button>
      </div>
    </form>
  );
};

export default CareerForm;
