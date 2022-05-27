<template>
  <header id="header">
    <!-- TODO:做漢堡展開後的樣式 2022/05/28 -->
    <div class="container-fluid">
      <nav id="nav" class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHr8wk0gTCX9sXPMTwsQYKvKYSQ0ttJgSoIQwPjnURYG9pXodwUPOXKbBIizkNy5W8dMN80B0x1wO0WYp_xU-SX7vrPy-65qE825Kb8ll7JVFh6nARhP5QtigqcGJxQq973bUkGtm56xUmBqSmbs1p259_cj-opvNUDnJEqz3PRUuG0DkkvxGahrUw5w/s1600/logo.jpg"
              alt="echo-shop"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="index.html">回首頁</a>
              </li>
              <!-- TODO:做同一頁跳到某區塊功能(常見問題&所有商品) 2022/05/28 -->

              <!-- <li class="nav-item">
                <a class="nav-link" href="#FAQ">常見問題</a>
              </li> -->
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://www.instagram.com/direct/t/340282366841710300949128150027124724509"
                  target="_blank"
                  >聯絡我們</a
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/product"
                  >所有商品</router-link
                >
              </li>
              <div class="d-flex">
                <li class="nav-item">
                  <router-link class="nav-link" to="/login"
                    ><i class="fa-solid fa-user-large"></i
                  ></router-link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="shoppingCart.html"
                    ><i class="fa-solid fa-cart-shopping"></i
                  ></a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <section id="intro">
    <div class="jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-light">
            <h1>Echo Shop</h1>
            <p class="lead text-light">幫你無趣的生活增添一些色彩</p>
            <!-- <router-link class="nav-link" to="/product">所有商品</router-link> -->
            <a class="btn" href="all.html#second">開始購物</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/product">Products</router-link>
  </nav> -->
  <router-view />

  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-4 text-left">
          <a href="#header">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHr8wk0gTCX9sXPMTwsQYKvKYSQ0ttJgSoIQwPjnURYG9pXodwUPOXKbBIizkNy5W8dMN80B0x1wO0WYp_xU-SX7vrPy-65qE825Kb8ll7JVFh6nARhP5QtigqcGJxQq973bUkGtm56xUmBqSmbs1p259_cj-opvNUDnJEqz3PRUuG0DkkvxGahrUw5w/s1600/logo.jpg"
              alt=""
            />
          </a>
        </div>
        <div class="col-md-4 text-left">
          <h5>連結</h5>
          <p>
            <a href="https://www.instagram.com/echoshop__/" target="_blank"
              ><i class="fa-brands fa-instagram"></i
            ></a>
          </p>
          <p>
            <a href="https://shopee.tw/m5183" target="_blank">蝦皮賣場</a>
          </p>
          <p>
            <a href="https://linktr.ee/Echoshop" target="_blank">linktree</a>
          </p>
        </div>
        <div class="col-md-4 text-left">
          <h5>聯絡我們 (盡量不要)</h5>
          <p>台北市中正區123號5F</p>
          <p>123456789</p>
          <p>123456789</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
// var nav = document.querySelector("#nav");

// window.addEventListener("scroll", function () {
//   if (this.window.pageYOffset > 100) {
//     nav.classList.add("bg-dark", "shadow");
//   } else {
//     nav.classList.remove("bg-dark", "shadow");
//   }
// });
export default {
  data() {},
  methods: {},
  watch: {},
  computed: {},
  props: [],
  mounted() {},
};
</script>

<style>
.btn {
  background: #a49375;
  color: #fff;
  padding: 9px 25px;
  border-radius: 20px;
}
h3 {
  font-size: 36px;
}
img {
  max-width: 100%;
}
#intro .jumbotron {
  height: 70vh;
  background: #b9c6e7;
  margin-bottom: 0px;
}
#intro h1 {
  font-size: 50px;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 400;
  line-height: 1.5;
}
#intro p {
  font-family: "Noto Serif TC", serif;
  font-weight: bold;
  letter-spacing: 10px;
}
#intro a {
  font-family: "Noto Serif TC", serif;
}
#intro .container {
  position: relative;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
