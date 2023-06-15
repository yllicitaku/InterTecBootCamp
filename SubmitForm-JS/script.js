var selectedRow = null;
var userId = 1;

function submitFormFunction() {
    if (!($('#formaMain').valid())) {
        alert('Form is not VALID');

        return;
    }

    if (selectedRow == null) {
        putDatain(fetchData());


    } else {
        UpdateForm(fetchData());
    }

    clearFields();

}

function fetchData() {
    var fetchObjeti = {};

    fetchObjeti['IdNumber'] = userId;
    userId++;
    fetchObjeti['fullName'] = document.getElementById('fullName').value;
    setAge(fetchObjeti);
    fetchObjeti['points'] = document.getElementById('points').value;
    setGender(fetchObjeti);

    return fetchObjeti;
}

function setGender(objekti) {
    if (document.getElementById('male').checked == true) {
        objekti['gender'] = 'M'

    } else {
        objekti['gender'] = 'F';

    }
}

function setAge(objekti) {
    var brth = document.getElementById('birthday').value;
    var fullYear = brth.substring(0, 4);
    var fg = new Date();
    var age = fg.getFullYear() - fullYear;
    objekti['birthday'] = age;
}


function putDatain(data) {


    var table = document.getElementById('tableCRUD').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.IdNumber;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.fullName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.birthday;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.gender;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.points;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<button class="EDIT" onClick="EditForm(this)">EDIT</button> <button class="DELETE" onClick="DeleteForm(this)">DELETE</button>`




}

function clearFields() {
    document.getElementById('IdNumber').value = userId;
    document.getElementById('fullName').value = '';
    document.getElementById('birthday').value = '';
    document.getElementById('points').value = '';
    document.getElementById('male').checked = false;
    document.getElementById('female').checked = false;
    selectedRow = null;
    jQuery.validator.messages.required = '';
}

function EditForm(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('IdNumber').value = selectedRow.cells[0].innerHTML;
    document.getElementById('fullName').value = selectedRow.cells[1].innerHTML;
    document.getElementById('birthday').value = selectedRow.cells[2].innerHTML;
    document.getElementById('points').value = selectedRow.cells[4].innerHTML;
}

function UpdateForm(datas) {
    selectedRow.cells[0].innerHTML = datas.IdNumber;
    selectedRow.cells[1].innerHTML = datas.fullName;
    selectedRow.cells[2].innerHTML = datas.birthday;
    selectedRow.cells[4].innerHTML = datas.points;
}

function DeleteForm(td) {
    if (confirm('Delete Row?')) {
        row = td.parentElement.parentElement;
        document.getElementById('tableCRUD').deleteRow(row.rowIndex);
        clearFields();
        userId--;
        document.getElementById('IdNumber').value = userId;
    }

}


//VALIDIMI

$(function() {




    var forma = $('#formaMain');
    // if (forma.length) {


    forma.validate({
        rules: {
            fullName: {
                required: true,
                rangelength: [3, 25]
            },
            birthday: {
                required: true
            },
            points: {
                required: true,
                min: 1,
                max: 100,
                digits: true
            },
            gender: {
                required: true
            }

        },


        // errorPlacement: function(error, element) {
        //     if (element.is(":radio")) {
        //         error.appendTo(element.parents('.gender'));
        //     } else if (element.is(":checkbox")) {
        //         error.appendTo(element.parents('.hobbies'));
        //     } else {
        //         error.insertAfter(element);
        //     }

        // },


    })




    $(function() {
        $('#fullName').keydown(function(e) {
            if (e.shiftKey || e.ctrlKey || e.altKey) {
                e.preventDefault();
            } else {
                var key = e.keyCode;
                if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
                    e.preventDefault();
                }
            }
        });
    });






})