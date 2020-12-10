import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { login } from "../../Redux/Action/userLogin";
import {connect} from 'react-redux';

class Signin extends Component {
  render() {
    return (
      <div className="container sign">
        <div className="row sign__row">
          <div className="col-sm-6">
            <div className="w-75 mx-auto">
              <h1 className="display-4 text-center">Đăng nhập</h1>

              <Formik
                initialValues={{
                  taiKhoan: "",
                  matKhau: "",
                }}
                onSubmit={(values) => {
                 this.props.dispatch(login(values));
                }}
                render={({ handleChange }) => {
                  return (
                    <Form>
                      <div className="form-group">
                        <label id="taiKhoan" className="form-text text-muted">
                          Tài khoản:
                        </label>
                        <Field
                          type="text"
                          className="form-control"
                          name="taiKhoan"
                          id="taiKhoan"
                          onChange={handleChange}
                        />
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
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group text-center">
                        <div className="d-flex justify-content-between">
                          <div className="col-4">
                            <NavLink exact to="/">
                              <button className="btn btn-light">Back</button>
                            </NavLink>
                          </div>
                          <div className="col-8">
                            <button className="btn btn-success w-75">
                              Đăng nhập
                            </button>
                          </div>
                        </div>
                      </div>
                    </Form>
                  );
                }}
              />
            </div>
          </div>
          <div className="col-sm-6 backgroundSign"></div>
        </div>
      </div>
    );
  }
}

export default connect()(Signin);
