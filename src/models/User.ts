import { StaticImageData } from "next/image";

export interface User {
  id: number;
  name: string;
  age: number;
  email: string;
  profilePic: StaticImageData;
  ginx: number;
  bio: string;
  friends?: number;
  initiativesParticipated?: string[]; // initiative IDs
  initiativesCreated?: string[];      // initiative IDs
  recentActivities?: {
    activity: string;
    time: string;
  }[];
}
