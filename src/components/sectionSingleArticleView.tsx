import { Recommendation } from "@/types/recommendation";
import { Box, Typography } from "@mui/material";

const SectionSingleArticleView: React.FC<{
  articleData: Recommendation;
}> = ({ articleData }) => {
  const article = articleData.itemMetadata;
  return (
    <a
      color="inherit"
      className="h-[250px] w-[300px] no-underline"
      href={article.url}
    >
      {
        <Box className="h-full shadow-sm hover:shadow-lg">
          <img
            loading="lazy"
            src={article.img}
            alt={article.title}
            sizes="100vw"
            width={0}
            height={0}
            className="h-auto max-h-40 w-full"
          />
          <Typography variant="h6" fontWeight={600}>
            {article.title}
          </Typography>
        </Box>
      }
    </a>
  );
};

export default SectionSingleArticleView;
