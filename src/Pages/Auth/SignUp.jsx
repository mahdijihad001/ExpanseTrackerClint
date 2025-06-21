import { useContext, useState } from "react"
import AuthLayout from "../../Components/Layout/AuthLayout"
import { Link, useNavigate } from "react-router-dom";
import Input from "../../Components/Input/input";
import { validateEmail } from "../../Utils/helper";
import ProfilePhotoSelector from "../../Components/Input/ProfilePhotoSelector";
import axiosInstance from "../../Utils/axiosInstance";
import { Api_paths } from "../../Utils/ApiPath";
import { CreateUserContext } from "../../Context/CreateUserContext";
import UploadImage from "../../Utils/Uploadimage";

const SignUp = () => {
  // 2 : 8 : 51 sec
  const {user , UpdateUser} = useContext(CreateUserContext)

  const [profile, setProfile] = useState("");
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const HandleSingUp = async(e) => {
    e.preventDefault();

    if(!fullName){
      setError("Please enter your name.");
      return;
    };

    if(!validateEmail(email)){
      setError("Please enter a valid email.");
      return;
    };

    if(!password){
      setError("Please enter a password.");
      return;
    };

    setError("");

    // Sing Up api Call
    try {

      let profileimageUrl = "";

      if(profile){
        const imageUploadRes = await UploadImage(profile);
        profileimageUrl = imageUploadRes.imageUrl || "";
        console.log(imageUploadRes);
      }

      const response = await axiosInstance.post(Api_paths.AUTH.REGISTER , {fullName , email , password , profileImage : profileimageUrl} , {withCredentials : true});

      const {token , user} = response.data;

      if(token){
        localStorage.setItem("token" , token);
        UpdateUser(user);
        navigate("/dashboard")
      }

    } catch (error) {
      if(error.response){
        if(error.response &&  error.response.data.message){
          setError(error.response.data.message)
        }else{
          setError("Something went wrong. Please try again");
        }
      }
    }
  }

  return (
    <AuthLayout>
      <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Create an account</h3>
        <p className="mt-[5px] mb-6 text-xs text-slate-800">Join us today by entering your details below.</p>

        <form onSubmit={HandleSingUp}>

          <ProfilePhotoSelector image={profile} setImage={setProfile} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label={"Full Name"} value={fullName} type={"text"} placeholder={"Mohammad"} onChange={({ target }) => setFullname(target.value)} />

            <Input type="email" label="Email Address" placeholder="example@gmail.com" value={email} onChange={({ target }) => setEmail(target.value)} />

            <div className="col-span-2">
              <Input type="password" label="Password" placeholder="Min 8 Characters" value={password} onChange={({ target }) => setPassword(target.value)} />
            </div>

          </div>

          {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

          <button type="submit" className="btn-primary" >LOGIN</button>
          <p className="text-[13px] text-slate-800 mt-3">Already Have an account?{" "} <Link className="font-medium text-primary underline" to={"/login"}>logIn</Link></p>

        </form>

      </div>
    </AuthLayout>
  )
}

export default SignUp