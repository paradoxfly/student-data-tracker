// Purpose: Student class to store student data and properties
// The student has a name and properties. The properties are stored as an array of objects with label and value keys
// The student can add properties and get the student data as an object
// The student can also get the properties of the student
export class Student {
  constructor(name) {
    this.name = name;
    
    this.properties = {};

    //this.properties = label, value;

    // Property { label, value }[]
  }

  addProperty(data) {
    // const {age, state, height, weight, complexion,} = data;
    // this.properties = {
    //   age: age,
    //   state: state,
    //   height: height,
    //   weight: weight,
    //   complexion: complexion,
    // }

    this.properties = data
  }


 /**getStudentData() {
    const data = { 
      name: this.name, 
      age: this.age,
    };
    
    for (let x of this.properties) {
      data (x.label) = x.value;
    }

    return data;
  }*/

  getProperties() {
    const detail = {
      name: this.name,
      age: this.properties.age,
      state: this.properties.state,
      height: this.properties.height,
      weight: this.properties.weight,
      complexion: this.properties.complexion,
    }
    return detail;
  } 
  
}