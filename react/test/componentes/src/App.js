import './App.css';
import Component from './components/Component.jsx';

function App() {
	return (
		<>
			<div className='title'>
				<h1>Reutilizando componentes</h1>
			</div>
			<section>
                <Component
                    titulo='Superclásico en Córdoba: vuelos, precios y cómo será el operativo de seguridad'
                    subtitulo='Este jueves, el Gobierno de Córdoba anunció detalles importantes, como la distribución de las tribunas y los accesos para los hinchas. El detalle.
                    '
                    parrafo='Este jueves se definió el operativo de seguridad para el superclásico entre Boca y River en el Estadio Mario Alberto Kempes, que se jugará este domingo desde las 15.30 horas. El evento contó con la presencia del ministro de Seguridad de Córdoba, Juan Pablo Quinteros; el presidente de la Agencia Córdoba Deportes, Agustín Caleri y el presidente de la Agencia Córdoba Turismo, Darío Capitani.'
                    postdata='El Camino de Brochero'
                    srcImage='218can.jpg'
                />

                <Component
                    titulo='Superclásico en Córdoba: vuelos, precios y cómo será el operativo de seguridad'
                    subtitulo='Este jueves, el Gobierno de Córdoba anunció detalles importantes, como la distribución de las tribunas y los accesos para los hinchas. El detalle.
                    '
                    parrafo='Se anunciaron detalles importantes como la distribución de las tribunas y los accesos para los hinchas. "Las tribunas norte, que son la Willington y la Gasparini, van a ser para River, y las sur, que son la Ardiles y el Artime, para Boca", explicó el ministro Quinteros en conferencia de prensa.'
                    postdata='Elecciones en España 2023'
                    srcImage='213can.jpg'
                />

                <Component
                    titulo='Superclásico en Córdoba: vuelos, precios y cómo será el operativo de seguridad'
                    subtitulo='Este jueves, el Gobierno de Córdoba anunció detalles importantes, como la distribución de las tribunas y los accesos para los hinchas. El detalle.
                    '
                    parrafo='Entradas. Se pondrán a disposición 25.000 entradas digitales para cada uno de los sectores e hinchadas, que se podrán adquirir posiblemente desde este jueves por la tarde a través de la plataforma Deportick. Se estima que habrá prioridad de compra para los socios y que el costo rondará los 30.000 pesos para la popular y 80.000 pesos para la platea.'
                    postdata='100 Noches Festivaleras'
                    srcImage='119can.jpg'
                />

                <Component
                    titulo='Superclásico en Córdoba: vuelos, precios y cómo será el operativo de seguridad'
                    subtitulo='Este jueves, el Gobierno de Córdoba anunció detalles importantes, como la distribución de las tribunas y los accesos para los hinchas. El detalle.
                    '
                    parrafo='Se anunciaron detalles importantes como la distribución de las tribunas y los accesos para los hinchas. "Las tribunas norte, que son la Willington y la Gasparini, van a ser para River, y las sur, que son la Ardiles y el Artime, para Boca", explicó el ministro Quinteros en conferencia de prensa.'
                    postdata='La Final'
                    srcImage='239can.jpg'
                />
			</section>
		</>
	);
}

export default App;
