import HYFClass from './hykClass.js'
var JS = new HYFClass([])
var jsMembers = [
  {firstName: 'Mauro', lastName: 'Mandracchia', type: 'teacher'},
  {firstName: 'David', lastName: 'Furlong', type: 'teacher'},
  {firstName: 'Ali', lastName: 'Barakat', type: 'Student'},
  {firstName: 'Jad', lastName: 'Kadour', type: 'Student'}
]

jsMembers.forEach((member)=>{
  if(member.type === 'teacher'){
    JS.addTeacher (member)
  }else{
    JS.addStudent(member)
  }
})

console.log('All Teacher: ', JS.getAllTeachers())
console.log('All Students: ', JS.getAllStudents())
