"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";

const StepByStepForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    selectedServices: [] as string[],
    projectDetails: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    selectedServices: "",
    projectDetails: "",
  });

  const [step, setStep] = useState(1);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const nextStep = () => {
    if (validateStep()) {
      setStep((prevStep) => Math.min(prevStep + 1, 4));
    }
  };

  const prevStep = () => setStep((prevStep) => Math.max(prevStep - 1, 1));

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleServiceChange = (service: string) => {
    setFormData((prevData) => {
      const services = prevData.selectedServices.includes(service)
        ? prevData.selectedServices.filter((s) => s !== service)
        : [...prevData.selectedServices, service];
      return { ...prevData, selectedServices: services };
    });
  };

  const validateStep = () => {
    const newErrors: any = {};
    if (step === 1) {
      if (!formData.name) newErrors.name = "Name is required";
      if (!formData.email) newErrors.email = "Email is required";
      if (!formData.phone) newErrors.phone = "Phone number is required";
    } else if (step === 2) {
      if (formData.selectedServices.length === 0) {
        newErrors.selectedServices = "Please select at least one service";
      }
    } else if (step === 3) {
      if (!formData.projectDetails)
        newErrors.projectDetails = "Project details are required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = () => {
    setIsConfirmOpen(true);
  };

  const handleConfirmSubmit = async () => {
    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        selectedServices: formData.selectedServices.join(", "),
        projectDetails: formData.projectDetails,
      };

      const response = await emailjs.send(
        "service_3ntk2b4",
        "template_qoox28c",
        templateParams,
        "ZBXndiuibk8B5Fkpp"
      );

      setIsConfirmOpen(false);
      alert("Form submitted successfully!");
    } catch (error) {
      alert("Failed to send email. Please try again later.");
    }
  };

  const ConfirmationDialog = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center text-black">
      <div className="bg-white p-6 rounded-md shadow-lg">
        <p className="text-lg font-bold">Are you sure you want to submit?</p>
        <div className="mt-4 space-x-4">
          <button
            onClick={handleConfirmSubmit}
            className="bg-green-500 text-white py-2 px-6 rounded-md"
          >
            Yes, Submit
          </button>
          <button
            onClick={() => setIsConfirmOpen(false)}
            className="bg-red-500 text-white py-2 px-6 rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );

  const ProgressIndicator = () => (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
      <div
        className="bg-black h-2.5 rounded-full"
        style={{ width: `${(step - 1) * 33}%` }}
      />
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-md mt-10">
      <ProgressIndicator />

      {step === 1 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Step 1: Start a project
          </h2>
          <p className=" text-black">
            Thanks for your interest in working with us. Please complete the
            details below and we will get back to you within one business day.
          </p>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          <input
            type="tel"
            name="phone"
            placeholder="Phone-number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-4 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}

          <button
            onClick={nextStep}
            className="w-full py-3 bg-black text-white rounded-md hover:bg-black transition"
          >
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Step 2: What can we help you with?
          </h2>
          <p className=" text-black">
            Nice to meet you! <span>{formData.name}</span> Select all that
            applies.
          </p>
          {[
            "Web Development",
            "SEO Optimization",
            "Content Creation",
            "Mobile Apps",
            "UI/UX Design",
          ].map((service) => (
            <label key={service} className="block text-black">
              <input
                type="checkbox"
                checked={formData.selectedServices.includes(service)}
                onChange={() => handleServiceChange(service)}
                className="mr-2 text-black"
              />
              {service}
            </label>
          ))}
          {errors.selectedServices && (
            <p className="text-red-500 text-sm">{errors.selectedServices}</p>
          )}

          <div className="flex justify-between">
            <button
              onClick={prevStep}
              className="py-3 px-6 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
            >
              Back
            </button>
            <button
              onClick={nextStep}
              className="py-3 px-6 bg-black text-white rounded-md hover:bg-black transition"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Step 3: Project Details
          </h2>
          <textarea
            name="projectDetails"
            placeholder="Describe your project"
            value={formData.projectDetails}
            onChange={handleChange}
            className="w-full p-4 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
          {errors.projectDetails && (
            <p className="text-red-500 text-sm">{errors.projectDetails}</p>
          )}

          <div className="flex justify-between">
            <button
              onClick={prevStep}
              className="py-3 px-6 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
            >
              Back
            </button>
            <button
              onClick={nextStep}
              className="py-3 px-6 bg-black text-white rounded-md hover:bg-black transition"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Review & Submit</h2>

          <div className="bg-white p-4 rounded-md shadow-md space-y-2">
            <p className="text-gray-700">
              <strong>Name:</strong> {formData.name || "N/A"}
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> {formData.email || "N/A"}
            </p>
            <p className="text-gray-700">
              <strong>Phone:</strong> {formData.phone || "N/A"}
            </p>
            <p className="text-gray-700">
              <strong>Selected Services:</strong>
              {formData.selectedServices.length > 0
                ? formData.selectedServices.join(", ")
                : "None"}
            </p>
            <p className="text-gray-700">
              <strong>Project Details:</strong>{" "}
              {formData.projectDetails || "N/A"}
            </p>
          </div>

          <button
            onClick={onSubmit}
            className="w-full py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          >
            Submit
          </button>
        </div>
      )}

      {isConfirmOpen && <ConfirmationDialog />}
    </div>
  );
};

export default StepByStepForm;
