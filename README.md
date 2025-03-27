# 🌟 **Reminder_Project** 🌟

## 🚀 **Overview**

> **Reminder_Project** is a simple yet **effective JavaScript reminder application** that dynamically adjusts based on the **current day of the week**. This project is an **excellent exercise** for learning JavaScript fundamentals such as **`Date()`**, **`switch-case`**, and conditionals. It's designed to help you **create practical applications** while learning the basics of JS. 🌱

### ✨ **Key Features**:
- **Day-based Reminders**: Automatically adjusts the message depending on the current day.
- **Built with JavaScript**: Uses `Date()` to fetch the day and display tailored messages.
- **Extensible**: Easily add features like email reminders, user input, etc.

---

## 🧑‍💻 **Code Walkthrough**

### 👨‍💻 **Snippet of Code**:

```javascript
let today = new Date().toLocaleString("en-US", { weekday: "long" });

switch (today) {
  case 'Monday':
    console.log(`${today}: "8:00 AM - Report & Front-End Developer Reading. 12:30 PM - 4:30 PM Coding Practice."`);
    break;
  case 'Tuesday':
    console.log(`${today}: "8:00 AM - Front-End Developer Meta Reading. 12:30 PM - 4:30 PM Coding Practice."`);
    break;
  //...other cases
}
````
Explanation:

Date(): Retrieves the current date and time.

switch-case: Dynamically checks the current day and displays a personalized reminder.

🔧 How to Run the Project
📥 Prerequisites:
1.Install Node.js on your machine.
2.Use a text editor like Visual Studio Code.

📝 Steps to Run:
1.Clone the repository:
````
git clone https://github.com/your-username/Reminder_Project.git
````
2.Navigate to the project folder:
````
cd Reminder_Project
````
3.Create a file called reminder.js and paste the code into it.
4.Run the code using Node.js:
````
node reminder.js
````
🧠 Why This Project?
This project is an ideal start for beginner JavaScript developers to practice conditional logic, work with dates, and manipulate data. It's a small but scalable project that will help you learn fundamental JS concepts.

🛠 Future Enhancements ✨
While this project is simple, it can be greatly enhanced with additional features. Here are a few ideas:

📧 Email Notifications: Automatically send daily email reminders.

🌐 Web Interface: Create a frontend with HTML, CSS, and JavaScript for a user-friendly interface.

📝 Custom User Inputs: Allow users to add and customize their own reminders.

💡 What Did I Learn?
Throughout this project, I practiced:

Working with Date() in JavaScript.

Creating dynamic output with switch-case.

Organizing and structuring JavaScript code.

🌱 Looking Forward to Further Updates:
As I continue to practice and learn, I'll keep adding new features and improving this project. Stay tuned for more updates! 🚀

📦 Project Folder Structure:
````
Reminder_Project/
│
├── dailySchedule.js         # The main JS file containing the logic
└── README.md                # This file with detailed instructions
````

🌍 Follow My Journey:
Connect with me on GitHub for more exciting projects! 😎

📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

📬 Contact Me:
Email: evangelos.gallos@gmail.com

LinkedIn: https://www.linkedin.com/in/evangelos-gallos/

Webpage Live: www.evgallos.com
