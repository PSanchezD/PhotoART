import React from 'react'
import { Card } from 'react-bootstrap';
import me from '../image/me.jpeg'
import me2 from '../image/me2.jpeg'
import me3 from '../image/me3.jpeg'
import me4 from '../image/me4.jpeg'
import me5 from '../image/me5.png'
import me6 from '../image/me6.jpeg'
import me7 from '../image/me7.jpeg'
import me8 from '../image/me8.jpeg'
import me9 from '../image/me9.jpeg'

function Portrait(){
    return (
        <>
            <div className='container mt-5 pt-5'>
                <div className='row'>
                    <div className='col-sm'>
                        <h1 className='contentWords'>THIS WEEKS PORTRAIT PHOOTSHOOTS!</h1>
                        <p className='contentWords'> It was a pleasure working with Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <Card className='contentPart'>
                            <a href={me}><Card.Img className='contentimg' src={me} alt="img"></Card.Img></a>
                        </Card>
                    </div>
                    <div className='col-md-4'>
                        <Card className='contentPart'>
                            <a href={me}><Card.Img className='contentimg' src={me2} alt="img"></Card.Img></a>
                        </Card>
                    </div>
                    <div className='col-md-4'>
                        <Card className='contentPart'>
                            <Card.Img className='contentimg' src={me3} alt="img"></Card.Img>
                        </Card>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <Card className='contentPart'>
                            <Card.Img className='contentimg' src={me4} alt="img"></Card.Img>
                        </Card>
                    </div>
                    <div className='col-md-4'>
                        <Card className='contentPart'>
                            <Card.Img className='contentimg' src={me5} alt="img"></Card.Img>
                        </Card>
                    </div>
                    <div className='col-md-4'>
                        <Card className='contentPart'>
                            <Card.Img className='contentimg' src={me6} alt="img"></Card.Img>
                        </Card>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <Card className='contentPart'>
                            <Card.Img className='contentimg' src={me7} alt="img"></Card.Img>
                        </Card>
                    </div>
                    <div className='col-md-4'>
                        <Card className='contentPart'>
                            <Card.Img className='contentimg' src={me8} alt="img"></Card.Img>
                        </Card>
                    </div>
                    <div className='col-md-4'>
                        <Card className='contentPart'>
                            <Card.Img className='contentimg' src={me9} alt="img"></Card.Img>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );

}
export default Portrait;