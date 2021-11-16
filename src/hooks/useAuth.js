import { useContext } from "react";
import { AllContext } from "../context/AuthProvider";

const useAuth = () => {
  return useContext(AllContext);
};

export default useAuth;
