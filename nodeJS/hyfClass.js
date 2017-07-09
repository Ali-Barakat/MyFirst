import Teacher from './teachers.js'
import Student from './Students.js'

export default class HYFClass {
  constructor(members) {
    this.members = members || []
    let membersIsArray = this.members instanceof Array;
    if(!membersIsArray){
      throw new Error('Members should be an array!')
    }
  }
  addTeacher(member){
    this.members.push(new Teacher(member))
  }
  addStudent(member){
    this.members.push(new Student(member))
  }
  getAllTeachers(){
    return this.members.filter(member => member instanceof Teacher)
  }
  getAllStudents(){
    return this.members.filter(member => member instanceof Student)
  }
}
