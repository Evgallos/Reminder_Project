let today = new Date().toLocaleString("en-US", { weekday: "long" });


switch (today) {
  case 'Monday':
    console.log(
      today, "kl 8:00 (Repport A-kassa &) till kl 11:30 Font-End Developer Meta Reading, kl 12:30 till 16:30 coding practice. kl 17:00 till 18:30 Reading CyberSecurity Tryhackme."
    );
    break;
  case 'Tuesday':
    console.log(
      today, "kl 8:00 till kl 11:30 Font-End Developer Meta Reading, kl 12:30 till 16:30 coding practice. kl 17:00 - 18:30 walking with my wife. "
    );
    break;
  case 'Wednesday':
    console.log(
      today, "kl 8:00 till kl 11:30 Font-End Developer Meta Reading, kl 12:30 till 16:30 coding practice. kl 17:00 - 18:30 walking with my wife. kl 20:00 till 21:00 review practice coding."
    );
    break;
  case 'Thursday':
    console.log(
      today, "kl 8:00 till kl 11:30 Font-End Developer Meta Reading, kl 12:30 till 16:30 coding practice. kl 17:30 till 18:30 walking with my wife. kl 19:30 till 21:00 build model kit."
    );
    break;
  case 'Friday':
    console.log(
      today, "kl 8:00 till kl 11:30 Font-End Developer Meta Reading, kl 12:30 till 16:30 coding practice. kl. 17:00 - 19:30 Walking with wife. After 19:30 Netflix or Cinema or pub for drink and daance."
    );
    break;
  case 'Saturday':
    console.log(
      today, "kl 8:00 till kl 11:30 Font-End Developer Meta Reading, Hiking if weather is good."
    );
    break;
  case 'Sunday':
    console.log(
     today, "kl 09:00 till 12:30 Church, Lunch at home & walking with wife."
    );
    break;
  default:
    console.log(
      today, "No Such day"
    );
    break;
}