header nav img {
  width: 130px;
}
header li {
  margin: 0px 20px;
  font-family: "Noto Serif TC", serif;
}
#second {
  padding: 80px 0;
}
#second h3 {
  margin-bottom: 10px;
  font-family: "Noto Serif TC", serif;
}
#second h4 {
  font-family: "Josefin Sans", sans-serif;
}
#second p {
  margin-top: 10px;
  font-family: "Noto Serif TC", serif;
}
#second img {
  width: 150px;
  border-radius: 100%;
  margin-bottom: 15px;
}
/* @media screen and (max-width:768px){
    
} */

#latest {
  padding: 80ox 0;
  background: rgb(248, 248, 248);
}
#latest h3 {
  margin-bottom: 80px;
  font-family: "Noto Serif TC", serif;
}
#latest h2 {
  margin-bottom: 10px;
  font-family: "Noto Serif TC", serif;
}
#latest h6 {
  font-family: "Josefin Sans", sans-serif;
}
#latest .upper {
  position: relative;
}
#latest .innertext {
  position: absolute;
  bottom: 24px;
  left: 24px;
}
#latest .innertext span {
  background: rgba(255, 255, 255, 0.5);
  padding: 6px 15px;
  border-radius: 20px;
}
/* #latest .innertext h6{
    font-size: 22px;
    margin-top: 18px;
} */
#latest .lower h2 {
  margin-top: 12px;
  margin-bottom: 12px;
}
#latest .outer {
  background: #fff;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0, 0.08);
}
#latest .lower {
  padding: 6px 20px 20px 20px;
}
#latest a {
  color: black;
  text-decoration: none;
}
#latest a:hover {
  text-decoration: underline;
}
/* #email{
    padding: 80px 0;
}
#email h3{
    margin-bottom: 20px;
} */
#FAQ {
  font-family: "Noto Serif TC", serif;
}
footer {
  border-top: solid 1px #c9c9c9;
  padding: 80px 0;
  font-family: "Noto Serif TC", serif;
}
footer img {
  width: 112px;
  margin-top: 30px;
  margin-bottom: 26px;
}
footer h5 {
  margin-bottom: 26px;
  color: #89a3e6;
}
footer a {
  color: #a49375;
  text-decoration: none;
}
footer a:hover {
  color: #7a6747;
  text-decoration: underline;
}
footer i {
  font-size: 20px;
}
/* ----------- */
.item_header {
  display: flex;
  width: 1000px;
  margin: 0 auto;
  height: 30px;
  background-color: #fff;
  border-radius: 3px;
  padding-left: 10px;
}
.item_header div {
  width: 200px;
  color: #888;
  line-height: 30px;
}
.item_header .item_detail {
  width: 50%;
}
.item_body {
  margin-top: 20px;
  height: 100px;
  align-items: center;
}
.item_detail img {
  width: 80px;
  height: 80px;
  border-radius: 3px;
  /* margin-top: 10px; */
  float: left;
}
.item_detail .name {
  margin-left: 100px;
  margin-top: 20px;
}

/* ///////////////////////PRODUCTS-CSS/////////////////////// */

section.pics {
  height: 100vh;
  display: grid;
  place-items: center;
}
section.pics .slider {
  height: 500px;
  margin: auto;
  position: relative;
  width: 100%;
  display: grid;
  place-items: center;
  overflow: hidden;
  bottom: 13%;
}

.slide-track {
  display: flex;
  width: calc(500px * 18);
  animation: scroll 60s linear infinite;
}
.slide-track:hover {
  animation-play-state: paused;
}
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 9));
  }
}
.slide {
  height: 500px;
  width: 550px;
  display: flex;
  align-items: center;
  padding: 30px;
  perspective: 100px;
}
section.pics .slide img {
  width: 100%;
  transition: 1s;
}
section.pics .slide img:hover {
  transform: translateZ(20px);
}

/* shadow */
.slider::before,
.slider::after {
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  content: "";
  height: 100%;
  position: absolute;
  width: 15%;
  z-index: 2;
}
.slider::before {
  left: 0;
  top: 0;
}
.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
</style>
