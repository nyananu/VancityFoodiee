import './index.css';
import RecipeInputForm from "./components/RecipeInputForm";
import RecipeList from "./components/RecipeList";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <RecipeInputForm />
            <RecipeList />
            <Footer/>
        </div>
    );
}

export default App;
