import './styles.css';
import Header from "./components/Header";
import Form from "./components/Form";
import RecipeContainer from "./components/RecipeContainer";
import Footer from "./components/Footer"

function App() {
  return (
      <div>
          <Header />
          <Form />
          <RecipeContainer />
          <Footer />
      </div>
  );
}

export default App;
