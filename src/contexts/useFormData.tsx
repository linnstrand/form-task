import React from "react";
import { FormDataContext } from "./formDataContext";

// wrapping context in a hook makes sure users gets a helpful error
export const useFormData = () => {
  const context = React.useContext(FormDataContext);
  if (!context) {
    throw new Error("useFormData must be within a FormDataProvider");
  }
  return context;
};
