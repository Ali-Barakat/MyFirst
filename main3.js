function Person(lastName, name){
  this.lastName = lastName;
  this.name = name;

  this.getLastName = function(){
    return this.lastName || 'Not in the list'
  };

  this.getName = function(){
    return this.name || 'Not in the list'
  }
}

function Host(lastName, name){
  Person.call(this, lastName, name);
  return this;
}
function Guest(lastName, name){
  Person.call(this, lastName, name);
  return this;
}

// food Menue

function Menue(foodName, foodKind ){
  this.foodName = foodName;
  this.foodKind = foodKind;

  this.getFoodName = function(){
    return this.foodName || 'not in the menue'
  };
  this.getFoodKind = function(){
    return this.foodKind || 'not in the menue kind'
  }
}

function Food(foodName, foodKind){
  Menue.call(this, foodName, foodKind);
  return this;
}
function Drinks(foodName, foodKind){
  Menue.call(this, foodName, foodKind);
  return this;
}

var menueStaff = [
  {foodName: 'Pizza', foodKind: 'hot', typ: 'food'},
  {foodName: 'Vento', foodKind: 'cold', typ: 'drink'}
];

function HYKFood(){
  this.menueStaff = [];
  this.addStaff = function (instanceOfMenue){
    this.menueStaff.push(instanceOfMenue);
  }
  this.getAllFood = function(){
    for (var k=0; k<menueStaff.length; k++){
      console.log("Menue is: " + this.menueStaff[k].getFoodName() + " " + this.menueStaff[k].getFoodKind());
    }
  };
}

var Dinnerers = [
  {name: 'Mauro', lastName: 'Mandracchia', type: 'Host'},
  {name: 'Ali', lastName: 'Barakat', type: 'guest'},
  {name: 'Maartje', lastName: 'Kruijt', type: 'guest'},
  {name: 'Jalal', lastName: 'Alnadeem', type: 'guest'},
  {name: 'Mustafa', lastName: 'Ezzi', type: 'guest'}
];

function HYKDinnerers(){
  this.Dinnerers = [];
  this.addDinnerer = function(instanceOfPerson){
    this.Dinnerers.push(instanceOfPerson);
  }

  this.getAllDinnerers = function(){
    for(var k=0; k<Dinnerers.length; k++){
      console.log("Dinnerers are: " + this.Dinnerers[k].getName() + " " + this.Dinnerers[k].getLastName());
    }
  };
  this.getAllGuests = function(){
    for(var k=0; k<Dinnerers.length; k++){
      if (this.Dinnerers[k] instanceof Guest){
        console.log("Guests are: " + this.Dinnerers[k].getName() + " " + this.Dinnerers[k].getLastName());
      }
    }
  }
  this.getAllHosts = function(){
    for(var k=0; k<Dinnerers.length; k++){
      if(this.Dinnerers[k] instanceof Host){
        console.log("Hosts are: " + this.Dinnerers[k].getName() + " " + this.Dinnerers[k].getLastName());
      }
    }
  }
}

var JS4 = new HYKFood();
for (var k=0; k<menueStaff.length; k++){
  var staff = menueStaff[k];
  if (staff.typ === 'food'){
    JS4.addStaff(new Food(staff.foodName, staff.foodKind));
  }else {
    JS4.addStaff(new Drinks(staff.foodName, staff.foodKind))
  }
}

var JS3 = new HYKDinnerers();

for (var k=0; k<Dinnerers.length; k++ ){
  var Dinnerer = Dinnerers[k];
  if (Dinnerer.type === 'Host'){
  JS3.addDinnerer(new Host(Dinnerer.lastName, Dinnerer.name));
}else{
  JS3.addDinnerer(new Guest(Dinnerer.lastName, Dinnerer.name))
}
}




JS3.getAllDinnerers();
JS3.getAllGuests();
JS3.getAllHosts();

JS4.getAllFood();
