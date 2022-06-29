import './index.css';
import RecipeInputForm from "./components/RecipeInputForm";
import {RecipeList} from "./components/RecipeList";
import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <Header/>
            <RecipeInputForm />
            <RecipeList />
        </div>
    );
}

export default App;
