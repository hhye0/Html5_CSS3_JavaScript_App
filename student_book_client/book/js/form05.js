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
    // bookFormData.forEach((value, key) => {
    //     console.log(key + ' = ' + value);
    // });

    const bookData = {
        title: bookFormData.get("title").trim(),
        author: bookFormData.get("author").trim(),
        isbn: bookFormData.get("isbn").trim(),
        price: bookFormData.get("price")?parseInt(bookFormData.get('price')) : null,
        publishDate: bookFormData.get("publishDate") || null,
        detailRequest: {
            description: bookFormData.get('description').trim() || null,
            language: bookFormData.get('language').trim() || null,
            pageCount: bookFormData.get('pageCount') ? parseInt(formData.get('pageCount')) : null,
            publisher: bookFormData.get('publisher').trim() || null,
            coverImageUrl: bookFormData.get('coverImageUrl').trim() || null,
            edition: bookFormData.get('edition').trim() || null
        }
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

    const isbnPattern = /^[0-9X-]+$/;
    if (!isbnPattern.test(book.isbn)) {
        alert('올바른 ISBN 형식이 아닙니다. (숫자와 X, -만 허용)');
        return false;
    }

    // 가격 유효성 검사
    if (book.price !== null && book.price < 0) {
        alert('가격은 0 이상이어야 합니다.');
        return false;
    }

    // 페이지 수 유효성 검사
    if (book.bookDetail.pageCount !== null && book.bookDetail.pageCount < 0) {
        alert('페이지 수는 0 이상이어야 합니다.');
        return false;
    }

    // URL 형식 검사 (입력된 경우에만)
    if (book.bookDetail.coverImageUrl && !isValidUrl(book.bookDetail.coverImageUrl)) {
        alert('올바른 이미지 URL 형식이 아닙니다.');
        return false;
    }

    return true;
}

// URL 유효성 검사
function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

function loadBooks() {
    console.log("도서 목록 로드 중!");
}
