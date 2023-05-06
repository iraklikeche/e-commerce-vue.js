<template>
  <section class="news-letter section-p1 section-m1">
    <div class="news-text">
      <h4>Sign Up for Newsletters</h4>
      <p>
        Get E-mail updates about our latest shop and
        <span>special offers</span>
      </p>
    </div>
    <div class="sign-up">
      <input type="email" placeholder="Your email adress" />
      <button class="normal">Sign Up</button>
    </div>
  </section>
</template>

<style scoped>
.news-letter {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  background-image: url(@/../public/img/banner/b14.png);
  background-repeat: no-repeat;
  background-position: 20% 30%;
  background-color: #041e42;
}

.news-letter h4 {
  color: #fff;
  font-size: 30px;
  font-weight: 700;
}
.news-letter p {
  font-size: 18px;
  font-weight: 600;
  color: #818ea0;
}

.news-letter p span {
  color: #ffbd27;
}

.news-letter input {
  height: 60px;
  width: 100%;
  padding: 0 1.2em;
  font-size: 18px;
  border: 1px solid transparent;
  border-radius: 5px;
  outline: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.news-letter button {
  background-color: #088178;
  color: #fff;
  white-space: nowrap;
  border-radius: 0;
}

.news-letter .sign-up {
  display: flex;
  width: 40%;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
