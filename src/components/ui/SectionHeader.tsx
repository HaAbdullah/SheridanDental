import "../../styles/components/SectionHeader.css";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeader({ label, title, subtitle, align = "left" }: SectionHeaderProps) {
  return (
    <div className={`section-header section-header--${align}`}>
      {label && <p className="section-header__label">{label}</p>}
      <h2 className="section-header__title">{title}</h2>
      {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
    </div>
  );
}
