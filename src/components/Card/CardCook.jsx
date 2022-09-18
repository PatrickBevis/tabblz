import React from 'react';
import '../Card/CardCook.css';
import {BsFillArrowRightCircleFill} from "react-icons/bs"

const CardCook = () => {
    return (
        <div>
            <div className="container ">
                <div className=' row d-flex align-items-center  '>
                    <div className="card  border p-1 rounded-4 shadow-lg mt-2 mb-3" >
                        <div className='bg-white '>
                            <img src="https://via.placeholder.com/50" className=" p-2 me-2 bg-white" alt="..." />
                            <h5 className="card-title bg-white d-inline">Patrick BEVIS</h5>
                        </div>
                        <div className="card-body bg-white">

                            <p className="card-text bg-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        
                        </div>
                        
                        <div className='bg-white d-flex justify-content-end'>
                        <BsFillArrowRightCircleFill size={40} className="bg-white text-danger m-3"/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    );
};

export default CardCook;