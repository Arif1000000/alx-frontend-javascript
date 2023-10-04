//Define the student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Issah",
  lastName: "Arif",
  age: 22,
  location: "Nigeria",
};

// Create an array containing the two student objects
const studentsList: Student[] = [student1, student2];

// Render an HTML table
function renderTable(students: Student[]) {
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");

  // Loop through the students and create rows in the table
  students.forEach((student) => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
}

// Render the table with the student data
renderTable(studentsList);
