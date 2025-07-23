'use server';

/**
 * @fileOverview AI-powered Vastu tool that analyzes user floor plans or descriptions and generates personalized tips.
 *
 * - vastuAdvisorTips - A function that handles the Vastu analysis and tip generation process.
 * - VastuAdvisorInput - The input type for the vastuAdvisorTips function.
 * - VastuAdvisorOutput - The return type for the vastuAdvisorTips function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const VastuAdvisorInputSchema = z.object({
  floorPlanDescription: z
    .string()
    .describe('A description of the property floor plan. Include dimensions, cardinal directions of entrance and rooms, and any existing Vastu implementations.'),
});
export type VastuAdvisorInput = z.infer<typeof VastuAdvisorInputSchema>;

const VastuAdvisorOutputSchema = z.object({
  vastuTips: z
    .string()
    .describe('Personalized Vastu tips to improve the energy and harmony of the space.'),
});
export type VastuAdvisorOutput = z.infer<typeof VastuAdvisorOutputSchema>;

export async function vastuAdvisorTips(input: VastuAdvisorInput): Promise<VastuAdvisorOutput> {
  return vastuAdvisorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'vastuAdvisorPrompt',
  input: {schema: VastuAdvisorInputSchema},
  output: {schema: VastuAdvisorOutputSchema},
  prompt: `You are an expert in Vastu Shastra, the ancient Indian science of architecture and placement.

You will analyze the provided floor plan description and generate personalized Vastu tips to improve the energy and harmony of the space.
Consider the entrance direction, room placements, and any existing Vastu implementations described in the floor plan. Prioritize simple and effective remedies that can be easily implemented.

Floor Plan Description: {{{floorPlanDescription}}}`,
});

const vastuAdvisorFlow = ai.defineFlow(
  {
    name: 'vastuAdvisorFlow',
    inputSchema: VastuAdvisorInputSchema,
    outputSchema: VastuAdvisorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
