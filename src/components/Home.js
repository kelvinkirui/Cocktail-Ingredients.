import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchForm from "./SearchForm"
import CocktailList from './CocktailList';
import Comments from './comments';

const Home = () => {
  return (
    <main>
      <SearchForm/>
      <CocktailList/>
      <Comments/>
      
<section>
<NavLink className='btn btn-primary' to ="/">Back Home</NavLink>
</section>
    </main>
  )
}


export default Home;