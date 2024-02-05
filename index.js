import { Table } from "./Classes/Table.js";
import { Student } from "./Classes/student.js";

// Create a table instance
const table = new Table();

//Create a student instance with the name John
const student = new Student("John");

// Add properties to the student instance
student.addProperty("State Of Origin", "Abia");
student.addProperty("Department", "Computer Science");
student.addProperty("Level", "300");
student.addProperty("Matric Number", "U/2018/123456");

// Create another student instance with the name Anabelle
const student2 = new Student("Anabelle");

// Add properties to the student2 instance
student2.addProperty("State Of Origin", "Abuja");
student2.addProperty("Department", "Computer Engineering");
student2.addProperty("Level", "100");
student2.addProperty("Matric Number", "U/2023/123456");

// Set the columns of the table you want to create
const columns = ["name", "State Of Origin", "Department", "Level", "Matric Number"]

// Pass these columns to the Table instance you created
table.setColumns(columns);

// Add the John's data to the table as a row.
table.addRow(student.getStudentData());

// Add the Anabelle's data to the table as a row.
table.addRow(student2.getStudentData());

// Draw the table in the HTML app element
table.drawTable();