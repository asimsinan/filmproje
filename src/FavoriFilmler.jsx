import React from "react";
import { useSelector, useDispatch } from "react-redux";

const FavoriFilmler = () => {
  const favoriler =useSelector((state) => state.favoriler);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Favori Filmler</h2>
      <ul>
        {favoriler.map((film) => (
          <li key={film.id}>
            {film.isim} ({film.yil})
            <button  style={{ marginLeft: '10px', marginBottom:'10px' }} onClick={() => dispatch({ type: "REMOVE_MOVIE" ,payload:film})}>
              Çıkar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriFilmler;
