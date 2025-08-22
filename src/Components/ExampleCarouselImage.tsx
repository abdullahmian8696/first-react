import React from 'react';

interface ExampleCarouselImageProps {
  text: string;
  imageUrl: string;
}

const ExampleCarouselImage: React.FC<ExampleCarouselImageProps> = ({ text="First Slide ", 
  imageUrl = "https://images.unsplash.com/photo-1498050108023-c5249f4df085"  }) => (
  <img
    src={imageUrl || `https://via.placeholder.com/800x400?text=${encodeURIComponent(text)}`}
    alt={text}
    style={{  height: '400px', objectFit: 'cover', maxWidth: '100%' }}

  

  />
);

export default ExampleCarouselImage;
