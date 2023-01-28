import "./Product.scss";

const Product = (props) => {
  const { title, price, images } = props.items;
  return (
    <div className={props.className}>
      <img src={images} alt={title} />
      <div className="info">
        <h2>{title}</h2>
        <h3>${price}</h3>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        culpa voluptas, molestias perspiciatis recusandae et.
      </p>
      <button className="btn">see more</button>
    </div>
  );
};

export default Product;
