import React, { useState } from "react";
import me from '../image/me.jpeg';
import land1 from '../image/land1.jpeg';
import man1 from '../image/man1.jpeg';
import pro from '../image/pro.jpeg';
import { Button, Card, Carousel,CarouselItem, Form, Modal} from 'react-bootstrap'

function Home(){

    const [show,setShow]=useState(false)

    const handleClose = () => setShow(false);
    const handleOpen =() => setShow(true)
    

    return(
        <div className="home-1">
            <div className="container mt-5 pt-5">
                <div className="row p-1 D-inline-block ">
                    <div className="col img1">
                        <img src={me} width={400} alt="me"></img>
                    </div>
                    <div className="col">
                        <p className="text-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <button onClick={handleOpen} className="btn btn-primary offset-4">Subscribe</button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton={handleClose}>
                                <Modal.Title color="success">Subscribe to get the latest in Photography</Modal.Title>
                                <Modal.Body>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                            <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                            </Form.Text>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Your Name</Form.Label>
                                            <Form.Control type="name" placeholder="name" />
                                        </Form.Group>
                                        <Form.Group>
                                            <Button variant="warning">Submit</Button>
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>
                            </Modal.Header>
                        </Modal>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container-fluid">
                <Carousel>
                    <CarouselItem>
                        <img className="car-img" src={land1} alt="cont"></img>
                        <Carousel.Caption className="col">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </Carousel.Caption>
                    </CarouselItem>
                    <CarouselItem>
                        <img className="car-img" src={man1} alt="cont"></img>
                        <Carousel.Caption>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </Carousel.Caption>
                    </CarouselItem><CarouselItem>
                        <img className="car-img" src={pro} alt="cont"></img>
                        <Carousel.Caption>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </Carousel.Caption>
                    </CarouselItem>
                </Carousel>
             </div>
             <hr/>
             <div className="container">
                 <div className="row">
                     <div className="col">
                         <Card bg="dark">
                             <Card.Img src={land1}></Card.Img>
                             <Card.Body>
                                 <Card.Title>LANDSCAPE</Card.Title>
                                 <Card.Text></Card.Text>
                             </Card.Body>
                         </Card>
                     </div>
                     <div className="col">
                         <Card bg="dark">
                             <Card.Img src={man1}></Card.Img>
                             <Card.Body>
                                 <Card.Title>PORTRAIT</Card.Title>
                                 <Card.Text></Card.Text>
                             </Card.Body>
                         </Card>
                     </div>
                     <div className="col">
                         <Card bg="dark">
                             <Card.Img src={pro}></Card.Img>
                             <Card.Body>
                             </Card.Body>
                         </Card>
                     </div>
                 </div>
             </div>
             <hr/>
        </div>
    );
}
export default Home