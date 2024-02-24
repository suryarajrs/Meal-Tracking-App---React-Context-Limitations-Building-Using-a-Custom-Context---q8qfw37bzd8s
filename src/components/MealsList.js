import React, { useContext } from "react";
import { MyContext } from "./MealsProvider";

const MealsList = () => {
    const { meals, tickMeal } = useContext(MyContext)


    return (
        <div>
            <h2>Meals:</h2>
            <ul>
                {meals.map((ele) => {

                    return (
                        <li>
                            <input
                                type="checkbox"
                                checked={ele.checked}
                                onChange={() => tickMeal(ele.id)}
                            />
                            {ele.name}
                        </li>
                    )

                })}



            </ul>
        </div>
    )
}

export default MealsList;