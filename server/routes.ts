import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { db } from "./db";
import { services, testimonials } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({ message: err.errors[0].message });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  app.get(api.services.list.path, async (req, res) => {
    const servicesList = await storage.getServices();
    res.json(servicesList);
  });

  app.get(api.testimonials.list.path, async (req, res) => {
    const testimonialsList = await storage.getTestimonials();
    res.json(testimonialsList);
  });

  // Seed data
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingServices = await storage.getServices();
  if (existingServices.length === 0) {
    await db.insert(services).values([
      {
        title: "Lost Love Back",
        description: "Use astrological treatments to regain your lost love. Repair connections and resolve issues.",
        imageUrl: "https://images.unsplash.com/photo-1518199266791-5375a83190b7",
        slug: "lost-love-back"
      },
      {
        title: "Husband Wife Issues",
        description: "Resolve husband-wife problems and improve relationships with astrological aid.",
        imageUrl: "https://images.unsplash.com/photo-1621501103258-3e135c8c1a90",
        slug: "husband-wife-issues"
      },
      {
        title: "Love Problems",
        description: "Make your life better and keep love problems away. Strengthen your relationship.",
        imageUrl: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2",
        slug: "love-problems"
      },
      {
        title: "Love Marriage Specialist",
        description: "Expert guidance for love marriages and overcoming obstacles.",
        imageUrl: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8",
        slug: "love-marriage-specialist"
      },
      {
        title: "Family Problem Solution",
        description: "Peaceful resolutions for family disputes and conflicts.",
        imageUrl: "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb",
        slug: "family-problem-solution"
      },
      {
        title: "Business Problems",
        description: "Astrological solutions for business growth and removing obstacles.",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
        slug: "business-problems"
      }
    ]);
  }

  const existingTestimonials = await storage.getTestimonials();
  if (existingTestimonials.length === 0) {
    await db.insert(testimonials).values([
      {
        name: "Aisha Siddiqui",
        location: "Sweden",
        content: "I am grateful to Baba Siddheshwar Nath Aghori for his help. It has been easier for me to get my spouse back.",
        imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
      },
      {
        name: "Farid Akhtar",
        location: "Calgary",
        content: "My spouse and I were able to get married thanks to Baba Siddheshwar Nath Aghori's astrological remedies.",
        imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
      },
      {
        name: "Saba Usmani",
        location: "Mongolia",
        content: "I was able to get the job I want because he listened to my problem and offered me prayer.",
        imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
      }
    ]);
  }
}
