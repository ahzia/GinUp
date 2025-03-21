import SustainableAviation from "../public/images/virgin-sustainableaviation.jpg";
import EnvironmentalSustainability from "../public/images/environmental-sustainability.jpg";
import VirginMedia from "../public/images/Virgin_Media_02.svg";
import VirginUnite from "../public/images/unite_bvi.svg";
import DigitalNomads from "../public/images/digital-nomads-innovation.jpg";
import VirginActiveCommunity from "../public/images/virgin-active-community.jpg";
import LocalExplorations from "../public/images/local-exploration.jpg";
import CulinaryCoffeeConversations from "../public/images/culinary-coffee-conversations.jpg";

export const hubs = {
  categories: [
    {
      title: "Discuss Sustainable Business",
      hubs: [
        {
          hub_id: 1,
          name: "Sustainable Aviation",
          description:
            "Discuss innovations in decarbonising aviation and sustainable fuel development, led by Virgin Atlantic.",
          created_by: "Virgin Atlantic",
          category: "Sustainable Business",
          image: SustainableAviation,
          participants: 12,
          max_participants: 20,
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
              message:
                "I’d love to see more discussions on net-zero strategies.",
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
          image: EnvironmentalSustainability,
          participants: 8,
          max_participants: 15,
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
      title: "Discuss Virgin",
      hubs: [
        {
          hub_id: 3,
          name: "Virgin Media 02",
          description:
            "O2 Recycle is a service launched in October 2009, which allows anyone in the UK whether an O2 customer or not, to trade in their devices and gadgets responsibly, in return for cash. The vast majority of phones we receive will be reused, repaired or recycled for parts. Since launch, the scheme has paid out more than £320 million, and sustainably recycled 3.8 million devices – with zero going to landfill.",
          created_by: "Virgin Media",
          category: "Digital Innovation",
          image: VirginMedia,
          participants: 10,
          max_participants: 15,
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
        {
          hub_id: 4,
          name: "Unite",
          description:
            "Share insights on renewable energy, conservation, and innovative environmental solutions spearheaded by Virgin Unite.",
          created_by: "Virgin Unite",
          category: "Sustainable Business",
          image: VirginUnite,
          participants: 8,
          max_participants: 15,
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
      title: "Discuss Digital Innovation",
      hubs: [
        {
          hub_id: 5,
          name: "Digital Nomads & Innovation",
          description:
            "Connect with digital pioneers and share ideas on remote work, tech innovations, and digital transformation, powered by Virgin Media.",
          created_by: "Virgin Media",
          category: "Digital Innovation",
          image: DigitalNomads,
          participants: 10,
          max_participants: 15,
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
      title: "Discuss Lifestyle & Wellness",
      hubs: [
        {
          hub_id: 6,
          name: "Virgin Active Community",
          description:
            "Discuss wellness trends, fitness challenges, and healthy lifestyle tips with fellow members.",
          created_by: "Virgin Active",
          category: "Lifestyle & Wellness",
          image: VirginActiveCommunity,
          participants: 15,
          max_participants: 20,
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
      title: "Discuss Cultural & Local Experiences",
      hubs: [
        {
          hub_id: 7,
          name: "Local Explorations",
          description:
            "Share and discover local cultural events, food tours, and creative engagements curated by Virgin.",
          created_by: "Virgin Limited Edition",
          category: "Cultural & Local Experiences",
          image: LocalExplorations,
          participants: 3,
          max_participants: 10,
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
          hub_id: 8,
          name: "Culinary & Coffee Conversations",
          description:
            "Dive into discussions about local food trends, cooking workshops, and specialty coffee brewing.",
          created_by: "Virgin Experience Days",
          category: "Cultural & Local Experiences",
          image: CulinaryCoffeeConversations,
          participants: 7,
          max_participants: 12,
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
