let clockTime = document.getElementById("clock");

const time = setInterval(() => {
  const currDate = new Date();
  //   console.log(currDate);

  const getHours = currDate.getHours();
  //   console.log(getHours);
  const getMinutes = currDate.getMinutes();
  //   console.log(getMinutes);
  const getSeconds = currDate.getSeconds();
  //   console.log(getSeconds);
  const amPm = getHours >= 12 ? "PM" : "AM";
  //   console.log(amPm);
  //convert to 12 hours format
  let hours = getHours % 12;
  //   console.log(hours);
  hours = hours ? hours : 12;
  //   console.log(hours);
  // time format will be HH:MM:SS
  const formatedTime = `${hours.toString().padStart(2, "0")} : ${getMinutes
    .toString()
    .padStart(2, "0")} : ${getSeconds.toString().padStart(2, "0")}`;
  //   console.log(formatedTime);

  // then show it on page
  clockTime.innerText = formatedTime;
}, 1000);
