import "./App.css";
import CategoriesSection from "./components/CategoriesSection/CategoriesSection";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LessSection from "./components/LessSection/LessSection";
import TrendingSection from "./components/TrendingSection/TrendingSection";

function App() {
  return (
    <div className="app">
      <Header />
      <CategoriesSection />
      <TrendingSection />
      <LessSection />
      <Footer />
    </div>
  );
}

export default App;
