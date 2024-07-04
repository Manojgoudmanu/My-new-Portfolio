import React from 'react';

 function Projectscard({src ,link,h2 ,p,src1,link1,h3,p1,src2,link2,h4,p2}) {
  return (
    <a href={link} target='_black'>
    <img src={src} className={'manoj'} alt='expence tracker' >
    </img>
    <h2>{h2}</h2>
    <p> {p}</p>
    <a href={link1} target='_blank'> 
     <img src={src1} className='kumar' alt='my new game'></img>                
     <h2>{h3}</h2>
     <p>{p1}</p>
    </a>
    <a href={link2} target='_black'>
      <img src={src2} className='goud' alt='my-portfolio'></img>
      <h2>{h4}</h2>
      <p>{p2}</p>
    </a>

</a>

  );
}
export default Projectscard;