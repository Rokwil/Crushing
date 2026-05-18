export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Quiz {
  id: string;
  title: string;
  questions: QuizQuestion[];
}

export const quizzes: Record<string, Quiz> = {
  pavement: {
    id: "pavement",
    title: "Road Pavement Layers",
    questions: [
      {
        question: "Where does G1 crushed stone typically sit in a pavement?",
        options: [
          "Surfacing (asphalt) layer",
          "Uppermost structural base layer",
          "Subgrade only",
          "Prime coat",
        ],
        correctIndex: 1,
        explanation:
          "G1 is the top structural crushed stone base — below surfacing, above subbase.",
      },
      {
        question: "Which layer carries wheel loads into the road structure first (below surfacing)?",
        options: ["Subgrade", "Base", "Fill below subgrade", "Kerbing"],
        correctIndex: 1,
        explanation: "The base layer spreads traffic loads to the subbase and subgrade.",
      },
      {
        question: "Subbase material is generally:",
        options: [
          "Higher quality than base",
          "Between base and subgrade in the structure",
          "Only used on bridges",
          "Always asphalt",
        ],
        correctIndex: 1,
        explanation: "Subbase supports the base and is typically a lower G-grade than the base.",
      },
      {
        question: "The subgrade is:",
        options: [
          "The natural or prepared ground under the pavement",
          "The asphalt wearing course",
          "Always G1 stone",
          "Only found in tunnels",
        ],
        correctIndex: 0,
        explanation: "Subgrade is the foundation — often improved with selected fill or stabilization.",
      },
      {
        question: "On a high-traffic freeway, the base layer is most likely:",
        options: ["G9 gravel-soil", "G1 or G2 crushed stone", "Uncrushed boulders only", "Sand only"],
        correctIndex: 1,
        explanation: "Heavy traffic demands high-quality crushed stone bases (G1/G2).",
      },
    ],
  },
  crushing: {
    id: "crushing",
    title: "Crushing Basics",
    questions: [
      {
        question: "What is the first step in producing crushed stone at a quarry?",
        options: ["Asphalt laying", "Blasting or ripping hard rock", "Painting kerbs", "Slush compaction"],
        correctIndex: 1,
        explanation: "Rock is won from the quarry face by blasting or mechanical ripping.",
      },
      {
        question: "Screens in a crushing plant are used to:",
        options: [
          "Heat the rock",
          "Separate aggregate into size fractions",
          "Apply bitumen",
          "Measure CBR",
        ],
        correctIndex: 1,
        explanation: "Screens classify material into stockpiles matching grading envelopes.",
      },
      {
        question: "Multi-stage crushing is typically required for:",
        options: ["G9 only", "G4A / hard rock processed gravels", "Prime coat", "Road marking"],
        correctIndex: 1,
        explanation: "Hard rock G4A/G5A materials need primary, secondary, and often tertiary crushing.",
      },
      {
        question: "Fractured faces on aggregate are created by:",
        options: ["Weathering only", "Crushing and impact in crushers", "Spraying water", "Rolling tyres on asphalt"],
        correctIndex: 1,
        explanation: "Crushers break rock so particles have angular, fractured surfaces.",
      },
      {
        question: "Stockpiles should be managed to:",
        options: [
          "Prevent segregation and contamination between grades",
          "Mix all sizes randomly",
          "Store only fines",
          "Avoid all testing",
        ],
        correctIndex: 0,
        explanation: "Segregation and contamination are common reasons material fails spec on site.",
      },
    ],
  },
  tests: {
    id: "tests",
    title: "Material Tests",
    questions: [
      {
        question: "For G1–G3, which two strength tests are paired in COTO?",
        options: ["CBR and sand equivalent", "10% FACT and ACV", "Marshall and penetration", "Slump and flow"],
        correctIndex: 1,
        explanation: "Table A4.1.5-6 gives limits for both; Engineer resolves contradictions.",
      },
      {
        question: "A lower ACV value generally means:",
        options: ["Weaker aggregate", "Stronger aggregate", "No relation to strength", "Higher PI"],
        correctIndex: 1,
        explanation: "ACV is a maximum limit — material must not exceed the specified %.",
      },
      {
        question: "Flakiness index must not exceed 35 on fractions:",
        options: ["Below 0.075 mm", "Above 14 mm (where specified)", "Only in asphalt", "On subgrade soil only"],
        correctIndex: 1,
        explanation: "Flaky particles reduce interlock and are tested on coarse fractions.",
      },
      {
        question: "CBR is typically reported at a percentage of:",
        options: ["Air voids", "Maximum dry density (MDD)", "Liquid limit", "Flakiness index"],
        correctIndex: 1,
        explanation: "e.g. CBR ≥ 25% at 95% MDD means compacted to 95% of MDD before testing.",
      },
      {
        question: "PI is measured on which fraction for many gravel materials?",
        options: ["Retained on 37.5 mm", "Passing 0.425 mm (P0.425)", "Only asphalt binder", "Kerbs"],
        correctIndex: 1,
        explanation: "Plasticity of fines controls moisture sensitivity.",
      },
    ],
  },
};
