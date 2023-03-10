export const getGenreIds = (genreArr) => {
    const allGenres = [
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 16,
            "name": "Animation"
        },
        {
            "id": 35,
            "name": "Comedy"
        },
        {
            "id": 80,
            "name": "Crime"
        },
        {
            "id": 99,
            "name": "Documentary"
        },
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 10751,
            "name": "Family"
        },
        {
            "id": 14,
            "name": "Fantasy"
        },
        {
            "id": 36,
            "name": "History"
        },
        {
            "id": 27,
            "name": "Horror"
        },
        {
            "id": 10402,
            "name": "Music"
        },
        {
            "id": 9648,
            "name": "Mystery"
        },
        {
            "id": 10749,
            "name": "Romance"
        },
        {
            "id": 878,
            "name": "AScience Fiction"
        },
        {
            "id": 10770,
            "name": "TV Movie"
        },
        {
            "id": 53,
            "name": "Thriller"
        },
        {
            "id": 10752,
            "name": "War"
        },
        {
            "id": 37,
            "name": "Western"
        },
    ]

    const filteredArr = allGenres.filter(genre => {
        return genreArr.includes(genre.name);
    })

    return filteredArr.map(genre => genre.id);
}

export const getLanguageCode = (language) => {
    const languageArr = [
        {
            "iso_639_1": "xx",
            "english_name": "No Language",
            "name": "No Language"
          },
          {
            "iso_639_1": "da",
            "english_name": "Danish",
            "name": "Dansk"
          },
          {
            "iso_639_1": "de",
            "english_name": "German",
            "name": "Deutsch"
          },
          {
            "iso_639_1": "fr",
            "english_name": "French",
            "name": "Français"
          },
          {
            "iso_639_1": "ga",
            "english_name": "Irish",
            "name": "Gaeilge"
          },
          {
            "iso_639_1": "hu",
            "english_name": "Hungarian",
            "name": "Magyar"
          },
          {
            "iso_639_1": "it",
            "english_name": "Italian",
            "name": "Italiano"
          },
          {
            "iso_639_1": "jv",
            "english_name": "Javanese",
            "name": ""
          },
          {
            "iso_639_1": "ja",
            "english_name": "Japanese",
            "name": "日本語"
          },
          {
            "iso_639_1": "ko",
            "english_name": "Korean",
            "name": "한국어/조선말"
          },
          {
            "iso_639_1": "la",
            "english_name": "Latin",
            "name": "Latin"
          },
          {
            "iso_639_1": "nl",
            "english_name": "Dutch",
            "name": "Nederlands"
          },
          {
            "iso_639_1": "pl",
            "english_name": "Polish",
            "name": "Polski"
          },
          {
            "iso_639_1": "pt",
            "english_name": "Portuguese",
            "name": "Português"
          },
          {
            "iso_639_1": "ro",
            "english_name": "Romanian",
            "name": "Română"
          },
          {
            "iso_639_1": "es",
            "english_name": "Spanish",
            "name": "Español"
          },
          {
            "iso_639_1": "sq",
            "english_name": "Albanian",
            "name": "shqip"
          },
          {
            "iso_639_1": "sv",
            "english_name": "Swedish",
            "name": "svenska"
          },
          {
            "iso_639_1": "tr",
            "english_name": "Turkish",
            "name": "Türkçe"
          },
          {
            "iso_639_1": "vi",
            "english_name": "Vietnamese",
            "name": "Tiếng Việt"
          },
          {
            "iso_639_1": "zh",
            "english_name": "Mandarin",
            "name": "普通话"
          },
          {
            "iso_639_1": "ar",
            "english_name": "Arabic",
            "name": "العربية"
          },
          {
            "iso_639_1": "bg",
            "english_name": "Bulgarian",
            "name": "български език"
          },
          {
            "iso_639_1": "el",
            "english_name": "Greek",
            "name": "ελληνικά"
          },
          {
            "iso_639_1": "fa",
            "english_name": "Persian",
            "name": "فارسی"
          },
          {
            "iso_639_1": "he",
            "english_name": "Hebrew",
            "name": "עִבְרִית"
          },
          {
            "iso_639_1": "hi",
            "english_name": "Hindi",
            "name": "हिन्दी"
          },
          {
            "iso_639_1": "hy",
            "english_name": "Armenian",
            "name": ""
          },
          {
            "iso_639_1": "en",
            "english_name": "English",
            "name": "English"
          }
      ]
      return languageArr.find((element) => element.english_name === language)["iso_639_1"];
    }
    
    export const objectToURLString = (obj) => {
      return Object.entries(obj)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join("&");
    };
    
    export const FormatNames = (array) => {
      return array.map((element) => element.name).join(", ");
    }
    