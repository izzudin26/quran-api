import { Router } from "express";
import { quranController } from "../controller/index";

class QuranRoute {
  constructor(public router: Router = Router()) {
    this.routes();
  }

  routes() {
    this.router.get("/surah", quranController.getSurah);
    this.router.get("/surah/:number", quranController.getNumberSurah);
  }
}

export const quranRoute = new QuranRoute().router;
