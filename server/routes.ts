import type { Express } from "express";
import type { Server } from "http";
import { api } from "@shared/routes";
import type { Service, Testimonial } from "@shared/schema";

// Static data - no database
const services: Service[] = [
  {
    id: 1,
    title: "Lost Love Back",
    description: "Use astrological treatments to regain your lost love. Repair connections and resolve issues with ancient spiritual wisdom.",
    imageUrl: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=800",
    slug: "lost-love-back"
  },
  {
    id: 2,
    title: "Husband Wife Issues",
    description: "Resolve complex marital conflicts and restore celestial harmony to your sacred union.",
    imageUrl: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=800",
    slug: "husband-wife-issues"
  },
  {
    id: 3,
    title: "Love Problems",
    description: "Find clarity in your heart's desires. Remove negative energies blocking your path to love.",
    imageUrl: "https://images.unsplash.com/photo-1518621736915-f3586282c9ee?auto=format&fit=crop&q=80&w=800",
    slug: "love-problems"
  },
  {
    id: 4,
    title: "Love Marriage Specialist",
    description: "Overcome family objections and social barriers with powerful Vashikaran and astrological remedies.",
    imageUrl: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800",
    slug: "love-marriage-specialist"
  },
  {
    id: 5,
    title: "Family Problem Solution",
    description: "Harmonize your household energy. Stop domestic disputes and bring peace to your family tree.",
    imageUrl: "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&q=80&w=800",
    slug: "family-problem-solution"
  },
  {
    id: 6,
    title: "Business Problems",
    description: "Unlock your financial potential. Remove planetary obstacles hindering your career and business success.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    slug: "business-problems"
  }
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Aisha Siddiqui",
    location: "Sweden",
    content: "I am grateful to Baba Siddheshwar Nath Aghori for his help. It has been easier for me to get my spouse back.",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
  },
  {
    id: 2,
    name: "Farid Akhtar",
    location: "Calgary",
    content: "My spouse and I were able to get married thanks to Baba Siddheshwar Nath Aghori's astrological remedies.",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  },
  {
    id: 3,
    name: "Saba Usmani",
    location: "Mongolia",
    content: "I was able to get the job I want because he listened to my problem and offered me prayer.",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
  }
];

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get(api.services.list.path, async (req, res) => {
    res.json(services);
  });

  app.get(api.testimonials.list.path, async (req, res) => {
    res.json(testimonials);
  });

  return httpServer;
}
