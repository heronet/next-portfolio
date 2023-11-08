export interface ProjectType {
  id: number;
  title: string;
  subtitle: string;
  imgUrl: string;
  links: { id: number; title: string; url: string }[];
  techs: { id: number; title: string; logo: string }[];
  description: string;
}
