import { createContext, useContext, useMemo, useState } from 'react';

/** images **/
import imgCarnival from '../assets/img/img-carnival.jpg';
import imgColoredPencils from '../assets/img/img-colored-pencils.png';
import imgFence1 from '../assets/img/img-fence-1.jpg';
import imgFence2 from '../assets/img/img-fence-2.jpg';
import imgFenceBroken from '../assets/img/img-fence-broken.jpg';
import imgFenceRepair from '../assets/img/img-fence-repair.jpg';
import imgFlowers1 from '../assets/img/img-flowers-1.jpg';
import imgFlowers2 from '../assets/img/img-flowers-2.jpg';
import imgGrass from '../assets/img/img-grass.jpg';
import imgGuyKneeling from '../assets/img/img-guy-kneeling.jpg';
import imgGuyPlanting1 from '../assets/img/img-guy-planting-1.png';
import imgGuyPlanting2 from '../assets/img/img-guy-planting-2.jpg';
import imgGuyTeaching from '../assets/img/img-guy-teaching.jpg';
import imgHillsAtAlamoRanch from '../assets/img/img-hills-at-alamo-ranch.jpg';
import imgHome from '../assets/img/img-home.jpg';
import imgIrrigationSeal from '../assets/img/img-irrigation-seal.png';
import imgLandscapeRendering from '../assets/img/img-landscape-rendering.jpg';
import imgLawnMower1 from '../assets/img/img-lawn-mower-1.jpg';
import imgLawnMower2 from '../assets/img/img-lawn-mower-2.jpg';
import imgLeaves from '../assets/img/img-leaves-2.jpg';
import imgLighting1 from '../assets/img/img-lighting-1.jpg';
import imgLighting2 from '../assets/img/img-lighting-2.jpg';
import imgLighting3 from '../assets/img/img-lighting-3.jpg';
import imgMonument1 from '../assets/img/img-monument-1.jpg';
import imgMonument2 from '../assets/img/img-monument-2.jpg';
import imgMonument3 from '../assets/img/img-monument-3.jpg';
import imgMonument4 from '../assets/img/img-monument-4.jpg';
import imgMonument5 from '../assets/img/img-monument-5.jpg';
import imgMonument6 from '../assets/img/img-monument-6.jpg';
import imgMonument7 from '../assets/img/img-monument-7.jpg';
import imgMonument8 from '../assets/img/img-monument-8.jpg';
import imgMonument9 from '../assets/img/img-monument-9.jpeg';
import imgMonument10 from '../assets/img/img-monument-10.jpeg';
import imgNewsLetter1 from '../assets/img/img-news-letter-1.jpeg';
import imgNewsLetter2 from '../assets/img/img-news-letter-2.jpeg';
import imgNewsLetter3 from '../assets/img/img-news-letter-3.jpeg';
import imgNewsLetter4 from '../assets/img/img-news-letter-4.jpeg';
import imgNewsLetter5 from '../assets/img/img-news-letter-5.jpeg';
import imgNewsLetter6 from '../assets/img/img-news-letter-6.jpeg';
import imgOverhead1 from '../assets/img/img-overhead-1.jpg';
import imgOverhead2 from '../assets/img/img-overhead-2.jpg';
import imgOverhead3 from '../assets/img/img-overhead-3.png';
import imgParklaneFamily from '../assets/img/img-parklane-family.jpg';
import imgPictureFrame from '../assets/img/img-picture-frame.png';
import imgSprinklers1 from '../assets/img/img-sprinklers-1.jpg';
import imgSprinklers2 from '../assets/img/img-sprinklers-2.jpg';
import imgTrees1 from '../assets/img/img-trees-1.jpg';
import imgTrees2 from '../assets/img/img-trees-2.jpg';
import imgTreeTrimming from '../assets/img/img-tree-trimming.jpg';
import logoAnniversary from '../assets/img/logo-anniversary.png';
import logoMain from '../assets/img/logo-main.png';
import logoMain2 from '../assets/img/logo-main-2.png';
import facebookLogo from '../assets/img/icon-facebook.png';
import grassDark from '../assets/img/grass-dark.png';
import instagramLogo from '../assets/img/icon-instagram.png';
import logoCard from '../assets/img/logo-card.png';
import twitterLogo from '../assets/img/icon-twitter.png';

const images = {
  imgCarnival,
  imgColoredPencils,
  imgFence1,
  imgFence2,
  imgFenceBroken,
  imgFenceRepair,
  imgFlowers1,
  imgFlowers2,
  imgGrass,
  imgGuyKneeling,
  imgGuyPlanting1,
  imgGuyPlanting2,
  imgGuyTeaching,
  imgHillsAtAlamoRanch,
  imgHome,
  imgIrrigationSeal,
  imgLandscapeRendering,
  imgLawnMower1,
  imgLawnMower2,
  imgLeaves,
  imgLighting1,
  imgLighting2,
  imgLighting3,
  imgMonument1,
  imgMonument2,
  imgMonument3,
  imgMonument4,
  imgMonument5,
  imgMonument6,
  imgMonument7,
  imgMonument8,
  imgMonument9,
  imgMonument10,
  imgNewsLetter1,
  imgNewsLetter2,
  imgNewsLetter3,
  imgNewsLetter4,
  imgNewsLetter5,
  imgNewsLetter6,
  imgOverhead1,
  imgOverhead2,
  imgOverhead3,
  imgParklaneFamily,
  imgPictureFrame,
  imgSprinklers1,
  imgSprinklers2,
  imgTrees1,
  imgTrees2,
  imgTreeTrimming,
  facebookLogo,
  grassDark,
  instagramLogo,
  logoCard,
  twitterLogo,
  logoAnniversary,
  logoMain,
  logoMain2
};

const ImageContext = createContext();

function useImageState() {
  const context = useContext(ImageContext);
  if (!context) throw new Error('useImageState must be used within ImageProvider');
  const [state, setState] = context;

  async function addPrefetchedImages(images) {
    const newImagesObj = {};
    const batchSize = 4;
    let count = 0;
    let promises = [];
    for (const image of images) {
      if (state.prefetchedImages[image] || newImagesObj[image] || !image) continue;
      promises.push(prefetchImage(image));
      count++;
      if (count === batchSize) {
        const responses = await Promise.allSettled(promises);
        responses.forEach(response => {
          if (response?.status === 'fulfilled' && response?.value?.src) newImagesObj[response.value.src] = response.value;
        });
        count = 0;
        promises = [];
      }
    }
    setState({
      ...state,
      prefetchedImages: {
        ...state.prefetchedImages,
        ...newImagesObj
      }
    });
  }
  function prefetchImage(imgSrc) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = imgSrc;
      img.onload = () => resolve(img);
      img.onerror = () => {
        console.log('failed imgSrc', imgSrc);
        return reject(img);
      };
    });
  }

  return {
    images: state.images,

    addPrefetchedImages
  };
}

function ImageProvider(props) {
  const [state, setState] = useState({
    images,
    prefetchedImages: {}
  });
  const value = useMemo(() => [state, setState], [state]);
  return <ImageContext.Provider value={value} {...props} />;
}
export { ImageProvider, images, useImageState };
