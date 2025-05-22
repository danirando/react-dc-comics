import Alert from "./Alert";

import Cards from "./Cards";

export default function Main({ DataCards }) {
  return (
    <main>
      <div className="container-black">
        <div className="container">
          <div className="current-series">CURRENT SERIES</div>
          <Alert type="alert"></Alert>
        </div>
      </div>
      <div className="black-bg">
        <div className="container column">
          <div className="card-container">
            <Cards data={DataCards} />
          </div>
          <button className="load-more">LOAD MORE</button>
        </div>
      </div>

      <div className="container-blue">
        <div className="container">
          <div className="col-20">
            <img src="../src/assets/img/buy-comics-digital-comics.png" alt="" />
            <p>DIGITAL COMICS</p>
          </div>
          <div className="col-20">
            <img src="../src/assets/img/buy-comics-merchandise.png" alt="" />
            <p>DC MERCHANDISE</p>
          </div>
          <div className="col-20">
            <img src="../src/assets/img/buy-comics-subscriptions.png" alt="" />
            <p>SUBSCRIPTION</p>
          </div>
          <div className="col-20">
            <img src="../src/assets/img/buy-comics-shop-locator.png" alt="" />
            <p>COMIC SHOP LOCATOR</p>
          </div>
          <div className="col-20">
            <img src="../src/assets/img/buy-dc-power-visa.svg" alt="" />
            <p>DC POWER VISA</p>
          </div>
        </div>
      </div>
    </main>
  );
}
