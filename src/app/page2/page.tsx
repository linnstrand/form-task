"use client";

import { useFormData } from "@/contexts/useFormData";
import { useEffect } from "react";

const Page2 = () => {
  const { formData } = useFormData();

  // logging form data to confirm it is available
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <main>
      <h1>Sida 2</h1>
      <a href="/">Gå till sida 1 igen</a>
    </main>
  );
};
export default Page2;
