
import styles from './Myskillsstyles.module.css';
import checkmark from '../../assets/checkmark-dark.svg';
import Skilllist from '../../Common/Skilllist';

 function Myskills() {
  return (
   <section id='Myskills' className={styles.container}>
    <h1>skills </h1>
    <div className={styles.Myskills}>
      <Skilllist src={checkmark} skills='HTML' />
      <Skilllist src={checkmark} skills='CSS' />
      <Skilllist src={checkmark} skills='JS' />
      <Skilllist src={checkmark} skills='REACT' />
      <Skilllist src={checkmark} skills='jquary' />
    </div>
   </section>
  
);

}
export default Myskills;
