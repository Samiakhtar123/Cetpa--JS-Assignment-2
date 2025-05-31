//Question 1

let marks = parseInt(prompt("Enter The Number"));

switch(true){
    
    case(marks > 41 && marks < 50):
    console.log("A+");
    break;


    case(marks >31 && marks <40):
    console.log("B");
    break;
    

    case(marks >21 && marks < 30):
    console.log("C");
    break;
    

    case(marks >11 && marks < 20):
    console.log("D");
    break;
    

    case(marks < 10):
    console.log("Fail");
    break;
    
    
    default: 
        console.log("invalid no");
        
}

//Question 2
 
function getValue(C) {
    if(C === 'P' || C ==='p'){
        return 'PreppBytes';
    }
    else if(C ==='Z' || C === 'z'){
        return 'Zenith'
    }
    else if(C === 'E' || C === 'e'){
        return 'Expert Coder'
    }
    else if(C === 'D' || C === 'd'){
        return 'Data Structure'
    }
    else return 'invalid inputs';

}
C = 'P'
console.log(getValue(C));


//Question 3


function findLargest(a,b,c){
    if(a>b && a>c){
        console.log(`The largest no. is : ${a}`);
        
    }
     else if(b>c && b>a){
        console.log(`The largest no. is : ${b}`);
        
    }
     else if(c>b && c>a){
        console.log(`The largest no. is : ${c}`);
        
    }
    else return "invalid input";

}
findLargest(10,5,6);


//Question 4

function findSmallest(a,b,c){
    if(a<b && a<c){
        console.log(`The Smallest no. is : ${a}`);
        
    }
     else if(b<c && b<a){
        console.log(`The smallest no. is : ${b}`);
        
    }
     else if(c<b && c<a){
        console.log(`The Smallest no. is : ${c}`);
        
    }
    else return "invalid input";
}

findSmallest(5,10,50);


//Question 5

function CheckTriangle(A,B,C){
    if(A < 90 && B < 90 && C < 90){
        return 'Acute Triangle';
        
    } else if(A > 90 || B > 90 || C > 90){
        return 'Obtuse triangle';
        
    }
    else { 
        return "Invalid triangle"
    }
}

console.log(CheckTriangle(100,50,30));
