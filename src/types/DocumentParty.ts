import { z } from "zod";

export const documentPartySchema = z.object({
  phone: z
    .object({
      countryCode: z.string().optional(),
      number: z.string(),
    })
    .optional(),
  organizationName: z.string().nullish(),
  firstName: z.string().nullish(),
  lastName: z.string().nullish(),
  address: z.string().nullish(),
  country: z.string().nullish(),
  email: z.string().optional(),
  state: z.string().nullish(),
  city: z.string().nullish(),
  zip: z.string().nullish(),
});
export type DocumentParty = z.infer<typeof documentPartySchema>;
