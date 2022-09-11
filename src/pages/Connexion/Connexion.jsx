import React from 'react';
import ButtonConn from '../../components/ButtonGrp/ButtonConn/ButtonConn';
import ButtonInsc from '../../components/ButtonGrp/ButtonInsc/ButtonInsc';


const Connexion = () => {
    return (
        <>
            
            <div className="container ">
                <div className="row d-flex align-items-center vh-100 ">
                    <div className="col d-none d-lg-block "><h1 className='text-danger d-flex justify-content-end '>tabblz</h1>
                    <h3 className='d-flex justify-content-end'>Nous partageons votre passion,</h3>
                    </div>
                    <div className="col d-flex align-items-center justify-content-center">
                        <form className='border p-5 rounded-5 shadow-lg bg-white'>
                        <h1 className='d-flex justify-content-center d-lg-none mb-3  text-danger bg-white'>tabblz</h1>
                            <h2 className='d-flex justify-content-center mb-5 bg-white'>Connexion</h2>
                            <div className="mb-3 bg-white">
                                <label for="exampleInputEmail1" className="form-label bg-white">Email address</label><span className='text-danger bg-white'>*</span>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                            </div>
                            <div className="mb-3 bg-white">
                                <label for="exampleInputPassword1" className="form-label bg-white">Password</label><span className='text-danger bg-white'>*</span>
                                <input type="password" className="form-control" id="exampleInputPassword1" required />
                            </div>
                            
                            <div className='d-flex justify-content-center bg-white'>
                            <ButtonConn />
                            </div>
                            <hr />
                            <p className='d-flex justify-content-center bg-white'>Vous n'êtes pas inscrit ?</p>
                            <div className='d-flex justify-content-center bg-white'>
                            <ButtonInsc />
                            </div>
                        </form>

                    </div>

                </div>
            </div>

        </>
    );
};

export default Connexion;