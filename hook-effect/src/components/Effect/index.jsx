import { useState } from "react"
import Text from "./Text"

export default function Effect() {
  const [showText, setShowText] = useState(false)

  return (
    <div>
      <button onClick={() => setShowText(!showText)}>
        Show text
      </button>

      {showText && <Text />}
    </div>
  )
}

// PARA ENTENDER EL useEffect, HAY QUE CONOCER EL CICLO DE VIDA DE UN COMPONENTE EN REACT
// CICLO DE VIDA DE UN COMPONENTE EN REACT
// 1. Mounting state = ESTADO EN EL QUE SE MONTA EL COMPONENTE
// 2. Updating state = ESTADO EN EL QUE SE ACTUALIZA EL COMPONENTE
// 3. Unmounting state = ESTADO EN EL QUE SE DESMONTA EL COMPONENTE
