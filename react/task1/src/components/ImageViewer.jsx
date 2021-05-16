import React from 'react';

export default function ImageViewer() {
  const [images, setImages] = React.useState({
    small: [
      { id: 0, url: 'https://picsum.photos/600?random=1' },
      { id: 1, url: 'https://picsum.photos/600?random=2' },
      { id: 2, url: 'https://picsum.photos/600?random=3' },
      { id: 3, url: 'https://picsum.photos/600?random=4' },
    ],
    main: { id: 0, url: 'https://picsum.photos/600?random=1' },
  });

  const handlerChangeImage = (id) => {
    setImages((prevState) => ({
      ...prevState,
      main: prevState.small.find((f) => f.id === id),
    }));
  };

  return (
    <div className='wrap'>
      <div id='img-collection'>
        {images.small.map((img) => (
          <img
            className='img-small'
            src={img.url}
            alt={img.id}
            key={img.id}
            onClick={() => handlerChangeImage(img.id)}
          />
        ))}
      </div>
      <div className='content'>
        <img id='img-main' src={images.main.url} alt={images.main.id} />
      </div>
    </div>
  );
}
