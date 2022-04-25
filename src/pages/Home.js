import React from "react";

class Home extends React.Component {
  render() {
    return (
      <main>
        <section className="best-selling">
          <h1>Best Selling</h1>
          <p>Shop our customers favorite items</p>
          <div className="product-container">
            <div className="flex">
              <div className="img-container">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEnzhBTtcJOAlFHY2WtkpBf7oIdM9MLqaSDg&usqp=CAU"
                  alt="laser engraved box"
                />
              </div>
              <h2>Laser Engraved Box</h2>
              <p>Price: $10</p>
            </div>
            <div className="flex">
              <div className="img-container">
                <img
                  src="https://cdn3.volusion.com/wbhhv.yqwun/v/vspfiles/photos/ce02xx-2.jpg?v-cache=1601642154"
                  alt="laser engraved coaster"
                />
              </div>
              <h2>Laser Engraved Coaster</h2>
              <p>Price: $3</p>
            </div>
            <div className="flex">
              <div className="img-container">
                <img
                  src="https://www.bestplaques.com/images/detailed/3/red_alder_plaque_7_best_ee7q-00.jpg"
                  alt="laser engraved plaque"
                />
              </div>
              <h2>Laser Engraved Plaque</h2>
              <p>Price: $5</p>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Home;
