import React from "react";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../img/flags", false, /\.(png|jpe?g|svg)$/)
);

let k = 0;

function ImageGallery() {
  return (
    <div>
      <img src={images["ad.png"]} />
      {images.map((image, index) => (
        <img key={index} src={image} alt={`image-${index}`} />
      ))}
      <div>
        <script>for (let k in images) {"<img src={images[k]}>"}</script>
      </div>
    </div>
  );
}

export default ImageGallery;
