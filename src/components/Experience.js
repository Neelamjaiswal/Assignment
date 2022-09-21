import React from 'react'
//import Login from "./components/Login";
import Card from 'react-bootstrap/Card';

export default function Home() {
  return (
    <>
   
    <br />
    
<div className='rowC'>
<div className='about1'>
<Card style={{ width: '18rem', color:'green'   }}>

      <Card.Body>
        <Card.Title>AE</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">2017-2022</Card.Subtitle>
        <Card.Text>
          Working as Assistant  Enginner.
        </Card.Text>
        <Card.Link href="#">See details</Card.Link>
      </Card.Body>
    </Card></div>
<div className='image1'>
<Card style={{ width: '18rem' ,color:'red' }}>
      <Card.Body>
        <Card.Title>Indexing Project</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">2020-till date</Card.Subtitle>
        <Card.Text>
          Development Project
        </Card.Text>
        <Card.Link href="#">See details</Card.Link>
      </Card.Body>
    </Card>
    </div>
</div>




   


    </>
  )
}
