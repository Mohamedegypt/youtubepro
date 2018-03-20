import { VIDEO, PHOTOS, CODE, ANNOUNCEMENT } from './slideTypes.js';

const VIDEO_ICON = 'https://png.icons8.com/ios/50/000000/play-button-circled-filled.png';
const PHOTOS_ICON = 'https://png.icons8.com/ios-glyphs/50/000000/picture.png';
const CODE_ICON = 'https://png.icons8.com/ios/50/000000/code-file-filled.png';
const ANNOUNCEMENT_ICON = 'https://png.icons8.com/ios-glyphs/50/000000/megaphone.png';


export default function getIcons(iconType) {
  switch(iconType) {
    case VIDEO: {
      return VIDEO_ICON;
    }
    case PHOTOS: {
      return PHOTOS_ICON;
    }
    case CODE: {
      return CODE_ICON;
    }
    case ANNOUNCEMENT: {
      return ANNOUNCEMENT_ICON;
    }
  }
}
