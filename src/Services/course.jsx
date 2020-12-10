import Axios from "axios";

class CourseService {
  fetchCourses() {
    return Axios({
      //Lấy danh sách khóa học
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
      method: "GET",
    });
  }
  fetchDetail(id) {
    return Axios({
      //Lấy chi tiết khóa học
      method: "GET",
      url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`,
    });
  }
  fetchCategory() {
    return Axios({
      //Lấy danh mục khóa học
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc",
      method: "GET",
    });
  }
  fetchCoursesByCategory(id) {
    return Axios({
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${id}&MaNhom=GP01`,
      method: "GET",
    });
  }
}

export default CourseService;
