
import game from '../../assets/tic-tac-to.jpg';
import styles from './ProjectsStyles.module.css';
import tracker from '../../assets/expense-tracker.jpg';
import Projectscard from '../../Common/Projectscard';
import Myportfolio from '../../assets/My-Portfolio.jpg';


function Projects(){
    return(
        <section id='Projects ' className={styles.container}>
            <h1 className='sectiontitle'> Projects</h1>
            <div className={styles.ProjectsContainer} >
           
                <Projectscard 
                 src={tracker}
                 link='https://github.com/Manojgoudmanu/expense-tracker'
                 h2='EXPENCE-TRACKER'
                 p='A simple way to track your expences'
                 src1={game}
                 link1='https://github.com/Manojgoudmanu/tic-tack-to'
                 h3='Tic-Tac-To'
                 p1='A MIND GAME'
                 src2={Myportfolio}
                 link2='https://github.com/Manojgoudmanu/-Manojportfolio'
                 h4='My-old-portfolio'
                 p2='A portfolio of E.MANOJ KUMAR
                 designed BY USING HTML,CSS,JS'/>
            </div>
        </section>
    );
}
export default Projects;