import express from "express";
import cors from "cors";

import generateReview from "./ai-review.js";

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.post("/code-review", async (req, res) => {
  const code = req.body.code;

  try {
    const review = await generateReview(code);

    return res.send({
      review,
    });
  } catch (err) {
    return res.status(500).send({
      message: "Something went wrong while generating the review.",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});