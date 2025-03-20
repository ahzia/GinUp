export const missions = {
  missions: {
    dailyMissions: {
      title: "Daily Missions",
      items: [
        {
          missionId: "001",
          icon: "📺", // Updated to better represent watching a video
          name: "Watch Your First Video",
          description:
            "Explore the SmileUp video feed and watch your first impact video!",
          reward: 20,
          progress: "Not Started",
          deadline: "Today at 11:59 PM",
          status: "active",
        },
        {
          missionId: "002",
          icon: "👥", // Updated to better represent making new friends
          name: "Add 3 New Friends",
          description: "Connect with 3 new members in the SmileUp community.",
          reward: 15,
          steps: 3,
          currentStep: 1,
          progress: "In Progress",
          deadline: "Today at 11:59 PM",
          status: "active",
        },
        {
          missionId: "003",
          icon: "🤖", // Updated to better represent using an AI assistant
          name: "Use Genie AI",
          description:
            "Ask a question or get help from the AI assistant about a specific project.",
          reward: 10,
          progress: "In Progress",
          deadline: "Today at 11:59 PM",
          status: "active",
        },
      ],
    },
    weeklyMissions: {
      title: "Weekly Missions",
      items: [
        {
          missionId: "004",
          icon: "🎭", // Updated to better represent participating in events
          name: "Participate in 3 Impact Events",
          description:
            "Engage in at least 3 community events or webinars this week.",
          reward: 50,
          steps: 3,
          currentStep: 2,
          progress: "In Progress",
          deadline: "This Week",
          status: "active",
        },
        {
          missionId: "005",
          icon: "🎁", // Updated to better represent redeeming a reward
          name: "Redeem a Reward in SmileUp Rewards",
          description: "Use your Points to redeem a special reward.",
          reward: 30,
          progress: "Not Started",
          deadline: "This Week",
          status: "active",
        },
        {
          missionId: "006",
          icon: "👥", // Matches with the daily mission for adding new friends
          name: "Make 5 New Friends",
          description: "Connect with at least 5 new members on SmileUp.",
          reward: 50,
          steps: 5,
          currentStep: 3,
          progress: "In Progress",
          deadline: "This Week",
          status: "active",
        },
      ],
    },
    virginRedMissions: {
      title: "Virgin Red",
      items: [
        {
          missionId: "007",
          icon: "🌍", // Updated to represent travel insurance
          name: "Buy Virgin Money's Annual Multi-Trip Travel Insurance",
          description:
            "Got a few trips coming up? It’s never been more important to have the right travel insurance in place. Get peace of mind AND earn points at the same time.",
          reward: 3500,
          progress: "Not Started",
          deadline: "This Week",
          status: "active",
        },
        {
          missionId: "008",
          icon: "🏕️", // Updated to better represent a luxury safari stay
          name: "Earn Points per Night at Mahali Mzuri, Kenya",
          description:
            "Adventure starts here. Nestled in the heart of Kenya’s world-famous Maasai Mara ecosystem, within Olare Motorogi Conservancy, Mahali Mzuri is more than a luxury safari camp. It’s an immersion into nature. A place where every moment feels extraordinary.",
          reward: 7000,
          progress: "Not Started",
          deadline: "This Week",
          status: "active",
        },
        {
          missionId: "009",
          icon: "🚗", // Updated to represent car rental
          name: "Earn Points with Avis",
          description:
            "Hiring a car for a trip is thrilling enough, but now you can earn points on top.",
          reward: 1000,
          progress: "In Progress",
          deadline: "This Week",
          status: "active",
        },
        {
          missionId: "010",
          icon: "⚡", // Updated to represent energy-related rewards
          name: "Earn Points with Octopus Energy",
          description:
            "Octopus Energy supplies 100% renewable electricity and 5-star customer service to over 6.8 million UK homes. No wonder they've been Which? recommended provider for the last seven years! Switch energy supplier to enjoy greener energy and earn points.",
          reward: 7400,
          progress: "Not Started",
          deadline: "This Week",
          status: "active",
        },
        {
          missionId: "011",
          icon: "🏡", // Updated to represent a luxury stay in South Africa
          name: "Earn Points per Night at Mont Rochelle, South Africa",
          description:
            "This is the place to be. A stunning location nestled in the heart of Cape Winelands, surrounded by rolling vineyards and dramatic mountains.",
          reward: 1500,
          progress: "Not Started",
          deadline: "This Week",
          status: "active",
        },
      ],
    },
  },
};
