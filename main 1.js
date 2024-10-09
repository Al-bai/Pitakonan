const Question = [
    {
        Pitakonan: "Siapa arsitek yang merancang Monas di Jakarta?",
        jawaban: [
            {Text: "F. Silaban", correct: false},
            {Text: "R.M. Soedarsono", correct: true},
            {Text: "Ir. Sukarno", correct: false},
            {Text: "Ir. Djuanda", correct: false},
        ]
    },
    {
        Pitakonan: "Di provinsi manakah terdapat situs megalitik Gunung Padang yang terkenal sebagai situs prasejarah terbesar di Asia Tenggara?",
        jawaban: [
            {Text: "Jawa Barat", correct: true},
            {Text: "Jawa Tengah", correct: false},
            {Text: "Sumatera Selatan", correct: false},
            {Text: "Sulawesi Selatan", correct: false},
        ]
    },
    {
        Pitakonan: "Siapa pahlawan nasional yang dikenal dengan julukan Ayam Jantan dari Timur?",
        jawaban: [
            {Text: "Sultan Hasanuddin", correct: true},
            {Text: "Pattimura", correct: false},
            {Text: "Sultan Ageng Tirtayasa", correct: false},
            {Text: "Sultan Hamengkubuwono ", correct: false},
        ]
    },
    {
        Pitakonan: "Apa nama sungai terpanjang di Indonesia?",
        jawaban: [
            {Text: "Sungai Musi", correct: false},
            {Text: "Sungai Batanghari", correct: false},
            {Text: "Sungai Kapuas", correct: true},
            {Text: "Sungai Mahakam", correct: false},
        ]
    },
    {
        Pitakonan: "Siapakah penulis novel Tetralogi Buru?",
        jawaban: [
            {Text: "Andrea Hirata", correct: false},
            {Text: "Ahmad Tohari", correct: false},
            {Text: "Pramoedya Ananta Toer", correct: true},
            {Text: "Taufiq Ismail", correct: false},
        ]
    },
    {
        Pitakonan: "Siapa arsitek dari Masjid Istiqlal di Jakarta?",
        jawaban: [
            {Text: "Soekarno", correct: false},
            {Text: "F. Silaban", correct: true},
            {Text: "M. Yamin", correct: false},
            {Text: "Ir. Ciputra", correct: false},
        ]
    },
    {
        Pitakonan: "Siapa yang dikenal sebagai penulis surat kabar De Express yang mempelopori pergerakan nasional Indonesia?",
        jawaban: [
            {Text: "Tirto Adhi Soerjo", correct: true},
            {Text: "Soetomo", correct: false},
            {Text: "H.O.S. Tjokroaminoto", correct: false},
            {Text: "Mohammad Hatta", correct: false},
        ]
    },
    {
        Pitakonan: "Siapa penulis novel Amba yang berlatar belakang sejarah G30S/PKI?",
        jawaban: [
            {Text: "Pramoedya Ananta Toer", correct: false},
            {Text: "Laksmi Pamuntjak ", correct: true},
            {Text: "Ahmad Tohari", correct: false},
            {Text: "Seno Gumira Ajidarma", correct: false},
        ]
    },
    {
        Pitakonan: "Apa nama taman nasional yang menjadi habitat asli orangutan di Kalimantan?",
        jawaban: [
            {Text: "Taman Nasional Gunung Leuser", correct: false},
            {Text: "Taman Nasional Ujung Kulon", correct: false},
            {Text: "Taman Nasional Tanjung Puting", correct: true},
            {Text: "Taman Nasional Kerinci Seblat", correct: false},
        ]
    },
    
];

const questionElement = document.getElementById("jawaban");
const answerButton = document.getElementById("answer-button");
const lanjutButton= document.getElementById("Lanjut-btn");

function startQuiz(){
let currentQuestionIndex = 0;
score = 0;
nextButton.innerHTML = "Next";
showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions(currentQuestionIndex)
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.
    
    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.Text;
        button.classList.add("btn")
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    lanjutButton.style.display= "none";
    while(answerButton.firstChild){
      answerButton.removeChild(answerButton.firstChild);  
    }
}   questions;

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }else{
        selectedBtn.classList.add("incorrect");
    }
}


startQuiz();