const API_URL = "http://localhost:5001/api/students";

const form = document.getElementById("studentForm");
const table = document.getElementById("studentTable");

form.addEventListener("submit", async function (event) {

    event.preventDefault();

    const student = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        rollNo: document.getElementById("rollNo").value,
        course: document.getElementById("course").value,
        department: document.getElementById("department").value,
        year: Number(document.getElementById("year").value),
        marks: Number(document.getElementById("marks").value)
    };

    try {

        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(student)
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Failed to add student");
        }

        alert("Student added successfully!");

        form.reset();

        loadStudents();

    } catch (error) {

        console.error(error);

        alert("Error: " + error.message);
    }
});


async function loadStudents() {

    try {

        const response = await fetch(API_URL);

        const students = await response.json();

        table.innerHTML = "";

        students.forEach(student => {

            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${student.rollNo}</td>
                <td>${student.course}</td>
                <td>${student.department}</td>
                <td>${student.year}</td>
                <td>${student.marks}</td>

                <td>
                    <button onclick="deleteStudent('${student._id}')">
                        Delete
                    </button>
                </td>
            `;

            table.appendChild(row);

        });

    } catch (error) {

        console.error(error);

        alert("Unable to load students");

    }
}


async function deleteStudent(id) {

    if (!confirm("Are you sure you want to delete this student?")) {
        return;
    }

    try {

        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error("Failed to delete student");
        }

        alert("Student deleted successfully!");

        loadStudents();

    } catch (error) {

        alert(error.message);

    }
}


loadStudents();