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
                tableContent={tableContent}
                key={tableContent.id}
              />
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

const NutritionItem = ({ tableContent }) => {
  return (
    <tr>
      <th key={tableContent.nutrition}>{tableContent.nutrition}</th>
      <td key={tableContent.value}>{tableContent.value}</td>
    </tr>
  );
};

export default Nutrition;
