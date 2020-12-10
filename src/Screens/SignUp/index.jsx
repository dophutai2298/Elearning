import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { userService } from "../../Services/index";
import { singupSchema } from "../../Services/user";
import { NavLink } from "react-router-dom";

class Signup extends Component {
  _handleSubmit = (values) => {
    //Gọi axios từ  Service
    userService
      .signUp(values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="container sign">
        <div className="row sign__row">
         
            <div className="col-sm-6">
              <div className="w-75 mx-auto">
                <h1 className="display-4 text-center">Đăng ký</h1>
                <Formik
                  //Khởi tạo giá trị ban đầu
                  initialValues={{
                    taiKhoan: "",
                    matKhau: "",
                    hoTen: "",
                    email: "",
                    soDT: "",
                    maNhom: "GP01",
                  }}
                  //Goi validation Yup từ Service
                  validationSchema={singupSchema}
                  //Nút xử lý form
                  onSubmit={this._handleSubmit}
                  render={(formikProps) => (
                    <Form>
                      <div className="form-group">
                        <label id="user" className="form-text text-muted">
                          Tài khoản:
                        </label>
                        <Field
                          type="text"
                          className="form-control"
                          name="taiKhoan"
                          onChange={formikProps.handleChange}
                          aria-describedby="user"
                        />
                        <ErrorMessage name="taiKhoan">
                          {(msg) => (
                            <div className="alert alert-danger p-0">{msg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="form-group">
                        <label id="pass" className="form-text text-muted">
                          Mật khẩu:
                        </label>
                        <Field
                          type="password"
                          className="form-control"
                          name="matKhau"
                          id="pass"
                          onChange={formikProps.handleChange}
                          aria-describedby="pass"
                        />
                        <ErrorMessage name="matKhau">
                          {(msg) => (
                             <div className="alert alert-danger p-0">{msg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="form-group">
                        <label id="ten" className="form-text text-muted">
                          Họ tên:
                        </label>
                        <Field
                          type="text"
                          className="form-control"
                          name="hoTen"
                          onChange={formikProps.handleChange}
                          id="ten"
                          aria-describedby="user"
                        />
                        <ErrorMessage name="hoTen">
                          {(msg) => (
                             <div className="alert alert-danger p-0">{msg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="form-group">
                        <label id="email" className="form-text text-muted">
                          Email:
                        </label>
                        <Field
                          type="email"
                          className="form-control"
                          name="email"
                          onChange={formikProps.handleChange}
                          id="email"
                          aria-describedby="email"
                        />
                        <ErrorMessage name="email">
                          {(msg) => (
                             <div className="alert alert-danger p-0">{msg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="form-group">
                        <label id="sdt" className="form-text text-muted">
                          Số điện thoại:
                        </label>
                        <Field
                          type="text"
                          className="form-control"
                          name="soDT"
                          onChange={formikProps.handleChange}
                          id="sdt"
                          aria-describedby="sdt"
                        />
                        <ErrorMessage name="soDT">
                          {(msg) => (
                             <div className="alert alert-danger p-0">{msg}</div>
                          )}
                        </ErrorMessage>
                      </div>

                      <div className="form-group">
                        <label id="maNhom" className="form-text text-muted">
                          Mã nhóm:
                        </label>
                        <Field
                          component="select"
                          name="maNhom"
                          onChange={formikProps.handleChange}
                          className="form-control  text-muted"
                        >
                          <option value="GP01">GP01</option>
                          <option value="GP02">GP02</option>
                          <option value="GP03">GP03</option>
                          <option value="GP04">GP04</option>
                          <option value="GP05">GP05</option>
                          <option value="GP06">GP06</option>
                          <option value="GP07">GP07</option>
                          <option value="GP08">GP08</option>
                          <option value="GP09">GP09</option>
                          <option value="GP010">GP010</option>
                        </Field>
                        <ErrorMessage name="maNhom">
                          {(msg) => (
                            <div className="alert alert-danger p-0">{msg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="form-group text-center">
                        <div className="d-flex justify-content-between">
                          <div className="col-4">
                          <NavLink  exact to="/"><button className="btn btn-light">Back</button></NavLink>
                          </div>
                        <div className="col-8">
                        <button className="btn btn-success w-75">
                          Đăng ký
                        </button>
                        </div>
                       
                        </div>
                      
                      </div>
                    </Form>
                  )}
                />
              </div>
            </div>
            <div className="col-sm-6 backgroundSign">
             
            </div>
          
        </div>
      </div>
    );
  }
}

export default Signup;
