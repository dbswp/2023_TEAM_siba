import React, { useEffect, useState } from "react";
import "../../styles/card.scss";

export default function CategoryCard({ name }) {
  return (
    <>
      {name.map((el, idx) => {
        return (
          <div className="main-card col" key={idx}>
            <div className="img"></div>
            <p className="seoul_end_point">{el}</p>
            <span>Gangnam-gu</span>
          </div>
        );
      })}
    </>
  );
}
