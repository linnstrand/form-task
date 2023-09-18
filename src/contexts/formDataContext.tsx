"use client";
import { UserData } from "@/components/UserForm";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface FormDataContextProps {
  formData: UserData | undefined;
  setFormData: Dispatch<SetStateAction<UserData | undefined>>;
}

export const FormDataContext = createContext<FormDataContextProps | undefined>(
  undefined
);

export const FormDataProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<UserData>();

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};
