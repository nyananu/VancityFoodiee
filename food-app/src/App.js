import './index.css';
import RecipeInputForm from "./components/RecipeInputForm";
import {RecipeContainer} from "./components/RecipeContainer";
import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <Header/>
            <RecipeInputForm />
            <RecipeContainer />
        </div>
    );
}

export default App;
