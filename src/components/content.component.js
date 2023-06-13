import React from "react";
import Card from "./card.component";
import "../app/globals.css";

const images = [
  { src: "/images/beef/meat.jpg", caption: "meat" },
  { src: "/images/beef/omi.jpg", caption: "omi" },
  { src: "/images/beef/osaka.jpg", caption: "osaka" },
  { src: "/images/beef/otake.jpg", caption: "otake" },
  { src: "/images/beef/pikanya.jpg", caption: "pikanya" },
  { src: "/images/beef/pixta.jpg", caption: "pixta" },
  { src: "/images/beef/sutake.jpg", caption: "sutake" },
];

const Content = () => {
  return (
    <>
      {images.map((e, i) => (
        <div className="card w-auto bg-base-100 shadow-xl" key={i}>
          <figure className="px-10 pt-10">
            <img src={e.src} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{e.aption}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Content;
