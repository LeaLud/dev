import './App.css';
import './css/article.css'
import {Article} from './components/article.jsx';

function App() {
    return (
        <div className="App">
            <div className='title-center'>
                <h1>Título principal</h1>
            </div>
            <section>
                <Article
                    title = 'Llanuras'
                    subtitle = 'Sur Argentino'
                    description = 'Viajar por el sur de Argentina es ponerse las botas de trekking para hacer rutas por cerros nevados, relajarse junto a un lago cristalino, tener ballenas` con sus crías a metros de distancia con solo acercarte a la orilla del mar, y llegar hasta el final (o el inicio) de la mítica Ruta Panamericana que une el continente de norte a sur.'
                    image = '1'
                    alt = '1'
                ></Article>
                <Article
                    title = 'Lagos'
                    subtitle = 'Suroeste'
                    description = 'Un lago es en realidad un componente más del agua superficial del planeta. Un lago es un lugar en donde el agua superficial que procede de los escurrimientos de la lluvia (y posiblemente de filtraciones del agua subterránea) se ha acumulado debido a una inclinación del terreno.'
                    image = '2'
                    alt = '2'
                ></Article>
                <Article
                    title = 'Montañas'
                    subtitle = 'Región media'
                    description = 'Una montaña es una forma topográfica del relieve terrestre positiva, una eminencia natural que se caracteriza por su altitud y, más generalmente, por su altura relativa, o incluso por su volumen, pendiente, espaciado o continuidad.'
                    image = '3'
                    alt = '3'
                ></Article>
            </section>
        </div>
    );
}

export default App;
