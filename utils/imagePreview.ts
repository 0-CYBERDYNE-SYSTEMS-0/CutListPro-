import { Sketch } from '../components/Sketch.tsx';

export const imagePreview = (sketch: Sketch) => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  if (context) {
    const img = new Image();
    img.src = sketch.imageURL;
    img.onload = () => {
      context.drawImage(img, 0, 0);
    };
  }

  return canvas.toDataURL();
};