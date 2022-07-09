import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";

import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js";

const firebaseConfig = {
    // ...
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://your-project-id-with-region.firebasedatabase.app/"
  }

const app = initializeApp(firebaseConfig);

const dbRef = ref(getDatabase());

const db = getDatabase();

var myDiv = document.getElementById("myDiv")

const myButton = document.getElementById("myButton")

const clear = document.getElementById("clear")

var name = document.getElementById("name")

var cname = document.getElementById("cname")

clear.onclick = () =>{
  name.value=''
  cname.value=''
}

myButton.onclick = () => {
  if(name.value == '' || cname.value=='') alert("Please fill out the fields");
  else if(name.value == cname.value) alert("Name cannot be same");
  else if(/\d/.test(name.value)||/\d/.test(cname.value)) alert("Number found in the input filed");
  else if(/\s/.test(name.value)||/\s/.test(cname.value)) alert("Invalid Inputs");
  else if(name.value.length<3 || cname.value.length<3) alert("Name length should be greater than two");
  else
  set(ref(db, '/'+name.value), {
    Usercrush: cname.value
  })
  .then(() => {
    document.write('<!DOCTYPE html><html lang="en"><head><link rel="icon" href="favicon.png"><title>FLAMES</title></head><body style="background: linear-gradient(45deg, #FC466B, #3F5EFB);"><img src="perro.jpg" style="height: 500px; width:500px;left      : 50%;top       : 50%;position  : absolute;transform : translate(-50%, -50%); border-radius: 20px;"></body></html>')
  })
  .catch((error) => {
    document.write('<h3>Some Error Occurred</h3>')
  });

}