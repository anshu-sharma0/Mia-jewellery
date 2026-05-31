import { businessData } from "./business";

export interface Testimonial {
  id: string;
  name: string;
  date: string;
  text: string;
}

export const testimonials: Testimonial[] = businessData.testimonials;
