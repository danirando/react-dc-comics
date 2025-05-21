import Alert from "./Alert";

export default function Main() {
  return (
    <main>
      <div className="container-black">
        <div className="container">
          <Alert type="alert"></Alert>
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
