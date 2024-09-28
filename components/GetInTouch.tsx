"use client";
import { CircleCheck, CircleX, Loader } from "lucide-react";
import { Button } from "./ui/button";
import React from "react";
import { toast } from "sonner";

export default function GetInTouch() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = React.useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    const { name, email, subject, message } = formData;
    console.log(name, email, subject, message);
    const url = `https://docs.google.com/forms/d/e/1FAIpQLSddhLjTc0u_GppyWpR_M_DnUKPH1WfEJUMWQ6DUxkpGlMxPOQ/formResponse?&submit=Submit?usp=pp_url&entry.1417599073=${encodeURIComponent(
      name
    )}&entry.1632153933=${encodeURIComponent(
      email
    )}&entry.105810322=${encodeURIComponent(
      subject
    )}&entry.1306149145=${encodeURIComponent(message)}`;
    fetch(url, { mode: "no-cors", method: "POST" })
      .then(() => {
        toast("Form submitted successfully!", {
          action: {
            label: "Close",
            onClick() {},
          },
          icon: <CircleCheck color="green" size={16} />,
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        toast("Message failed to send", {
          action: {
            label: "Close",
            onClick() {},
          },
          icon: <CircleX color="red" size={16} />,
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setLoading(false);
      });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSddhLjTc0u_GppyWpR_M_DnUKPH1WfEJUMWQ6DUxkpGlMxPOQ/viewform?embedded=true"
        className="hidden"
      />
      <form target="">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
          ></textarea>
        </div>
        <Button
          variant={"outline"}
          disabled={loading}
          type="submit"
          onSubmit={handleSubmit}
          className={`hover:text-white transition-colors bg-zinc-100 hover:bg-zinc-900`}
        >
          {" "}
          {loading && <Loader size={16} className="animate-spin mr-1" />}
          Send Message
        </Button>
      </form>
    </div>
  );
}
