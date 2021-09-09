import footerLogo from "../assets/images/footerLogo.svg";
import discord from "../assets/images/discord.svg";
import twitter from "../assets/images/twitter.svg";
import '../assets/styles/Footer.css'

const Footer = () => {
    return (
        
      <footer className="footer">
      <div className="footer__left">
        <img src={footerLogo} alt="" className="footer__logo" />
        <p>
          One stop NFT marketplace with 100% safe payment and trusted for more
          than 3 years.
        </p>
        <div className="footer__social">
          <img src={discord} alt="" className="footer__icon" />
          <img src={twitter} alt="" className="footer__icon" />
        </div>
      </div>
      <div className="footer__right">
        <ul>
          <li>Menu</li>
          <li>Home</li>
          <li>Mint</li>
          <li>About</li>
          <li>Roadmap</li>
        </ul>
        <ul>
          <li>Social</li>
          <li>Twitter</li>
          <li>Discord</li>
          <li>Email</li>
        </ul>
      </div>
    </footer>
    )
}

export default Footer
