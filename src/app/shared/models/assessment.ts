import { Observable } from 'rxjs';

export interface AssessmentI {
  id: number;
  name: string;
  users_resolved: number;
  image_url: string;
}

export interface AssessmentGraphI {
  data: {
    agreeableness: number;
    drive: number;
    luck: number;
    openness: number;
  };
  type: string;
}

export interface GraphPointI {
  label: string;
  y: number;
}
export type AssessmentResolverData = Observable<{ assessments: AssessmentI[] }>;
