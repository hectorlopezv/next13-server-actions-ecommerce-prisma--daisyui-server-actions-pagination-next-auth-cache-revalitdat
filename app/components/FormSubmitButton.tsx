"use client";

import React, { ComponentProps } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
type Props = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

export default function FormSubmitButton({
  children,
  className,
  ...props
}: Props) {
  const { pending } = useFormStatus();
  return (
    <button
      {...props}
      className={`btn btn-primary ${className}`}
      disabled={pending}
    >
      {pending ? <span className="loading loading-spinner" /> : null}
      {children}
    </button>
  );
}
