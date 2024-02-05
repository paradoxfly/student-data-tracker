import { Table } from "./Classes/Table.js";
import { Student } from "./Classes/student.js";

const table = new Table();

const student = new Student("John");

student.addProperty("State Of Origin", "Abia");
student.addProperty("Department", "Computer Science");
student.addProperty("Level", "300");
student.addProperty("Matric Number", "U/2018/123456");


const student2 = new Student("Anabelle");

student2.addProperty("State Of Origin", "Abuja");
student2.addProperty("Department", "Computer Engineering");
student2.addProperty("Level", "100");
student2.addProperty("Matric Number", "U/2023/123456");

const columns = ["name", "English", "Maths", "Physics", "Chemistry", "Biology", "State Of Origin", "Department", "Level", "Matric Number"]

table.setColumns(columns);
table.addData(student.getStudentData());
table.addData(student2.getStudentData());
table.drawTable();