const questions = [

{
question:"1. Qu'est-ce que Nimda ?",
answers:["Un antivirus","Un ver informatique","Un pare-feu","Une base de données"],
correct:1
},

{
question:"2. En quelle année Nimda est-il apparu ?",
answers:["1998","2005","2001","2010"],
correct:2
},

{
question:"3. Quel protocole est principalement utilisé par la faille Unicode ?",
answers:["FTP","HTTP","SMTP","DNS"],
correct:1
},

{
question:"4. Quel serveur était principalement ciblé par la faille Unicode ?",
answers:["Apache","Nginx","IIS","Tomcat"],
correct:2
},

{
question:"5. Quel est l'objectif de la faille Unicode ?",
answers:["Augmenter la vitesse du serveur",
"Contourner les restrictions d'accès",
"Créer un antivirus",
"Supprimer Internet"],
correct:1
},

{
question:"6. Nimda peut infecter :",
answers:[
"Serveur Web",
"Réseau local",
"Site Web",
"Toutes les réponses"
],
correct:3
},

{
question:"7. Quelle mesure protège contre Nimda ?",
answers:[
"Ignorer les mises à jour",
"Installer les correctifs de sécurité",
"Supprimer les sauvegardes",
"Désactiver le pare-feu"
],
correct:1
},

{
question:"8. La faille Unicode permet :",
answers:[
"Accès non autorisé aux fichiers",
"Accélérer Internet",
"Créer une base de données",
"Installer Windows"
],
correct:0
},

{
question:"9. Quel est le meilleur moyen de prévention ?",
answers:[
"Mise à jour régulière",
"Aucune protection",
"Supprimer le serveur",
"Désactiver HTTP"
],
correct:0
},

{
question:"10. Nimda est classé comme :",
answers:[
"Virus",
"Worm",
"Spyware",
"Firewall"
],
correct:1
}

];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const resultElement = document.getElementById("result");
const nextButton = document.getElementById("next");

function loadQuestion(){

let q = questions[currentQuestion];

questionElement.innerText = q.question;

answersElement.innerHTML = "";

q.answers.forEach((answer,index)=>{

const btn = document.createElement("button");

btn.innerText = answer;
btn.classList.add("answer");

btn.onclick = ()=>checkAnswer(index);

answersElement.appendChild(btn);

});

}

function checkAnswer(index){

if(index === questions[currentQuestion].correct){

resultElement.innerHTML =
"✅ Très Bien";

score++;

}else{

resultElement.innerHTML =
"❌ Réessayez";
}

}

nextButton.addEventListener("click",()=>{

currentQuestion++;

resultElement.innerHTML="";

if(currentQuestion < questions.length){

loadQuestion();

}else{

questionElement.innerHTML =
`Quiz Terminé ! Score : ${score}/${questions.length}`;

answersElement.innerHTML="";
nextButton.style.display="none";

if(score >= 8){

resultElement.innerHTML =
"🏆 Excellent Travail !";

}else{

resultElement.innerHTML =
"📚 Continuez à réviser.";
}

}

});

loadQuestion();
