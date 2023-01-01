import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import doFetch from "../../helpers/FetchHelpers";



const Inscription = () => {

    const {register, handleSubmit, formState: { errors } } = useForm();
  
    const formInvalid = (errors) => console.log("Errors", errors);
  
    const [msg, setMsg] = useState("");
    const formSubmit = async (formData) => {
  
      const {data} = await doFetch("auth/register", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      console.log(data)
      setMsg(data.message)
    }

    return (
        <>
            <div className="container">
                <div className="row d-flex align-items-center vh-100">
                    <div className="col">

                        <form className='border p-5 rounded-5 shadow-lg bg-white'noValidate onSubmit={handleSubmit(formSubmit,formInvalid)}>
                        
                            <h2 className='d-flex justify-content-center mb-5 bg-white'>Inscription</h2>
                            <div className='d-flex bg-white'>
                            <div className="mb-3  bg-white me-2 w-50">
                                <label for="lastName" className="form-label bg-white">Nom</label><span className='text-danger bg-white'>*</span>
                                <input type="text" className="form-control" id="lastName" placeholder='NOM' /></div>
                                <div className="mb-3 bg-white ms-2 w-50">
                                <label for="name" className="form-label bg-white">Prenom</label><span className='text-danger bg-white'>*</span>
                                <input type="text" className="form-control" id="name" placeholder='Prenom' />
                            </div>
                            </div>
                            <div className="mb-3 bg-white">
                                <label for="pseudo" className="form-label bg-white">Pseudo</label><span className='text-danger bg-white'>*</span>
                                <input type="text" className="form-control" id="pseudo"  
                                {...register("pseudo", { required: true, minLength: 3 })} />
          <i className={"text-danger d-block"}>{errors.pseudo ? "* at least 3 chars" : " " }</i>
        </div>
             
                            <div className="mb-3 bg-white">
                                <label for="adresse" className="form-label bg-white">Adresse</label><span className='text-danger bg-white'>*</span>
                                <input type="text" className="form-control" id="adresse" />
                                </div>
                                <div className='d-flex bg-white'>
                            <div className="mb-3  bg-white me-2 w-50">
                                <label for="codepostal" className="form-label bg-white">Code Postal</label><span className='text-danger bg-white'>*</span>
                                <input type="text" className="form-control" id="codePostal"   /></div>
                                <div className="mb-3 bg-white ms-2 w-50">
                                <label for="ville" className="form-label bg-white">Ville</label><span className='text-danger bg-white'>*</span>
                                <input type="text" className="form-control" id="ville"  />
                            </div>
                            </div>
                            <div className="mb-3 bg-white">
                                <label for="exampleInputEmail1" className="form-label bg-white">Email </label><span className='text-danger bg-white'>*</span>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='exemple@gmail.com' required 
                                
                                {...register("email", { required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i })} />
          <i className={"text-danger d-block"}>{errors.email ? "* must be a valid email address" : " " }</i>
        </div>
                            
                            <div className='d-flex justify-content-center bg-white'>

                            </div>
                        
                            <div className='d-flex justify-content-end bg-white'>
                            <div className='rounded-5'>
            <button type='submit' className='btn btn-success'>S'inscrire</button>
        </div>
                            </div>
                        </form>
                        <div className="text-danger">{msg}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Inscription;