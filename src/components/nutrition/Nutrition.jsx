import "./nutrition.css";
const nutritionTable = [
  { id: 0, nutrition: "Calories", value: "277kcal" },
  { id: 1, nutrition: "Carbs", value: "0g" },
  { id: 2, nutrition: "Protein", value: "20g" },
  { id: 3, nutrition: "Fat", value: "22g" },
];

const Nutrition = () => {
  return (
    <section className="nutrition">
      <h3>Nutrition</h3>
      <p>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <table>
        <tbody>
          {nutritionTable.map((tableContent) => {
            return (
              <NutritionItem
                nutritionObj={tableContent}
                key={tableContent.id}
                
              />
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

const NutritionItem = ({ nutritionObj }) => {
  return (
    <tr>
      <th key={nutritionObj.nutrition} scope="row">{nutritionObj.nutrition}</th>
      <td key={nutritionObj.value}>{nutritionObj.value}</td>
    </tr>
  );
};

export default Nutrition;
