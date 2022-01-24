interface ButtonProps {
  value?: string;
  onClick?: () => {};
  variant?: "primary" | "secondary" | "default";
}

const variantClasses = {
  primary: "bg-purple-500 text-white active:bg-purple-400",
  secondary: "bg-blue-500 text-white active:bg-blue-400",
  default: "bg-white text-black active:bg-gray-100",
};

const Button = ({ value, onClick, variant = "default" }: ButtonProps) => {
  const classesForVariant = variantClasses[variant];

  return (
    <button
      className={`px-4 py-2 border rounded-md font-medium shadow active:shadow-none ${classesForVariant}`}
      onClick={onClick}
    >
      {value || "Button"}
    </button>
  );
};

export default Button;
