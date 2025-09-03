// If문 문제

// 문제 1
// 유저가 입력하는 숫자가 0인지 음수인지 양수인지 판단하는 프로그램을 만드시오

let num = 5;

if (num > 0) {
  console.log("양수(+) 입니다.");
} else if (num < 0) {
  console.log("음수(-) 입니다.");
} else {
  console.log("0은 양수도 아니고 음수도 아니다.");
}

// 문제 2
// 나는 대학교 교수다. 레포트 점수에 따라 등급을 매기는 프로그램을 만드시오

// 90~100 : A
// 80~89 : B
// 70~79 : C
// 60~69 : D
// less than 59 : F

let score = 85;
let grade = "";
if (score >= 90 && score <= 100) {
  console.log("Your grade is A");
} else if (score >= 80) {
  console.log("Your grade is B");
} else if (score >= 70) {
  console.log("Your grade is C");
} else if (score >= 60) {
  console.log("Your grade is D");
} else if (score >= 0 && score <= 59) {
  console.log("Your grade is F");
} else {
  console.log(score, "is not a valid score");
}

//Answers
// * make sure you put range eg)80<=score && score<=89
//let score =  90
// let grade =''
// if(90<=score && score<=100){
//   grade = "A"
// }else if(80<=score && score<=89){
//   grade = "B"
// }else if(70<=score && score<=79){
//   grade ="C"
// }else if(60<=score && score<=69){
//   grade="D"
// }else if(0<=score && score<=59){
//   grade="F"
// }else {
//   console.log("잘못된 범위의 점수입니다")
// }
// console.log(grade)

// 문제 3
// 한 지원자가 우리 회사에 지원을 했다. 지원자가 사용 가능한 스킬은 배열에 제공이 된다
let skills = ["HTML", "CSS", "Javascript", "React"];
// Javascript와 React 둘 다 할 줄 안다면 “합격!” Javascript와 React 둘 중 하나만 할 줄 안다면 “예비”, 두 스킬이 없다면 “탈락” 을 보여주는 프로그램을 짜시오

//case 1

let candidate = ["HTML", "JavaScript"];

if (candidate.includes("JavaScript") && candidate.includes("React")) {
  console.log("합격입니다.");
} else if (candidate.includes("JavaScript") || candidate.includes("React")) {
  console.log("예비 지원자 입니다.");
} else {
  console.log("탈락하셨습니다.");
}

//case 2
// input : let skills = ["HTML","CSS","Javascript","React"]
// output: 합격

// input:let skills = ["HTML","CSS","Javascript"]
// output: 예비

// input:let skills = ["HTML","CSS"]
// output: 탈락
// skills.pop()
// skills.pop()

// if (
//   skills.includes("HTML") &&
//   skills.includes("CSS") &&
//   skills.includes("Javascript") &&
//   skills.includes("React")
// ) {
//   console.log("합격입니다.");
// } else if (
//   skills.includes("HTML") &&
//   skills.includes("CSS") &&
//   skills.includes("Javascript")
// ) {
//   console.log("예비 지원자 입니다.");
// } else {
//   console.log("탈락하셨습니다.");
// }
