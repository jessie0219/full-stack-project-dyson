<template>
  <div class="container p-5 col-sm-6">
    <form class="needs-validation" novalidate>
      <div class="mb-3">
        <label for="accountInput">帳號</label>
        <input
          class="form-control"
          type="text"
          id="accountInput"
          name="Account"
          placeholder="輸入帳號"
          required
        />
        <div class="invalid-feedback">請輸入帳號。</div>
      </div>
      <div class="mb-3">
        <label for="passwordInput">密碼</label>
        <input
          class="form-control"
          type="password"
          id="passwordInput"
          name="Passowrd"
          placeholder="輸入密碼"
          required
        />
        <div class="invalid-feedback">請輸入密碼。</div>
      </div>
      <div class="form-check mb-3">
        <input
          class="form-check-input"
          type="checkbox"
          id="rememberMeCheckbox"
          name="RememberMe"
        />
        <label class="form-check-label" for="rememberMeCheckbox"
          >記住我的帳號</label
        >
        <!-- 步驟2 參考文件製作 icon-button(用於觸發顯示彈窗)-->
        <i
          class="text-primary bi bi-info-circle"
          id="rememberMeInfoBtn"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          style="cursor: pointer"
        ></i>
      </div>
      <button type="submit" id="button" class="btn btn-primary">Login</button>
    </form>
  </div>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">小提示</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          記憶您輸入的帳號，讓您更快速地<s>衝動購物</s>登入。
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary mx-auto"
            data-bs-dismiss="modal"
          >
            賀啦!
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
$(document).ready(function () {
  const $form = $("form");
  $form.submit(function (event) {
    // 阻止原生 submit 行為
    event.preventDefault();
    if ($form.hasClass("needs-validation")) {
      $form.removeClass("needs-validation");
      $form.addClass("was-validated");
    }

    if ($(".form-control:invalid").length === 0) {
      // doLogin()
      alert("登入囉:))))");
      location.href = "index.html";
    }
  });
});
</script>

<style>
div {
  font-family: "Noto Serif TC", serif;
}
#intro h1 {
  font-size: 50px;
  font-weight: 400;
  line-height: 1.5;
  font-family: "Josefin Sans", sans-serif;
}
#intro .container {
  position: relative;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.backdrop {
  z-index: 10000;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  background-color: lightblue;
}

.loader,
.loader:after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}
.loader {
  margin: 100px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(255, 255, 255, 0.2);
  border-right: 1.1em solid rgba(255, 255, 255, 0.2);
  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
  border-left: 1.1em solid #ffffff;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.submitted .invalid {
  border: 1px solid red;
}
#button {
  background-color: #0d6efd;
}
</style>
