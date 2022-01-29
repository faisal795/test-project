import React from "react";

function Data() {
  return (
    <>
      <div className="col-md-4">
        <div className="card">
          <button>CROWD FAVORITE</button>
          <img src="https://picsum.photos/200/300?grayscale" alt="" />
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
    </>
  );
}

export default Data;
