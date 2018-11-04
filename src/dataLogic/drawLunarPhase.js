let phaseMod = 0;

function drawLunarPhase(data) {
    if(data) {
        const moonPhase = data[0].phase;
        const progress = getTimeProgress();

        switch(moonPhase) {
            case "New Moon": (function() {
                noStroke();
                fill(40);
                ellipse(windowWidth/2, windowHeight/2, 500);
                fill(255,245,200);
                arc(windowWidth/2, windowHeight/2, 500*phaseMod, 500,HALF_PI,HALF_PI+PI);
                arc(windowWidth/2, windowHeight/2, 500, 500, HALF_PI+PI,HALF_PI);
            })();
            
            case "Full Moon": (function() {
                noStroke();
                fill(40);
                ellipse(windowWidth/2, windowHeight/2, 500);
                fill(255,245,200);
                arc(windowWidth/2, windowHeight/2, 500*phaseMod, 500,HALF_PI,HALF_PI+PI);
                arc(windowWidth/2, windowHeight/2, 500, 500, HALF_PI+PI,HALF_PI);
            })();

            case "First Quarter": (function() {
                noStroke();
                fill(40);
                ellipse(windowWidth/2, windowHeight/2, 500);
                fill(255,245,200);
                arc(windowWidth/2, windowHeight/2, 500*phaseMod, 500,HALF_PI,HALF_PI+PI);
                arc(windowWidth/2, windowHeight/2, 500, 500, HALF_PI+PI,HALF_PI);
            })();

            case "Last Quarter": (function() {
                noStroke();
                fill(40);
                ellipse(windowWidth/2, windowHeight/2, 500);
                fill(255,245,200);
                arc(windowWidth/2, windowHeight/2, 500*phaseMod, 500,HALF_PI,HALF_PI+PI);
                arc(windowWidth/2, windowHeight/2, 500, 500, HALF_PI+PI,HALF_PI);
            })();
        }

        phaseMod += .001;
        if(phaseMod>=1.0){
          phaseMod=0;
        }
    }
}

function calculateDayDifferenceFromCurrentDate(date) {
    const dateData = date.split(" ");
    const momentPhaseEnd = moment().year(dateData[0]).month(dateData[1]).date(dateData[2]);
    const currentDate = moment();

    const daysUntilPhaseEnd = Math.abs(Math.floor(moment.duration(momentPhaseEnd.diff(currentDate)).asDays()));

    return Math.abs(daysUntilPhaseEnd);
}

const getTimeProgress = () => 100-(moment.duration(moment().endOf('day').diff(moment())).asHours()/24*100);