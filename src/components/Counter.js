import React, { useContext } from "react";
import {  MyContext } from './MealsProvider';

const Counter = () => {
    const { meals } = useContext(MyContext)
     const remaingMeals = meals.filter((ele)=> !ele.ticked )
    return (
        <div>
            <h3>Meals Remaining: {remaingMeals.length}</h3>
        </div>
    )
}

export default Counter;