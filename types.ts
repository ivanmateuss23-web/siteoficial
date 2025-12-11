
export enum BacteriaType {
  // Shared / Multi-system
  S_PNEUMONIAE = 'Streptococcus pneumoniae',
  H_INFLUENZAE = 'Haemophilus influenzae',
  P_AERUGINOSA = 'Pseudomonas aeruginosa',
  E_COLI = 'Escherichia coli',
  
  // Predominantly Upper Respiratory
  S_PYOGENES = 'Streptococcus pyogenes',
  M_CATARRHALIS = 'Moraxella catarrhalis',

  // Predominantly Lower Respiratory
  S_AUREUS = 'Staphylococcus aureus',
  M_PNEUMONIAE = 'Mycoplasma pneumoniae',
  C_PNEUMONIAE = 'Chlamydophila pneumoniae',
  L_PNEUMOPHILA = 'Legionella pneumophila',

  // CNS Specific
  N_MENINGITIDIS = 'Neisseria meningitidis',
  L_MONOCYTOGENES = 'Listeria monocytogenes',
  S_AGALACTIAE = 'Streptococcus agalactiae',

  // ITU Specific
  K_PNEUMONIAE = 'Klebsiella pneumoniae',
  P_MIRABILIS = 'Proteus mirabilis',
  E_FAECALIS = 'Enterococcus faecalis/faecium',
  S_SAPROPHYTICUS = 'Staphylococcus saprophyticus'
}

export type ClinicalCategory = 'UPPER' | 'LOWER' | 'CNS' | 'ITU';

export type QuizCategory = ClinicalCategory | 'ANTIMICROBIALS';

export type ViewMode = 'THEORY' | 'CASE_LIBRARY' | 'QUIZ' | 'AI_GENERATOR' | 'AI_TUTOR' | 'AI_QUIZ' | 'GENERAL_BACTERIOLOGY';

export interface ClinicalCase {
  id: string;
  title: string;
  patientProfile: string; 
  symptoms: string;
  physicalExam: string;
  question: string;
  diagnosis: string;
  treatment: string;
  explanation: string;
}

export interface BacteriaInfo {
  name: BacteriaType;
  morphology: string;           
  type: string;                 
  epidemiology: string;         
  virulenceFactors: string;     
  clinicalManifestations: string; 
  complications: string;        
  classification?: string;      
  diagnosis?: string;           
  treatment: string;            
}

export interface FAQ {
  question: string;
  answer: string;
}

export type QuestionType = 'multiple-choice' | 'open-ended';

export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  text: string;
  type: QuestionType;
  context?: string; 
  options?: QuizOption[];
  correctAnswer: string; 
}

export interface QuizTopic {
  id: QuizCategory;
  title: string;
  description: string;
  questions: QuizQuestion[];
}

// New Interface for AI Generated Quiz
export interface AIQuizOption {
  id: string;
  diagnosis: string;
  pathogen: string;
  treatment: string;
  isCorrect: boolean;
}

export interface AIQuizChallengeData {
  title: string;
  patientProfile: string;
  caseDescription: string;
  physicalExam: string;
  options: AIQuizOption[];
  explanation: string;
}