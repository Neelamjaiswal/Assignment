import React from 'react'
import myimage from './myimage.jpg';
//import Login from "./components/Login";

export default function Home() {
  return (
    <>
   
    <br />
    <div className='heading1'>

<h3><u>Welcome to Neelam Jaiswal Portfolio</u></h3>
</div>
<div className='rowC'>

<div className='about1'>
<br/><div class="columns download">
          <p>
          <button><a href={require("./cv.pdf")} download="NeelamJaiswal_CV">Download My Detail Resumet</a></button>
          </p>
         
       </div>
       <b>Intro:</b> My self Neelam Jaiswal.<br/><br/>
<b>Expertise:</b> Studies and Painting.<br/><br/>
<b>About Myself:</b> I am working  as AE IT in UPPCL sine last 5 Year.I love m work...<br/><br/>
<b>Qualification:</b><br/>
<div className='rowC'>
    <div className='col-md-2' ></div>
<div className='col-md-8' >
  <table class="table border shadow" >
        
          <thead class="thead-dark">
            <tr>
            <th scope="col">S.N.</th>
              <th scope="col">Course</th>
              <th scope="col">Institute</th>
              <th scope="col">Year</th>
              
            </tr>
          </thead>
          <tbody>
          <tr> <td>1.</td><td>Polytehnich</td><td>GGP varanasi</td><td>2010-13</td>
                
                </tr>
              
               <tr> <td>3.</td><td>Btech</td><td>BBD,Lucknow</td><td>2013-17</td></tr>
   
       
          </tbody>
        </table>
</div>
</div>

</div>

<div className='image1'>
      <img src={myimage}/>
    </div>
</div>
  
    </>
  )
}
