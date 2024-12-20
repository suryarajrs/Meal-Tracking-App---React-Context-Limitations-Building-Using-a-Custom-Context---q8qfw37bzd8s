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
                        <li key={ele.id}>
                            <input
                                type="checkbox"
                                checked={ele.ticked}
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