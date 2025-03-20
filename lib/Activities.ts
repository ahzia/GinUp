// activities.ts

export interface Activity {
    activityId: string;
    initiativeId: string; // the initiative this activity belongs to
    name: string;
    description: string;
    reward: number; // amount of Smiles earned upon completion
    requiredTime: string; // e.g. "2 hours", "1 day"
    effortLevel: "Low" | "Medium" | "High";
    status: "active" | "completed" | "pending";
    deadline?: string; // optional deadline
    steps?: number; // optional: if the activity has multiple steps
    currentStep?: number; // optional: to track progress
  }
  
  export const activities: Activity[] = [
    {
      activityId: "A001",
      initiativeId: "001", // e.g., Virgin Atlantic's initiative
      name: "Volunteer at Sustainability Fair",
      description:
        "Spend 4 hours volunteering at a local sustainability fair. Engage with community members, share green practices, and help promote renewable energy initiatives.",
      reward: 50,
      requiredTime: "4 hours",
      effortLevel: "Medium",
      status: "active",
    },
    {
      activityId: "A002",
      initiativeId: "002", // e.g., Virgin Atlantic & Virgin Unite
      name: "Organize a Community Clean-Up",
      description:
        "Lead or participate in a community clean-up event to improve local environments and spread awareness on environmental impact.",
      reward: 75,
      requiredTime: "3 hours",
      effortLevel: "High",
      status: "active",
    },
    {
      activityId: "A003",
      initiativeId: "003", // e.g., Virgin Voyages initiative
      name: "Beach Volunteer Day",
      description:
        "Join our marine conservation team for a day of beach clean-up. Help remove debris and educate visitors on protecting our oceans.",
      reward: 60,
      requiredTime: "6 hours",
      effortLevel: "High",
      status: "active",
    },
    {
      activityId: "A004",
      initiativeId: "008", // e.g., Pride 'n Purpose initiative
      name: "Assist at a Community Food Drive",
      description:
        "Volunteer at a community food drive to help organize and distribute food to families in need, making a direct impact in your community.",
      reward: 40,
      requiredTime: "3 hours",
      effortLevel: "Medium",
      status: "active",
    },
    {
      activityId: "A005",
      initiativeId: "010", // e.g., Planetary Guardians initiative
      name: "Join an Environmental Advocacy Workshop",
      description:
        "Participate in a workshop focused on environmental policy and advocacy. Learn how to influence sustainable practices in your community.",
      reward: 55,
      requiredTime: "2 hours",
      effortLevel: "Low",
      status: "active",
    },
  ];
  