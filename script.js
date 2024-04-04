var drugsHistoryData = [];

function submitDrugForm(event) {
    event.preventDefault();

    // Get drug name and dosage values from the form
    var drugName = document.getElementById("drugNameInput").value;
    var dosage = document.getElementById("dosageInput").value;

    // Create an object representing the new drug entry
    var newDrugEntry = {
        drug: drugName,
        dosage: dosage
    };

    // Add the new drug entry to the drugs history data array
    drugsHistoryData.push(newDrugEntry);

    // Populate the drugs history table with the updated data
    populateDrugsHistoryTable();

    // Reset the form fields
    document.getElementById("drugForm").reset();
}

function populateDrugsHistoryTable() {
    var tableBody = document.getElementById('tableBodydrug');
    tableBody.innerHTML = ''; // Clear previous content
    drugsHistoryData.forEach(function(data) {
        var row = document.createElement('tr');
        row.innerHTML = '<td>' + data.drug + '</td>' +
                        '<td>' + data.dosage + '</td>';
        tableBody.appendChild(row);
    });
}

// Add event listener to the drug form submission
document.getElementById('drugForm').addEventListener('submit', submitDrugForm);

function submitForm(event) {
    event.preventDefault();
    
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    
    // Create object to hold user details
    var userDetails = {
        name: name,
        email: email,
        age: age
    };
    
    // Reset form
    document.getElementById("userDetailsForm").reset();
}

var bloodComponentsData = [
    { component: 'Red Blood Cells', amount: null },
    { component: 'White Blood Cells', amount: null },
    { component: 'Platelets', amount: null },
    { component: 'Hemoglobin', amount: null },
    { component: 'Hematocrit', amount: null },
    { component: 'Albumin', amount: null },
    { component: 'Total Protein', amount: null },
    { component: 'Glucose', amount: null },
    { component: 'Cholesterol', amount: null }
];

function populateTable() {
    var tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ''; // Clear previous content
    bloodComponentsData.forEach(function(data) {
        var row = document.createElement('tr');
        row.innerHTML = '<td>' + data.component + '</td>' +
                        '<td>' + (data.amount !== null ? data.amount : '') + '</td>';
        tableBody.appendChild(row);
    });
}

function handleSubmit(event) {
    event.preventDefault();
    var componentIndex = document.getElementById('componentSelect').selectedIndex;
    var amount = document.getElementById('amountInput').value;
    if (amount) {
        bloodComponentsData[componentIndex].amount = amount;
        populateTable();
        document.getElementById('bloodForm').reset(); // Reset form fields
    } else {
        alert('Please enter the amount.');
    }
}

function populateComponentOptions() {
    var select = document.getElementById('componentSelect');
    bloodComponentsData.forEach(function(data) {
        var option = document.createElement('option');
        option.text = data.component;
        select.add(option);
    });
}

function displayuserDetailsForm() {
    var inputForm1 = document.getElementById('userDetailsForm');

    if (inputForm1.style.display === 'none') {
        inputForm1.style.display = 'block';
        userpersonalDataButton.style.backgroundColor = '#f44336';
        hideOtherDisplays('userDetailsForm');
        resetButtonColors();
    } else {
        inputForm1.style.display = 'none';
        userpersonalDataButton.style.backgroundColor = '#333';
    }
}

function toggleInputForm() {
    var inputForm = document.getElementById('inputForm');

    if (inputForm.style.display === 'none') {
        inputForm.style.display = 'block';
        hideOtherDisplays('inputForm');
        resetButtonColors();
    } else {
        inputForm.style.display = 'none';
    }
}

function displayBloodComponentTable() {
    var table = document.getElementById('bloodComponentsTable');

    if (table.style.display === 'none') {
        table.style.display = 'table';
        hideOtherDisplays('bloodComponentsTable');
        resetButtonColors();
    } else {
        table.style.display = 'none';
    }
}

function displayPersonalInfo() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    
    var personalInfo = document.getElementById("personalData");
    personalInfo.innerHTML = "<p><strong>Name:</strong> " + name + "</p>" +
                             "<p><strong>Email:</strong> " + email + "</p>" +
                             "<p><strong>Age:</strong> " + age + "</p>";

    var userPersonalData = document.getElementById('userPersonalData');
    if (userPersonalData.style.display === 'none') {
        userPersonalData.style.display = 'block';
        hideOtherDisplays('userPersonalData');
        resetButtonColors();
    } else {
        userPersonalData.style.display = 'none';
    }
}

function hideOtherDisplays(currentDisplayId) {
    var displays = ['userDetailsForm', 'bloodComponentsTable', 'inputForm', 'userPersonalData'];
    for (var i = 0; i < displays.length; i++) {
        if (displays[i] !== currentDisplayId) {
            var display = document.getElementById(displays[i]);
            if (display) {
                display.style.display = 'none';
            }
        }
    }
}

function resetButtonColors() {
    var buttons = document.getElementsByClassName('navbar')[0].getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = '#333';
    }
}

populateTable();
populateComponentOptions();
document.getElementById('bloodForm').addEventListener('submit', handleSubmit);