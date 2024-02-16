import "./App.css";
import Header from "./components/Header";
import Category from "./components/Category";
import SubCategory from "./components/SubCategory";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Header />
      <Category />
      <SubCategory />
      <Products />
    </div>
  );
}

export default App;
