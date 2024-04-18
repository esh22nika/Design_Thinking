// script.js
const personalInfoForm = document.getElementById('personalInfoForm');
const profileName = document.getElementById('profileName');
const profileAge = document.getElementById('profileAge');
const profileEmail = document.getElementById('profileEmail');
const profileDrugName = document.getElementById('profileDrugName');
const profileDosage = document.getElementById('profileDosage');
const personalInfoContainer = document.getElementById('personalInfoContainer');
const profileContainer = document.getElementById('profileContainer');
const homeContainer = document.getElementById('homeContainer');
const updateDataContainer = document.getElementById('updateDataContainer');
const updateDataForm = document.getElementById('updateDataForm');
const userDataContainer = document.getElementById('userDataContainer');
const languageSelector = document.getElementById('language');


function showPersonalInfo() {
  personalInfoContainer.classList.remove('hidden');
  profileContainer.classList.add('hidden');
  homeContainer.classList.add('hidden');
  updateDataContainer.classList.add('hidden');
  userDataContainer.classList.add('hidden');
}

function showProfile() {
  profileContainer.classList.remove('hidden');
  personalInfoContainer.classList.add('hidden');
  homeContainer.classList.add('hidden');
  updateDataContainer.classList.add('hidden');
  userDataContainer.classList.add('hidden');
}

function showHome() {
  homeContainer.classList.remove('hidden');
  personalInfoContainer.classList.add('hidden');
  profileContainer.classList.add('hidden');
  updateDataContainer.classList.add('hidden');
  userDataContainer.classList.add('hidden');
}

function showUserData() {
  userDataContainer.classList.remove('hidden');
  personalInfoContainer.classList.add('hidden');
  profileContainer.classList.add('hidden');
  homeContainer.classList.add('hidden');
  updateDataContainer.classList.add('hidden');
}

function showUpdateData() {
  updateDataContainer.classList.remove('hidden');
  personalInfoContainer.classList.add('hidden');
  profileContainer.classList.add('hidden');
  homeContainer.classList.add('hidden');
  userDataContainer.classList.add('hidden');
}

personalInfoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const email = document.getElementById('email').value;
  const drugName = document.getElementById('drugName').value;
  const dosage = document.getElementById('dosage').value;
  profileName.textContent = name;
  profileAge.textContent = age;
  profileEmail.textContent = email;
  profileDrugName.textContent = drugName;
  profileDosage.textContent = dosage;
  personalInfoContainer.classList.add('hidden');
});

updateDataForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const component = document.getElementById('component').value;
  const amount = document.getElementById('amount').value;
  const componentElement = document.getElementById(`${component.replace(/\s+/g, '').toLowerCase()}`);
  if (componentElement) {
    componentElement.textContent = amount;
  }
  updateDataContainer.classList.add('hidden');
});

const componentList = document.getElementById('componentList');
componentList.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    const component = e.target.textContent;
    document.getElementById('component').value = component;
  }
});

const translations = {
  en: {
    'logo-text': 'HealthCare Pro',
    'nav-home': 'Home',
    'nav-personal-info': 'Personal Info',
    'nav-profile': 'Profile',
    'nav-user-data': 'User Data',
    'nav-update-data': 'Update Data',
    'nav-drug-timeline': 'Drug Timeline',
    'personal-info-heading': 'Personal Information',
    'label-name': 'Name:',
    'label-age': 'Age:',
    'label-email': 'Email:',
    'label-drug-name': 'Drug Name:',
    'label-dosage': 'Dosage:',
    'submit-button': 'Submit',
    'update-button': 'Update',
    'footer-text': '© 2023 HealthCare Pro. All rights reserved.'
  },
  hi: {
    'logo-text': 'हेल्थकेयर प्रो',
    'nav-home': 'होम',
    'nav-personal-info': 'निजी जानकारी',
    'nav-profile': 'प्रोफ़ाइल',
    'nav-user-data': 'उपयोगकर्ता डेटा',
    'nav-update-data': 'डेटा अपडेट करें',
    'nav-drug-timeline': 'दवा टाइमलाइन',
    'personal-info-heading': 'निजी जानकारी',
    'label-name': 'नाम:',
    'label-age': 'उम्र:',
    'label-email': 'ईमेल:',
    'label-drug-name': 'दवा का नाम:',
    'label-dosage': 'खुराक:',
    'submit-button': 'सबमिट करें',
    'update-button': 'अपडेट करें',
    'footer-text': '© 2023 हेल्थकेयर प्रो. सर्वाधिकार सुरक्षित।'
  },
  mr: {
    'logo-text': 'हेल्थकेअर प्रो',
    'nav-home': 'होम',
    'nav-personal-info': 'वैयक्तिक माहिती',
    'nav-profile': 'प्रोफाइल',
    'nav-user-data': 'वापरकर्ता डेटा',
    'nav-update-data': 'डेटा अपडेट करा',
    'nav-drug-timeline': 'औषध टाइमलाइन',
    'personal-info-heading': 'वैयक्तिक माहिती',
    'label-name': 'नाव:',
    'label-age': 'वय:',
    'label-email': 'ईमेल:',
    'label-drug-name': 'औषधाचे नाव:',
    'label-dosage': 'मात्रा:',
    'submit-button': 'सबमिट करा',
    'update-button': 'अपडेट करा',
    'footer-text': '© 2023 हेल्थकेअर प्रो. सर्व हक्क राखीव.'
  }
};

function translateContent() {
  const language = languageSelector.value;
  const elements = document.querySelectorAll('[id]');

  elements.forEach((element) => {
    const id = element.id;
    const translation = translations[language][id];
    if (translation) {
      element.textContent = translation;
    }
  });
}

languageSelector.addEventListener('change', translateContent);
translateContent(); // Translat
// Get the header element
const header = document.getElementById('header');

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
  // Calculate the new background position based on the scroll position
  const yPos = -window.scrollY * 0.3; // Adjust the speed of the parallax effect here

  // Apply the new background position
  header.style.backgroundPositionY = `${yPos}px`;
});
