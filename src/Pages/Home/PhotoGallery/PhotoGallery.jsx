
// import React from 'react';
// import { Gallery } from 'react-grid-gallery';
// const PhotoGallery = () => {
//   // Array of photo objects
//   const photos = [
//     {
//       src: 'https://i.ibb.co/GCH8P3H/4.jpg',
//       thumbnail: 'https://i.ibb.co/GCH8P3H/4.jpg',
//       thumbnailWidth: 320,
//       thumbnailHeight: 212,
//     },
//     {
//       src: 'https://i.ibb.co/XXShmDs/6.jpg',
//       thumbnail: 'https://i.ibb.co/XXShmDs/6.jpg',
//       thumbnailWidth: 320,
//       thumbnailHeight: 212,
//     },
//     {
//       src: 'https://i.ibb.co/HH8szwH/8.jpg',
//       thumbnail: 'https://i.ibb.co/HH8szwH/8.jpg',
//       thumbnailWidth: 320,
//       thumbnailHeight: 212,
//     },
//     {
//       src: 'https://i.ibb.co/gWC6yjp/p1.jpg',
//       thumbnail: 'https://i.ibb.co/gWC6yjp/p1.jpg',
//       thumbnailWidth: 320,
//       thumbnailHeight: 212,
//     },
//     {
//       src: 'https://i.ibb.co/K0sT94g/p2.jpg',
//       thumbnail: 'https://i.ibb.co/K0sT94g/p2.jpg',
//       thumbnailWidth: 320,
//       thumbnailHeight: 212,
//     },
//     {
//       src: 'https://i.ibb.co/Ny4Hjy6/p3.jpg',
//       thumbnail: 'https://i.ibb.co/Ny4Hjy6/p3.jpg',
//       thumbnailWidth: 320,
//       thumbnailHeight: 212,
//     },
//     {
//       src: 'https://i.ibb.co/pw58H1b/p4.jpg',
//       thumbnail: 'https://i.ibb.co/pw58H1b/p4.jpg',
//       thumbnailWidth: 320,
//       thumbnailHeight: 212,
//     },
//     {
//       src: 'https://i.ibb.co/0FQ3SNn/p5.jpg',
//       thumbnail: 'https://i.ibb.co/0FQ3SNn/p5.jpg',
//       thumbnailWidth: 320,
//       thumbnailHeight: 212,
//     },
//   ];

//   return (
    // <div className="container mx-auto px-4">
    //   <h2 className="text-3xl font-bold text-orange-500 text-center mb-8">Photo Gallery</h2>
    //   <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
    //     {photos.map((photo, index) => (
    //       <div key={index} className="rounded overflow-hidden">
    //         <img src={photo.src} alt={`Photo ${index + 1}`} className="w-full h-auto" />
    //       </div>
    //     ))}
    //   </div>
    // </div>
//   );
// };

// export default PhotoGallery;


// 'https://i.ibb.co/XXShmDs/6.jpg',
// 'https://i.ibb.co/HH8szwH/8.jpg',
// 'https://i.ibb.co/gWC6yjp/p1.jpg',
// 'https://i.ibb.co/K0sT94g/p2.jpg',
// 'https://i.ibb.co/Ny4Hjy6/p3.jpg',
// 'https://i.ibb.co/pw58H1b/p4.jpg',
// 'https://i.ibb.co/0FQ3SNn/p5.jpg',

import React from 'react';

const photos = [
  { src: 'https://i.ibb.co/HH8szwH/8.jpg', width: 4, height: 3 },
  { src: 'https://i.ibb.co/gWC6yjp/p1.jpg', width: 4, height: 3 },
  { src: 'https://i.ibb.co/K0sT94g/p2.jpg', width: 3, height: 4 },
  { src: 'https://i.ibb.co/Ny4Hjy6/p3.jpg', width: 4, height: 3 },
  { src: 'https://i.ibb.co/pw58H1b/p4.jpg', width: 4, height: 3 },
  { src: 'https://i.ibb.co/0FQ3SNn/p5.jpg', width: 4, height: 3 },
  { src: 'https://i.ibb.co/XXShmDs/6.jpg', width: 4, height: 3 },
  { src: 'https://i.ibb.co/nLDZ1Zs/p9.jpg', width: 4, height: 3 }
];

function PhotoGallery() {
  return (
    <div className="container mx-auto px-4 mb-12 mt-8">
    <h2 className="text-3xl font-bold text-orange-500 text-center mb-8">Photo Gallery</h2>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {photos.map((photo, index) => (
        <div key={index} className="rounded overflow-hidden">
          <img src={photo.src} alt={`Photo ${index + 1}`} className="w-full rounded-xl h-32 lg:h-96" />
        </div>
      ))}
    </div>
  </div>
  );
}

export default PhotoGallery;
