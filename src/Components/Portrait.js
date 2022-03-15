import React from 'react'
import { Card } from 'react-bootstrap';
import me from '../image/me.jpeg'

function Portrait(){
    return (
        <>
            <div className='container-fluid mt-5 pt-5 cut1'>
                <div className='row'>
                    <div className='col-sm'>
                        <h1 className='contentWords'>Welcome to This week of Portrait</h1>
                        <p className='contentWords'>this week we got a juicy photoshoot</p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <Card className='contentPart'>
                            <a href={me}><Card.Img src={me} alt="img"></Card.Img></a>
                        </Card>
                    </div>
                    <div className='col-md-4'>
                        <Card className='contentPart'>
                            <a href={me}><Card.Img src={me} alt="img"></Card.Img></a>
                        </Card>
                    </div>
                    <div className='col-md-4'>
                        <Card className='contentPart'>
                            <Card.Img src={me} alt="img"></Card.Img>
                        </Card>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <Card className='contentPart'>
                            <Card.Img src={me} alt="img"></Card.Img>
                        </Card>
                    </div>
                    <div className='col-md-4'>
                        <Card className='contentPart'>
                            <Card.Img src={me} alt="img"></Card.Img>
                        </Card>
                    </div>
                    <div className='col-md-4'>
                        <Card className='contentPart'>
                            <Card.Img src={me} alt="img"></Card.Img>
                        </Card>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <Card className='contentPart'>
                            <Card.Img src={me} alt="img"></Card.Img>
                        </Card>
                    </div>
                    <div className='col-md-4'>
                        <Card className='contentPart'>
                            <Card.Img src={me} alt="img"></Card.Img>
                        </Card>
                    </div>
                    <div className='col-md-4'>
                        <Card className='contentPart'>
                            <Card.Img src={me} alt="img"></Card.Img>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );

}
export default Portrait;