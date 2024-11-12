import React from 'react';

const FilmDetay = ({ film }) => {
  return (
    <div>
      <h3>{film.isim}</h3>
      <p>Yıl: {film.yil}</p>
    </div>
  );
};

export default FilmDetay;
