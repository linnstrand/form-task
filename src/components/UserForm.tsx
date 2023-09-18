"use client";
import { FormField } from "@/components/FormField";
import { useFormData } from "@/contexts/useFormData";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export interface UserData {
  firstName: string;
  email: string;
  postalCode: string;
  parentName: string;
}

export const UserForm = () => {
  const router = useRouter();

  const { setFormData } = useFormData();
  const [state, setState] = useState<UserData>({
    firstName: "",
    email: "",
    postalCode: "",
    parentName: "",
  });

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value: (typeof state)[keyof typeof state] = event.target.value;

    event.target.setCustomValidity("");
    setState({ ...state, [event.target.id]: value });
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormData(state);
    router.push("/page2");
  }
  return (
    <form className="main-form" onSubmit={handleSubmit}>
      <FormField
        onChange={onChange}
        name="firstName"
        required
        validationTip="please include a name"
      >
        First Name
      </FormField>
      <FormField
        onChange={onChange}
        name="email"
        validationTip="please use a valid email"
        pattern=".+@.+(\..+)+"
        required
      >
        E-post
      </FormField>
      <FormField
        onChange={onChange}
        name="postalCode"
        pattern="^[0-9]{3}\s?[0-9]{2}$"
        validationTip='please use "123 56" or "12345" format'
        required
      >
        Postnummer
      </FormField>
      <hr />
      <FormField
        onChange={(e) => {
          state.firstName === e.target.value
            ? e.target.setCustomValidity("wrong")
            : onChange(e);
        }}
        name="parentName"
        required
        validationTip="Parent name can't be the same as your name"
      >
        Förnamn på Förälder
      </FormField>
      <button type="submit">Skicka</button>
    </form>
  );
};
