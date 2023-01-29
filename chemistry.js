const every = document.getElementById("every");

//const form = document.getElementById("form");
let myLeads = []

const next = document.getElementById("next")
const userName = localStorage.getItem('name');// this is the current user name in the questions page

let password = false;

let username = false;
const show = document.querySelector('.show');
const caution = document.getElementById("caution");

let printName = document.getElementById("nameout");


console.log(userName)


const GrabForm = document.getElementById("form")
// timer section
const min = document.querySelector('.min')
const sec = document.querySelector('.sec')
let timer = document.querySelector('.timer')
let dots = document.createTextNode(':')
let marquee = document.getElementById('mar')
if (marquee) {
    console.log(marquee);
}

let minitues = 3;
let minituesInWords = ''
let seconds = 0;

if (timer) {
    // timer function
    function Timer() {

   
         if (minitues <= 3 && seconds > 0) {
            
            seconds -= 1;
            sec.innerHTML = seconds;
            if (seconds < 10) {
                sec.innerHTML = `:0${seconds}`
            } else {
                sec.innerHTML = `:${seconds}`
            }
        }
        else if (seconds === 0 && minitues !== 0  ) {
       

            seconds = 60
            minitues -= 1
            
            min.innerHTML = `0${minitues}`; 
        }
        else if (minitues === 0 && seconds === 0) {
            minitues = 0
            seconds = 0
            show.className = 'hide'
            show.nextElementSibling.className = 'show'
            clearInterval(Run) // stop interal
            radio()
            Last.addEventListener("click", () => {
                LastRedirect();
            })
        }





        if (minitues <= 1) {
            timer.style.color = 'red'
        } else {
            timer.style.color = 'rgb(9, 224, 81)'
        }

// 







        // marquee
        if (minitues === 3) {
            minituesInWords = 'three';

            marquee.innerHTML = `${userName} you have ${minituesInWords} mintues to complete this test !`;
        }
        else if (minitues === 2) {
            minituesInWords = 'two';

            marquee.innerHTML = `${userName} you have ${minituesInWords} mintues to complete this test ! `;
        }
        else if (minitues === 1) {
            minituesInWords = 'one';

            marquee.innerHTML = `${userName} you have ${minituesInWords} minutue to complete this test !`;

        }
        else if (minitues === 0) {
            marquee.innerHTML = `${userName} you have less than one minutue to complete this test !`;
            marquee.style.fontSize = '15px'

        }




    }

}


let Run = setInterval(Timer, 1000);
// always make your setinterval a variable so you can easily stop it .



let Secname = JSON.parse(localStorage.getItem('SecName'))// table names localstorage varaiable




let Score = JSON.parse(localStorage.getItem('Score'))// table score variable

// how to keep the scores aftere reload
if (Score) {
    myLeads = Score;
    console.log(Score);
}
if (Score) {
    for (let i = 0; i < Score.length; i++) {
        const element = Score[i];
        console.log(element)

    }
}


const RedirectUrl = () => {
   location.replace("Questions.html")
   
}






if (next) {
    // when start button is clicked
    next.addEventListener("click", (event) => {


        console.log("ssicrs9d");

        const FullName = document.getElementById("name");


        let nameVal = FullName.value;





        const pass = document.getElementById("passcode");


        let passval = pass.value;

        console.log(nameVal, passval);




        localStorage.setItem('password', passval);
        // this was used store the name and password in then local storage.
        localStorage.setItem('name', nameVal)// this set the name on the question page





        if (nameVal != "" && passval === "chemistry") {
            console.log("correct")

            password = true;

            username = true;

        } else if (nameVal === "" && passval === "") {
            console.log("pls fill in the input fields")

            password = false;

            username = false;

            caution.textContent = "please fill  the input fields!";
        } else if (nameVal === "" && passval != "chemistry") {
            console.log("no name wrong passcode")

            username = false;

            password = false;

            caution.textContent = "no name provided And wrong passcode!"
        } else if (nameVal === "" && passval === "chemistry") {
            console.log("pls input your name")
            username = false;

            password = true;

            caution.textContent = "please input your name!"

        } else if (event.getModifierState('CapsLock')) {
            //	username= false;

            //password=false;

            caution.textContent = "warning! capslock is on!"
            console.log("warning! capslock is on")
        } else if (passval === "" && nameVal != "") {
            console.log("pls input a passcode")
            password = false;

            username = true

            caution.textContent = "please input a passcode!"
        } else if (nameVal != "" && passval != "chemistry") {
            console.log("wrong passcode")
            username = true;

            password = false;

            caution.textContent = "wrong passcode!"
        }


        if (username === true && password === true) {
            //let Disnext = next.disabled = false;
             RedirectUrl()
        } else {
            //let Disnext = next.disabled = true;
        }







    });

}






