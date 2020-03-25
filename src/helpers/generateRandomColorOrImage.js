import getColor from '../requests/colourslovers/getColor';
import getImage from '../requests/colourslovers/getImage';

import randomImageHex from './randomImageHex';
import randomFactor from './randomFactor';

export default async ({circle, square}) => {
  try {
    if (circle) {
      const {data: color} = await getColor();
      return {backgroundColor: `#${color[0].hex}`};
    } else if (square) {
      const {data: image} = await getImage();
      return {uri: image[0].imageUrl};
    }

    if (randomFactor()) {
      const {data: color} = await getColor();
      return {backgroundColor: `#${color[0].hex}`};
    }
    const {data: image} = await getImage();
    return {uri: image[0].imageUrl};
  } catch (_err) {
    return {backgroundColor: randomImageHex()};
  }
};
