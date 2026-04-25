import "../../styles/components/TeamMemberCard.css";

interface TeamMemberCardProps {
  name: string;
  title: string;
  bio: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function TeamMemberCard({ name, title, bio, imageSrc, imageAlt }: TeamMemberCardProps) {
  return (
    <div className="team-card">
      {imageSrc ? (
        <img src={imageSrc} alt={imageAlt ?? name} className="team-card__photo" />
      ) : (
        <div className="image-placeholder team-card__photo" style={{ aspectRatio: "3/4" }} aria-label="Photo coming soon" />
      )}
      <h3 className="team-card__name">{name}</h3>
      <p className="team-card__title">{title}</p>
      <p className="team-card__bio">{bio}</p>
    </div>
  );
}
