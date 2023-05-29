const FormLoginTemplate = () => `
<div class="row h-100 justify-content-center align-items-center">
  <form action="#/dashboard" method="POST" class="col-md-4 card">
    <h2>Login</h2>
    <div class="form-group">
      <label>Email:</label>
      <input
        type="email"
        name="email"
        class="form-control"
        placeholder="Masukan email"
        required
      />
    </div>
    <div class="form-group">
      <label>Password:</label>
      <input
        type="password"
        name="pass"
        class="form-control"
        placeholder="Masukan password"
        required
      />
    </div>
    <a href="#/dashboard" class="btn btn-primary">Login</a>
    <a href="#/register" class="btn btn-success">Register</a>
  </form>
</div>
</div>
`;

const FormRegisterTemplate = () => `
<div class="row h-100 justify-content-center align-items-center">
        <form
          action="#/login"
          method="GET"
          class="col-md-4 card"
        >
          <h2>Form Registrasi</h2>
          <div class="form-group">
            <label>Nama:</label>
            <input
              type="text"
              name="username"
              class="form-control"
              placeholder="Masukan Nama"
              required
            />
          </div>
          <div class="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              class="form-control"
              placeholder="Masukan Email"
              required
            />
          </div>
          <div class="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="pass"
              class="form-control"
              placeholder="Masukan Password"
              required
            />
          </div>
          <a href="#/login" class="btn btn-primary">Daftar</a>
        </form>
      </div>
`;

export {
  FormLoginTemplate,
  FormRegisterTemplate,
};
