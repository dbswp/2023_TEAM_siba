import React from 'react';
import '../../styles/card.scss';
import axios from 'axios';

export default function Card({ name, img, latitude, longitude }) {
  const divName = async () => {
    try {
      // const res = await axios.post("http://localhost:4000/data/getdata/", {
      //   END_POINT: name,
      // });
      localStorage.setItem('END_POINT', name);
      localStorage.setItem('latitude', latitude);
      localStorage.setItem('longitude', longitude);
      // localStorage.setItem("location", location);
      // 데이터 처리 로직
      window.location.href = `http://localhost:3000/blog`; // 이동할 URL 주소
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="main-card col" onClick={divName}>
        <img className="img" src={img}></img>
        <p className="seoul_end_point">{name}</p>
        <span>Seoul</span>
      </div>
    </>
  );
}
