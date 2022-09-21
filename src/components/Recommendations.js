import React from 'react'
import myimage from './myimage.jpg';
//import Login from "./components/Login";

export default function Home() {
  return (
    <>
   
    <br />
    <div className='heading1'>

<h3><u>Recommendations</u></h3>
</div>
<div className='rowC'>
<div className='about1'>
<h3>I have received  following Recommendations</h3><br/>
<b>Executive Enginner(Vaibhav chaudhary):</b><b><u>Recommendation Regarding Indexing work.</u></b>
<p>I have to talk with all Discom and complete the remaining work...</p>
</div>
<div className='image1'>
      <img src={myimage}/>
    </div>
</div>
  
    </>
  )
}
