import { createContext, useContext, useMemo, useState } from 'react';

/** images **/
import iconFenceGold from '../assets/img/icon-fence-gold.png';
import iconFenceRed from '../assets/img/icon-fence-red.png';
import iconFenceRepair from '../assets/img/icon-fence-repair.png';
import iconHoaIrrigation from '../assets/img/icon-hoa-irrigation.png';
import iconHoaLandscape from '../assets/img/icon-hoa-landscape.png';
import iconHoaLighting from '../assets/img/icon-hoa-lighting.png';
import iconHoaMaintenance from '../assets/img/icon-hoa-maintenance.png';
import iconHoaMonumentRepair from '../assets/img/icon-hoa-monument-repair.png';
import iconLawnMowerGold from '../assets/img/icon-lawn-mower-gold.png';
import iconLawnMowerRed from '../assets/img/icon-lawn-mower-red.png';
import iconLightBulbGold from '../assets/img/icon-light-bulb-gold.png';
import iconLightBulbRed from '../assets/img/icon-light-bulb-red.png';
import iconMasonGold from '../assets/img/icon-mason-gold.png';
import iconMasonRed from '../assets/img/icon-mason-red.png';
import iconMasonryGold from '../assets/img/icon-masonry-gold.png';
import iconMasonryRed from '../assets/img/icon-masonry-red.png';
import iconTreeWalkGold from '../assets/img/icon-tree-walk-gold.png';
import iconTreeWalkRed from '../assets/img/icon-tree-walk-red.png';
import iconWaterHoseGold from '../assets/img/icon-water-hose-gold.png';
import iconWaterHoseRed from '../assets/img/icon-water-hose-red.png';
import imgCarnival from '../assets/img/img-carnival.jpg';
import imgColoredPencils from '../assets/img/img-colored-pencils.png';
import imgFence from '../assets/img/img-fence.jpg';
import imgFenceBroken from '../assets/img/img-fence-broken.jpg';
import imgFenceRepair from '../assets/img/img-fence-repair.jpg';
import imgFlowers from '../assets/img/img-flowers.jpg';
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
import imgNewsLetter1 from '../assets/img/img-news-letter-1.jpg';
import imgNewsLetter2 from '../assets/img/img-news-letter-2.jpg';
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
import facebookLogo from '../assets/img/icon-facebook.png';
import grassDark from '../assets/img/grass-dark.png';
import instagramLogo from '../assets/img/icon-instagram.png';
import logoCard from '../assets/img/logo-card.png';
import twitterLogo from '../assets/img/icon-twitter.png';

const images = {
  iconFenceGold,
  iconFenceRed,
  iconFenceRepair,
  iconHoaIrrigation,
  iconHoaLandscape,
  iconHoaLighting,
  iconHoaMaintenance,
  iconHoaMonumentRepair,
  iconLawnMowerGold,
  iconLawnMowerRed,
  iconLightBulbGold,
  iconLightBulbRed,
  iconMasonGold,
  iconMasonRed,
  iconMasonryGold,
  iconMasonryRed,
  iconTreeWalkGold,
  iconTreeWalkRed,
  iconWaterHoseGold,
  iconWaterHoseRed,
  imgCarnival,
  imgColoredPencils,
  imgFence,
  imgFenceBroken,
  imgFenceRepair,
  imgFlowers,
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
  imgNewsLetter1,
  imgNewsLetter2,
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
  logoMain
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
      if (image.indexOf('tree-trimming') > -1) console.log('image', image);
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
export {
  ImageProvider,
  images,
  useImageState
};