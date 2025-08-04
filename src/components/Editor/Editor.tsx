import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import styles from "./Editor.module.css";

export const Editor = ({
  isGenerating,
  onGenerateReview,
}: {
  isGenerating: boolean;
  onGenerateReview(code: string): void;
}) => {
  const [code, setCode] = useState("");

  return (
    <div className={styles.editorWrapper}>
      <button
        disabled={isGenerating}
        onClick={() => onGenerateReview(code)}
        className={styles.codeReviewButton}
      >
        Generate Review
      </button>
      <CodeMirror
        minHeight="100vh"
        value={code}
        onChange={setCode}
        theme="dark"
        extensions={[javascript({ jsx: true })]}
        style={{
          fontSize: "14px",
        }}
      />
    </div>
  );
};