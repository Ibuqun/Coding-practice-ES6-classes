//ES6

/*const box1 = {
    color: "green",
    position: 1,
    clickme: function ()  {
        document.querySelector('.green').addEventListener('click', () => {
            let str = `This is box number ${this.position} and it is ${this.color}`;
            alert(str);
        });
    }

};
box1.clickme(); */
 /*
const boxes = document.querySelectorAll('.box');
const boxesArr = Array.from(boxes);

boxesArr.forEach(cur => 
    cur.style.background = 'dodgerblue');
    */

/*
    //SPREAD OPERATOR   
    const ages = [21, 13, 25, 15, 11];
    const addAges = (a, b, c, d, e) => a + b + c + d + e;

    const sum1 = addAges(...ages);
    console.log(sum1);

    const familySmith = ["John", "Jane", "Juliet"];
    const familyMiller = ["Mary", "Robert", "Napoleon"];
    const bigFamily = [...familySmith , ...familyMiller];
    console.log(bigFamily); */

   /* function isFullAge (...years) {
        years.forEach(cur => {
            let now = new Date
            console.log (now.getFullYear() - cur);
        });
    }

    isFullAge(1991, 1989, 1996, 1999); //29, 31, 24, 21
    */

    //ES6 CLASSES

    /*

    class Person {
        constructor (name, yearOfBirth, job){
            this.name = name;
            this.yearOfBirth = yearOfBirth;
            this.job = job;
        }
        calculateAge() {
            let now = new Date();
            let age = now.getFullYear() - this.yearOfBirth;
            console.log(age);
        }
    }

    const john = new Person("John", 1987, "Lawyer");
    

    class Athlete extends Person {
        constructor (name, yearOfBirth, job, olympicGames, medals){
            super (name, yearOfBirth,job);
            this.olympicGames = olympicGames;
            this.medals = medals;
        }
        wonMedal () {
            this.medals++;
            console.log(this.medals);
        }
    }

    const johnAthlete = new Athlete("Johnny", 1987, "Swimmer", 4, 12);
    johnAthlete.calculateAge();
    johnAthlete.wonMedal(); 
    */

    //Coding Challenge
    //1. create a super class for Town

    class Town {
        constructor(name, buildYear){
            this.name = name;
            this.buildYear = buildYear;
        }
        //Methods go here

    }

    //Create a Park sub class

    class Park extends Town {
        constructor(name, buildYear, numberOfTrees, area){
        super(name, buildYear)
        this.numberOfTrees = numberOfTrees;
        this.area = area;
    }
            density (area, numberOfTrees){
               let treeDensity = Math.round(this.numberOfTrees/this.area);
                return treeDensity;
         }    
        
            age (buildYear) {
                let timeline = new Date().getFullYear() - this.buildYear;
                return timeline;
            } 
        }
        

    class Street extends Town {
        constructor(name, buildYear, length){
        super(name, buildYear) 
            this.length = length;
        } 
    }


//Create four parks
    const agodi = new Park ("Agodi", 2014, 1013, 625);
    const saro =  new Park ("Saro", 1990, 3018, 777);
    const wafer = new Park ("Wafer", 2003, 899, 322 );
    const stanley = new Park ("Stanley", 2018, 423, 100);

    const parkList = [agodi, saro, wafer, stanley];

    
        //let avgAge = wafer.age(); + agodi.age(); + saro.age(); + stanley.age();
        let waferAge = wafer.age();
        let agodiAge = agodi.age();
        let saroAge = saro.age();
        let stanleyAge = stanley.age();

        const averageAge = (parkOne, parkTwo, parkThree, parkFour, parkArr) => {
            let average = (parkOne + parkTwo + parkThree + parkFour)/ parkArr.length ;
            return average ;
        }

        const avg = averageAge(waferAge, saroAge, agodiAge, stanleyAge, parkList);
        //Get the density of each park
        let waferDensity = wafer.density();
        //console.log(waferDensity);
        let agodiDensity = agodi.density();
        let saroDensity = saro.density();
        let stanleyDensity = stanley.density();

        //Function that loops over the streets and states their densities
       /* const reader = (parkOne, parkTwo, parkThree, parkFour) => {
            for (let name of )
        } */

        //reader(wafer);
        
    //console.log(parkList.length);

//Create three streets
    const parklane = new Street ("Parklane", 1996, 20000);
    const haven = new Street ("Haven", 2006, 13000);
    const akobo = new Street ("Akobo", 1972, 50050);

    const streetList = [parklane, haven, akobo];
   // agodi.density();
    //wafer.age();

    console.log (` ----PARKS REPORT----
    Our ${parkList.length} parks have an average of ${avg} years


    `); 