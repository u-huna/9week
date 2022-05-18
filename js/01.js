
let myNum = 1;
const totalNum = 2;
 
function numberSetting(){
    document.getElementById("num").innerText = myNum;
}
numberSetting();
 
// 이전버튼 클릭시 진행하는 함수
document.getElementById("btn_prev").onclick = function(){
    console.log("이전버튼");
    if(myNum == 1){ // myNum이 1일시
        myNum = totalNum; // totalNum으로 변경할 수 있음
    } else { // myNum의 값이 1이 아닐 경우
        myNum--; // 1씩 감소한다.
    }
    numberSetting(); // 함수 호출
};

// 다음버튼 클릭시 진행하는 함수
document.getElementById("btn_next").onclick = function(){
    console.log("다음버튼");
    if(myNum == totalNum){
        myNum = 1; // myNum이 값을 1로 변경
    } else {
        myNum++;
    }
    numberSetting(); // 함수 호출

    // 배너 이미지에 해당 스타일값 적용
    console.log(document.getElementById("pic"));
    document.getElementById("pic").style.border = "3px solid red";
    document.getElementById("pic").style.left = "500px";
    document.getElementById("pic").src = "img/slide_2.jpg";
};
