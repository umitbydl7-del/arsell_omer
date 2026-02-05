import { ReactNode } from 'react';

export interface Category {
  id: string;
  icon: ReactNode;
  label: string;
  sub: string;
}

export interface Step {
  title: string;
  desc: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface StatItem {
  icon: ReactNode;
  val: string;
  label: string;
}

export interface FeatureItem {
  icon: ReactNode;
  title: string;
  desc: string;
}

export type ViewState = 'landing' | 'wizard';
export type VerificationStatus = 'idle' | 'verifying' | 'downloading' | 'completed';
