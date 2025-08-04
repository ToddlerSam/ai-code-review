import { useState } from "react";
import "./App.css";
import { Editor, ReviewOuput } from "./components";
import { initMessage } from './constants';

function App() {

  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [review, setReview] = useState<string>(initMessage);

  const handleGetReview = async (code: string) => {
    try {
      setIsGenerating(true);
      const response = await fetch("http://localhost:3001/code-review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();
      setReview(data.review);
    } catch (err) {
      alert("Something went wrong. Please try again later.");
      console.log(err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="app-wrapper">
      <ReviewOuput isGenerating={isGenerating} review={review} />
      <Editor isGenerating={isGenerating} onGenerateReview={handleGetReview}/>
    </div>
  );
}

export default App;
