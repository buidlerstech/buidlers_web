import { z } from "zod";

// user's data
export const contactFormSchema = z.object({
  nombre: z.string().min(1, "El nombre es obligatorio"),
  empresa: z.string().min(1, "La empresa es obligatoria"),
  email: z
    .string()
    .min(1, "El email es obligatorio")
    .email("Por favor ingrese un email válido"),
  mensaje: z.string().min(1, "El mensaje es obligatorio"),
});

// user's metadata
export const systemDataSchema = z.object({
  timestamp: z.date(),
  userAgent: z.string().optional(),
  ipAddress: z.string().optional(),
  referrer: z.string().optional(),
  language: z.string().optional(),
  timezone: z.string().optional(),
  screenResolution: z
    .object({
      width: z.number(),
      height: z.number(),
    })
    .optional(),
});

// full response schema
export const contactSubmissionSchema = contactFormSchema.extend({
  systemData: systemDataSchema,
});

// inferred types!
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type SystemData = z.infer<typeof systemDataSchema>;
export type ContactSubmission = z.infer<typeof contactSubmissionSchema>;
