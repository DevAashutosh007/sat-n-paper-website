// components/CommonButton.tsx

import React from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary";

interface CommonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<Exclude<ButtonVariant, "tertiary">, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-zinc-500 text-white hover:bg-zinc-600",
};

const CommonButton: React.FC<CommonButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  ...props
}) => {
  if (variant === "tertiary") {
    const tertiaryClass =
      "bg-zinc-500 text-[#6D6D6D] border border-[#8A8A8A] px-6 py-3 rounded-xl font-medium font-poppins transition duration-200 ease-in-out";
    return (
      <button
        className={`${tertiaryClass} ${className}`.trim()}
        {...props}
        style={{ background: "transparent" }}
      >
        {children}
      </button>
    );
  }

  const baseClasses =
    "px-6 py-3 rounded-xl font-medium font-poppins transition duration-200 ease-in-out";
  const finalClassName = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  return (
    <button className={finalClassName} {...props}>
      {children}
    </button>
  );
};

export default CommonButton;
