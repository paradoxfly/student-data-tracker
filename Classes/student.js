// Purpose: Student class to store student data and properties
// The student has a name and properties. The properties are stored as an array of objects with label and value keys
// The student can add properties and get the student data as an object
// The student can also get the properties of the student
export class Student {
  constructor(name) {
    this.name = name;

    this.properties = {
      name: this.name
    };

    // Property { label, value }[]
  }

  addProperty(label, value) {
    this.properties[label]= value;
  }

  getStudentData() {
    const data = this.properties;

    return data;
  }

  getProperties() {
    console.log(this.properties);
  }
}