// src/utils/skillColors.ts
export type SkillCategory =
  | "coding"
  | "events"
  | "writing"
  | "education"
  | "creative";

export const skillColors: { [key in SkillCategory]: string } = {
  coding: "bg-orange-600",
  events: "bg-pink-600",
  writing: "bg-purple-600",
  education: "bg-blue-600",
  creative: "bg-green-600",
};
