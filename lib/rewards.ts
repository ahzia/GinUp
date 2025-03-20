import { RewardsData } from "@/models/Rewards";

// Note: Replace the imageUrl strings with the actual image paths in your project.
export const rewards: RewardsData = {
  rewards: {
    virginRewards: {
      title: "Virgin Reds",
      items: [
        {
          rewardId: "V001",
          name: "VIP Sustainable Flight Tour",
          description:
            "Get a behind-the-scenes tour of Virgin Atlantic’s sustainable aircraft, featuring the historic Flight100.",
          validity: "Valid until December 31, 2024",
          ginxCost: 500,
          provider: "Virgin Atlantic",
          type: "experience",
          emoji: "✈️",
          imageUrl: "virgin_atlantic_vip.jpg",
        },
        {
          rewardId: "V002",
          name: "Carbon Offset Certificate",
          description:
            "Receive a certificate recognizing your contribution to reducing aviation’s carbon footprint, in collaboration with Virgin Atlantic & Virgin Unite.",
          validity: "Valid until December 31, 2024",
          ginxCost: 300,
          provider: "Virgin Atlantic",
          type: "certificate",
          emoji: "🌍",
          imageUrl: "carbon_offset.jpg",
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
        {
          rewardId: "G002",
          name: "Exclusive Webinar Access",
          description:
            "Join an exclusive webinar featuring Virgin leaders discussing sustainability trends.",
          validity: "Valid until December 31, 2024",
          ginxCost: 250,
          provider: "GinUp",
          type: "event",
          emoji: "🎥",
          imageUrl: "webinar_access.jpg",
        },
      ],
    },
    partnerRewards: {
      title: "Partner Rewards",
      items: [
        {
          rewardId: "P001",
          name: "Epic Onboard Dinner",
          description:
            "Enjoy a complimentary onboard dinner experience on a Virgin Voyages cruise.",
          validity: "Valid until December 31, 2024",
          ginxCost: 600,
          provider: "Virgin Voyages",
          type: "experience",
          emoji: "🍽️",
          imageUrl: "onboard_dinner.jpg",
        },
        {
          rewardId: "P002",
          name: "Device Trade-in Voucher",
          description:
            "Redeem a voucher when you trade in your old device via Virgin Media O2’s O2 Recycle service.",
          validity: "Valid until December 31, 2024",
          ginxCost: 100,
          provider: "Virgin Media O2",
          type: "service",
          emoji: "📱",
          imageUrl: "device_tradein.jpg",
        },
        {
          rewardId: "P003",
          name: "Digital Connectivity Package",
          description:
            "Access special deals aimed at bridging the digital divide through Community Calling.",
          validity: "Valid until December 31, 2024",
          ginxCost: 200,
          provider: "Virgin Media O2",
          type: "service",
          emoji: "💻",
          imageUrl: "digital_package.jpg",
        },
        {
          rewardId: "P004",
          name: "Eco-Rating Reward",
          description:
            "Receive recognition for choosing sustainable mobile options through the Eco Rating Scheme.",
          validity: "Valid until December 31, 2024",
          ginxCost: 150,
          provider: "Virgin Media O2",
          type: "certificate",
          emoji: "📊",
          imageUrl: "eco_rating.jpg",
        },
        {
          rewardId: "P005",
          name: "Exclusive Community Merchandise",
          description:
            "Score limited edition merchandise from the Pride 'n Purpose initiative.",
          validity: "While stocks last",
          ginxCost: 300,
          provider: "Virgin Limited Edition",
          type: "merchandise",
          emoji: "👕",
          imageUrl: "community_merch.jpg",
        },
        {
          rewardId: "P006",
          name: "Cultural Experience Voucher",
          description:
            "Enjoy an immersive cultural experience with Mahali Mzuri: Inua Jamii.",
          validity: "Valid until December 31, 2024",
          ginxCost: 350,
          provider: "Virgin Limited Edition",
          type: "experience",
          emoji: "🎟️",
          imageUrl: "cultural_experience.jpg",
        },
        {
          rewardId: "P007",
          name: "Planetary Guardian Badge",
          description:
            "Earn a badge that recognizes your commitment to global sustainability with Virgin Unite.",
          validity: "Never Expires",
          ginxCost: 250,
          provider: "Virgin Unite",
          type: "digital",
          emoji: "🌐",
          imageUrl: "guardian_badge.jpg",
        },
        {
          rewardId: "P008",
          name: "Leadership Roundtable Access",
          description:
            "Join an exclusive roundtable with visionary leaders from The Elders initiative.",
          validity: "Valid until December 31, 2024",
          ginxCost: 400,
          provider: "Virgin Unite",
          type: "event",
          emoji: "💼",
          imageUrl: "leadership_roundtable.jpg",
        },
        {
          rewardId: "P009",
          name: "Ocean Conservation Experience",
          description:
            "Participate in an exclusive event dedicated to ocean conservation with Ocean Unite / ORRAA.",
          validity: "Valid until December 31, 2024",
          ginxCost: 500,
          provider: "Virgin Unite",
          type: "experience",
          emoji: "🚤",
          imageUrl: "ocean_conservation.jpg",
        },
        {
          rewardId: "P010",
          name: "Volunteer Recognition Badge",
          description:
            "Earn a digital badge for your volunteer efforts during community mapping (HOT).",
          validity: "Never Expires",
          ginxCost: 100,
          provider: "Virgin Unite",
          type: "digital",
          emoji: "🏅",
          imageUrl: "volunteer_badge.jpg",
        },
        {
          rewardId: "P011",
          name: "Whale Interpreter Certification",
          description:
            "Get certified as a whale interpreter by supporting Project CETI.",
          validity: "Valid until December 31, 2024",
          ginxCost: 300,
          provider: "Virgin Unite",
          type: "certificate",
          emoji: "🐋",
          imageUrl: "whale_certification.jpg",
        },
        {
          rewardId: "P012",
          name: "Atlas Community Impact Voucher",
          description:
            "Support local communities in the Atlas Mountains with a special impact voucher from the Eve Branson Foundation.",
          validity: "Valid until December 31, 2024",
          ginxCost: 350,
          provider: "Virgin Unite",
          type: "voucher",
          emoji: "🌄",
          imageUrl: "atlas_impact.jpg",
        },
        {
          rewardId: "P013",
          name: "Community Change Maker Award",
          description:
            "Be recognized as a change maker in your community with an award from Unite BVI.",
          validity: "Valid until December 31, 2024",
          ginxCost: 200,
          provider: "Virgin Unite",
          type: "award",
          emoji: "🏆",
          imageUrl: "change_maker.jpg",
        },
      ],
    },
  },
};
