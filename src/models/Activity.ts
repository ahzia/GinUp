export interface Activity {
  activityId: string;
  initiativeId: string; // the initiative this activity belongs to
  name: string;
  description: string;
  reward: number; // amount of Smiles earned upon completion
  requiredTime: string; // e.g. "2 hours", "1 day"
  effortLevel: "Low" | "Medium" | "High";
  status: "active" | "completed" | "pending";
  deadline?: string; // optional deadline
  steps?: number; // optional: if the activity has multiple steps
  currentStep?: number; // optional: to track progress
}
