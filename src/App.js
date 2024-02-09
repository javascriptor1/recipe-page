
import HeadingTitle from './components/heading/HeadingTitle.jsx'
import PreparationTime from './components/preparationTime/PreparationTime.jsx'
import Ingredients from './components/ingredients/Ingredients.jsx'
import Instructions from './components/instructions/Instructions.jsx'
import "./App.css";

function App() {
  return (
    <main>
      <HeadingTitle/>
      <PreparationTime/>
      <Ingredients/>
      <Instructions/>
    </main>
  );
}

export default App;
