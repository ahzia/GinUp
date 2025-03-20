import Yoga from "../public/images/yoga.jpeg";
import DigitalNomads from "../public/images/digital-meetup.jpeg";
import MovieNight from "../public/images/movie-night.jpeg";
import CookingWorkshop from "../public/images/cooking.png";
import PhotographyWalk from "../public/images/photography.jpg";
import NightRun from "../public/images/running.jpg";
import BoardGames from "../public/images/board-games.jpg";
import KaraokeNight from "../public/images/karoke.jpg";
import WeekendBrunch from "../public/images/kitchen.jpg";
import CyclingAdventure from "../public/images/cycling.jpg";
import ChinatownTour from "../public/images/ChinatownTour.jpg";
import HawkerCenterTour from "../public/images/HawkerCenterTour.jpg";
import LocalCoffeeWorkshop from "../public/images/LocalCoffeeWorkshop.jpg";

export const hubs = {
  categories: [
    {
      title: "Sustainable Business",
      hubs: [
        {
          hub_id: 1,
          name: "Sustainable Aviation",
          description:
            "Discuss innovations in decarbonising aviation and sustainable fuel development, led by Virgin Atlantic.",
          created_by: "Virgin Atlantic",
          category: "Sustainable Business",
          image: Yoga, // placeholder image; update as needed
          groupChat: [
            {
              id: 1,
              userId: 1,
              message: "Excited about the new sustainable fuel research!",
              timestamp: "09:00 AM",
            },
            {
              id: 2,
              userId: 2,
              message: "I’d love to see more discussions on net-zero strategies.",
              timestamp: "09:05 AM",
            },
          ],
        },
        {
          hub_id: 2,
          name: "Environmental Sustainability",
          description:
            "Share insights on renewable energy, conservation, and innovative environmental solutions spearheaded by Virgin Unite.",
          created_by: "Virgin Unite",
          category: "Sustainable Business",
          image: DigitalNomads, // placeholder image; update as needed
          groupChat: [
            {
              id: 1,
              userId: 1,
              message: "How can we reduce carbon emissions effectively?",
              timestamp: "10:00 AM",
            },
            {
              id: 2,
              userId: 3,
              message: "We need more green infrastructure projects.",
              timestamp: "10:05 AM",
            },
          ],
        },
      ],
    },
    {
      title: "Digital Innovation",
      hubs: [
        {
          hub_id: 3,
          name: "Digital Nomads & Innovation",
          description:
            "Connect with digital pioneers and share ideas on remote work, tech innovations, and digital transformation, powered by Virgin Media.",
          created_by: "Virgin Media",
          category: "Digital Innovation",
          image: DigitalNomads,
          groupChat: [
            {
              id: 1,
              userId: 2,
              message: "Anyone tried the latest remote work tools?",
              timestamp: "11:00 AM",
            },
            {
              id: 2,
              userId: 3,
              message: "I’m all for tech innovation in digital workspaces.",
              timestamp: "11:05 AM",
            },
          ],
        },
      ],
    },
    {
      title: "Lifestyle & Wellness",
      hubs: [
        {
          hub_id: 4,
          name: "Virgin Active Community",
          description:
            "Discuss wellness trends, fitness challenges, and healthy lifestyle tips with fellow members.",
          created_by: "Virgin Active",
          category: "Lifestyle & Wellness",
          image: NightRun, // using a running image as a placeholder
          groupChat: [
            {
              id: 1,
              userId: 1,
              message: "Morning runs are the best start to the day!",
              timestamp: "06:30 AM",
            },
            {
              id: 2,
              userId: 2,
              message: "Anyone up for a virtual workout challenge?",
              timestamp: "06:35 AM",
            },
          ],
        },
      ],
    },
    {
      title: "Cultural & Local Experiences",
      hubs: [
        {
          hub_id: 5,
          name: "Local Explorations",
          description:
            "Share and discover local cultural events, food tours, and creative engagements curated by Virgin.",
          created_by: "Virgin Limited Edition",
          category: "Cultural & Local Experiences",
          image: ChinatownTour, // using ChinatownTour image as a placeholder
          groupChat: [
            {
              id: 1,
              userId: 1,
              message: "I love exploring the rich heritage of our city!",
              timestamp: "02:00 PM",
            },
            {
              id: 2,
              userId: 2,
              message: "Count me in for the next cultural tour.",
              timestamp: "02:05 PM",
            },
          ],
        },
        {
          hub_id: 6,
          name: "Culinary & Coffee Conversations",
          description:
            "Dive into discussions about local food trends, cooking workshops, and specialty coffee brewing.",
          created_by: "Virgin Experience Days",
          category: "Cultural & Local Experiences",
          image: LocalCoffeeWorkshop, // using a coffee workshop image as a placeholder
          groupChat: [
            {
              id: 1,
              userId: 3,
              message: "I’m excited to learn new recipes and coffee tips!",
              timestamp: "03:00 PM",
            },
            {
              id: 2,
              userId: 1,
              message: "Let’s share our favorite coffee spots.",
              timestamp: "03:05 PM",
            },
          ],
        },
      ],
    },
  ],
};
