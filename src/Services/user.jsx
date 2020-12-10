import Axios from 'axios';
import * as yup from 'yup';


//Validation form sign up
export const singupSchema=yup.object().shape({
    taiKhoan:yup.string().required("Please enter your value !"),
    matKhau:yup.string().required("Please enter your value !"),
    hoTen:yup.string().required("Please enter your value !"),
    email:yup.string().required("Please enter your value !").email("Email is invalid !"),
    soDT:yup.string().required("Please enter your value !").matches(/^[0-9]+$/),
    maNhom:yup.string().required("Please enter your value !"),
  });

class UserService{
    signUp(data){
        return Axios({
            method:'POST',
            url:'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
            data
          })
    }
    signIn(user){
      return Axios({
        method:'POST',
        url:'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
        data:user
      })
    }
}
export default UserService;