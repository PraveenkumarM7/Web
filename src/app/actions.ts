"use server";

import {
  vastuAdvisorTips,
  type VastuAdvisorInput,
} from "@/ai/flows/vastu-advisor";

export async function getVastuTips(input: VastuAdvisorInput) {
  try {
    const result = await vastuAdvisorTips(input);
    return { success: true, data: result };
  } catch (error) {
    console.error("Error in getVastuTips action:", error);
    return {
      success: false,
      error: "An unexpected error occurred while generating Vastu tips.",
    };
  }
}
