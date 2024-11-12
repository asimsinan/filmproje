import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import FilmDetay from "./FilmDetay";
import Modal from "./Modal";

const FilmList = () => {
  const [filmler, setFilmler] = useState([]);
  const [secilenFilm, setSecilenFilm] = useState(null);
  const dispatch = useDispatch();
  const veri = [
    { id: 1, isim: "Inception", yil: 2010 },
    { id: 2, isim: "Interstellar", yil: 2014 },
  ];
  useEffect(() => {
    setFilmler(veri);
  }, []);

  const favoriyeEkleHandler = (film) => {
    dispatch({ type: "ADD_MOVIE", payload: film });
  };

  return (
    <div>
      <h2>Film Kataloğu</h2>
      <ul>
        {filmler.map((film) => (
          <li key={film.id}>
            {film.isim} ({film.yil})
            <button
              style={{ marginLeft: "10px", marginBottom: "10px" }}
              onClick={() => setSecilenFilm(film)}
            >
              Detay
            </button>
            <button
              style={{ marginLeft: "10px", marginBottom: "10px" }}
              onClick={() => favoriyeEkleHandler(film)}
            >
              Favoriye Ekle
            </button>
          </li>
        ))}
      </ul>
      {secilenFilm && (
        <Modal onClose={() => setSecilenFilm(null)}>
          <FilmDetay film={secilenFilm} />
        </Modal>
      )}
    </div>
  );
};

export default FilmList;
