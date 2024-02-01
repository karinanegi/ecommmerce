import Container from "./container";
import "./home.css";  
import Exclusive from "./exclusive";

function Home() {
  return (
    <div className="container" > 
      <Exclusive></Exclusive> 
      <div class="overflow-scroll">
      <div id="multi-image">  
        <div className="img-info">
          {" "}
          <img src="./src/assets/pent.png" alt="" />
          <p>USPA</p>
          <p>2000</p>
        </div>
        <div className="img-info">
          <img src="./src/assets/Saree.png" alt="" />
          <p>BiBa</p>
          <p>2500</p>
        </div>
        <div className="img-info">
          <img src="./src/assets/shoes.png" alt="" />
          <p>Addidas</p>
          <p>5600</p>
        </div>

        <div className="img-info">
          <img src="./src/assets/watch.png" alt="" />
          <p>Fossil</p>
          <p>2500</p>
        </div>
        <div className="img-info">
          <img src="./src/assets/top1.png" alt="" />
          <p>Roadster</p>
          <p>600</p>
        </div>
        <div className="img-info">
          <img src="./src/assets/shirt.png" alt="" />
          <p>H&M</p>
          <p>1400</p>
        </div>
        <div className="img-info">
          {" "}
          <img src="./src/assets/top2.png" alt="" />
          <p>HRX</p>
          <p>2200</p>
        </div> 
        <div className="img-info">
          {" "}
          <img src="./src/assets/top2.png" alt="" />
          <p>HRX</p>
          <p>2200</p>
        </div> 
        
        <div className="img-info">
          {" "}
          <img src="./src/assets/top2.png" alt="" />
          <p>HRX</p>
          <p>2200</p>
        </div>
        <div className="img-info">
          {" "}
          <img src="./src/assets/top2.png" alt="" />
          <p>HRX</p>
          <p>2200</p>
        </div>
        <div className="img-info">
          {" "}
          <img src="./src/assets/top2.png" alt="" />
          <p>HRX</p>
          <p>2200</p>
        </div>
        <div className="img-info">
          {" "}
          <img src="./src/assets/top2.png" alt="" />
          <p>HRX</p>
          <p>2200</p>
        </div>
        <div className="img-info">
          <img src=".src/assets/top3.png" alt="" />
          <p>Dressberry</p>
          <p>1890</p>
        </div>
      </div>  

  
</div>
    </div>
  );
}

export default Home;
