export type SkillCategory =
  | "coding"
  | "events"
  | "writing"
  | "education"
  | "creative";

export const skillColors: { [key in SkillCategory]: string } = {
  coding: "orange-600",
  events: "pink-600",
  writing: "purple-600",
  education: "blue-600",
  creative: "green-600",
};

export const skillCategoryValues: SkillCategory[] = [
  "coding",
  "events",
  "writing",
  "education",
  "creative",
];
