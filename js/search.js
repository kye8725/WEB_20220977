document.getElementById("search_btn").addEventListener('click', search_message);

var search_array = []; // 빈 배열 – 전역 변수


function search_message(){
   let search_str = document.querySelector("#search_txt");
    if(search_str.value.length === 0){
       alert("검색어가 비었습니다. 입력해주세요"); 
    }
    else{
       alert("검색을 수행합니다!");
       search_array.push(search_str.value); // 배열에 검색어 추가
       let text = document.getElementById("search_message").innerHTML = search_array.toString(); // 값 변환
        document.querySelector("#form_main").submit();
    }
}

var search_array = [];
const filltering = ["시발","미친","개새끼"];

function search_message(){
   let search_str = document.getElementById("search_txt").value;
   if(filltering.includes(search_str)){
      alert("검색 제한");
       return false;
   }
   else{
      alert("검색 수행");
      document.querySelector("#form_main").submit();
      search_array.push(search_str.value);      
   }
   let text = document.getElementById("search_message").innerHtml = search_array.toString();
   search_message.innerHTML = search_str.value;
}