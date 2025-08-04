import MarkdownPreview from "@uiw/react-markdown-preview";
import styles from './ReviewOutput.module.css';

export const ReviewOuput = ({
  review,
  isGenerating,
}: {
  review: string;
  isGenerating: boolean;
}) => {
  return (
    <div className={styles.reviewOutputWrapper}>
      {isGenerating ? (
        <div className={styles.loader}>AI is reviewing the code...</div>
      ) : (
        <MarkdownPreview
          source={review}
          style={{ fontSize: "14px", minHeight: "100vh", padding: "18px" }}
        />
      )}
    </div>
  );
};