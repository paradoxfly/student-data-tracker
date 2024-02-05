export class Student {
  constructor(name) {
    this.name = name;

    this.properties = [];

    // Property { label, value }[]
  }

  addProperty(label, value) {
    this.properties.push({ label, value });
  }

  getStudentData() {
    const data = { 
      name: this.name, 
      age: this.age,
    };
    
    for (let x of this.properties) {
      data[x.label] = x.value;
    }

    return data;
  }

  getProperties() {
    console.log(this.properties);
  }
}