import ahmadPic from "../public/images/Users/Ahmadzia.png";
import zamirPic from "../public/images/Users/Ahmadzamir.png";

export const users = [
  {
    id: 1,
    name: "Ahmed Zia",
    age: 26,
    email: "ahmed.zia@gmail.com",
    profilePic: ahmadPic,
    interests: ["Yoga", "Photography", "Cooking"],
    ginx: 50,
    bio: "A yoga enthusiast and amateur photographer. Loves cooking and exploring new places.",
  },
  {
    id: 2,
    name: "Ahmad Zamir",
    age: 30,
    email: "ahmadzamiryousufi@gmail.com",
    profilePic: zamirPic,
    interests: ["Chess", "Football", "Coding"],
    ginx: 38,
    bio: "Tech geek who loves chess and binge-watching movies on weekends.",
  },
];

// Static logged-in user
export const userData = {
  id: 4,
  name: "Ahmad Zamir",
  age: 30,
  email: "ahmadzamiryousufi@gmail.com",
  profilePic: zamirPic,
  ginx: 100,
  bio: "Digital Nomad | Travel Enthusiast",
  friends: 12,
  recentActivities: [
    {
      activity: 'Joined "Beach Volleyball"',
      time: "2 hours ago",
    },
    {
      activity: 'Earned 20 Ginx from "AI Chat"',
      time: "Yesterday",
    },
    {
      activity: "Added a new friend",
      time: "2 days ago",
    },
  ],
  initiativesParticipated: [2, 5],
  initiativesCreated: [10, 11],
};
