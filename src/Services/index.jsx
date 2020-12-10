import CourseService from "./course";
import UserService from "./user";

//Tạo ra đối tượng mới vì UserService là class
export const userService=new UserService()
export const courseService=new CourseService()