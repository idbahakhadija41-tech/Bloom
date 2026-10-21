import { useState } from 'react'
import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import CareScale from './CareScale'
import '../styles/ShoppingList.css'

function ShoppingList() {
  const [activeCategory, setActiveCategory] = useState('')
  const [waterTest, setWaterTest] = useState(3)
  const [lightTest, setLightTest] = useState(2)

  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  )

  const filteredPlants = plantList.filter(
    (plant) => activeCategory === '' || plant.category === activeCategory
  )

  return (
    <div className="bloom-shopping">
      <div className="bloom-controls">
        <div className="bloom-control">
          <label htmlFor="category">Filtrer par catégorie :</label>
          <select
            id="category"
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
          >
            <option value="">
              Toutes les catégories ({plantList.length} plantes)
            </option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="bloom-control">
          <label htmlFor="water">
            Tester <code>scaleValue</code> Eau (💧 1 à 3) :
          </label>
          <input
            id="water"
            type="range"
            min="1"
            max="3"
            value={waterTest}
            onChange={(e) => setWaterTest(Number(e.target.value))}
          />
        </div>

        <div className="bloom-control">
          <label htmlFor="light">
            Tester <code>scaleValue</code> Lumière (☀️ 1 à 3) :
          </label>
          <input
            id="light"
            type="range"
            min="1"
            max="3"
            value={lightTest}
            onChange={(e) => setLightTest(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="bloom-tester">
        <strong>Testeur CareScale en direct :</strong>
        <span>
          Eau (<code>careType="water"</code>) :
          <CareScale careType="water" scaleValue={waterTest} />
        </span>
        <span>|</span>
        <span>
          Lumière (<code>careType="light"</code>) :
          <CareScale careType="light" scaleValue={lightTest} />
        </span>
      </div>

      <ul className="bloom-plant-list">
        {filteredPlants.map((plant) => (
          <PlantItem
            key={plant.id}
            name={plant.name}
            cover={plant.cover}
            category={plant.category}
            isBestSale={plant.isBestSale}
            water={plant.water}
            light={plant.light}
          />
        ))}
      </ul>
    </div>
  )
}

export default ShoppingList
