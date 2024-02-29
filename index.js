import { Table } from "./Classes/Table.js";
import { Student } from "./Classes/student.js";

// Create a table instance
const table = new Table();

// Set the columns of the table you want to create
const columns = ["name", "age", "state", "height", "weight", "complexion"]

// Pass these columns to the Table instance you created
table.setColumns(columns);

const firstStudent = new Student("John")

/**student.addProperty("age", 23)
student.addProperty("state", "lagos")*/


firstStudent.addProperty({
    age: 23,
    state: "Lagos",
    height: 1.85,
    weight: 82,
    complexion: "Night",
});

    const secondStudent = new Student("Ada")

 secondStudent.addProperty({
    age: 20,
    state: "Ogun",
    height: 1.75,
    weight: 70,
    complexion: "Fair",
});

console.log(firstStudent.properties)

table.setColumns(columns)
table.addRow(firstStudent.getProperties())
table.addRow(secondStudent.getProperties())

/**
const secondStudent = {
    name: "Tafida",
    age: 54,
    state: "Jos",
    height: 1.75,
    weight: 72
};

const rows = [ firstStudent, secondStudent]

table.setRows(rows)
//table.setRows(student);
console.log(firstStudent)
//table.addRow(firstStudent);

console.log(secondStudent)
//table.addRow(secondStudent);
console.log(columns) */

table.drawTable()