import ahmadPic from "../images/Users/Ahmadzia.png";
import tamimPic from "../images/Users/tamim.jpeg";
import pushkarPic from "../images/Users/pushkar.jpg";
import fistonPic from "../images/Users/fiston.jpeg";
import juliaPic from "../images/Users/pretty.jpg";

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
    name: "Pushkar Sareen",
    age: 30,
    email: "sareenpushkar@gmail.com",
    profilePic: pushkarPic,
    interests: ["Chess", "Football", "Coding"],
    ginx: 38,
    bio: "Tech geek who loves chess and binge-watching movies on weekends.",
  },
  {
    id: 3,
    name: "Fiston",
    age: 33,
    email: "Fiston@gmail.com",
    profilePic: fistonPic,
    interests: ["Cycling", "Programming", "Movies"],
    ginx: 38,
    bio: "Tech geek who loves cycling and binge-watching movies on weekends.",
  },
  {
    id: 4,
    name: "Julia",
    age: 28,
    email: "jualia@gmail.com",
    profilePic: juliaPic,
    interests: ["Makeover", "Dancing", "Writing"],
    ginx: 38,
    bio: "A beautiful soul who loves makeovers and writing stories and poems.",
  },
  {
    id: 5,
    name: "Tamim",
    age: 28,
    email: "tamim@gmail.com",
    profilePic: tamimPic,
    interests: ["Boxing", "Dancing", "Cricket"],
    ginx: 38,
    bio: "A guy who loves boxing, dancing, and playing cricket.",
  }
];

// Static logged-in user
export const userData = {
  id: 4,
  name: "Pushkar",
  age: 30,
  email: "sareenpushkar@gmail.com",
  profilePic: pushkarPic,
  ginx: 100,
  bio: "Digital Nomad | Travel Enthusiast",
  friends: 12,
  recentActivities: [
    {
      activity: 'Joined "Beach Volleyball"',
      time: '2 hours ago',
    },
    {
      activity: 'Earned 20 Ginx from "AI Chat"',
      time: 'Yesterday',
    },
    {
      activity: 'Added a new friend',
      time: '2 days ago',
    },
  ],
  initiativesParticipated: [2, 5],
  initiativesCreated: [10, 11],
};
