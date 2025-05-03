const student ={
    fullName : "Baljeet Singh",
    marks: 94.4,
    printMarks: function(){
        console.log("marks = ", this.marks);
    },
};

console.log(student);
student.printMarks();

//this matlab wahi wale marks object ke ander defined hai 


const employee = {
    calcTax(){
        console.log("tax rate is 10%");
    }
};
employee.calcTax();

const karanArjun ={
    salary: 50000,
}