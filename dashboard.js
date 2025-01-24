// The JSON Data
const file = `[
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]`

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
