import { SectionDetail } from "@/types/sectionDetail";
import { Box, Typography } from "@mui/material";
import SectionSingleArticleView from "./sectionSingleArticleView";

const SectionSingleGroupView: React.FC<{
  section: SectionDetail;
}> = ({ section }) => {
  const articlesToDisplay = section.recommendations.map((recommendation) => {
    return (
      <SectionSingleArticleView
        articleData={recommendation}
        key={recommendation.itemId.objectId}
      />
    );
  });
  return (
    <Box className="mb-12">
      <Typography variant="h4" className="py-4">
        {section.moduleName}
      </Typography>
      <Box className="flex flex-row flex-wrap gap-2">{articlesToDisplay}</Box>
    </Box>
  );
};

export default SectionSingleGroupView;
