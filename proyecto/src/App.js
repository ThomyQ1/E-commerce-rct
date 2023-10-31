import NavbarComponent from "../src/Components/Navbar";
import ItemListContainer from './Components/ItemListContainer';

function App() {
  return (
    <div>
      <NavbarComponent/>
      <ItemListContainer greeting={'Bienvenidos a mi e-commerce'}/>
    </div>
  );
}

export default App;
