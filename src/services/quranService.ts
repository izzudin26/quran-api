import * as fs from "fs";
import path from "path";
import { surah, SurahName } from "../model/index";

class QuranService {
  getAllSurah(): Promise<surah[]> {
    return new Promise((resolve, reject) => {
      try {
        let response = JSON.parse(
          fs.readFileSync(
            path.resolve(__dirname, "../../data/surah.json"),
            "utf-8"
          )
        );
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  }

  getSurah(surahNumber: number): Promise<SurahName> {
    return new Promise((resolve, reject) => {
      try {
        let responseSurahName = JSON.parse(
          fs.readFileSync(
            path.resolve(__dirname, `../../data/surah/${surahNumber}.json`),
            "utf-8"
          )
        );
        resolve(responseSurahName);
      } catch (error) {
        reject("Not Found");
      }
    });
  }
}

export const quranService = new QuranService();
