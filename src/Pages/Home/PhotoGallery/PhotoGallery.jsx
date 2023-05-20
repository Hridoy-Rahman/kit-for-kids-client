import React, { useEffect, useState } from "react";
import PhotoAlbum from "react-photo-album";

export default function Gallery() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => {
        const fetchedPhotos = data.map(({ picture_url}) => ({
          src: picture_url,
          width:"20px",
          height:"20px",
        }));
        setPhotos(fetchedPhotos);
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
      });
  }, []);

  return <PhotoAlbum layout="columns" photos={photos} />;
}
