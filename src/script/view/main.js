import '../component/meals-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';
 
const main = () => {
  const searchElement = document.querySelector('search-bar');
  const mealsListElement = document.querySelector('meals-list');
 
  const onButtonSearchClicked = () => {
    DataSource.searchMeals(searchElement.value)
    .then(renderResult)
    .catch(fallbackResult);
   };
 
  const renderResult = results => {
    mealsListElement.mealss = results;
  };
 
  const fallbackResult = message => {
    mealsListElement.renderError(message);
  };
 
  searchElement.clickEvent = onButtonSearchClicked;
};
 
export default main;