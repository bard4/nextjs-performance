import { Recommendation } from "./recommendation";
import { SectionLogo } from "./sectionLogo";

export interface SectionDetail {
  moduleName: string;
  section_logo: SectionLogo;
  recommendations: Recommendation[];
}
