import React from 'react';
import { Card } from 'react-bootstrap';
import land from '../image/land1.jpeg'
import land2 from '../image/land2.jpeg'
import land3 from '../image/land3.jpeg'
import land4 from '../image/land4.jpeg'
import land5 from '../image/land5.jpeg'
import land6 from '../image/land6.jpeg'
import land7 from '../image/land7.jpeg'
import land8 from '../image/land8.jpeg'
import land9 from '../image/land9.jpeg'


function Land(){
    return(
        <>
            <div className='container mt-5 pt-5'>
                <div className='row'>
                    <div className='col-sm'>
                        <h1 className='contentWords'>THIS WEEKS OF LANDSCAPE PHOTOGRAPHYS</h1>
                        <p className='contentWords'>Go out and enjoy the great out doors Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className='container'>
                <div className='row '>
                     <div className='col-sm'>
                        <Card className='contentPart'>
                            <Card.Img className='contentimg' src={land} alt="img"></Card.Img>
                        </Card>
                    </div>
                    <div className='col-sm'>
                        <Card className='contentPart'>
                            <Card.Img className='contentimg' src={land2}></Card.Img>
                        </Card>
                    </div>
                    <div className='col-sm'>
                        <Card className='contentPart'>
                            <Card.Img className='contentimg' src={land3}></Card.Img>
                        </Card>
                     </div>
                </div>
                <div className='row'>
                    <div className='col-sm'>
                        <Card className='contentPart'>
                             <Card.Img className='contentimg' src={land4}></Card.Img>
                        </Card>
                    </div>
                    <div className='col-sm'>
                        <Card className='contentPart'>
                            <Card.Img className='contentimg' src={land5}></Card.Img>
                        </Card>
                        </div>
                     <div className='col-sm'>
                        <Card className='contentPart'>
                            <Card.Img className='contentimg' src={land6}></Card.Img>
                        </Card>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm'>
                        <Card className='contentPart'>
                             <Card.Img className='contentimg' src={land7}></Card.Img>
                        </Card>
                    </div>
                    <div className='col-sm'>
                        <Card className='contentPart'>
                            <Card.Img className='contentimg' src={land8}></Card.Img>
                        </Card>
                        </div>
                     <div className='col-sm'>
                        <Card className='contentPart'>
                            <Card.Img className='contentimg' src={land9}></Card.Img>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Land