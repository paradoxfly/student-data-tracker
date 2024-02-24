// Purpose: Student class to store student data and properties
// The student has a name and properties. The properties are stored as an array of objects with label and value keys
// The student can add properties and get the student data as an object
// The student can also get the properties of the student
// export class Student {
//   constructor(name) {
//     this.name = name;

//     this.properties = [];

//     // Property { label, value }[]
//   }

//   addProperty(label, value) {
//     this.properties.push({ label, value });
//   }

//   getStudentData() {
//     const data = { 
//       name: this.name, 
//       age: this.age,
//     };
    
//     for (let x of this.properties) {
//       data[x.label] = x.value;
//     }

//     return data;
//   }


  export class Student {
    constructor(name) {
      this.name = name;
  
      this.properties = {};
  
  }
  
  addProperty(label, value) {
    this.properties[label] = { label: label, value: value };
}

  getProperties() {
    console.log(this.properties);
  }
}