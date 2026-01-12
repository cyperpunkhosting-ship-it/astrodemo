import { z } from "zod";

// Static data types - no database tables

export const insertInquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone is required"),
  message: z.string().min(1, "Message is required"),
});

export type InsertInquiry = z.infer<typeof insertInquirySchema>;
export type Inquiry = InsertInquiry & { id: number; createdAt: Date };

export const serviceSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  imageUrl: z.string(),
  slug: z.string(),
});

export type Service = z.infer<typeof serviceSchema>;
export type InsertService = Omit<Service, "id">;

export const testimonialSchema = z.object({
  id: z.number(),
  name: z.string(),
  location: z.string(),
  content: z.string(),
  imageUrl: z.string().optional(),
});

export type Testimonial = z.infer<typeof testimonialSchema>;
export type InsertTestimonial = Omit<Testimonial, "id">;
