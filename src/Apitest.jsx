import React from "react";
import { useEffect, useState } from "react";

function Apitest() {

    const [Result, setResult] = useState([]);

  const fichapi = async () => {
    const data = await fetch(`https://api.atwrap.ae/products`);
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
            {
      Result.map((curntElmnt) => {
        return (
            <div className="col-md-4 p-y">
            <div className="card">
                <button>CROWD FAVORITE</button>
              <img src={curntElmnt.image} alt="" />
              <div className="card-body">
                <div className="content">
                  <div className="price">
                    <h5>Saving Box</h5>
                    <p>450 AED</p>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatum fuga ad eos qui praesentium illum!
                  </p>

                  <div className="btn_div">
                    <button>QUICK SHOP</button>
                    <button>PERSONALIZE</button>
                    <button>+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })
    }
     
         
        </div>
      </div>
    </>
  );
}

export default Apitest;
