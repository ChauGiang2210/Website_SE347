import { memo } from "react";
import "./product.scss"
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Product = () => {
    return (
        <div class="row row-cols-1 row-cols-md-4 g-4">
  <div class="col">
    <div class="card"><Link to={"/order"}>
      <img src={process.env.PUBLIC_URL + '/move1.jpg'} class="card-img-top" alt="..."/>
      <div class="card-body product-content">
        <h5 class="card-title ">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      </Link>
    </div>
  </div>
  <div class="col">
    <div class="card"><Link to={"/order"}>
      <img src={process.env.PUBLIC_URL + '/move1.jpg'} class="card-img-top" alt="..."/>
      <div class="card-body product-content">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      </Link>
    </div>
  </div>
  <div class="col">
    <div class="card"><Link to={"/order"}>
      <img src={process.env.PUBLIC_URL + '/move1.jpg'} class="card-img-top" alt="..."/>
      <div class="card-body product-content">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
      </Link>
    </div>
  </div>
  <div class="col">
    <div class="card"><Link to={"/order"}>
      <img src={process.env.PUBLIC_URL + '/move1.jpg'} class="card-img-top" alt="..."/>
      <div class="card-body product-content">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      </Link>
    </div>
  </div>
</div>
    )
};
export default memo(Product);