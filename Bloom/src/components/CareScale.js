import sun from '../assets/sun.svg'
import water from '../assets/water.svg'

const qauntityLabel = { 
  1: 'peu',
  2: 'modérenement',
  3: 'beaucoup',
  }

function CareScale({ scaleValue, careType }) {
  const scaleRange = [1, 2, 3]
  const icon = careType === 'light' ? sun : water
  const label = careType === 'light' ? 'de lumière' : "d'arrosage"

  return (
    <div onClick={() =>
              alert(
                `cette plante requiert ${qauntityLabel[scaleValue]}
                 ${label}`
              )
            }>
      {scaleRange.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <img
            key={rangeElem}
            src={icon}
            alt={`${careType}-icon`}
            width="20"
            height="20"
            
          />
        ) : null
      )}
    </div>
  )
}

export default CareScale