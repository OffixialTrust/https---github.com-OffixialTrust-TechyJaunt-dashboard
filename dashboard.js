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

// For Daily
id("daily").addEventListener("click", () => {
    className(".timeframe").forEach((element) => {
     element.textContent = "Yesterday";  
    });
    
    
    const timeframe = "daily";
    
    // for work
    id("work-current").textContent = data[0].timeframes[timeframe].current;
    id("work-previous").textContent = data[0].timeframes[timeframe].previous;
    
    // for play
    id("play-current").textContent = data[1].timeframes[timeframe].current;
    id("play-previous").textContent = data[1].timeframes[timeframe].previous;
    
    // for study
    id("study-current").textContent = data[2].timeframes[timeframe].current;
    id("study-previous").textContent = data[2].timeframes[timeframe].previous;
    
    // for exercise
    id("exercise-current").textContent = data[3].timeframes[timeframe].current;
    id("exercise-previous").textContent = data[3].timeframes[timeframe].previous;
    
    // for social
    id("social-current").textContent = data[4].timeframes[timeframe].current;
    id("social-previous").textContent = data[4].timeframes[timeframe].previous;
    
    // for self care
    id("selfCare-current").textContent = data[5].timeframes[timeframe].current;
    id("selfCare-previous").textContent = data[5].timeframes[timeframe].previous;
    
});
    

// For Weekly
id("weekly").addEventListener("click", () => {
    className(".timeframe").forEach((element) => {
     element.textContent = "Last Week";  
    });
    
    const timeframe = "weekly";
    
    // for work
    id("work-current").textContent = data[0].timeframes[timeframe].current;
    id("work-previous").textContent = data[0].timeframes[timeframe].previous;
    
    //for play
    id("play-current").textContent = data[1].timeframes[timeframe].current;
    id("play-previous").textContent = data[1].timeframes[timeframe].previous;
    
    // for study
    id("study-current").textContent = data[2].timeframes[timeframe].current;
    id("study-previous").textContent = data[2].timeframes[timeframe].previous;
    
    // for exercise
    id("exercise-current").textContent = data[3].timeframes[timeframe].current;
    id("exercise-previous").textContent = data[3].timeframes[timeframe].previous;
    
    // for social
    id("social-current").textContent = data[4].timeframes[timeframe].current;
    id("social-previous").textContent = data[4].timeframes[timeframe].previous;
    
    // for self care
    id("selfCare-current").textContent = data[5].timeframes[timeframe].current;
    id("selfCare-previous").textContent = data[5].timeframes[timeframe].previous;
    
});


// For Monthly
id("monthly").addEventListener("click", () => {
    className(".timeframe").forEach((element) => {
     element.textContent = "Last Month";  
    });
    
    const timeframe = "monthly";
    
    // for work
    id("work-current").textContent = data[0].timeframes[timeframe].current;
    id("work-previous").textContent = data[0].timeframes[timeframe].previous;
    
    //for play
    id("play-current").textContent = data[1].timeframes[timeframe].current;
    id("play-previous").textContent = data[1].timeframes[timeframe].previous;
    
    // for study
    id("study-current").textContent = data[2].timeframes[timeframe].current;
    id("study-previous").textContent = data[2].timeframes[timeframe].previous;
    
    // for exercise
    id("exercise-current").textContent = data[3].timeframes[timeframe].current;
    id("exercise-previous").textContent = data[3].timeframes[timeframe].previous;
    
    // for social
    id("social-current").textContent = data[4].timeframes[timeframe].current;
    id("social-previous").textContent = data[4].timeframes[timeframe].previous;
    
    // for self care
    id("selfCare-current").textContent = data[5].timeframes[timeframe].current;
    id("selfCare-previous").textContent = data[5].timeframes[timeframe].previous;
    
});
