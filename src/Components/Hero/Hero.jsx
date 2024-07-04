import Styles from './Herostyles.module.css'
import image from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterlight from '../../assets/twitter-light.svg';
import twitterdark from '../../assets/twitter-dark.svg';
import githublight from '../../assets/github-light.svg';
import githubdark from '../../assets/github-dark.svg';
import linkedinlight from '../../assets/linkedin-light.svg';
import linkedindark from '../../assets/linkedin-dark.svg';
import cv from '../../assets/E-Manoj-Kumar-Resume.pdf';
import { useTheme } from '../../Common/Themecontext';





 function Hero() {
  const {theme,toggleTheme}=useTheme();
  const themeicon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterlight : twitterdark;
  const githubIcon = theme === 'light' ? githublight : githubdark;
  const linkedinIcon = theme === 'light'? linkedinlight : linkedindark;
  return (
   

    <section>
    <div className={Styles.divcontainer} >
    <img  className={Styles.profilepic} 
    src={image} 
    alt="profilepic"></img>
    <img className={Styles.divcontainer}
     src={themeicon} 
     onClick={toggleTheme}
     alt="theme"></img>
    </div>
    <div className={Styles.name}>
      <h1>E.MANOJ<br/> KUMAR</h1>
      <h2>Frountend developer</h2>
      <span>
        <a href="https://twitter.com/" target="_blank">
        <img src={twitterIcon} alt="Twitter icon" />
        </a>
        <a href="https://github.com/Manojgoudmanu/-Manojportfolio/tree/master" target="_blank">
        <img src={githubIcon} alt="Github icon" />
        </a>
        <a href="https://www.linkedin.com/in/manoj-kumar-27655226a/" target="_blank">
        <img src={linkedinIcon} alt="Linkedin  icon" />
        </a>
        
       
      </span>
      <p>
        my name is manoj kumar and im a  WEB DEVELOPER
      </p>
      <br/>
      <a href={cv} download>
      <button className='hover'>RESUME</button>
      </a>

    </div>

    </section>
);
}
export default Hero;
