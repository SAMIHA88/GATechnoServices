import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { TbPlaylist, TbPlaylistOff } from 'react-icons/tb'
import { scroller } from 'react-scroll';


export default function Accueil() {
  // État pour gérer le lecteur audio
  const [audio] = useState(new Audio("./img/douce.mp3"));
  const [isPlaying, setIsPlaying] = useState(false);
  const [navActive, setNavActive] = useState(false);

 
  const closeMenu = () => {
    setNavActive(false);
  };

  const [text, setText] = useState("");
  const fullText = "Explorez l'Univers de GATechno";

  useEffect(() => {
    let timer;
    let currentIndex = 0;

    const updateText = () => {
      if (currentIndex < fullText.length) {
        setText((prevText) => prevText + fullText.charAt(currentIndex));
        currentIndex++;
        timer = setTimeout(updateText, 100);
      }
    };

    updateText();

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Fonction pour gérer la lecture/pause de la musique de fond
  const toggleAudio = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="heroSection" className="about--section">
      <div className="about--section--content--box">



        <div className="about--section--content">
          <p className="section--title"></p>
          <h1 className="about--section--title">
            <span className="about--section-title--color">
              {text}
              <span className="blinking-cursor">|</span>
            </span>
          </h1>
          <p className="about--section-description">
            Redéfinissant l'Innovation
            <br />Technologique au Maroc.
            <button
              onClick={toggleAudio}
              className={`audio-toggle-button ${isPlaying ? "active" : ""}`}
            >
              {isPlaying ? <TbPlaylist /> : <TbPlaylistOff />}
            </button>
          </p>
        </div>
        {/* Utilisez le composant Link pour la navigation */}
    
<button
  onClick={() => {
    closeMenu();
    scroller.scrollTo('Contact', {
      duration: 500,
      delay: 0,
      smooth: true,
      offset: -70,
    });
  }}
  className="btn btn-outline-primary"
>
  Contact
</button>

      </div>
      <div className="about--section--img">
        <img src="./img/logoet.png" alt="" />
      </div>
    </section>
  );
}
