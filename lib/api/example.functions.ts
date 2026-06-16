import { z } from "zod";

const GreetingSchema = z.object({
  name: z.string().min(1),
});

export async function getGreeting(data: { name: string }) {
  const parsed = GreetingSchema.parse(data);

  return {
    greeting: `Hello, ${parsed.name}!`,
    mode: process.env.NODE_ENV ?? "unknown",
  };
}
