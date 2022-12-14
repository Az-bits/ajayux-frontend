import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { Password, SignIn, EmailAddress, CreateAccount, YourName, PrivacyPolicy, ConfirmPassword } from '../../constant';
import { Facebook } from 'react-feather';
import { firebase_app, facebookProvider, Jwt_token } from '../../data/config'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import man from '../../assets/images/dashboard/profile.jpg';
import { classes } from '../../data/layouts';


const Register = (props) => {

  const [togglePassword, setTogglePassword] = useState(false)
  const [togglePasswordConfirm, setTogglePasswordConfirm] = useState(false)
  const [password, setPassword] = useState("")
  const [confirmPassword, setconfirmPassword] = useState("")
  const history = useNavigate();
  const defaultLayoutObj = classes.find(item => Object.values(item).pop(1) === 'compact-wrapper');
  const layout = localStorage.getItem('layout') || Object.keys(defaultLayoutObj).pop();

  const handleChange = (e) => {
    setPassword(e.target.value)
  }
  const HideShowPassword = (tPassword) => {
    setTogglePassword(!tPassword)
  }

  const handleChangeConfirm = (e) => {
    setconfirmPassword(e.target.value)
  }
  const HideShowPasswordConfirm = (tPassword) => {
    setTogglePasswordConfirm(!tPassword)
  }

  const handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  const [value, setValue] = useState(
    localStorage.getItem('profileURL' || man)
  );
  const [name, setName] = useState(
    localStorage.getItem('Name')
  );

  const facebookAuth = async () => {
    try {
      firebase_app.auth().signInWithPopup(facebookProvider).then(function (result) {
        setValue(result.user.photoURL);
        setName(result.user.displayName)
        localStorage.setItem('token', Jwt_token);
        setTimeout(() => {
          history(`${process.env.PUBLIC_URL}/dashboard/default/${layout}`);
        }, 200);
      });
    } catch (error) {
      setTimeout(() => {
        toast.error("Oppss.. The password is invalid or the user does not have a password.");
      }, 200);
    }
  }


  return (
    <Container fluid={true} className="p-0">
      <Row>
        <Col xs="12">
          <div className="login-card">
            <div>
              <div><a className="logo" href="#javascript"><img className="img-fluid for-light" src={require("../../assets/images/logo/login.png")} alt="looginpage" /><img className="img-fluid for-dark" src={require("../../assets/images/logo/logo_dark.png")} alt="looginpage" /></a></div>
              <div className="login-main">
                <Form className="theme-form" onSubmit={handleSubmit}>
                  <h4>{"Registrate para dar de alta a tu ser querido"}</h4>
                  <p>{"Ingrese sus datos personales para crear una cuenta"}</p>
                  <FormGroup>
                    <Label className="col-form-label pt-0">{YourName}</Label>
                    <Row>
                      <Col xs="6">
                        <Input className="form-control" type="text" required="" placeholder="Nombres" />
                      </Col>
                      <Col xs="6">
                        <Input className="form-control" type="text" required="" placeholder="Apellidos" />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Label className="col-form-label">{EmailAddress}</Label>
                    <Input className="form-control" type="email" required="" placeholder="" />
                  </FormGroup>
                  <FormGroup>
                    <Label className="col-form-label">{Password}</Label>
                    <Input className="form-control" type={togglePassword ? "text" : "password"} name="login[password]" value={password} onChange={(e) => handleChange(e)} required="" placeholder="*********" />
                    <div className="show-hide" onClick={() => HideShowPassword(togglePassword)}><span className={togglePassword ? "" : "show"}></span></div>
                  </FormGroup>
                  <FormGroup>
                    <Label className="col-form-label">{ConfirmPassword}</Label>
                    <Input className="form-control" type={togglePasswordConfirm ? "text" : "password"} name="login[confirm]" value={confirmPassword} onChange={(e) => handleChangeConfirm(e)} required="" placeholder="*********" />
                    <div className="show-hide" onClick={() => HideShowPasswordConfirm(togglePasswordConfirm)}><span className={togglePasswordConfirm ? "" : "show"}></span></div>
                  </FormGroup>
                  <div className="login-btn mb-0">
                    <div className="checkbox ms-3">
                      <Input id="checkbox1" type="checkbox" />
                      <Label className="text-muted" for="checkbox1">{"Acepto la"}<a className="ms-2" href="#javascript">{PrivacyPolicy}</a></Label>
                    </div>
                    <Button color="primary" type="submit">{CreateAccount}</Button>
                  </div>
                  <h6 className="text-muted mt-4 or">{"O reg??strate con"}</h6>
                  <div className="social mt-4">
                    <div className="btn-showcase">
                      <Button color="light" onClick={facebookAuth}>
                        <Facebook className="txt-fb" />
                      </Button>
                    </div>
                  </div>
                  <p className="mt-4 mb-0">{"??Ya tienes una cuenta?"}<a className="ms-2" href={`${process.env.PUBLIC_URL}/login`}>{SignIn}</a></p>
                </Form>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;