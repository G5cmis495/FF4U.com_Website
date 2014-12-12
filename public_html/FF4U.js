function CreateAccount(){
    var submit = document.getElementByValue("Create Account");
    submit.addEventListener("click",saveAccount, false);
}
function saveAccount(){
    var username = document.getElementByValue("username").value;
    var password = document.getElementByValue("password").value;
    sessionStorage.setItem(username,password);
    
}

function CreateLeague(){
    var submit = document.getElementbyValue("Create League");
    submit.addEventListener("click",saveLeague)
}
    
function CreateTeam(){
    var submit = document.getElementByValue("Create Team");
    submit.addEventListener("click", saveTeam, false);
}

function saveTeam(){
    var QB1 = document.getElementByName("QB1").value;
    var QB2 = document.getElementByName("QB2").value;
    var QB3 = document.getElementByName("QB3").value;
    var QB4 = document.getElementByName("QB4").value;
    
    var RB1 = document.getElementByName("RB1").value;
    var RB2 = document.getElementByName("RB2").value;
    var RB3 = document.getElementByName("RB3").value;
    var RB4 = document.getElementByName("RB4").value;
    var RB5 = document.getElementByName("RB5").value;
    var RB6 = document.getElementByName("RB6").value;
    var RB7 = document.getElementByName("RB7").value;
    var RB8 = document.getElementByName("RB8").value;
    
    var WR1 = document.getElementByName("WR1").value;
    var WR2 = document.getElementByName("WR2").value;
    var WR3 = document.getElementByName("WR3").value;
    var WR4 = document.getElementByName("WR4").value;
    var WR5 = document.getElementByName("WR5").value;
    var WR6 = document.getElementByName("WR6").value;
    var WR7 = document.getElementByName("WR7").value;
    var WR8 = document.getElementByName("WR8").value;
    
    var TE1 = document.getElementByName("TE1").value;
    var TE2 = document.getElementByName("TE2").value;
    var TE3 = document.getElementByName("TE3").value;
    
    var K1 = document.getElementByName("K1").value;
    var K2 = document.getElementByName("K2").value;
    var K3 = document.getElementByName("K3").value;
    
    var D1 = document.getElementByName("D1").value;
    var D2 = document.getElementByName("D2").value;
    var D3 = document.getElementByName("D3").value;
    
    var ST1 = document.getElementByName("ST1").value;
    var ST2 = document.getElementByName("ST2").value;
    var ST3 = document.getElementByName("ST3").value;
    
    sessionStorage.setItem(QB1,QB2,QB3,QB4,RB1,RB2,RB3,RB4,RB5,RB6,RB7,RB8,WR1,
    WR2,WR3,WR4,WR5,WR6,WR7,WR8,TE1,TE2,TE3,K1,K2,K3,D1,D2,D3,ST1,ST2,ST3);
    
}

window.addEventListener("load",CreateAccount, false);
window.addEventListener("load",CreateTeam, false);
