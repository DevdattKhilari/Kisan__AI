export interface Review {
  id?: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  comment: string;
  longComment?: string;
  image: string;
  farmType: string;
  date: string;
}