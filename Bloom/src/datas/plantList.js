import rose from '../assets/flowers/rose.jpg'
import tulip from '../assets/flowers/tulip.jpg'
import sunflower from '../assets/flowers/sunflower.jpg'
import hibiscus from '../assets/flowers/hibiscus.jpg'
import cherry from '../assets/flowers/cherry.jpg'
import lotus from '../assets/flowers/lotus.jpg'
import lavender from '../assets/flowers/lavender.jpg'
import daisy from '../assets/flowers/daisy.jpg'
import bouquet from '../assets/flowers/bouquet.jpg'

// Pour utiliser une vraie photo : mets ton fichier dans src/assets/flowers/
// (ex: rose.jpg), puis change l'import ci-dessus (import rose from '../assets/flowers/rose.jpg')

export const plantList = [
  { id: '1f', name: 'Rose rouge', category: 'classique', cover: rose, isBestSale: true, light: 3, water: 2 },
  { id: '2a', name: 'Tulipe', category: 'printemps', cover: tulip, isBestSale: false, light: 2, water: 2 },
  { id: '3b', name: 'Tournesol', category: 'été', cover: sunflower, isBestSale: true, light: 3, water: 1 },
  { id: '4c', name: 'Hibiscus', category: 'exotique', cover: hibiscus, isBestSale: false, light: 3, water: 3 },
  { id: '5d', name: 'Cerisier en fleurs', category: 'printemps', cover: cherry, isBestSale: false, light: 2, water: 2 },
  { id: '6e', name: 'Lotus', category: 'exotique', cover: lotus, isBestSale: true, light: 3, water: 3 },
  { id: '7f', name: 'Lavande', category: 'été', cover: lavender, isBestSale: false, light: 3, water: 1 },
  { id: '8g', name: 'Marguerite', category: 'classique', cover: daisy, isBestSale: false, light: 2, water: 2 },
  { id: '9h', name: 'Bouquet mixte', category: 'classique', cover: bouquet, isBestSale: false, light: 2, water: 1 }
]
