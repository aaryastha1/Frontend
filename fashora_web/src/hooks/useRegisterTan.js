import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../auth/authProvider";

// API call function
const registerUser = async (userData) => {
  const response = await axios.post("/api/register", userData);
  return response.data;
};

export function useRegisterUser() {
  const { login } = useContext(AuthContext); // Optional: if you auto-login after register

  return useMutation({
    mutationFn: registerUser,
    mutationKey: ["fashora_register"],
    onSuccess: (data) => {
      toast.success(data?.message || "Registration successful. Welcome to Fashora!");

      // Optional auto-login after registration
      if (data?.token && data?.data) {
        login(data.data, data.token);
      }
    },
    onError: (error) => {
      const errMsg = error?.response?.data?.message || "Registration failed. Please try again.";
      toast.error(errMsg);
    },
  });
}
