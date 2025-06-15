import { useFormik } from "formik";
import * as Yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const LoginForm = () => {
  const navigate = useNavigate();
  const [apiError, setApiError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Phone or Email is required"),
      password: Yup.string().min(6, "At least 6 characters").required("Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post("http://localhost:5050/api/auth/login", values);
        if (response.data.success) {
          localStorage.setItem("token", response.data.token);
          navigate("/dashboard");
        } else {
          setApiError(response.data.message || "Login failed");
        }
      } catch (err) {
        setApiError(err.response?.data?.message || "Server error");
      }
    },
  });

  return (
    <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg border border-gray-200 text-left">
      {/* Logo + Title */}
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-brown-700 mb-1">Fashora</h1>
        <p className="text-sm text-gray-600">CLOTHING STORE</p>
        <h2 className="text-xl mt-4 font-semibold text-gray-800">Welcome Back!</h2>
      </div>

      {/* Form */}
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        {/* Email or Phone */}
        <div className="relative">
          <input
            type="text"
            name="email"
            placeholder="Phone / Email"
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
            className="w-full border border-gray-300 rounded-md p-2 pr-10 text-sm"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-700"
          >
            {showPassword ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
          </button>
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>
          )}
        </div>

        {/* Remember Me */}
        <div className="flex items-center text-sm text-gray-600">
          <input type="checkbox" id="remember" className="mr-2" />
          <label htmlFor="remember">Remember Me</label>
        </div>

        {/* Error */}
        {apiError && <p className="text-red-500 text-xs">{apiError}</p>}

        {/* Sign In Button */}
        <button
          type="submit"
          className="w-full bg-[#9B734C] text-white py-2 rounded-md hover:bg-[#805F3F] transition"
        >
          Sign In
        </button>
      </form>

      {/* OR Divider */}
      <div className="flex items-center my-4">
        <hr className="flex-grow border-gray-300" />
        <span className="px-2 text-sm text-gray-500">OR</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      {/* Social Logins */}
      <div className="flex justify-center space-x-4">
        <button className="p-2 border rounded-full hover:bg-gray-100">
          <FcGoogle size={20} />
        </button>
        <button className="p-2 border rounded-full hover:bg-gray-100">
          <FaFacebook size={20} className="text-blue-600" />
        </button>
      </div>

      {/* Sign Up */}
      <p className="mt-4 text-sm text-center text-gray-600">
        Don’t have an account?{" "}
        <NavLink to="/register" className="text-[#9B734C] font-medium hover:underline">
          Sign Up
        </NavLink>
      </p>
    </div>
  );
};

export default LoginForm;
