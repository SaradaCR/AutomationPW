//Encapsulation: binding the data between the methods/creating the dependency between methods

class Student{
    StudentName;
    StudentPlace;
    StudentCollage;

    studentDetails(name,place,clg){
        this.StudentName=name;
        this.StudentPlace=place;
        this.StudentCollage=clg;
    }
    printStudentDetails(){
        console.log(this.StudentName);
        console.log(this.StudentPlace);
        console.log(this.StudentCollage);
    }
}

const obj=new Student();
obj.printStudentDetails("Sarada",)



//clean code principles: camelcasing,DRY,SOLID, KISS

//Inheritance:


class A{
    printHiMsg(){
        console.log("Hi....")
    }
    printHelloMsg(){
        console.log("Helooo..")
    }
}
class B extends A{

}
