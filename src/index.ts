import express, { Application, application } from "express";
import { quranRoute } from "./routes/index";
import bodyparser from "body-parser";

const port = process.env.PORT || 8080;

class App {
  constructor(public app: Application = express()) {
    this.plugins();
    this.routes();
  }

  plugins() {
    this.app.use(bodyparser.json());
  }

  routes() {
    this.app.use("/", quranRoute);
  }
}

const app = new App().app;
app.listen(port, () => {
  console.log(`Running on http://[::]:${port}`);
});

module.exports = app.listen(8000);
