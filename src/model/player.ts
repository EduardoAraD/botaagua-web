export interface Player {
  id: string
  name: string;
  position: string;
  number: number;
  overall: number;
  height: string;
  weight: string;
  imageUrl: string;
  stats: {
    goals: number;
    assists: number;
  }
}
