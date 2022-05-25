// navbar scroll監聽事件
var nav=document.querySelector('nav');

window.addEventListener('scroll',function(){
    if(this.window.pageYOffset>100){
        nav.classList.add('bg-dark','shadow');
    }else{
        nav.classList.remove('bg-dark','shadow');
    }
});


// fullpage
// $( "#fullpage" ).fullpage({
//     // 參數設定[註1]
//     scrollHorizontally: true, // 顯示導行列
//     autoScrolling: "right" // 導行列位置
// });

// Login 驗證
$(document).ready(function () {
    const $form = $('form');
    $form.submit(function (event) {
      // 阻止原生 submit 行為
      event.preventDefault();
      if ($form.hasClass('needs-validation')) {
        $form.removeClass('needs-validation');
        $form.addClass('was-validated');
      }
  
      if ($('.form-control:invalid').length === 0) {
        // doLogin()
        alert('登入囉:))))');
        location.href = "index.html";
      }
    });
});

// click彈出問題視窗
function customizeWindowEvent() {
    var popup_window = document.getElementById("window-container");

    popup_window.style.display = "block";

    window.onclick = function close(e) {
        if (e.target == popup_window) {
            popup_window.style.display = "none";
        }
    }
}

// //bootstrap5 彈出視窗
// var myModal = document.getElementById('myModal')
// var myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus()
// })