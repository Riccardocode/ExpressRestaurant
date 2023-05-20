import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sizzling Steakhouse Surprise",
    description: "Tender grilled steak paired with a medley of roasted vegetables.",
    price: 15.19,
  },
  {
    id: "m2",
    name: "Seafood Symphony",
    description: "A delightful combination of fresh, succulent seafood.",
    price: 20.5,
  },
  {
    id: "m3",
    name: "Mediterranean Delight",
    description: "Grilled chicken, aromatic herbs, and a colorful array of roasted vegetables, all drizzled with a tangy olive oil dressing",
    price: 8.99,
  },
  {
    id: "m4",
    name: "Asian Fusion Fusion",
    description: "Stir-fried tofu, crisp vegetables, and a savory soy-ginger glaze.",
    price: 7.50,
  },
  {
    id: "m5",
    name: "Tuscan Sunrise",
    description: "Creamy risotto infused with saffron, accompanied by seared scallops and a garnish of fresh herbs.",
    price: 13.90,
  },
  {
    id: "m6",
    name: "Vegetarian Fiesta",
    description: "Grilled seasonal vegetables, a fragrant quinoa pilaf, and a zingy avocado salsa.",
    price: 12.40,
  },
  {
    id: "m7",
    name: "Fusion Fajitas",
    description: "Marinated beef, colorful bell peppers, and caramelized onions.",
    price: 5.60,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
