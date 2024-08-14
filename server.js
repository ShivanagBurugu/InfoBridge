const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();

app.use(cors());

const API_KEY = "1010c86abbab4e3490d49b274df992ee";
const BASE_URL = "https://newsapi.org/v2/everything";

app.get("/news", async (req, res) => {
  const { q } = req.query;
  try {
    const response = await axios.get(BASE_URL, {
      params: { q, apiKey: API_KEY },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
