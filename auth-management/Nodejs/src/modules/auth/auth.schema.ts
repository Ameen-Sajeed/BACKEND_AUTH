import { z } from "zod";

export const registerSchema = z.object({
  email: z
    .string()
    .email()
    .transform((value) => value.toLowerCase().trim()),

  password: z
    .string()
    .min(8)
});