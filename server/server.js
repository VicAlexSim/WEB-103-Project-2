import express from "express";
import dotenv from "dotenv";
import giftsRouter from './routes/gifts.js';

const app = express();

// serves static files using middleware
// middleware = modular

app.use("/public", express.static("./public"));
app.use('/gifts', giftsRouter)

app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      '<h1 style="text-align: center; margin-top: 50px;">Snowbreak Containment Zone API</h1>'
    );
});





const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});