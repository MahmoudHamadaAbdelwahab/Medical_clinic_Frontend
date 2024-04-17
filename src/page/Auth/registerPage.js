import { Container, Row, Col } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
import RegisterHook from '../../hook/auth/register-hook';

const RegisterPage = () => {
const [name , onChangeName , email , onChangeEmail , phone ,onChangePhone , password , onChangePassword , confirmPassword, onChangeConfirmPassword ,OnSubmit] = RegisterHook();
  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="py-5 d-flex justify-content-center hieght-search">
        <Col sm="12" className="d-flex flex-column" >
          <label className="mx-auto title-login">تسجيل حساب جديد</label>
          <input
            value={name}
            onChange={onChangeName}
            placeholder="اسم المستخدم..."
            type="text"
            className="user-input mt-3 text-center mx-auto"
          />
          <input
            value={email}
            onChange={onChangeEmail}
            placeholder="الايميل..."
            type="email"
            className="user-input my-3 text-center mx-auto"
          />
          <input
            value={phone}
            onChange={onChangePhone}
            placeholder="الهاتف..."
            type="phone"
            className="user-input  text-center mx-auto"
          />
          <input
            value={password}
            onChange={onChangePassword}
            placeholder="كلمه السر..."
            type="password"
            className="user-input text-center mt-3 mx-auto"
          />
          <input
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
            placeholder="تاكيد كلمه السر..."
            type="password"
            className="user-input text-center mt-3 mx-auto"
          />
          <button onClick={OnSubmit} className="btn-login mx-auto mt-4">تسجيل الحساب</button>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  )
}

export default RegisterPage