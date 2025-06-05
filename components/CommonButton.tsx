// components/CommonButton.tsx
import React from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary";

interface CommonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<Exclude<ButtonVariant, "tertiary">, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary", // Uses CSS variables
  secondary: "bg-secondary text-primary-foreground hover:bg-secondary",
};

const CommonButton: React.FC<CommonButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  ...props
}) => {
  if (variant === "tertiary") {
    const tertiaryClass = `
      bg-transparent
      text-muted-foreground
      border
      border-muted
      px-6 py-3
      rounded-xl
      font-medium font-poppins
      transition duration-200 ease-in-out
    `;
    return (
      <button
        className={`${tertiaryClass} ${className}`.trim()}
        {...props}
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
