import Person from './person.js'

export default class Student extends Person {
  constructor(member) {
    super(member.firstName, member.lastName)
  }
}
