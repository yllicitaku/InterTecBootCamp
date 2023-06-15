var get_post_flag = false;
var get_record_ID = '';

var studentList = [];
var courseList = [];
var testList = [];
var classList = [];

//STUDENTI

const getStudents = () => {
    return fetch('http://localhost:3000/students')
        .then(res => res.json())
        .then(json => { return json });
}

//COURSES

const getCourses = () => {
    return fetch('http://localhost:3000/courses')
        .then(res => res.json())
        .then(json => { return json });
}


//TEST

const getTests = () => {
    return fetch('http://localhost:3000/tests')
        .then(res => res.json())
        .then(json => { return json });
}

//CLASSES

const getClasses = () => {
    return fetch('http://localhost:3000/classes')
        .then(res => res.json())
        .then(json => { return json });
}

const array1 = [getStudents(), getCourses(), getTests(), getClasses()];
async function allData() {
    const results = await Promise.all(array1);
    results[0].forEach(element => {
        studentList.push(new Student(element))
    })
    results[1].forEach(element => {
        courseList.push(new Courses(element))
    })
    results[2].forEach(element => {
        testList.push(new Test(element))
    })
    results[3].forEach(element => {
        classList.push(new Classes(element))
    })
}

document.onreadystatechange = () => {
    switch (document.readyState) {
        case "complete":
            {
                allData();
            }
    }
}

setTimeout(() => {
    console.log(studentList.length);
}, 3000)



//KLASAT

class Student {
    constructor({ id, fname, lname, bday } = args) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.bday = bday;
    }
}

class Courses {

    constructor({ id, title, type } = args) {
        this.id = id;
        this.title = title;
        this.type = type;
    }
}


class Test {

    constructor({ id, student, course, result } = args) {
        this.id = id;
        this.student = student;
        this.course = course;
        this.result = result;
    }
}

class Classes {

    constructor({ id, student, course, status } = args) {
        this.id = id;
        this.student = student;
        this.course = course;
        this.status = status;
    }

    static isAttending(classList, studentID) {

        return classList.find((el) => el.student === studentID);
    }
}





//Get DATA FROM TABLE
function getData() {
    var sName = document.getElementById('studentFname').value;
    var sLname = document.getElementById('studentLname').value;
    var sAge = document.getElementById('studentAge').value;


    let data = {
        fname: sName,
        lname: sLname,
        bday: sAge
    }
    return data;
}



//POST METHOD
function postStudent() {

    fetch('http://localhost:3000/students', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(getData()),
        })
        .then((response) => response.json())

    .catch((error) => {
        alert('Error:', error);
    });
}

//SUBMIT BUTTON
var btn = document.getElementById('sbmButton');
btn.addEventListener('click', function(e) {

    e.preventDefault();

    if (get_post_flag == true) {
        PutRecord(get_record_ID);
    } else {
        postStudent();
    }

    get_post_flag = false;
    get_record_ID = '';

})



function editRercord(td) {
    row = td.parentElement.parentElement;
    document.getElementById('studentID').value = row.cells[0].innerHTML;
    document.getElementById('studentFname').value = row.cells[1].innerHTML;
    document.getElementById('studentLname').value = row.cells[2].innerHTML;
    document.getElementById('studentAge').value = row.cells[3].innerHTML;

    get_record_ID = td.parentElement.parentElement.childNodes[0].textContent;
    console.log(get_post_flag, get_record_ID);
    get_post_flag = true;
    console.log(get_post_flag, get_record_ID);
}


//DELETE ROW
function deleteRecord(td) {

    row = td.parentElement.parentElement.childNodes[0];
    if (confirm('Do you want to delete this Student?')) {
        fetch(`http://localhost:3000/students/${row.textContent}`, {
                method: "DELETE",
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .catch(error => alert(error))
    }
}

//PUT METHOD
function PutRecord(id) {
    fetch(`http://localhost:3000/students/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(getData()),
        })
        .then(res => {
            if (res.ok) { console.log("HTTP request successful") } else { console.log("HTTP request unsuccessful") }
            return res
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}



//FEED TABLE FROM GET
function feedTheTable(element) {
    let tablebody = document.getElementById('tableBody');
    let tr = document.createElement('tr');
    let studentId = document.createElement('td');
    let studentName = document.createElement('td');
    let studentLname = document.createElement('td');
    let studentAge = document.createElement('td');
    let actions = document.createElement('td');

    tablebody.appendChild(tr);
    tr.append(studentId, studentName, studentLname, studentAge, actions);

    const idNode = document.createTextNode(element.id);
    const nameNode = document.createTextNode(element.fname);
    const LnameNode = document.createTextNode(element.lname);
    const ageNode = document.createTextNode(element.bday);

    let editButton = document.createElement('button');
    let deleteButton = document.createElement('button');
    editButton.innerHTML = 'EDIT';
    deleteButton.innerHTML = 'DELETE'
    editButton.style.backgroundColor = 'green';
    deleteButton.style.backgroundColor = 'red';
    deleteButton.setAttribute('onClick', "deleteRecord(this)");
    editButton.setAttribute('onClick', "editRercord(this)");


    actions.append(editButton, deleteButton);

    studentId.appendChild(idNode);
    studentName.appendChild(nameNode);
    studentLname.appendChild(LnameNode);
    studentAge.appendChild(ageNode);

}