export interface SurahName {
  idRevelationType: string;
  idNameTranslation: string;
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  revelationType: string;
  numberOfAyahs: number;
  ayahs: Ayat[]
}

interface Ayat {
    number: number
    audio: string
    audioSecondary: string[],
    text: text
    numberInSurah: number
    juz: number
    manzil: number
    page: number
    hizbQuarter: number
    sajda: boolean
}

interface text {
    arab: string
    latin: string
    en: string
    id: string
}