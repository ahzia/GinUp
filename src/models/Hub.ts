import { StaticImageData } from "next/image";
export interface Chat {
  id: number;
  userId: number;
  message: string;
  timestamp: string;
}

export interface Hub {
  hub_id: number;
  name: string;
  description: string;
  created_by: string;
  status: string;
  participants: number;
  max_participants: number;
  category: string;
  image: StaticImageData;
  groupChat?: Chat[];
}
