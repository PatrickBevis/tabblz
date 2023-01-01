import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/UseFetch";
import doFetch from "../../helpers/FetchHelpers";

function ValidateScreen() {
  const token = useParams("token");
  const navigate = useNavigate();

  const { data: account, loading } = useFetch("auth/validate", {
    method: "POST",
    body: JSON.stringify(token),
  });

  console.log(account);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formInvalid = (errors) => console.log("Errors", errors);

  const formSubmit = async (formData) => {
    Object.assign(formData, account);
    const { data: created } = await doFetch("auth/create", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    if (created.data?.result) {
      navigate("/");
    }
  };

  const validPw = () => {
    return (
      document.getElementById("pass-input").value ===
      document.getElementById("confirm-input").value
    );
  };

  if (loading) {
    return "Veuillez patienter ...";
  }
  if (!account.data?.result) {
    return "Votre inscription n'a pas pu être validée, envoyez une nouvelle demande";
  }

  return (
    <>
      {account.data?.result && (
        <div className="container">
          <div className="row d-flex align-items-center vh-100">
            <div className="col">
              <form
                noValidate
                className="border p-5 rounded-5 shadow-lg bg-white"
                onSubmit={handleSubmit(formSubmit, formInvalid)}
              >
                <div className="mb-3">
                  <label htmlFor="pass-input" className="form-label">
                    <h2>Password</h2>{" "}
                    <i className={"text-danger"}>{errors.pass ? " *" : " "}</i>
                  </label>
                  <input
                    id="pass-input"
                    type="password"
                    placeholder="password please"
                    className="form-control"
                    {...register("pass", {
                      required: true,
                      regex: /^(?=.*[A-Z]).{6,}$/,
                    })}
                  />
                  <i className={"text-danger d-block"}>
                    {errors.pass
                      ? "* at least 6 letters including a capital letter"
                      : " "}
                  </i>
                </div>

                <div className="mb-3">
                  <label htmlFor="confirm-input" className="form-label">
                    <h2>Confirm password</h2>{" "}
                    <i className={"text-danger"}>
                      {errors.confirm ? " *" : " "}
                    </i>
                  </label>
                  <input
                    id="confirm-input"
                    type="password"
                    placeholder="confirm please"
                    className="form-control"
                    {...register("confirm", {
                      required: true,
                      regex: /^(?=.*[A-Z]).{6,}$/,
                      validate: validPw,
                    })}
                  />
                  <i className={"text-danger d-block"}>
                    {errors.confirm
                      ? "* must be the same as entered password"
                      : " "}
                  </i>
                </div>
                <div className='d-flex justify-content-end bg-white'>
                <button type="submit" className="btn btn-success">
                  Valider 
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ValidateScreen;
