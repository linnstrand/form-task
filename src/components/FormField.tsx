import React, {
  ChangeEventHandler,
  InputHTMLAttributes,
  InvalidEvent,
  ReactNode,
} from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  onChange: ChangeEventHandler<HTMLInputElement>;
  name: string;
  validationTip: string;
  children: ReactNode;
}

export const FormField = ({
  onChange,
  name,
  children,
  type = "text",
  validationTip,
  ...rest
}: Props) => {
  const onInvalid = (event: InvalidEvent<HTMLInputElement>) => {
    event.target.validity.valueMissing
      ? `${name} is required`
      : event.target.setCustomValidity(validationTip);
  };

  return (
    <>
      <label htmlFor={name}>{children}:</label>
      <div className="input-field">
        <input
          type={type}
          title={validationTip}
          id={name}
          name={name}
          onInvalid={onInvalid}
          onChange={onChange}
          {...rest}
        />
      </div>
    </>
  );
};
