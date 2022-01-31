import React from "react";
import { useEffect, useState } from "react";

function Apitest() {
  const [Result, setResult] = useState([]);

  const fichapi = async () => {
    const data = await fetch(`https://api.atwrap.ae/products`, {mode:'cors'});
    const result = await data.json();

    setResult(result);
  };

  useEffect(() => {
    fichapi();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center">Products</h1>
          </div>
        </div>
        <div className="row">
          {Result.map((curntElmnt) => {
            return (
              <div className="col-md-4 py-3" key={curntElmnt.id}>
                <p className="title">
                  {curntElmnt.tag ? curntElmnt.tag : "No Tag"}
                </p>
                <div className="card">
                  <img src={curntElmnt.image} alt="" height={300} />
                  <div className="card-body">
                    <div className="content">
                      <div className="price">
                        <h5>{curntElmnt.name}</h5>
                        <p>
                          {curntElmnt.variants.map((price) => {
                            if (price.size === 'Small') {
                              return "Rs. " + price.price;
                            }
                            
                          })}
                        </p>
                      </div>
                      <p>{curntElmnt.description.slice(0, 90)}</p>
                      <div className="btn_div">
                        <button>QUICK SHOP</button>
                        <button>PERSONALIZE</button>
                        <button>+</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Apitest;
