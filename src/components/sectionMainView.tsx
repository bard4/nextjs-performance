import { Box } from "@mui/material";
import SectionSingleGroupView from "./sectionSingleGroupView";
import { Section } from "@/types/section";
import { SectionDetail } from "@/types/sectionDetail";

const sectionsNames = [
  "opening",
  "basket",
  "news2",
  "ukr",
  "sport",
  "bizTech",
  "brands",
  "local",
  "lifestyle",
  "av",
  "recommended",
  "gossip",
  "green",
  "moto",
  "entertainment",
  "dessert",
  "news",
  "offers",
  "dontmiss",
] as const;

const SectionMainView: React.FC<{
  section: Section;
}> = ({ section }) => {
  console.log(`${new Date().toISOString()} - generating`);
  const sectionsToDisplay = sectionsNames.map((sectionName) => {
    if (sectionName in section) {
      const sectionToDisplay = section[sectionName];
      return (
        <SectionSingleGroupView
          key={sectionName}
          section={sectionToDisplay as SectionDetail}
        />
      );
    }
  });

  return <Box>{sectionsToDisplay}</Box>;
};

export default SectionMainView;
