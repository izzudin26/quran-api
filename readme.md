# Quran-API

## Feature

- [x] surah list
- [x] indonesia revelation type
- [x] indonesia translation
- [x] surah number
- [x] Arabic name
- [x] english name
- [x] english revelation
- [x] ayah length
- [x] audio url
- [x] arabic text
- [x] latin text
- [x] indonesia text
- [x] english text
- [x] juz

## Request API

- URL [`https://quran-api.vercel.app`](https://quran-api.vercel.app)

### Get all surah

- Endpoint `/surah`
- Method `GET`
- Response

```json
[
  {
    "idRevelationType": "string",
    "idNameTranslation": "string",
    "number": "number",
    "name": "string",
    "englishName": "string",
    "idName": "string",
    "englishNameTranslation": "string",
    "revelationType": "string",
    "numberOfAyahs": "number"
  },
  {
    "idRevelationType": "string",
    "idNameTranslation": "string",
    "number": "number",
    "name": "string",
    "englishName": "string",
    "idName": "string",
    "englishNameTranslation": "string",
    "revelationType": "string",
    "numberOfAyahs": "number"
  }
]
```

### Get Surah

- Endpoint `/surah/{surah_number}`
- Method `GET`
- Response

```json
{
  "idRevelationType": "string",
  "idNameTranslation": "string",
  "number": "number",
  "name": "string",
  "englishName": "string",
  "englishNameTranslation": "string",
  "revelationType": "string",
  "numberOfAyahs": "number",
  "ayahs": [
    {
      "number": "number",
      "audio": "string url",
      "audioSecondary": ["string url", "string url"],
      "text": {
        "arab": "string",
        "latin": "string",
        "en": "string",
        "id": "string"
      },
      "numberInSurah": "number",
      "juz": "string",
      "manzil": "string",
      "page": "string",
      "ruku": "string",
      "hizbQuarter": "number",
      "sajda": "boolean"
    },
    {
      "number": "number",
      "audio": "string url",
      "audioSecondary": ["string url", "string url"],
      "text": {
        "arab": "string",
        "latin": "string",
        "en": "string",
        "id": "string"
      },
      "numberInSurah": "number",
      "juz": "string",
      "manzil": "string",
      "page": "string",
      "ruku": "string",
      "hizbQuarter": "number",
      "sajda": "boolean"
    }
  ]
}
```
