import { z } from "zod";
import { serviceSchema, testimonialSchema } from "./schema";

export const api = {
  services: {
    list: {
      method: "GET" as const,
      path: "/api/services",
      responses: {
        200: z.array(serviceSchema),
      },
    },
  },
  testimonials: {
    list: {
      method: "GET" as const,
      path: "/api/testimonials",
      responses: {
        200: z.array(testimonialSchema),
      },
    },
  },
};
