import { NavLink } from "react-router-dom";
import "../../styles/components/ServiceCard.css";

interface ServiceCardProps {
  slug: string;
  title: string;
  description: string;
}

export default function ServiceCard({ slug, title, description }: ServiceCardProps) {
  return (
    <NavLink to={`/services/${slug}`} className="service-card">
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__description">{description}</p>
    </NavLink>
  );
}
