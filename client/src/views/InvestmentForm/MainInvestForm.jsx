import { useState,  useCallback, useMemo } from "react";
import { useParams } from "react-router-dom";
import useAOS from "../../customHooks/useAOS";
import { toast } from "react-toastify";

// require('dotenv').config();
// const BASE_URL = process.env.VITE_BASE_URL;

const BASE_URL = import.meta.env.VITE_BASE_URL;

const MainInvestForm = () => {
  const { plan } = useParams(); // Get the plan from the URL path
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    phone: "",
    preferredPlan: plan === "SIP" ? "SIP" : plan === "fixed" ? "Fixed" : "",
    investmentRange: "",
    investmentTime: "",
    transactionalConsent: false,
    marketingConsent: false,
    dataConsent: false,
  });
  useAOS();

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/api/v1/createInvest/investments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Form submitted successfully!", { autoClose: 2000 });
        setFormData({
          email: "",
          fullName: "",
          phone: "",
          preferredPlan:
            plan === "SIP" ? "SIP" : plan === "fixed" ? "Fixed" : "",
          investmentRange: "",
          investmentTime: "",
          transactionalConsent: false,
          marketingConsent: false,
          dataConsent: false,
        });
      } else {
        toast.error("Failed to submit form!", { autoClose: 2000 });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again later.", {
        autoClose: 2000,
      });
    }
  };

  // Determine form title and minimum investment range
  const formTitle = useMemo(() => {
    return plan === "SIP"
      ? "Systematic Investment Plan (SIP)"
      : plan === "fixed"
      ? "Secure Growth Plan"
      : "Investment Form";
  }, [plan]);

  const investmentRanges = useMemo(() => {
    return plan === "fixed"
      ? [
          "£5,000-£10,000",
          "£10,000-£25,000",
          "£25,000-£100,000",
          "More than £100,000",
        ]
      : [
          "Less than £1,000",
          "£5,000-£10,000",
          "£10,000-£25,000",
          "£25,000-£100,000",
          "More than £100,000",
        ];
  }, [plan]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div
        className="bg-white shadow-md rounded-lg p-6 md:p-10 max-w-3xl w-full"
        data-aos="fade-up"
      >
        <h1 className="text-xl md:text-2xl font-bold text-gray-600 mb-6 text-center">
          {formTitle}
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-600"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your Email"
              className="mt-1 px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500 transition text-sm text-gray-600"
              required
            />
          </div>
          {/* Full Name */}
          <div className="flex flex-col">
            <label
              htmlFor="fullName"
              className="text-sm font-medium text-gray-600"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="mt-1 px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500 transition text-sm text-gray-600"
              required
            />
          </div>
          {/* Phone Number */}
          <div className="flex flex-col">
            <label
              htmlFor="phone"
              className="text-sm font-medium text-gray-600"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="mt-1 px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500 transition text-sm text-gray-600"
              required
            />
          </div>
          {/* Preferred Plan */}
          {plan !== "SIP" && plan !== "fixed" && (
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-600">
                Preferred Plan
              </label>
              <div className="flex flex-col mt-2 space-y-2 text-sm text-gray-600">
                <label>
                  <input
                    type="radio"
                    name="preferredPlan"
                    value="Fixed"
                    className="mr-2"
                    checked={formData.preferredPlan === "Fixed"}
                    onChange={handleChange}
                    required
                  />
                  Fixed Investment Plan
                </label>
                <label>
                  <input
                    type="radio"
                    name="preferredPlan"
                    value="SIP"
                    className="mr-2"
                    checked={formData.preferredPlan === "SIP"}
                    onChange={handleChange}
                    required
                  />
                  Systematic Investment Plan
                </label>
              </div>
            </div>
          )}
          {/* Range of Investment */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600">
              Range of Investment? <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-col mt-2 space-y-2 text-sm text-gray-600">
              {investmentRanges.map((range, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="investmentRange"
                    value={range}
                    className="mr-2"
                    checked={formData.investmentRange === range}
                    onChange={handleChange}
                    required
                  />
                  {range}
                </label>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600">
              Time Period of Investment?
            </label>
            <div className="flex flex-col mt-2 space-y-2 text-sm text-gray-600">
              {[
                "1 Year to 2 Years",
                "2 Years to 5 Years",
                "5 Years to 20 Years",
                "More than 20 Years",
              ].map((time, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="investmentTime"
                    value={time} // Use the time period value dynamically
                    className="mr-2"
                    checked={formData.investmentTime === time} // Check if this is the selected option
                    onChange={handleChange} // Update the state when clicked
                    required
                  />
                  {time}
                </label>
              ))}
            </div>
          </div>
          <div className="text-sm text-gray-600">
            <p>
              12% Profit is committed to protecting and respecting your privacy.
              We’ll use your personal information solely to administer your
              account and to provide the products and services you’ve requested
              from us. In addition to necessary transactional communications, we
              would also like to occasionally contact you about our products,
              services, and other content that may interest you. If you consent
              to us contacting you for these purposes, please select your
              communication preferences below:
            </p>

            <label className="block mt-2">
              <input
                type="checkbox"
                name="transactionalConsent" // Add a unique name
                className="mr-2"
                checked={formData.transactionalConsent} // Bind to state
                onChange={handleChange} // Handle changes
                required
              />
              I agree to receive transactional communications (KYC and Deposits)
              related to my account and investments.*
            </label>

            <label className="block mt-2">
              <input
                type="checkbox"
                name="marketingConsent" // Add a unique name
                className="mr-2"
                checked={formData.marketingConsent} // Bind to state
                onChange={handleChange} // Handle changes
                required
              />
              I agree to receive marketing and informational communications from
              12% Profit.
            </label>

            <p className="mt-2">
              To provide you with the content and services requested, we need to
              store and process your personal data. If you consent to 12% Profit
              storing and processing your personal data for these purposes,
              please tick the checkbox below:
            </p>

            <label className="block mt-2">
              <input
                type="checkbox"
                name="dataConsent" // Add a unique name
                className="mr-2"
                checked={formData.dataConsent} // Bind to state
                onChange={handleChange} // Handle changes
                required
              />
              I agree to allow 12% Profit to store and process my personal
              data.* Please complete this required field.
            </label>

            <p className="mt-2">
              You can unsubscribe from these communications at any time. For
              more information on how to unsubscribe, our privacy practices, and
              how we are committed to protecting and respecting your privacy,
              please review our Privacy Policy.
            </p>
          </div>
          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MainInvestForm;
