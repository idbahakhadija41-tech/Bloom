import CareScale from './CareScale'
import '../styles/PlantItem.css'

function PlantItem({ name, cover, category, isBestSale, water, light }) {
  return (
    <li className="bloom-plant-item">
      <div className="bloom-plant-cover">
        {isBestSale && <span className="bloom-badge">🔥 Top vente</span>}
        <img className="bloom-plant-img" src={cover} alt={name} />
      </div>
      <h3 className="bloom-plant-name">{name}</h3>
      <p className="bloom-plant-category">Catégorie : {category}</p>
      <CareScale careType="water" scaleValue={water}  />
<CareScale careType="light" scaleValue={light}  />
    </li>
  )
}

export default PlantItem
