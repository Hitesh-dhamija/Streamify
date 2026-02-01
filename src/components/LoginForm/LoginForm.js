import "./LoginForm.css";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "../../config/firebase";
import { addUser } from "../../actions/fireStoreActions";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../stored";

const LoginForm = () => {
  const { loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogin = async (Provider) => {
    dispatch(setLoading(true));
    try {
      const { _tokenResponse, user } = await signInWithPopup(auth, Provider);
      const { displayName, email, photoURL, uid } = user;
      if (_tokenResponse.isNewUser) {
        await addUser({ displayName, email, photoURL, uid });
      }
      dispatch(setLoading(false));
    } catch (error) {
      toast.error(error.message);
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="login-form">
      <h1 className="login-form-title">Sign In</h1>
      <div className="login-form-social">
        <button
          className={`login-form-button login-form-google ${
            loading ? "disableButton" : ""
          }`}
          onClick={() => handleLogin(googleProvider)}
          disabled={loading}
        >
          <box-icon color="white" type="logo" name="google"></box-icon>{" "}
          <span>Login with Google</span>
        </button>
        {/* <button
          className={`login-form-button login-form-facebook ${
            loading ? "disableButton" : ""
          }`}
          onClick={() => handleLogin(facebookProvider)}
          disabled={loading}
        >
          <box-icon color="white" type="logo" name="facebook-circle"></box-icon>
          <span>Login with Facebook</span>
        </button> */}
      </div>
    </div>
  );
};

export default LoginForm;
