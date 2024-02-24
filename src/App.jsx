import Navbar from './componentes/Navbar';
import ItemListContainer from './componentes/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return(
    <div>
    <Navbar />
    <ItemListContainer greeting="Bienvenidos!" />
  </div>
  )
}

export default App
