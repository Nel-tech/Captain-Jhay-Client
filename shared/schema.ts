import { z } from "zod"

// Booking schema
export const insertBookingSchema = z.object({
  tripType: z.enum(["round-trip", "one-way"]),
  departureCity: z.string().min(1),
  destinationCity: z.string().min(1),
  departureDate: z.string().min(1),
  returnDate: z.string().optional(),
  adults: z.number().min(1),
  children: z.number().default(0),
  cabinClass: z.string().min(1),
  fullName: z.string().min(1),
  email: z.string().email(),
  phoneNumber: z.string().min(1),
  specialRequests: z.string().optional(),
})

// Contact schema
export const insertContactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
})

// Types
export type InsertBooking = z.infer<typeof insertBookingSchema>
export type InsertContact = z.infer<typeof insertContactSchema>

// Keep these as basic types since frontend doesn't need DB shape
export type Booking = InsertBooking & { id: number; createdAt: string }
export type Contact = InsertContact & { id: number; createdAt: string }