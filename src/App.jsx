import "./App.css";
import CardData from "./CardData";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Blogs cardData={CardData} />
    </>
  );
}

export default App;
