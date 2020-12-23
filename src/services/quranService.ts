import * as fs from "fs";
import path from "path";
import { surah, SurahName } from "../model/index";

class QuranService {
  getAllSurah(): Promise<surah[]> {
    return new Promise(async (resolve, reject) => {
      try {
        let response = await JSON.parse(
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
      let responseSurahName;
      try {
        responseSurahName = JSON.parse(
          fs.readFileSync(
            path.resolve(__dirname, `../../data/surah/${surahNumber}.json`),
            "utf-8"
          )
        );
        resolve(responseSurahName);
      } catch (error) {
        if (error.code === "ENOENT") {
          reject("Not Found");
        } else {
          throw error;
        }
      }
    });
  }
}

export const quranService = new QuranService();
