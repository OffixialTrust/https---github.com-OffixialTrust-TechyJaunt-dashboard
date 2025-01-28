import file from "./data.js"

const data = JSON.parse(file);

// id template 
function id(id) {
    return document.getElementById(id);
}

// class template
function className(name) {
    return document.querySelectorAll(name);
}

// template to change data
function info(index, time, period) {
    return data[index].timeframes[time][period];
}

function changeData(timeframe, previousTime) {
    className(".timeframe").forEach((element) => {
        element.textContent = previousTime;  
       });
       
       // for work
       id("work-current").textContent = info(0, timeframe, "current");
       id("work-previous").textContent = info(0, timeframe, "previous");
       
       // for play
       id("play-current").textContent = info(1, timeframe, "current");
       id("play-previous").textContent = info(1, timeframe, "previous");
       
       // for study
       id("study-current").textContent = info(2, timeframe, "current");
       id("study-previous").textContent = info(2, timeframe, "previous");
       
       // for exercise
       id("exercise-current").textContent = info(3, timeframe, "current");
       id("exercise-previous").textContent = info(3, timeframe, "previous");;
       
       // for social
       id("social-current").textContent = info(4, timeframe, "current");
       id("social-previous").textContent = info(4, timeframe, "previous");
       
       // for self care
       id("selfCare-current").textContent = info(5, timeframe, "current");
       id("selfCare-previous").textContent = info(5, timeframe, "previous");
       
}


// For Daily
id("daily").addEventListener("click", () => changeData("daily", "Yesterday"));
    

// For Weekly
id("weekly").addEventListener("click", () => changeData("weekly", "Last Week"));
    

// For Monthly
id("monthly").addEventListener("click", () => changeData("monthly", "Last Month"));
    