import { React } from 'react'
import Tarjeta from './Components/Tarjeta'


function App() {

  return (
        <div>
      <Tarjeta
        nombre="Jeff Bezos"
        nombreCompleto="Jeffrey Preston Bezos"
        profesion="Empresario, ingeniero eléctrico e informático"
        imagen="/jeff.jpg"
        descripcion="Fundador de Amazon, una de las compañías más grandes del mundo. También es dueño de Blue Origin, empresa aeroespacial. Se lo reconoce como uno de los hombres más ricos del planeta, pionero del comercio electrónico y la computación en la nube."
      />

      <Tarjeta
        nombre="Mark Zuckerberg"
        nombreCompleto="Mark Elliot Zuckerberg"
        profesion="Programador y empresario tecnológico"
        imagen="/mark.jpg"
        descripcion="Cofundador y director ejecutivo de Meta Platforms (antes Facebook). Creó Facebook en 2004 desde su dormitorio en Harvard, y lo convirtió en la red social más influyente del mundo. Es uno de los empresarios más jóvenes y ricos, reconocido por su impacto en la comunicación digital y la realidad virtual."
      />

      <Tarjeta
        nombre="Steve Jobs"
        nombreCompleto="Steven Paul Jobs"
        profesion="Empresario y visionario tecnológico"
        imagen="/steve.jpg"
        descripcion="Cofundador de Apple Inc., creador de productos icónicos como el iPhone, iPod, iPad y Mac. También lideró Pixar Animation Studios, revolucionando la animación digital. Se lo recuerda como un innovador brillante, aunque exigente, cuya visión transformó la tecnología y la cultura."
      />
    </div>

  )
}

export default App
