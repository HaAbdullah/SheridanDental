import "../../styles/components/Button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function Button({ variant = "primary", size = "md", children, ...props }: ButtonProps) {
  return (
    <button className={`btn btn--${variant} btn--${size}`} {...props}>
      {children}
    </button>
  );
}