if (GrabForm) {
    // form
    GrabForm.addEventListener("submit", (event) => {
        event.preventDefault()
        let FormPass = document.getElementById("passcode").value;

        let FormName = document.getElementById("name").value;
        console.log(FormPass);


        if (FormName != "" && FormPass === "chemistry") {
            console.log("correct")

            password = true;

            username = true;




        } else if (FormPass === "" & FormName === "") {
            console.log("pls fill in the input fields")

            password = false;

            username = false;

            //c="please fill  the input fields";
        } else if (FormName === "" && FormPass != "chemistry") {
            console.log("no name wrong passcode")

            username = false;

            password = false;

            // cautio//n.tex//tContent= "no name provided //And wrong passcode"
        } else if (FormName === "" && FormPass === "chemistry") {
            console.log("pls input your name")
            username = false;

            password = true;



        } else if (FormPass === "" && FormName != "") {
            console.log("pls input a passcode")
            password = false;

            username = true

            //caution.textContent= "please input a passcode"
        } else if (FormName != "" && FormPass != "chemistry") {
            console.log("wrong passcode")
            username = true;

            password = false;

            //caution.textContent= "wrong passcode"
        }



        if (username === true && password === true) {
          
            FormPass = "";

                // this is where names of users are stored
            if (localStorage.getItem('SecName') === null) {
                localStorage.setItem('SecName', '[]')

            }

            let Local = JSON.parse(localStorage.getItem('SecName'))

            Local.push(FormName)

            localStorage.setItem('SecName', JSON.stringify(Local))
        }






    });


}







//let inputNameVAL= inputName.value;
//console.log(inputName.value)
//let pass = document.getElementById("passcode").value


let counter = 0;
const FinalResult = document.getElementById("result");
// this is used to make the naval equaln to name

// this is used for the radio button choses authentificaton
const radio = () => {

    const RadioName = document.getElementById("options").checked;

    const RadioName2 = document.getElementById("options2").checked;

    const RadioName3 = document.getElementById("options3").checked;

    const RadioName4 = document.getElementById("options4").checked;

    const RadioName5 = document.getElementById("options5").checked;

    console.log(RadioName + "\n" + RadioName2 + "\n" + RadioName3 + "\n" + RadioName4 + "\n" + RadioName5);
    if (RadioName) {
        counter += 1;

        //console.log(counter)
    }
    if (RadioName2) {
        counter += 1;
        //	console.log(counter)
    }
    if (RadioName3) {
        counter += 1;
        //console.log(counter)
    }
    if (RadioName4) {
        counter += 1;
        //console.log(counter)
    }
    if (RadioName5) {
        counter += 1;
        //console.log(counter)c

    }
    console.log(counter);
    // this is uesd to manipulate the counter value
    currentcounter = counter / 5 * 100;
    html = `${userName} you scored ${currentcounter}% `
    FinalResult.innerHTML = html;
    myLeads.push(currentcounter)
    currentcounter = ''
    // this is where scores of users are stored
    localStorage.setItem('Score', JSON.stringify(myLeads)
    )




}
console.log(counter);
let html
let currentcounter
const SubmitBtn = document.querySelector("#sub");

