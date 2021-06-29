import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from './axios';
import Recipe from './components/Recipe';


const App = () => {

  const APP_ID = 'a827f8f3';
  const APP_KEY = '0272ba023e8238f33986c52c63bc28a0';
    
  const [recipes, setRecipes] = useState([]);  
  const [search, setSearch] = useState("");
  const [query,setQuery] = useState('chicken');

  const getRecipes = async () => {
    axios.get(`v2?q=${query}&type=public&app_id=a827f8f3&app_key=0272ba023e8238f33986c52c63bc28a0&diet=balanced`).then((res) => {
      //console.log(res.data);
      setRecipes(res.data.hits);
      console.log(recipes);
    })
    
  }

  useEffect(() => {
   getRecipes();
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return(
    <div className = 'App'>
      <form onSubmit={getSearch} className= 'search-form'>
        <input className="search-bar" type ="text" onChange = { updateSearch} value = {search}/>
        <button className="search-button" type = 'submit'>Search</button> 
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe key = {recipe.recipe.label} title = {recipe.recipe.label} calories = {recipe.recipe.calories} 
        image = {recipe.recipe.image} ingredients = {recipe.recipe.ingredients} />
      ))}
      </div>
    </div>
  )
}

export default App;
