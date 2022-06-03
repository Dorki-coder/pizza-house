import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import Categories from "./Components/Categories";
import Footer from "./Components/Footer";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let res = await fetch("https://pizza.ymatuhin.workers.dev/");
      res = await res.json();
      setData(res as any);
      setLoading(false);
    })();
  }, []);

  if (!loading) {
    return (
      <>
        <Header />
        <Slider data={data} />
        <Categories data={data} />
        <Footer />
      </>
    );
  } else return <></>;
}

export default App;
