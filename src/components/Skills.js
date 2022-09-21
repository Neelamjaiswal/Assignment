import React from 'react'
//import Login from "./components/Login";

export default function Home() {
  return (
    <>
   
    <br /> <br /> <br />
    <div className='rowC'>
    <div className='col-md-4' ></div>
<div className='col-md-4' >
  <table class="table border shadow" >
        
          <thead class="thead-dark">
            <tr>
            <th scope="col">S.N.</th>
              <th scope="col">Skills</th>
              <th scope="col">Experience</th>
              
            </tr>
          </thead>
          <tbody>
           
              <tr>
                <td>1.</td><td>Painting</td><td>1 Years</td></tr>
               <tr><td>2.</td><td>cooking</td><td>5 Years</td></tr>
   <tr> <td>3.</td><td>Novel Reading</td><td>2 Years</td>
                
              </tr>
       
          </tbody>
        </table>
</div>
</div>
    </>
  )
}
