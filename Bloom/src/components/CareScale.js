import sun from '../assets/sun.svg'
import water from '../assets/water.svg'

const scaleRange = [1, 2, 3]

function CareScale({ scaleValue, careType }) {
  const icon = careType === 'light' ? sun : water
  const label = careType === 'light' ? 'lumière' : 'eau'

  return (
    <div title={`Besoin en ${label} : ${scaleValue}/3`}>
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
