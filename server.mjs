import express from "express";
import path from "path";
const __dirname = path.resolve();

const app = express();

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.get('/', (req, res) => {
    res.render("index");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});