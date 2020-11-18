import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
// import { CLIENT_ID, REDIRECT_URI } from "../../constants";
import { setAccessToken } from '../../redux/actions/user'
import { requestAccessToken } from "./api";
import LoginGithubButton from "./components/LoginGithubButton";


export const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userCode = useSelector(store => store.user.code);

  // const redirectGithubUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;

  const search = useLocation().search;
  const paramCode = new URLSearchParams(search).get('code');

  async function goToHistory(paramCode) {
    const result = await requestAccessToken(paramCode);
    dispatch(setAccessToken(result?.access_token));
    history.push('/history');
  }

  useEffect(() => {
    if(paramCode){
      goToHistory(paramCode);
    }
  }, [dispatch, paramCode])

  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="d-flex justify-content-between">
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
          <LoginGithubButton/>
        </div>
      </form>
    </div>
  );
};
