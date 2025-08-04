import { ChatOllama } from "@langchain/ollama";

const llm = new ChatOllama({
  model: "deepseek-r1:1.5b",
  temperature: 0.2,
});

// Prompt for the code review task
// This prompt is designed to guide the LLM in performing a structured and professional code review.
// It includes criteria for correctness, readability, best practices, performance, security, and maintainability
// ChatGpt was used to refine this prompt.
const prompt = `
You are a senior software engineer reviewing a submitted code snippet.

Please perform a detailed and critical code review, assuming the code may contain bugs, bad practices, or inefficient logic.

---

### Review Goals:
- **Correctness**: Identify all potential bugs, incorrect logic, and runtime errors.  
- **Code Quality**: Check for readability, maintainability, variable/function naming, and structure.
- **Best Practices**: Validate against modern language or framework standards.
- **Performance**: Highlight inefficient operations, redundant logic, or unnecessary loops.
- **Security**: Point out any insecure patterns or data handling issues.
- **Scalability**: Comment on whether the code is modular and scalable.

---

### Instructions:
- Go line by line where needed — don’t assume the code is correct.
- Think like a senior engineer reviewing a pull request in a high-stakes production system.
- If anything is questionable, **call it out** clearly.
- Focus especially on **bugs or incorrect logic** — don't miss them.
- Do **not** include internal thoughts or reasoning steps.
- Respond with **only the final review**, formatted in **Markdown** using the following structure.

---

### Output Format:

markdown
## ✅ Summary
A short paragraph summarizing your general impression and main findings.

## 🐛 Issues Found
- Describe each issue clearly and concisely.
- Include the specific line or logic being addressed.

## 💡 Suggestions for Improvement
- Actionable suggestions for improving the code.
- Better naming, structure, splitting logic, etc.

## 🛠️ Suggested Code Fixes
`;

async function generateReview(code) {
  const response = await llm.invoke([
    ["system", prompt],
    ["human", code],
  ]);

  let reviewContent = response.content;

  if (response.content) {
    // Response content also includes the thinking part, which we want to ignore.
    // We only want the final review output.
    try {
      reviewContent = response.content.split('</think>')[1];
      console.log("Review content extracted successfully.", reviewContent);
    } catch (error) {
      console.log(error);
      reviewContent = response.content;
    }
    
  }

  return reviewContent;
}

export default generateReview;