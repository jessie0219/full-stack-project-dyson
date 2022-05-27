<template>
  <section id="card">
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
        <div class="col">
          <div class="card">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjuEpigu8x6Lv-AdFgNY2HL1WrLjRvNDB37wJe0XGFKUZZCaXy2XtNQmYL_smYFVUF-s7GOZ78LNgP-0zZnsfsbt0hOJ9LISlh7gD0hHxM7cxC5FyK4sI4bnfbG09mpg6dVtYUxn119N6ACOjQeQCoGw8K9cAw7ohQW89ONSmEySDBBotrMzLF3x86R1A/s320/%E7%A5%9E%E5%A5%87%E5%AF%B6%E8%B2%9D%E7%90%83.jpg"
              class="card-img-top"
            />
            <span id="word" class="btn bg-secondary"
              ><i class="fa-solid fa-message"></i
            ></span>
            <span id="cart" class="btn"
              ><i class="i fa-solid fa-cart-shopping"></i
            ></span>
            <div class="card-body">
              <h5 class="card-title">寶可夢大師</h5>
              <p>
                管他抓蟲球還是零食球 不用管那麼多 只要塞得進去您就贏了！萬歲！
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhT3my6ydH3O5Enze7tefXyN0-p-lu1c8JOd_uTPAVL2dR_fAA28X1DWjpSAISVltjbav41y3VAUb7VjqACrMMV5W39gsB_q4XpYfkS58fpjeB_JLLSm_PEJxRaJC-IDolUlACwyBGVhfRPj6aM-_TRvRdxwusbbuiHy5wyOQysX5m73eXCG-o8qY0jYQ/s320/%E5%85%AD%E4%BA%BA%E8%A1%8C%E5%B0%8F%E9%9B%BB%E8%A6%96.jpg"
              class="card-img-top"
            />
            <span id="word" class="btn bg-secondary"
              ><i class="fa-solid fa-message"></i
            ></span>
            <span id="cart" class="btn"
              ><i class="i fa-solid fa-cart-shopping"></i
            ></span>
            <div class="card-body">
              <h5 class="card-title">迷你小電視</h5>
              <p class="card-text">
                真的可以播的迷你電視機～ 每一台小電視會播放影集的部分經典畫面
                像六人行就是播放第四季！ -共有12個經典片段
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhy4Kpimv-UT-nvLQ7E06k_hqy5oR_j-VU9A95NmKOB860nkUoM6YN4d6MNOp3mQT9myqs76gkG6-PVV1WIGchLAigJhOqSmo-NPw-Uu-nlnsOra62scQ4I3kP2gnb3oUkvKJU83u8waZpmfosh-E7v--OC8QrplZPaY6vHbiyVywMELdLuKgXVvRMHgw/s320/%E6%96%99%E7%90%86%E9%BC%A0%E7%8E%8B.jpg"
              class="card-img-top"
            />
            <span id="word" class="btn bg-secondary"
              ><i class="fa-solid fa-message"></i
            ></span>
            <span id="cart" class="btn"
              ><i class="i fa-solid fa-cart-shopping"></i
            ></span>
            <div class="card-body">
              <h5 class="card-title">料理鼠王公仔-小林</h5>
              <p class="card-text">料理鼠王的周邊實在不好找，找到他此生有幸</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="page">
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item disabled">
          <a class="page-link" href="#" tabindex="-1" aria-disabled="true"
            >上一頁</a
          >
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#">下一頁</a>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {};
</script>

<style>
img {
  max-width: 100%;
}
#card {
  padding: 80px 0;
}
#card #cart {
  background: #a4b2d7;
}
#card h3 {
  margin-bottom: 80px;
  font-family: "Noto Serif TC", serif;
}
#card .card {
  width: 100%;
  margin-bottom: 15px;
}
#card img {
  margin-bottom: 20px;
}
#card img:hover {
  opacity: 0.2;
}
#card .card:hover #cart {
  display: block;
}
#card .card:hover #word {
  display: block;
}
#card .card:hover img {
  opacity: 0.5;
}
#card #cart {
  font-size: 30px;
  position: absolute;
  top: 200px;
  right: 70px;
  display: none;
}
#card #word {
  font-size: 30px;
  position: absolute;
  top: 200px;
  left: 70px;
  display: none;
}
@media screen and (max-width: 768px) {
  #card #cart {
    font-size: 30px;
    position: absolute;
    top: 320px;
    right: 80px;
    display: none;
  }
  #card #word {
    font-size: 30px;
    position: absolute;
    top: 320px;
    left: 80px;
    display: none;
  }
}
#card h5 {
  font-family: "Noto Serif TC", serif;
}
#card p {
  font-family: "Noto Serif TC", serif;
}
/* @media screen and (max-width:768px){
    #card #cart{
    font-size: 30px;
    position: absolute;
    top: 320px;
    right: 80px;
    display: none;
    }
    #card #word{
    font-size: 30px;
    position: absolute;
    top: 320px;
    left: 80px;
    display: none;
    }
} */
#latest {
  padding: 80ox 0;
  background: rgb(248, 248, 248);
}
#latest h3 {
  margin-bottom: 80px;
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
#page {
  font-family: "Noto Serif TC", serif;
}
</style>
