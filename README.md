# Doctor's Appointment

A simple application wherein patients could plot/set-up/cancel an appointment with the doctor. Patient can also see appointments set-up by other patients. This application is built using Angular and Express MVC as the backend and integrating and saving data to MongoDB. (this exercised was given 5 hours to complete from scratch)

Features:
- Display of all of the Doctor's appointments (Date, Time, Patient Name, Complain) with Search feature.
- Users can add future-dated appointments but the doctor is limited to accept only 3 appointments per day. 
- A specific user can only have 1 appointment scheduled per day (validation appears when creating/setting up an appointment).
- User can only cancel at least 1 day before the appointment schedule.
- Updating of added/deleted appointments on the dashboard after refreshing the page.