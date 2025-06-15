import { useFormik } from "formik";
import * as Yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [apiError, setApiError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().min(6, "At least 6 characters").required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm your password"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post("http://localhost:5050/api/auth/register", values);
        if (response.data.success) {
          toast.success("Registration successful!");
          setTimeout(() => navigate("/"), 1000);
        } else {
          toast.error(response.data.message || "Registration failed");
        }
      } catch (err) {
        toast.error(err.response?.data?.message || "Server error");
      }
    },
  });

  return (
    <div className="flex h-screen">
      {/* Left image section */}
      <div className="w-1/2 hidden md:block">
        <img
          src="/assets/fashora-models.jpg"
          alt="Fashion models"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right form section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-10 py-6">
        <div className="max-w-md w-full mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-brown-700 font-serif">Fashora</h1>
            <p className="text-sm text-gray-500">Clothing Store</p>
            <h2 className="mt-4 text-xl font-semibold">Create an Account</h2>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded-md p-2 text-sm pr-10"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-2.5 right-2 text-gray-500"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.confirmPassword}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#9A7B56] text-white py-2 rounded-md font-semibold hover:bg-[#8a6b4b] transition"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <NavLink to="/login" className="text-[#9A7B56] hover:underline">
              Log In
            </NavLink>
          </div>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
};

export default RegisterForm;
