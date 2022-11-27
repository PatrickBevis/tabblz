import React from 'react';

const Inscription = () => {
    return (
        <>
            <div className="container">
                <div className="row d-flex align-items-center vh-100">
                    <div className="col">

                        <form className='border p-5 rounded-5 shadow-lg bg-white'>
                        
                            <h2 className='d-flex justify-content-center mb-5 bg-white'>Inscription</h2>
                            <div className='d-flex bg-white'>
                            <div className="mb-3  bg-white me-2 w-50">
                                <label for="name" className="form-label bg-white">Nom</label><span className='text-danger bg-white'>*</span>
                                <input type="text" className="form-control" id="name" placeholder='NOM' required /></div>
                                <div className="mb-3 bg-white ms-2 w-50">
                                <label for="name" className="form-label bg-white">Prenom</label><span className='text-danger bg-white'>*</span>
                                <input type="text" className="form-control" id="name" placeholder='Prenom' required />
                            </div>
                            </div>
                            <div className="mb-3 bg-white">
                                <label for="adresse" className="form-label bg-white">Adresse</label><span className='text-danger bg-white'>*</span>
                                <input type="password" className="form-control" id="adresse" required />
                                </div>
                                <div className='d-flex bg-white'>
                            <div className="mb-3  bg-white me-2 w-50">
                                <label for="codepostal" className="form-label bg-white">Code Postal</label><span className='text-danger bg-white'>*</span>
                                <input type="text" className="form-control" id="codePostal"  required /></div>
                                <div className="mb-3 bg-white ms-2 w-50">
                                <label for="ville" className="form-label bg-white">Ville</label><span className='text-danger bg-white'>*</span>
                                <input type="text" className="form-control" id="ville"  required />
                            </div>
                            </div>
                            <div className="mb-3 bg-white">
                                <label for="exampleInputEmail1" className="form-label bg-white">Email </label><span className='text-danger bg-white'>*</span>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='exemple@gmail.com' required />
                                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                            </div>
                            <div className="mb-3 bg-white">
                                <label for="exampleInputPassword1" className="form-label bg-white">Mot de passe</label><span className='text-danger bg-white'>*</span>
                                <input type="password" className="form-control" id="Password1" required />
                            </div>
                            <div className="mb-3 bg-white">
                                <label for="exampleInputPassword2" className="form-label bg-white">Confirmation mot de passe</label><span className='text-danger bg-white'>*</span>
                                <input type="password" className="form-control" id="Password2" required />
                            </div>
                            <div className='d-flex justify-content-center bg-white'>

                            </div>
                        
                            <div className='d-flex justify-content-end bg-white'>
                            <div className='rounded-5'>
            <button type='submit' className='btn btn-success'>S'inscrire</button>
        </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Inscription;