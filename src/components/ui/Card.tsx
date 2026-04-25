import "../../styles/components/Card.css";

interface CardProps {
  padding?: "sm" | "md" | "lg";
  shadow?: boolean;
  hover?: boolean;
  children: React.ReactNode;
}

export default function Card({ padding = "md", shadow = false, hover = false, children }: CardProps) {
  const classes = [
    "card",
    `card--padding-${padding}`,
    shadow ? "card--shadow" : "",
    hover ? "card--hover" : "",
  ].filter(Boolean).join(" ");

  return <div className={classes}>{children}</div>;
}
