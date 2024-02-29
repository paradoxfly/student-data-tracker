import { Table } from "./Classes/Table.js";
import { Student } from "./Classes/student.js";

const table = new Table();

const columns = ["name", "age", "height", "weight"];

table.setColumns(columns);


const student = new Student("John");

student.addProperty('age', 20);
student.addProperty('height', 180);
student.addProperty('weight', 800);

const studentData = student.getStudentDataForTable();

console.log(studentData);

table.addRow(studentData);
table.drawTable();