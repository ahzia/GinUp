import { RewardsData } from "@/models/Rewards";

export const rewards: RewardsData = {
  rewards: {
    virginRewards: {
      title: "Virgin Reds",
      items: [
        {
          rewardId: "V001",
          name: "Eurostar 200 Euro Vouchers",
          description:
            "Bask in your love for travel, while roaming around the continent. Use your Virgin Points and travel to over 100 destinations across Europe with a simple change of trains in Paris, Brussels or Lille.",
          validity: "Valid until December 31, 2025",
          ginxCost: 40000,
          provider: "Eurostar",
          type: "voucher",
          emoji: "🏨",
          imageUrl: "Voucher_Variants_Eurostar.webp",
        },
        {
          rewardId: "V002",
          name: "Donate to The UN Refugee Agency (UNHCR)",
          description:
            "UNHCR, the UN Refugee Agency, is a global organisation that leads international action to protect people forced to flee their homes because of conflict and persecution.",
          validity: "Valid until December 31, 2024",
          ginxCost: 10000,
          provider: "UNHCR",
          type: "service",
          emoji: "❤️",
          imageUrl: "unhcr.webp",
        },
        {
          rewardId: "V003",
          name: "Virgin Atlantic Reward Seats",
          description:
            "Go on, take a seat. You can use Virgin Points to pay for ANY available seat on ANY Virgin Atlantic flight. Saver reward seats from London to New York start from as little as 6,000 points* + taxes, fees and carrier-imposed surcharges.",
          validity: "Valid until December 31, 2025",
          ginxCost: 6000,
          provider: "Virgin Atlantic",
          type: "experience",
          emoji: "🛫",
          imageUrl: "Virgin-Atlantic-logo.webp",
        },
      ],
    },
    ginUpExclusives: {
      title: "GinUp Exclusives",
      items: [
        {
          rewardId: "G001",
          name: "Digital Impact Badge",
          description:
            "Earn a unique digital badge for your contributions and engagements on GinUp.",
          validity: "Never Expires",
          ginxCost: 100,
          provider: "GinUp",
          type: "digital",
          emoji: "🏅",
          imageUrl: "digital_badge.jpg",
        },
      ],
    },
  },
};
