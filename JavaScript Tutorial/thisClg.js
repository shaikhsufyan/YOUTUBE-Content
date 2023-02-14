// object & this keyword challenge :

// What wil be the output of these program :
let data = {
    name : "sufyan",
    age : 20,
    proff :"Engineerr",
    check(){
        console.log(this.age);
    }
}
data.check();