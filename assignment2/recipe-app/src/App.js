import './styles.css';
import Header from "./components/Header";
import AddRecipe from "./components/AddRecipe";
import RecipeList from "./components/RecipeList";
import Footer from "./components/Footer";
import {RecipeProvider} from "./context/RecipeContext";

function App() {
    return (
        <div>
            <Header />
            <RecipeProvider>
                <AddRecipe />
                <RecipeList />
                <Footer/>
            </RecipeProvider>
        </div>
    );
}

export default App;
