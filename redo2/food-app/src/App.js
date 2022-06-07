import logo from './logo.svg';
import './App.css';
import RecipeInputForm from "./components/RecipeInputForm";
import RecipeList from "./components/RecipeList";

function App() {
  return (
    <div className="App">
      <RecipeInputForm />
      <RecipeList />
    </div>
  );
}

export default App;
