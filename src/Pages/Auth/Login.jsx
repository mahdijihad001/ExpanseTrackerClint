import { useContext, useState } from "react"
import AuthLayout from "../../Components/Layout/AuthLayout"
import { Link, useNavigate } from "react-router-dom";
import Input from "../../Components/Input/input";
import { validateEmail } from "../../Utils/helper";
import axiosInstance from "../../Utils/axiosInstance";
import { Api_paths } from "../../Utils/ApiPath";
import { CreateUserContext } from "../../Context/CreateUserContext";

const Login = () => {
  // 2:2
  const {UpdateUser , user} = useContext(CreateUserContext);
  console.log(user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const HandleLogin = async(e) =>{
    e.preventDefault();

    if(!validateEmail(email)){
      setError("Please enter a valid email address.");
      return
    };

    if(!password){
      setError("Please enter the password");
      return
    }

    setError("");

    // Login Api Call
    try {

      const response = await axiosInstance.post(Api_paths.AUTH.LOGIN , {
        email , password
      }, {withCredentials : true});

      const {token , user} = response.data;

      if(token){
        // localStorage.setItem("user" , user)
        localStorage.setItem("token" , token);
        UpdateUser(user);
        navigate("/dashboard")
      }

    } catch (error) {
      if(error){
        if(error.response && error.response.data.message){
          setError(error.response.data.message);
        }
      }else{
        setError("Something went wrong. please try again.");
      }
    }

  }


  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Wellcome Back</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">Please enter your details to log in</p>

        <form onSubmit={HandleLogin}>
          <Input type="email" label="Email Address" placeholder="example@gmail.com" value={email} onChange={({target}) => setEmail(target.value)} />
          <Input type="password" label="Password" placeholder="Min 8 Characters" value={password} onChange={({target}) => setPassword(target.value)} />

          {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

          <button type="submit" className="btn-primary" >LOGIN</button>
          <p className="text-[13px] text-slate-800 mt-3">Don't Have an account?{" "} <Link className="font-medium text-primary underline" to={"/signUp"}>SignUp</Link></p>
        </form>

      </div>
    </AuthLayout>
  )
}

export default Login