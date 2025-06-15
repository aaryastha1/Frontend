import { useState } from "react";
import { registerUserService } from "../services/authServices";
import { toast } from "react-toastify";

export const useRegisterUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const register = async (formData) => {
    setIsLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await registerUserService(formData);

      if (response?.success) {
        toast.success(response.message || "Welcome to Fashora! Registration successful.");
        setData(response);
        return response;
      } else {
        const errorMsg = response?.message || "Registration failed.";
        toast.error(errorMsg);
        setError(errorMsg);
        return null;
      }
    } catch (err) {
      const errorMsg = err?.response?.data?.message || "Something went wrong during registration.";
      toast.error(errorMsg);
      setError(errorMsg);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    register,
    isLoading,
    error,
    data,
  };
};
