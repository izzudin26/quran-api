import { quranService } from "../services/quranService";
import { Request, Response } from "express";

class QuranController {
  async getSurah(req: Request, res: Response) {
    try {
      let response = await quranService.getAllSurah();
      return res.json(response).status(200);
    } catch (error) {
      console.log(error);
      return res.status(500);
    }
  }

  async getNumberSurah(req: Request, res: Response) {
    let numberSurah = parseInt(req.params.number);
    try {
      let response = await quranService.getSurah(numberSurah);
      return res.json(response).status(200);
    } catch (error) {
      if (error == "Not Found") return res.status(404).send({ message: error });
      return res.status(500).send({ message: error });
    }
  }
}

export const quranController = new QuranController();
