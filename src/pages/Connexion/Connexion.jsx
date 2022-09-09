import React from 'react';
import ButtonConn from '../../components/ButtonGrp/ButtonConn/ButtonConn';
import ButtonInsc from '../../components/ButtonGrp/ButtonInsc/ButtonInsc';
import './connexion.css'

const Connexion = () => {
    return (
        <>
            
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col d-none d-lg-block"><p>tabblz</p>
                    </div>
                    <div className="col d-flex align-items-center justify-content-center">
                        <form className='border p-5 rounded-5 shadow-lg bg-white'>
                            <h2 className='d-flex justify-content-center mb-5 bg-white'>Connexion</h2>
                            <div class="mb-3 bg-white">
                                <label for="exampleInputEmail1" class="form-label bg-white">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                            </div>
                            <div class="mb-3 bg-white">
                                <label for="exampleInputPassword1" class="form-label bg-white">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" />
                            </div>
                            
                            <div className='d-flex justify-content-center bg-white'>
                            <ButtonConn />
                            </div>
                            <hr />
                            <p className='d-flex justify-content-center bg-white'>Vous n'etes pas inscrit ?</p>
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