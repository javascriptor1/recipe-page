import HeadingTitle from "./components/heading/HeadingTitle.jsx";
import PreparationTime from "./components/preparationTime/PreparationTime.jsx";
import Ingredients from "./components/ingredients/Ingredients.jsx";
import Instructions from "./components/instructions/Instructions.jsx";
import Nutrition from "./components/nutrition/Nutrition.jsx";
import "./App.css";

function App() {
  return (
    <main>
      <HeadingTitle />
      <PreparationTime />
      <Ingredients />
      <Instructions />
      <Nutrition />
    </main>
  );
}

export default App;
