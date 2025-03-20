export interface Reward {
  rewardId: string;
  name: string;
  description: string;
  validity: string;
  ginxCost: number;
  provider: string;
  type: 
    | "experience"
    | "certificate"
    | "digital"
    | "event"
    | "voucher"
    | "award"
    | "discount"
    | "merchandise"
    | "service";
  emoji: string;
  imageUrl: string;
}

export interface RewardSection {
  title: string;
  items: Reward[];
}

export interface RewardsData {
  rewards: {
    [key: string]: RewardSection;
  };
}
