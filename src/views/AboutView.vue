<script setup>
import Feature from "../components/Feature.vue";
import News from "../components/News.vue";
</script>

<template>
  <section class="about-header">
    <h2>#KnowUs</h2>
    <p>Lorem ipsum dolor sit amet consectetur!</p>
  </section>

  <section class="about section-p1">
    <div class="about-box">
      <div class="img-box">
        <img src="@/assets/about/a6.jpg" alt="" />
      </div>

      <div class="about-details">
        <h2>Who We Are?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem placeat
          earum aspernatur illum facere quaerat, reprehenderit sit fugiat a
          minima nesciunt accusamus doloremque unde dolorem autem deserunt
          perspiciatis voluptate aliquam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Molestias eius tempora, officia voluptatibus iure
          repellendus consectetur velit distinctio nostrum ad quo tenetur, vitae
          facilis veniam? Voluptate soluta accusamus vel ad!
        </p>
        <br /><br />
      </div>
    </div>
  </section>

  <section class="about-app section-p1">
    <h1>Download Our <a href="#">App</a></h1>
    <div class="video">
      <video autoplay muted loop src="@/assets/about/1.mp4"></video>
    </div>
  </section>

  <Feature />

  <News />
</template>

<style scoped>
.about-header {
  background-image: url(@/assets/about/banner.png);
  height: 40vh;
  width: 100%;
  background-size: cover;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  padding: 14px;
}

.about-header h2,
.about-header p {
  color: #fff;
}

.about {
  padding: 50px 20px 0 50px;
}

.about .img-box {
  margin-right: 40px;
}

.about .img-box img {
  width: 100%;
}

.about .about-box {
  display: flex;
  align-items: center;
  width: 100%;
}

.about .about-details {
  width: 100%;
}

.about-app {
  text-align: center;
}

.about-app .video {
  width: 70%;
  height: 100%;
  margin: 30px auto 0 auto;
}

.about-app .video video {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}

.about-app a {
  text-decoration: none;
  color: #cd13a1;
}

@media (max-width: 799px) {
  .about .about-box {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
  }

  .about-details {
    text-align: center;
  }
}
</style>