if (SubmitBtn) {
    // hides the question and shows the result
    SubmitBtn.addEventListener("click", function (event) {
        event.preventDefault();
        //classname return or set an attribute to a#n element
        show.className = 'hide';
        // nextelementsibling return the node of the next elemt
        show.nextElementSibling.className = 'show';
        radio();

    });
}

const Last = document.getElementById("last-btn");

const LastRedirect = function () {
    window.location.replace("index.html")
}
if (Last) {
    Last.addEventListener("click", function (e) {
        e.preventDefault()
        LastRedirect();
    })
}




if (printName) {
    printName.innerHTML = `<span class='can'>candidate name</span> ~ <span class='canName'> ${userName}</span>`;
}

console.log("/u00d7")

let recordsLink = document.querySelector('.Arecord')

//tr1
// create table and appends the score and name values in the localstorage
 function tables(){
    let names = document.querySelector('.names')
    let list = document.querySelector('.list')
    if(names && Secname ){
        for (let i = 0; i < Secname.length; i++) {
            let Li = document.createElement('li')
            
            list.appendChild(Li)
            
            const element = Secname[i];
            console.log(element);
            
            let hr = document.createElement('hr')
            let rows = document.createElement('tbody')
            let name = document.createTextNode(element)
            rows.appendChild(name)
            names.appendChild(rows)
            names.appendChild(hr)
        }
    }
    let scorebox = document.querySelector('.scores')
    if (Score && scorebox) {
        for (let i = 0; i < Score.length; i++) {
            const element = Score[i];
            console.log(element)
            let scBody = document.createElement('tr')
            let hr = document.createElement('hr')
            let score = document.createTextNode(element)
            scBody.appendChild(score)
            
            scorebox.appendChild(scBody)
            scorebox.appendChild(hr)
    
        }
    }
    
 }
tables()

// clears the localstorage
function clear() {
    localStorage.clear('Secname')
    localStorage.clear('Score')
    location.reload()
}

let clearbtn = document.querySelector('.clear')
console.log(clearbtn);
if(clearbtn){
    clearbtn.addEventListener('click', function(){
        myLeads = ''
        clear()
    
    })
}
let home = document.querySelector('.home')
if(home){
    home.addEventListener('click', function(){
        LastRedirect()
    })
}


function TableUrl(params) {
    location.replace('Table.html')
}

let adminPass = document.querySelector('.pass')
let adminBtn = document.querySelector('.admin')

console.log(adminBtn , adminPass)
let AdminPasscode = 'admin123'
if(adminBtn && adminPass){
    adminBtn.addEventListener('click',function(e){
        e.preventDefault()// this is very important for an anthetification with the form tag
        let AdminCaution = document.querySelector('.caution')
       let AdminPasscodeVal = adminPass.value
       console.log(AdminPasscodeVal);
       if(AdminPasscodeVal === AdminPasscode){
        TableUrl()
    }
    else if(e.getModifierState('CapsLock')){
        AdminCaution.innerHTML = '"warning! capslock is on!"'
    }else if(AdminPasscodeVal ===''){
        AdminCaution.innerHTML = 'enter a passcode!'
    }
    else if(AdminPasscodeVal !== AdminPasscode){
        AdminCaution.innerHTML = 'Wrong passcode!'  
    }
    });
}
let homeadmin = document.querySelector('.toadmin')

// home admin btn
if(homeadmin){
    homeadmin.addEventListener('click',(e)=>{
        e.preventDefault()
        location.assign('admin.html')
    })
}
let candidate = document.querySelector('.tocandidate')
if(candidate){
    candidate.onclick = function(){
        location.assign('index.html')
    }
}

// CANDIDATE PASSCODE IS CHEMISTRY
//ADMIN PASSACODE IS admin123



// PROJECT COMPLETED