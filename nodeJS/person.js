
export default class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName || 'not set'
    this.lastName = lastName || 'not set'
  }
  getFirstName(){
    return this.firstName
  }
  getLastName(){
    return this.lastName
  }
}
