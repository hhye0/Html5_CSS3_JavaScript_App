const API_BASE_URL = "http://localhost:8080";

//DOM 엘리먼트 가져오기
const bookForm = document.getElementById("bookForm");
const bookTableBody = document.getElementById("bookTableBody")

//Document Load 이벤트 처리하기
document.addEventListener("DOMContentLoaded", function () {
    loadBooks();
});

//Form Submit 이벤트 처리하기
bookForm.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form 제출 됨");

    //FormData 객체생성 <form> 엘리먼트를 객체로 변환
    const bookFormData = new FormData(bookForm);
    bookFormData.forEach((value, key) => {
        console.log(key + ' = ' + value);
    });

    const bookData = {
        title: bookFormData.get("title").trim(),
        author: bookFormData.get("author").trim(),
        isbn: bookFormData.get("isbn").trim(),
        price: bookFormData.get("price").trim(),
        publishDate: bookFormData.get("publishDate").trim(),
    };

    if(!validateBook(bookData)){
        return;
    }
    
    console.log(bookData);

});

// 데이터 유효성 체크 함수
function validateBook(book){
    if(!book.title){
        alert("제목을 입력해주세요.");
        return false;
    }
    
    if(!book.author){
        alert("저자를 입력해주세요.");
        return false;
    }

    if(!book.isbn){
        alert("도서번호를 입력해주세요.");
        return false;
    }

    if(!book.price){
        alert("가격을 입력해주세요.");
        return false;
    }

    return true;
}

function loadBooks() {
    console.log("도서 목록 로드 중!");
}
