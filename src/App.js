import Navbar from "./components/Navbar";
import "./assets/styles/App.css";
import pic1 from "./assets/images/pic1.png";
import pic2 from "./assets/images/pic2.png";
import pic3 from "./assets/images/pic3.png";
import pic4 from "./assets/images/pic4.png";
import { EmailOutlined } from "@material-ui/icons";
import Footer from "./components/Footer";
import Countdown from "./Countdown";

function App() {
  const currentDate = new Date();
  const year =
    currentDate.getMonth() === 11 && currentDate.getDate() > 23
      ? currentDate.getFullYear() + 1
      : currentDate.getFullYear();
  return (
    <>
      <Navbar />
      <div className="hero">
        <div className="hero__blur1" />
        <h1 className="hero__title">Nextverse</h1>
        <p className="hero__descp">
          Discover 1000+ digital artwork and collect all of them directly in one
          platform with safe payment.
        </p>
        <div className="hero__blur2" />
        <div className="hero__blur3" />
      </div>
      <div className="mint">
        <div className="mint__bg"></div>
        {/* <div className="mint__container"> */}
        <div className="mint__left">
          <img src={pic1} alt="" />
          <div className="mint__leftContainer">
            <span>Special NFT #1</span>
            <p>
              cyberpunk girl
              <br />
              <span>190 ETH</span> ($463,888)
            </p>
          </div>
        </div>
        <div className="mint__right">
          <h2 className="title">
            Minting
            <br />
            coming soon!
            <br />
            <Countdown date={`${year}-12-31T00:00:00`} />
          </h2>
          <p>
            Nextverse is a collection programmatically, randomly generated NFTs
            on the Ethereum blockchain. <br />
            The 1st generation consists of 7,777 randomly assembled characters.
          </p>
          <button>
            <span>Mint</span>
          </button>
        </div>
        {/* </div> */}
      </div>
      <div className="discover">
        <div className="discover__header">
          <h2 className="title">
            Discover{" "}
            <span>
              Nextverse <br />
              special NFTs.
            </span>
          </h2>
          <p>
            Discover 1000+ collectibles artwork from professional artist all
            around the world, happy bidding!
          </p>
        </div>
        <div className="discover__container">
          <div className="discover__card">
            <div className="discover__cardImg1">
              <img src={pic2} alt="" />
            </div>
            <span>Nextverse Special NFT #2</span>
          </div>

          <div className="discover__card">
            <div className="discover__cardImg2">
              <img src={pic3} alt="" />
            </div>
            <span>Nextverse Special NFT #3</span>
          </div>

          <div className="discover__card">
            <div className="discover__cardImg3">
              <img src={pic4} alt="" />
            </div>
            <span>Nextverse Special NFT #4</span>
          </div>
        </div>
        <div className="discover__bg"></div>
      </div>
      <div className="roadmap">
        <h2 className="title">Roadmap</h2>
        <div className="roadmap__container">
          <div className="roadmap__card">
            <p className="roadmap__cardNo">
              <span>1</span>
            </p>
            <p className="roadmap__cardTitle">NFT comicbook</p>
            <span className="roadmap__cardDescp">
              Drop NFT comicbook to holders.
            </span>
          </div>

          <div className="roadmap__card">
            <p className="roadmap__cardNo">
              <span>2</span>
            </p>
            <p className="roadmap__cardTitle">NFT item marketplace</p>
            <span className="roadmap__cardDescp">
              Start discover and find the art you like, you can sort and filter
              from the date added, most popular, price filter, and more.
            </span>
          </div>

          <div className="roadmap__card">
            <p className="roadmap__cardNo">
              <span>3</span>
            </p>
            <p className="roadmap__cardTitle">P2E game launching</p>
            <span className="roadmap__cardDescp">
              Final step, after you find the art you like, place a bid and wait.
              If you win when the auction ends, pay it, and it’s yours!
            </span>
          </div>
        </div>
      </div>

      <div className="subscribe">
        <div className="subscribe__container">
          <div className="subscribe__bg1"></div>
          <div className="subscribe__bg2"></div>
          <div className="subscribe__bg3"></div>
          <h2 className="title">
            Subscribe to Our <br />
            Newsletter
          </h2>
          <div className="subscribe__form">
            <div className="subscribe__input">
              <EmailOutlined />
              <input type="text" placeholder="Email address here" />
            </div>
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
