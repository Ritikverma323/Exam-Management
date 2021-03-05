let classroom = {
  number_of_students: 20,
  students: [
    {
      name: "Aayushi",
      age: 20,
      category: "Gen",
      
      city: "pune",
        marks: [45, 76, 34],
    
    },
    {
      name: "rahul",
      age: 24,
      
      category: "sc",
      city: "jaipur",
      marks: [17, 72, 34],
    
    },
    {
      name: "prateek",
      
      
      age: 36,
      category: "obc",
      city: "pune",
      
      marks: [22, 46, 84],
      
    },
    {
      name: "sagar",
      age: 56,
      category: "st",
      city: "chdgrh",
     
      marks: [33, 36, 34],
      
    },
    {
      name: "hanuman",
      age: 45,
      category: "obc",
      city: "jaipur",
    
      marks: [49, 26, 34],
     
    },
    {
      name: "ram",
      age: 25,
      category: "Gen",
      city: "pune",
      
      marks: [55, 16, 34],
      
    },
    {
      name: "laxman",
      age: 27,
      category: "sc",
      city: "jaipur",
      
      marks: [67, 52, 34],
     
    },
    { name: "raj", age: 36,category: "st" , city: "pune", marks: [73, 66, 84]},
    {
      name: "vipul",
      age: 66,
      category: "obc",
      city: "chdgrh",
     
      marks: [15, 76, 34],
      
    },
    {
      name: "mahesh",
      age: 25,
      category: "st",
      city: "jaipur",
      
      marks: [35, 86, 34],
      
    },
    {
      name: "mohan",
      age: 28,
      category: "sc",
      city: "pune",
    
      marks: [45, 36, 34],
   
    },
    {
      name: "meena",
      age: 26,
      category: "sc",
      city: "jaipur",
      
      marks: [57, 22, 34],
      
    },
    {
      name: "anitaa",
      age: 35,
      category: "Gen",
      city: "pune",
     
      marks: [33, 86, 84],
      
    },
    {
      name: "ganesh",
      age: 59,
      category: "Gen",
      city: "chdgrh",
      
      marks: [55, 96, 34],
      
    },
    {
      name: "shankar",
      age: 43,
      category: "obc",
      city: "jaipur",
      
      marks: [65, 46, 34],
      
    },
  ],
};

// cities
function UniqueCity() {
  // list of all cities
  const cities = classroom.students.map((student, index, arr) => {
    return student.city;
  });

  // No of stuents in each city
  const studentCount = {};

  const uniquecities = cities.filter((city, index, arrayofcity) => {
    return arrayofcity.indexOf(city) === index;
  });

  console.log(cities);
  console.log(uniquecities);

  return uniquecities;
}

function citylist() {
  let cities = UniqueCity();
  let citieslist = document.getElementById("cities");
  cities.map((cityname) => {
    citieslist.innerHTML =
      citieslist.innerHTML + `<option value="${cityname}">${cityname}</option>`;
  });
}
citylist();

// categoryegories
function category() {
  // list of all cities
  const categories = classroom.students.map((student, index, arr) => {
    return student.category;
  });

  const category = categories.filter((category, index, arrayofcategory) => {
    return arrayofcategory.indexOf(category) === index;
  });

  console.log(categories);
  console.log(category);

  return category;
}

function categorylist() {
  let categories = category();
  let categorylist = document.getElementById("categories");
  categories.map((category) => {
    categorylist.innerHTML =
      categorylist.innerHTML +
      `<option value="${category}">${category}</option>`;
  });
}
categorylist();

// Marks Average

function averageMarks(){
    classroom.students.map((student)=>{
       let average= student.marks.reduce((total,marks)=>{
            return (total+marks);
        })
        average=average/3;
        student.averagemarks=average.toFixed(2);
       
    })
}

averageMarks();

// Pass Status

function passStudent(){
classroom.students.map((student)=>{
    let failedSubject=student.marks.filter((mark)=>{
       return mark<30
    });
    if(student.category=="sc" || student.category=="st" ){
    if(failedSubject.length==0){
        student.passStatus="pass"
    }
    else{
        student.passStatus="fail"
    }
}
else if(student.category=="obc"){
    let abovefifty=student.marks.filter((mark)=>{
        return mark>50
     });
     if(abovefifty.length>=2){
        student.passStatus="pass"
     }else{
        student.passStatus="fail"
     }
}
else if(student.category=="Gen"){
    let aboves=student.marks.filter((mark)=>{
        return mark>60
     });
     if(aboves.length>=2){
        student.passStatus="pass"
     }else{
        student.passStatus="fail"
     }
}
})
}

passStudent();
// Event
const cities = document.querySelector("#cities");
const categories = document.querySelector("#categories");
const filteredstudent = cities.addEventListener("change", filterStudent);
categories.addEventListener("change", filterStudent);
let pass=document.getElementById('pass');
let highest=document.getElementById('highest');
let ranks=document.getElementById('range');

pass.addEventListener('change',filterStudent);
highest.addEventListener('change',filterStudent);
ranks.addEventListener('change',filterStudent)
function filterStudent() {
  console.log(cities.value);
  console.log(categories.value);
  let selectedCity = cities.value;
  let selectedCategory = categories.value;
  let pass=document.getElementById('pass').value;
  let highest=document.getElementById('highest').value;
  let range=document.getElementById('range').value;

  let students = classroom.students.filter((student) => {
    if (student.category == selectedCategory && student.city == selectedCity) {
      console.log(1);
      return true;
    } else if (selectedCategory == "all" && student.city == selectedCity) {
      console.log(2);
      return true;
    } else if (student.category == selectedCategory && selectedCity == "all") {
      console.log(3);
      return true;
    } else if (selectedCategory == "all" && selectedCity == "all") {
      console.log(4);
      return true;
    }
  });

  if(pass!=="all") {
    students=students.filter((student)=>{
        if(pass=="pass"){
        return student.passStatus==="pass";
    }else{
        return student.passStatus==="fail";
    }
    }) 
  }

  if(highest!=="all"){
      if(highest=="highest"){
        students= students.sort((a,b)=>{
            return b.averagemarks-a.averagemarks;
         })
      }
      else{
        students= students.sort((a,b)=>{
            return a.averagemarks-b.averagemarks;
         })
      }
   
  }
  oldstudents= students;
  if(range !=="all"){
   
    students=oldstudents.slice(0,range)
  }
   
 

  console.log(oldstudents);

 selectedStudents(students);
}

function selectedStudents(students){
    //console.log( students)
 const tables=document.getElementById('products');
  //  old data
  document.querySelectorAll('.student-data').forEach(function(data)
  {
      data.remove();
    });
  
    students.map((student,index)=>{
     const newdata=document.createElement('tr');
     newdata.setAttribute("class"," student-data")
    
     // data 
     newdata.innerHTML=newdata.innerHTML+`<td class=data-student-id-${index+1}>${index+1}</td>`
     for(data in student){
        newdata.innerHTML=newdata.innerHTML+`<td class=${data}>${student[data]}</td>`
       
        
     }
     console.log(newdata)
     tables.append(newdata);
    })
}