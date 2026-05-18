export type GradeId =
  | "g1"
  | "g2"
  | "g3"
  | "g4a"
  | "g4b"
  | "g5a"
  | "g5b"
  | "g6"
  | "g7"
  | "g8"
  | "g9";

export type GradeCategory = "crushed" | "gravel" | "gravel-soil";

export interface GradingLimit {
  sieveMm: number;
  minPass?: number;
  maxPass?: number;
}

export interface SoilConstants {
  llMax?: number;
  piMax?: number;
  lsMax?: number;
  lsmMax?: number;
  piFormula?: string;
  notes?: string;
}

export interface StrengthLimits {
  fact10DryMinKn?: number;
  acvMaxPercent?: number;
  cbrMinAtMdd?: number;
  cbrMddPercent?: number;
  notes?: string;
}

/** CBR acceptance at a stated percentage of Mod AASHTO MDD */
export interface CbrRequirement {
  compactionPercent: number;
  cbrMin: number;
  /** e.g. "Contract minimum for G4A base" */
  label?: string;
}

export interface OperatorAdjustment {
  situation: string;
  action: string;
}

/** Practical quarry guidance — not a substitute for the contract spec */
export interface OperatorGuide {
  headline: string;
  primaryControls: string[];
  plantSetup: string[];
  labTests: string[];
  adjustments: OperatorAdjustment[];
  compactionNote?: string;
}

export interface GradeSpec {
  id: GradeId;
  title: string;
  category: GradeCategory;
  qualityTier: number;
  summary: string;
  pavementUse: string[];
  parentMaterial: string;
  additionalFines?: string;
  maxParticleMm: number;
  grading: GradingLimit[];
  gradingModulus?: { min: number; max: number };
  strength?: StrengthLimits;
  soilConstants?: SoilConstants;
  flakinessMax?: number;
  fracturedFaces?: string;
  compaction?: string;
  swellMaxPercent?: number;
  restrictions?: string[];
  commonMistakes: string[];
  whyLimits: string[];
  cotoRef: string;
  /** How grading is controlled when `grading` is empty (GM-only, CBR-only, etc.) */
  gradingControlNote?: string;
  /** Another grade whose sieve table is a useful plant-tuning reference (not always a pass/fail) */
  referenceGradingGradeId?: GradeId;
  cbrRequirements?: CbrRequirement[];
  operatorGuide?: OperatorGuide;
}

export interface RockStrengthRow {
  rockGroup: string;
  fact10DryMinKn: number;
  acvMaxPercent: number;
}

export const SPEC_VERSION = "COTO-2020-Ch4";
