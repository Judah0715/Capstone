import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {getLanguageCode, getGenreIds} from "../components/Helper"
import LanguageOptions from "../components/LanguageOptions";

const Filter = ({ updateFilter }) => {
    let history = useHistory();
    
    const [formData, setformData] = useState({
        "primary_release_date.gte" : "1900",
        "primary_release_date.lte" : "2020",
        language_filter: "main",
        with_original_language: "English",
        "vote_average.gte": "7",
        with_genres: {
            Action: false,
            Adventure: false,
            Animation: false,
            Biography: false,
            Comedy: false,
            Crime: false,
            Documentary: false,
            Drama: false,
            Family: false,
            Fantasy: false,
            History: false,
            Horror: false,
            Music: false,
            Mystery: false,
            Romance: false,
            Sci_Fi: false,
            Thriller: false,
            War: false,
            Western: false,
        },
    });

    const handleChange = (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        if (target,type === "checkbox") {
            setformDate({ ...FormDataEvent, with_genres: { ...formData,with_genres, [name]: value } });
        } else {
            setformData({ ...formData, [name]: value });
        }
    };
}