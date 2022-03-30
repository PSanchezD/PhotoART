import React from 'react'
import {Infopor} from '../Asset/info-por'

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
            <div className='group-pic'>
                {Infopor.map((item) => {
                        return(
                            <img className='landpic rounded-3' src={item.url} alt="land"/>
                        )
                    })
                }
            </div>
        </>
    );

}
export default Portrait;