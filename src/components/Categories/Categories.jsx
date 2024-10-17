import "./Categories.css";
function Categories() {
  return (
    <div className="categories-container">
      {" "}
      {/* Added a container div */}
      <div className="catergory">
        <span>Women Fashion</span>
        <span>Men Fashion</span>
        <span>Electronics</span>
        <span>Home & Lifestyle</span>
        <span>Medicine</span>
        <span>Sports & Outdoor</span>
        <span>Baby & Toys</span>
        <span>Groceries & Pets</span>
        <span>Health & Beauty</span>
      </div>
      <span className="vertical-line"></span>
      <img src="./icons/apple-img.png" alt="apple_img" className="apple-img"/>
    </div>
  );
}

export default Categories;
