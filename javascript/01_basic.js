//-----------stack working---------
//-----------it's working on primitive datatype like string ,number,Bollean,Null,Undefined-----------
//----------it can make a copy of a value of another stack it it's take a value from another stack---------
//-------Any changes are mode on the value it's only reflect on the copy not on the actual value of the other stack-----

let name="Tonmoy"
let firstName=name
console.log(firstName);//Tonmoy 
firstName="Ton"
console.log(firstName);//Ton
console.log(name);//Tonmoy

//----here name is copied to firstName-----------
//----changes made in firstName reflect on only firstName not in name too--------

//----------Heap Working---------
//----------it working on non-primitive datatype like array,Object,Function-------
//----------it pass the refence from one non-primitive data type to another non-primitive data type--------
//----------any changes are made on another object where the reference passes will reflect all over---------
let userOne={
    name : "TONMOY",
    age : 26,
}
console.log(userOne.name);
console.log(name);
let userTwo= userOne
userTwo.name="TONY"
console.log(userTwo.name);
console.log(userOne.name);
console.log(userOne);
console.log(userTwo);

//----here name is refered to userTwo from userOne-----------
//----changes made in name of userTwo reflect on name of us erOne also--------    