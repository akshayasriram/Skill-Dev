 Observation:

In this experiment, I implemented **client-side validation** using **JavaScript** for the login and registration forms developed in Experiment 1. The validation script checks for:

- Empty input fields
- Valid email format
- Minimum password length

When invalid data is entered, the user is immediately alerted and form submission is prevented. This enhances user experience by providing **instant feedback** and prevents unnecessary server requests.

The validation functions were written inside an external JavaScript file (`validation.js`) and linked to both `login.html` and `register.html`. The validation was triggered using the `onsubmit` event inside the form tags.

The experiment helped me understand the **importance of form validation**, and how JavaScript can be used on the client-side to ensure that input meets certain criteria **before** being sent to the server or processed further
![alt text](<Screenshot (45)-1.png>)