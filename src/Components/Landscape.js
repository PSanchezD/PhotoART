import React from 'react';
import { Card } from 'react-bootstrap';
import land from '../image/land1.jpeg'

function Land(){
    return(
        <>
            <div className='container mt-5 pt-5'>
                <div className='row'>
                    <div className='col-sm'>
                        <h1 className='contentWords'>content</h1>
                        <p className='contentWords'>this is the one </p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className='container'>
                <div className='row'>
                     <div className='col-sm'>
                        <Card>
                            <Card.Img src={land} alt="img"></Card.Img>
                        </Card>
                    </div>
                    <div className='col-sm'>
                        <Card>
                            <Card.Img src={land}></Card.Img>
                        </Card>
                    </div>
                    <div className='col-sm'>
                        <Card>
                            <Card.Img src={land}></Card.Img>
                        </Card>
                     </div>
                </div>
                <div className='row'>
                    <div className='col-sm'>
                        <Card>
                             <Card.Img src={land}></Card.Img>
                        </Card>
                    </div>
                    <div className='col-sm'>
                        <Card>
                            <Card.Img src={land}></Card.Img>
                        </Card>
                        </div>
                     <div className='col-sm'>
                        <Card>
                            <Card.Img src={land}></Card.Img>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Land