import React from 'react';
import { Card } from 'react-bootstrap'
import product from '../image/pro.jpeg'
import pro2 from '../image/pro2.jpeg'
import pro3 from '../image/pro3.jpeg'
import pro4 from '../image/pro4.jpeg'
import pro5 from '../image/pro5.webp'
import pro6 from '../image/pro6.jpeg'
import pro7 from '../image/pro7.jpeg'
import pro8 from '../image/pro8.jpeg'
import pro9 from '../image/pro9.jpeg'

function Product (){
    return (
        <>
        <div className='container mt-5 pt-5'>
            <div className='row'>
                <div className='col-sm'>
                    <h1 className='contentWords'>THIS WEEKS OF PRODUCT PHOTOGRAPHYS</h1>
                    <p className='contentWords'>This product will surely Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
            </div>
        </div>
        <hr/>
        <div className='container'>
            <div className='row '>
                 <div className='col-sm'>
                    <Card className='contentPart'>
                        <Card.Img className='contentimg' src={product} alt="img"></Card.Img>
                    </Card>
                </div>
                <div className='col-sm'>
                    <Card className='contentPart'>
                        <Card.Img className='contentimg' src={pro2}></Card.Img>
                    </Card>
                </div>
                <div className='col-sm'>
                    <Card className='contentPart'>
                        <Card.Img className='contentimg' src={pro3}></Card.Img>
                    </Card>
                 </div>
            </div>
            <div className='row '>
                 <div className='col-sm'>
                    <Card className='contentPart'>
                        <Card.Img className='contentimg' src={pro4} alt="img"></Card.Img>
                    </Card>
                </div>
                <div className='col-sm'>
                    <Card className='contentPart'>
                        <Card.Img className='contentimg' src={pro5}></Card.Img>
                    </Card>
                </div>
                <div className='col-sm'>
                    <Card className='contentPart'>
                        <Card.Img className='contentimg' src={pro6}></Card.Img>
                    </Card>
                 </div>
            </div>
            <div className='row '>
                 <div className='col-sm'>
                    <Card className='contentPart'>
                        <Card.Img className='contentimg' src={pro7} alt="img"></Card.Img>
                    </Card>
                </div>
                <div className='col-sm'>
                    <Card className='contentPart'>
                        <Card.Img className='contentimg' src={pro8}></Card.Img>
                    </Card>
                </div>
                <div className='col-sm'>
                    <Card className='contentPart'>
                        <Card.Img className='contentimg' src={pro9}></Card.Img>
                    </Card>
                 </div>
            </div>
        </div>
    </>
    );
}
export default Product;