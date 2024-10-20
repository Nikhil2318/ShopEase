import { useEffect } from "react";
import Categories from "./Categories/Categories";
import Sales from "./Sales/Sales";
import { useLocation } from "react-router-dom";
function Home() {
  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <Categories />
      <Sales />
    </div>
  );
}

export default Home;
