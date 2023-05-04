import React from "react";
import Cocktail from './Cocktail';

const CocktailList = () => {
  
   console.log(cocktails);
  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">
        No Cocktails Matched Your Search Criteria
      </h2>
    );
  }

  return (
    <section className="section">
      <h2 className="section-title">CockTails</h2>
      <div className="cocktails-center">
        {cocktails.map((drink) => {
          return (
            <Cocktail drink={drink} key={drink.idDrink}/>
          );
        })}
      </div>
    </section>
  );
};

export default CocktailList;