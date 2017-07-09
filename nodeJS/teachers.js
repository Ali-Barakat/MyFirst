import Person from './person.js'

export default class Teacher extends Person {
  constructor(member) {
    super(member.firstName, member.lastName)
  }
}
