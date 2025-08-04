# AI Code Review

**AI Code Review** is a modern web application that uses artificial intelligence to review your code and provide instant, actionable feedback. Paste your code into the editor, hit "Review", and get suggestions, improvements, and best practices powered by AI—all in your browser!

---

## 🚀 Features

- **Instant AI-Powered Code Reviews:** Get feedback on your code in seconds.
- **Clean, Intuitive Interface:** Simple editor and output panel for easy use.
- **Built with React & TypeScript:** Fast, modern, and easy to extend.

---

## 🛠️ Prerequisites

- **Node.js** (v16 or higher recommended)
- **npm** or **yarn**
- **Ollama** running locally with a compatible model (e.g., `deepseek-r1:1.5b`)

> **Note:** Ollama is required to provide the AI backend for code review.  
> [Get started with Ollama here.](https://ollama.com/)

---

## ⚡ Getting Started

1. **Clone the repository:**
   ```
   git clone https://github.com/your-username/ai-code-review.git
   cd ai-code-review
   ```

2. **Install dependencies:**
   ```
   npm install
   # or
   yarn install
   ```

3. **Start your Ollama model locally:**
   ```
   ollama run deepseek-r1:1.5b
   ```
   *(You can use any supported model, just make sure it's running.)*

4. **Start the backend server (if applicable):**
   ```
   cd server
   npm install
   npm start
   ```

5. **Start the frontend:**
   ```
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

   <img width="1599" height="834" alt="Preview" src="https://github.com/user-attachments/assets/ffefb12c-0e56-4e85-b54e-855512b70d65" />


---

## 💡 Future Improvements

- **WebSocket Support:** Replace HTTP POST requests with WebSockets for real-time streaming of AI responses, improving user experience for longer reviews.
- **Multi-language Support:** Expand code review capabilities to more programming languages.
- **User Authentication:** Allow users to save and track their code reviews.
- **Customizable AI Models:** Let users select or configure different AI models for review.

---

## 🤝 Contributing

Pull requests and suggestions are welcome! Please open an issue to discuss your ideas or report bugs.

---

## 📄 License

MIT
