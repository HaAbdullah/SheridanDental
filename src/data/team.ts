export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  imageSrc?: string;
  imageAlt?: string;
}

export const team: TeamMember[] = [];
