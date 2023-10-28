const firebaseConfig = {
    apiKey: "AIzaSyBUGFwwk3CxsT9WMKo5ZU__MOY-EPgr5LM",
    authDomain: "mega-hospital-9f7c3.firebaseapp.com",
    databaseURL: "https://mega-hospital-9f7c3-default-rtdb.firebaseio.com",
    projectId: "mega-hospital-9f7c3",
    storageBucket: "mega-hospital-9f7c3.appspot.com",
    messagingSenderId: "513102103500",
    appId: "1:513102103500:web:0daf5c17bd8e16e1ee1369",
    measurementId: "G-XRG79PX4TC"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var appointDB = firebase.database().ref("appoointment ");
  
  document.getElementById("appointment").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var email = getElementVal("email");
    var poa = getElementVal("poa");
    var number = getElementVal("number");
    var dpt = getElementVal("dpt");
    var date = getElementVal("date");
    var time = getElementVal("time");

    console.log(name,email,poa,number,dpt,date,time);


  
    saveMessages(name,email,poa,number,dpt,date,time);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block"; 
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, email, poa, number, dpt, date,  time) => {
    var appointForm = appointDB.push();
  
    appointForm.set({
      name: name,
      emai: email,
      poa: poa,
      number: number,
      dpt: dpt,
      date: date,
      time: time,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };