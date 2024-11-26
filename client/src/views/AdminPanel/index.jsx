import { useState, useEffect } from "react";
import axios from "axios";

import logo from "../../assets/Logo/logo.png";

import { Link } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// require('dotenv').config();
// const BASE_URL = process.env.VITE_BASE_URL;

const BASE_URL = import.meta.env.VITE_BASE_URL;

console.log(BASE_URL);

const AdminPanel = () => {
  const [userData, setUserData] = useState([]);
  const [counts, setCounts] = useState({ Fixed: 0, Flexible: 0 });
  const [filterPlan, setFilterPlan] = useState("All");

  // Fetch user data from the API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/v1/getInvest/investments`
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
        toast.error("Failed to fetch user data!");
      }
    };

    fetchUsers();
  }, []);

  // Count fixed and flexible plans
  useEffect(() => {
    const countPlans = () => {
      const fixedCount = userData.filter(
        (user) => user.preferredPlan?.toLowerCase() === "fixed" // Use optional chaining
      ).length;
      const flexibleCount = userData.filter(
        (user) => user.preferredPlan?.toLowerCase() === "sip" // Use optional chaining
      ).length;

      setCounts({ Fixed: fixedCount, Flexible: flexibleCount });
    };

    countPlans();
  }, [userData]);

  // Utility to format date
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // Filtered user data based on selected plan
  const filteredData =
    filterPlan === "All"
      ? userData
      : userData.filter(
          (user) =>
            user.preferredPlan?.toLowerCase() === filterPlan.toLowerCase() // Use optional chaining
        );

  // Handle delete action
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/api/v1/deleteInvest/investments/${id}`);

      setUserData(userData.filter((user) => user._id !== id));
      toast.success("Investor deleted successfully!");
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Failed to delete investor!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r bg-[#e1dfd9] p-4 md:px-10">
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-5">
          <Link to="/">
            <img src={logo} alt="Logo" width={130} />
          </Link>
        </div>
      </header>

      {/* Statistics */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-yellow-500 p-4 rounded-lg shadow-md text-center border-2 border-white hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-gray-700">Total Users</h2>
          <p className="text-2xl font-semibold text-white ">
            {userData.length}
          </p>
        </div>
        <div className="bg-yellow-500 p-4 rounded-lg shadow-md text-center border-2 border-white hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-gray-700">
            Fixed Investment Plan
          </h2>
          <p className="text-2xl font-semibold text-white">{counts.Fixed}</p>
        </div>
        <div className="bg-yellow-500 p-4 rounded-lg shadow-md text-center border-2 border-white hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-gray-700">
            Systematic Investment Plan
          </h2>
          <p className="text-2xl font-semibold text-white">{counts.Flexible}</p>
        </div>
      </section>

      {/* Filters */}
      <div className="mb-4 flex justify-end">
        <select
          value={filterPlan}
          onChange={(e) => setFilterPlan(e.target.value)}
          className="bg-white border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none"
        >
          <option value="All">All Plans</option>
          <option value="Fixed">Fixed Plan</option>
          <option value="SIP">SIP Plan</option>
        </select>
      </div>

      {/* User Details */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          User Details
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredData.map((user) => (
            <div
              key={user._id}
              className="bg-[#0c2d57] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col space-y-2"
            >
              <h3 className="text-lg font-bold text-gray-100">
                {user.fullName}
              </h3>
              <p className="text-sm text-gray-300">
                <span className="font-semibold">Email:</span> {user.email}
              </p>
              <p className="text-sm text-gray-300">
                <span className="font-semibold">Phone:</span> {user.phone}
              </p>
              <p className="text-sm text-gray-300">
                <span className="font-semibold">Plan:</span>{" "}
                {user.preferredPlan}
              </p>
              <p className="text-sm text-gray-300">
                <span className="font-semibold">Investment Range:</span>{" "}
                {user.investmentRange}
              </p>
              <p className="text-sm text-gray-300">
                <span className="font-semibold">Investment Time:</span>{" "}
                {user.investmentTime}
              </p>
              <p className="text-sm text-gray-300">
                <span className="font-semibold">Joined On:</span>{" "}
                {formatDate(user.createdAt)}
              </p>

              {/* Action Buttons */}
              <div className="flex space-x-2 mt-4">
                <button
                  onClick={() => handleDelete(user._id)}
                  className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-lg transition-all"
                >
                  Delete
                </button>
                <a
                  href={`tel:${user.phone}`}
                  className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-lg transition-all text-center"
                >
                  Call
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AdminPanel;
