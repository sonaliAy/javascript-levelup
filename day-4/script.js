//ARRAYS
/*let marks = [97,82,75,64,36];
console.log(marks);
console.log(marks.length);  //property*/

//EXAMPLE
/*let heroes = ["spiderman","ironman","thor","hulk"];
console.log(heroes);
console.log(heroes.length);
typeof heroes;*/

//ARRAY INDICES
/*let marks = [90,23,45,67,78,98];
console.log(marks);
console.log (marks[1]);*/

//LOOPING OVER AN ARRAY 
//FOR LOOP
//let heroes = ["spiderman","ironman","hulk","shaktiman","doremon"];
   /* for(let idx=0;idx<heroes.length;idx++){
        console.log(heroes[idx]);
    }*/

    //for of 
    /*for(let hero of heroes){
        console.log(hero);
    }*/

        /*let cities = ["delhi","lucknow","gorakhpur","pune","bihar"];
        for(let city of cities){
           // console.log(city);
           console.log(city.toUpperCase());
        }*/

        //  let name = ["aman","ram","sohan","sona"];
        // for(let name of name){
        //    // console.log(name);
        //    console.log(name.toUpperCase());
        // }

           //PRACTICE QUESTION 
            // let marks = [85,97,44,37,60];
            // let sum = 0;
            // for(let val of marks){
            //     sum+=val;

            // }
            // let avg = sum / marks.length;
            // console.log('avg marks of the class = ${avg}');
    
        //2..QUESTION PRACTICE

            // let items =[250,645,300,900,50];
            // let idx= 0;
            // for(let val of items){
            //     console.log(`value at index ${idx} = ${val}`);
            //     let offer =val/10;
            //     items[idx] = items[idx]-offer;
            //     console.log(`value after offer =${items[idx]}`)
            //     idx++;
            // }
            // let items =[250,645,300,900,50];
            // for(let i=0;i<items.length;i++){
            //       let offer = items[i]/10;
            //       items[i]-=offer;
            // }
            // console.log(items);

            //ARRAYS IN JS  
            //LOOPING OVER ARRAYS
            // let heroes = ["ironman","hulk","shaktiman","antman"];
            //USING A FOR LOOP
            // for(let idx=0;idx<heroes.length;idx++)
            // {
            //     console.log(heroes[idx]);
            // }
            //FOR OF LOOP
            // for(let hero of heroes){
            //     console.log(hero);
            // }
            //EXAMPLE
            // let cities = ["delhi","pune","gkp","mumbai"];
            // for(let city of cities){
            //     // console.log(city);
            //     console.log(city.toUpperCase());
            // }

            //PRACTICE QUESTION
            //  let marks = [85,97,44,37,76,60];
            //  let sum=0;
            //  for(let val of marks){
            //     sum+=val;
            //  }
            //  let avg = sum/marks.length;
            //  console.log(`avg marks of the class = ${avg}`);

            //ARRAY IN JS
            //push()
            // let fooditems = ["potato","tomato","apple","banana"];
            // fooditems.push("chips","biscuit","bun");
            // console.log(fooditems);

            //pop()
            // let fooditems=["potato","tomato","chips","litchi"];
            // console.log(fooditems);
            // let deleteitem=fooditems.pop();
            // console.log(fooditems);
            // console.log("delete",deleteitem);

            //tostring
            // let fooditems=["potato","tomato","chips","litchi"];
            // console.log(fooditems);
            // console.log(fooditems.toString());
            // console.log(fooditems);

            //concat()
            // let marvelheroes = ["thor","spiderman","ironman"];
            // let dcheroes = ["superman","batman"];
            // let indianheros = ["shaktiman","krish"];
            // let heroes = marvelheroes.concat(dcheroes,indianheros);
            // console.log(heroes);


            //unshift()
            // let marvelheroes = ["thor","spiderman","ironman"];
            // let val = marvelheroes.shift();
            // console.log("delete",val);
            // console.log(marvelheroes);

            //slic()
            // let marvelheroes = ["thor","spiderman","ironman","antman","superman","krish"];
            // console.log(marvelheroes);
            // console.log(marvelheroes.slice(1,));//nothing write means everything print

            //splice()
            // let arr = [1,2,3,4,5,6,7];
            // arr.splice(2,2,101,102);
            // console.log(arr);

            //addelement
            // arr.splice(2,0,101);
            //deleteelement
            // arr.splice(3,1);
            //replaceelement
            // arr.splice(3,1,101);

            // console.log(arr);


    //practice auestion
    let company = ["bloomberg","microsoft","uber","google","IBM","netflix"];
    //  company.shift();
    // company.splice(2,1,"ola");
    company.push("amazon");
    console.log(company);


