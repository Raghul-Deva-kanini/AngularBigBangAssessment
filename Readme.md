# Admin-Doctors-Patient Communication Platform

This readme file provides an overview of the implementation steps for API consumption in Angular with JWT token authentication in order to create a web-based platform that enables seamless communication between administrators, doctors, and patients in a healthcare organization.

## Landing Page

![Landing Page](https://github.com/Raghul-Deva-kanini/AngularBigBangAssessment/assets/127297925/703f9da6-cb8d-45a0-9e86-07f7724aa437)

## Background

In a healthcare organization, there is a need to establish a web-based platform that enables seamless communication between administrators, doctors, and patients. The platform should allow administrators to activate doctors, while patients can register and login to access medical services. To ensure data security and user authentication, API consumption in Angular with JWT token authentication is required.

## Objective

The main objective is to guide the development team in implementing API consumption in Angular with JWT token authentication for an admin-doctors-patient communication platform. The goal is to create a secure and user-friendly system that allows administrators to activate doctors and enables patients to register and access medical services.

## Challenges

- **Admin authentication**: Implement a secure authentication mechanism for administrators to ensure authorized access to the platform.
- **Registration and login**: Implement a user-friendly registration and login process for doctors and patients, ensuring the security of their personal information.
- **Doctor activation**: Enable administrators to activate doctors' accounts and grant them access to the system.
- **Role-based access control**: Establish role-based access control mechanisms to differentiate between administrators, doctors, and patients and provide appropriate permissions and functionalities.
- **Secure API consumption**: Integrate APIs securely to retrieve and update data related to doctor activation, patient registration, and authentication.

## Implementation Steps

1. **Project setup and environment configuration**:
   - Set up a new Angular project using the Angular CLI.
   - Install necessary dependencies and libraries.

2. **Admin authentication**:
   - Develop an admin authentication service using JWT token authentication.
   - Implement methods for admin login and token management.
   - Store the admin JWT token securely in the browser's local storage.

3. **Doctor activation**:
   - Create an admin interface to manage doctor activation.
   - Implement functionality for administrators to activate and deactivate doctor accounts.
   - Integrate API endpoints to handle doctor activation status.

4. **Patient registration and login**:
   - Design and implement a patient registration form, ensuring secure data submission.
   - Develop a patient login mechanism with JWT token authentication.
   - Store the patient JWT token securely in the browser's local storage.

5. **Role-based access control**:
   - Implement guards and interceptors to enforce role-based access control.
   - Define different routes and functionalities based on the user's role (admin, doctor, or patient).

6. **Secure API consumption**:
   - Integrate APIs to handle doctor activation, patient registration, and authentication.
   - Implement API consumption methods with proper error handling and security measures.
   - Utilize JWT tokens to authenticate API requests and protect sensitive data.

7. **User interface design**:
   - Design and develop an intuitive user interface for administrators, doctors, and patients.
   - Create separate interfaces for admin dashboard, doctor activation, patient registration, and login.
   - Ensure responsive design and a seamless user experience.

8. **Custom feature implementation**:
   - Contribute additional features for doctors and patients.
   - Develop and integrate APIs to support the custom features.

## Benefits

- **Enhanced security**: JWT token authentication ensures secure access to the platform, protecting sensitive data and preventing unauthorized access.
- **Streamlined processes**: Administrators can easily activate doctors, while patients can conveniently register and access medical services.
- **Efficient communication**: The platform facilitates effective communication among administrators, doctors, and patients, improving healthcare workflows.
- **Scalability**: The system can accommodate a growing number of administrators, doctors, and patients as the organization expands.

# Screenshots

## Login page

![Login_page](https://github.com/Raghul-Deva-kanini/AngularBigBangAssessment/assets/127297925/eb3a3f3f-82b7-4f3e-897f-e1349bb936bb)

## Registration page

![Registration_page](https://github.com/Raghul-Deva-kanini/AngularBigBangAssessment/assets/127297925/0a5081b5-cae9-45c0-8dd0-39bbbc3b7e36)

## Admin View

![Admin_view](https://github.com/Raghul-Deva-kanini/AngularBigBangAssessment/assets/127297925/a6cd5db2-88f7-4cf3-828c-9010d03e1ede)

## Users View

![Users_view](https://github.com/Raghul-Deva-kanini/AngularBigBangAssessment/assets/127297925/b9516422-aaf7-4e35-b7ce-4fc4b63c29fc)
