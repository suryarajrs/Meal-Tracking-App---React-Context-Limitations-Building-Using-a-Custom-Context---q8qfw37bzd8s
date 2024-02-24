import React, { useState } from "react";

const todaysMeals = [
    { id: 1, name: 'Baked Beans' , ticked:false },
    { id: 2, name: 'Baked Sweet Potatoes' , ticked:false },
    { id: 3, name: 'Baked Potatoes' , ticked:false },
]
export const MyContext = createContext();
const MealsProvider = ({children}) => {
    const [meals, setMeals] = useState(todaysMeals);


    const tickMeal = (id) => {
      
        const updatedmeals =  meals.map((item) =>{

            if(item.id === id){
                
                return {...item, ticked: !item.ticked};
            }

            return item
        })

      
      setMeals(updatedmeals);
    }

    return (
       <MyContext.Provider value={{meals,tickMeal}}>
        {children}
       </MyContext.Provider>
    )
};

export default MealsProvider;