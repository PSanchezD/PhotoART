import React, { useState } from "react";
import me from '../image/me.jpeg';
import land1 from '../image/land1.jpeg';
import me3 from '../image/me3.jpeg';
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
                    <div className="col-sm img1">
                        <img  className="homeimg" width={350} src={me} alt="me"></img>
                    </div>
                    <div className="col">
                        <p className="text-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <button onClick={handleOpen} className="btn btn-primary offset-4">Subscribe</button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton={handleClose}>
                                <Modal.Title color="success">Subscribe for more photography!</Modal.Title>
                                <Modal.Body>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" placeholder="Email" />
                                            <Form.Text type="email" className="text-muted">
                                            We'll never share your email with anyone else.
                                            </Form.Text>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="name" placeholder="Name" />
                                        </Form.Group>
                                        <Form.Group>
                                            <Button variant="warning" type="submit">Submit</Button>
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
                        <Carousel.Caption className="col-sm">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </Carousel.Caption>
                    </CarouselItem>
                    <CarouselItem>
                        <img className="car-img" src={me3} alt="cont"></img>
                        <Carousel.Caption className="col-sm">
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
                         </Card>
                     </div>
                     <div className="col">
                         <Card bg="dark">
                             <Card.Img src={me3}></Card.Img>
                         </Card>
                     </div>
                     <div className="col">
                         <Card bg="dark">
                             <Card.Img src={pro}></Card.Img>
                         </Card>
                     </div>
                 </div>
                 <div className="row pt-5">
                     <div className="col-sm">
                         <h1 className="span1">Top 3 picks of the week</h1>
                     </div>
                 </div>
             </div>
             <hr/>
        </div>
    );
}
export default Home