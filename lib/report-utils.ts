/**
 * SoberPath report draft storage and report generation from quiz answers.
 */

const STORAGE_KEY = "soberpath_report_draft";

export interface ReportDraft {
  answers: Record<string, unknown>;
  email?: string;
  userName?: string;
  plan?: string;
  amount?: string;
}

export interface GeneratedReport {
  userName?: string;
  email?: string;
  goal?: string;
  ageGroup?: string;
  gender?: string;
  drinksPerWeek?: string;
  drinkingFrequency?: string;
  stressLevel?: string;
  moneySpent?: string;
  mainReason?: string;
  whyCurbDrinking?: string[];
  alcoholRuined?: string[];
  triggersSummary: string[];
  planSummary: string[];
  personalizedTips: string[];
  keyInsights: string[];
}

export function saveReportDraft(draft: ReportDraft): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
  } catch {
    // ignore
  }
}

export function getReportDraft(): ReportDraft | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as ReportDraft;
  } catch {
    return null;
  }
}

/** Generate a SoberPath report from quiz answers (flat object keyed by field names). */
export function generateReportFromAnswers(
  answers: Record<string, unknown>
): GeneratedReport {
  const goal = String(answers.goal ?? "");
  const drinksPerWeek = String(answers.drinksPerWeek ?? "");
  const stressLevel = String(answers.stressLevel ?? "");
  const mainReason = String(answers.mainReason ?? "");
  const drinkingFrequency = String(answers.drinkingFrequency ?? "");
  const moneySpent = String(answers.moneySpent ?? "");
  const ageGroup = String(answers.ageGroup ?? "");
  const gender = String(answers.gender ?? "");

  const whyCurb = answers.whyCurbDrinking;
  const whyCurbDrinking = Array.isArray(whyCurb)
    ? (whyCurb as string[])
    : whyCurb
      ? [String(whyCurb)]
      : [];

  const ruined = answers.alcoholRuined;
  const alcoholRuined = Array.isArray(ruined)
    ? (ruined as string[])
    : ruined
      ? [String(ruined)]
      : [];

  const triggersSummary: string[] = [];
  if (mainReason) triggersSummary.push(`Primary reason: ${mainReason}`);
  if (stressLevel)
    triggersSummary.push(`Current stress level: ${stressLevel}`);
  if (answers.pastTrauma)
    triggersSummary.push(
      `Past trauma acknowledged: ${String(answers.pastTrauma)}`
    );
  if (answers.socialDrinking)
    triggersSummary.push(
      `Social drinking context: ${String(answers.socialDrinking)}`
    );
  if (answers.alcoholConfidence)
    triggersSummary.push(
      `Confidence with alcohol: ${String(answers.alcoholConfidence)}`
    );

  const planSummary: string[] = [
    "40-day personalized plan to reduce or quit drinking",
    "5–15 minutes of daily exercises and reflections",
    "Behavioral and mindset training based on your goals",
    "Focus on triggers, environment, and habits",
  ];

  const personalizedTips: string[] = [];
  if (goal?.toLowerCase().includes("quit") || goal?.toLowerCase().includes("stop")) {
    personalizedTips.push(
      "Set a clear quit date and remove alcohol from your environment before that date."
    );
    personalizedTips.push(
      "Use the SoberPath daily exercises to replace drinking routines with new rituals."
    );
  } else {
    personalizedTips.push(
      "Define clear limits (e.g., drinks per week) and track them in the app."
    );
    personalizedTips.push(
      "Identify your highest-risk situations from your answers and plan ahead for them."
    );
  }
  if (stressLevel) {
    personalizedTips.push(
      "Build non-alcohol stress relief habits (e.g., short walks, breathing) for high-stress moments."
    );
  }
  personalizedTips.push(
    "Review your plan summary each morning so your goals stay top of mind."
  );
  personalizedTips.push(
    "Join the SoberPath community for support when you need accountability."
  );

  const keyInsights: string[] = [];
  if (drinksPerWeek)
    keyInsights.push(`You reported drinking around ${drinksPerWeek} per week.`);
  if (moneySpent)
    keyInsights.push(`You estimated spending ${moneySpent} on alcohol—savings can motivate.`);
  if (whyCurbDrinking.length > 0)
    keyInsights.push(
      `Your main motivations: ${whyCurbDrinking.slice(0, 3).join(", ")}.`
    );
  if (alcoholRuined.length > 0)
    keyInsights.push(
      `Areas you want to protect: ${alcoholRuined.slice(0, 3).join(", ")}.`
    );
  keyInsights.push(
    "Your plan is tailored to your goal, triggers, and lifestyle for the best chance of success."
  );

  return {
    userName: answers.userName ? String(answers.userName) : undefined,
    email: answers.email ? String(answers.email) : undefined,
    goal: goal || undefined,
    ageGroup: ageGroup || undefined,
    gender: gender || undefined,
    drinksPerWeek: drinksPerWeek || undefined,
    drinkingFrequency: drinkingFrequency || undefined,
    stressLevel: stressLevel || undefined,
    moneySpent: moneySpent || undefined,
    mainReason: mainReason || undefined,
    whyCurbDrinking: whyCurbDrinking.length > 0 ? whyCurbDrinking : undefined,
    alcoholRuined: alcoholRuined.length > 0 ? alcoholRuined : undefined,
    triggersSummary,
    planSummary,
    personalizedTips,
    keyInsights,
  };
}
