export const Login = () => {
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
          <button class="btn btn-secondary">Github</button>
        </div>
      </form>
    </div>
  );
};
