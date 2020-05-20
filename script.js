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
        constructor(name, buildYear, size){
        super(name, buildYear) 
            this.size = size;
        } 
    }


//Create four parks
    const agodi = new Park ("Agodi", 2014, 1013, 62);
    const wafer = new Park ("Wafer", 2003, 899, 32 );
    const stanley = new Park ("Stanley", 2018, 423, 10);
    const saro =  new Park ("Saro", 1990, 3018, 77);

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
        //parkOne, parkTwo, parkThree, parkFour
        const reader = (array1) => {
        for (const element of array1) {
         console.log(`${element.name} Park has a tree density of ${element.density()} trees per square km`);
            
          }
        }

        //console.log(reader(parkList));

        //Create a function to read the name of the Park(s) with > 1000 trees.
        treeCounter = (array2) => {
            for (const value of array2){
                if (value.numberOfTrees > 1000){
                    console.log(`${value.name} Park has more than 1000 trees. ` )
                }
            }
        }

        
        
    //console.log(parkList.length);

//Create three streets
    const parklane = new Street ("Parklane", 1996, 2);
    const haven = new Street ("Haven", 2006, 1.3);
    const akobo = new Street ("Akobo", 1972, 5);

    const streetList = [parklane, haven, akobo];

    const streetDetailer = (array3) => {
        let size;
        for (const element of array3){
            if (element.size > 3){
                size = "big"
            } else if (element.size < 2){
                size = "small"
            } else size = "normal"
            console.log(`${element.name} Avenue, built in ${element.buildYear}, is a ${size} street.`);
        }   
    } 

    
   // agodi.density();
    //wafer.age();

    console.log (` ----PARKS REPORT----
    Our ${parkList.length} parks have an average age of ${avg} years.
    `); 
    console.log(reader(parkList));
    console.log(treeCounter(parkList));

    console.log(`---STREETS REPORT---
    Our ${streetList.length} streets have a total length of ${parklane.size + haven.size + akobo.size} km with an average of ${(parklane.size + haven.size + akobo.size)/streetList.length} km`);
    console.log(streetDetailer(streetList));