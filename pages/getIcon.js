import sunnyDay from "../public/animatedIcons/day.svg";
import sunnyNight from "../public/animatedIcons/night.svg";
import partyCloudyDay from "../public/animatedIcons/cloudy-day-1.svg";
import partlyCloudyNight from "../public/animatedIcons/cloudy-night-1.svg";
import cloudyDay from "../public/animatedIcons/cloudy.svg";
import patchyRain from "../public/animatedIcons/rainy-1.svg";
import patchySnow from "../public/animatedIcons/snowy-4.svg";
import thunder from "../public/animatedIcons/thunder.svg";
import blowingSnow from "../public/animatedIcons/snowy-5.svg";
import blizzard from "../public/animatedIcons/snowy-6.svg";
import heavyRain from "../public/animatedIcons/rainy-6.svg";
import lightRain from "../public/animatedIcons/rainy-5.svg";
import icePellets from "../public/animatedIcons/rainy-7.svg";
import blank from "../public/animatedIcons/blank.png";

const currentHour = new Date().getHours();
const isNight = currentHour >= 18 || currentHour <= 5 ? true : false;

const getIcon = (iconCode) => {
  switch (iconCode) {
    case 113:
      return isNight ? sunnyNight : sunnyDay;
    case 116:
      return isNight ? partlyCloudyNight : partyCloudyDay;
    case 119:
    case 122:
    case 143:
    case 248:
    case 260:
      return cloudyDay;
    case 176:
    case 185:
    case 263:
    case 266:
    case 281:
    case 317:
    case 353:
      return patchyRain;
    case 179:
    case 182:
    case 323:
    case 326:
    case 329:
    case 332:
    case 368:
      return patchySnow;
    case 200:
    case 386:
    case 389:
    case 392:
    case 395:
      return thunder;
    case 227:
    case 335:
    case 371:
      return blowingSnow;
    case 230:
    case 338:
      return blizzard;
    case 284:
    case 305:
    case 308:
    case 314:
    case 320:
    case 359:
      return heavyRain;
    case 296:
    case 299:
    case 302:
    case 311:
    case 356:
      return lightRain;
    case 350:
    case 362:
    case 365:
    case 374:
    case 377:
      return icePellets;
    default:
      return blank;
  }
};

export default getIcon;
