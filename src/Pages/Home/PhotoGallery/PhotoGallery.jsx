
import 'tailwindcss/tailwind.css';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { useEffect, useState } from 'react';

const PhotoGallery = () => {
    const [selectedPhoto, setSelectedPhoto] = useState(0);
    const [photoUrls, setPhotoUrls] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then((res) => res.json())
            .then((data) => {
                const urls = data.map(({ picture_url }) => ({
                    original: picture_url,
                    thumbnail: picture_url,
                }));
                setPhotoUrls(urls);
            });
    }, []);

    const handlePhotoClick = (index) => {
        setSelectedPhoto(index);
    };

    return (
        <div>
            <h2 className='text-2xl font-bold lg:text-5xl text-center text-orange-500 mb-8'>Our Photo Gallery</h2>
            <div className="photo-gallery">
                <ImageGallery
                    items={photoUrls}
                    showIndex={true}
                    startIndex={selectedPhoto}
                    onClick={(event) => handlePhotoClick(event.itemIndex)}
                    // thumbnailSize=""
                    // originalClass=""
                    className="h-80 w-80"
                />
            </div>
        </div>
    );
};

export default PhotoGallery;