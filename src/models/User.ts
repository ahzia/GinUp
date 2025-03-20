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
  initiativesParticipated?: number[]; // initiative IDs
  initiativesCreated?: number[];      // initiative IDs
  recentActivities?: {
    activity: string;
    time: string;
  }[];
}
