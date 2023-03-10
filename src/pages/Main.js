import React from "react";
import Spinner from "../components/spinner/Spinner";
import imdblogo from "../assets/imdb.png";
import {FormatNames} from "../components/Helper"

const Main = ({ movie, loading }) => {
    if (!movie || loading)
    return (
        <main className='main'>
            <Spinner />
        </main>
    );

    const {
      title, release_date,
      Vote_average, videos,
      genres, spoken_languages,
      overview,
    } = movie;

    const movieDate = release_date && release_date.split("-")[0];
    const progressWidth = parseFloat(Vote_average) * 10 + "%";
    const youtubeLink = `https://www.youtube.com/embed/${
      videos.results.length ? videos.results[0].key : ""
    }`;

    return (
        <main className='main'>
          <div className='container'>
            <h1 className='movie-name'>
              {title} <span className='movie-date'>{movieDate}</span>
            </h1>
    
            <div className='col'>
              <div className='progress btn-green' style={{ width: progressWidth }}>
                <span className='rate'>{Vote_average}</span>
              </div>
            </div>
    
            <div className='trailer'>
              <iframe
                title='movieTrailer'
                width='837'
                height='480'
                src={youtubeLink}
                frameBorder='0'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </div>
          </div>
    
          <div className='general-info'>
            <div className='left'>
              <div className='box'>
                <div className='box-head'>IMDb Score</div>
                <div className='box-body'>
                  <h1 className='display-1'>{Vote_average}</h1>
                </div>
              </div>
            </div>
            <div className='right'>
              <div className='genre'>
                <div className='box'>
                  <div className='box-head'>Genres</div>
                  <div className='box-body'>
                    <h1 className='display-2'>{FormatNames(genres)}</h1>
                  </div>
                </div>
              </div>
              <div className='language'>
                <div className='box'>
                  <div className='box-head'>Language</div>
                  <div className='box-body'>
                    <h1 className='display-2'>{FormatNames(spoken_languages)}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          <div className='more-info'>
            <div className='box'>
              <div className='box-head'>
                {title} <span>({movieDate})</span>
              </div>
              <div className='box-body'>
                <p className='desc'>{overview}</p>
              </div>
              <div className='box-footer'>
                <a
                 // href={homepage ? homepage : "https://www.imdb.com/"}
                  target='_blanc'
                >
                  <img className='img-fluid' src={imdblogo} alt='imdb logo' />
                </a>
              </div>
            </div>
          </div>
        </main>
      );
    };
    
    export default Main;
    