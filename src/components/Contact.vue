<script setup>
import InputComp from "./InputComp.vue";

const inputConfigs = [
  { type: "text", placeholder: "Your Name" },
  { type: "email", placeholder: "E-mail" },
  { type: "text", placeholder: "Subject" },
];

const people = [
  {
    id: 1,
    image: "../src/assets/people/1.png",
    name: "John Doe",
    title: "Senior Marketing Manager",
    phone: "+000 123 000 88 88",
    email: "contact@example.com",
  },
  {
    id: 2,
    image: "../src/assets/people/2.png",
    name: "William Smith",
    title: "Senior Marketing Manager",
    phone: "+000 123 000 55 88",
    email: "contact@example.com",
  },
  {
    id: 3,
    image: "../src/assets/people/3.png",
    name: "Emma Wild",
    title: "Senior Marketing Manager",
    phone: "+000 123 000 99 88",
    email: "contact@example.com",
  },
];
</script>

<template>
  <section class="contact-header contact">
    <h2>#let's_talk</h2>
    <p>LEAVE A MESSAAGE, We love to hear from you!</p>
  </section>

  <section class="contact-details section-p1">
    <div class="info">
      <h6>GET IN TOUCH</h6>
      <h2>Visit one of our agency locations or contact us today</h2>
      <h5>Head Office</h5>
      <p class="icon-box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          class="icon"
        >
          <path
            d="M384 476.1L192 421.2V35.9L384 90.8V476.1zm32-1.2V88.4L543.1 37.5c15.8-6.3 32.9 5.3 32.9 22.3V394.6c0 9.8-6 18.6-15.1 22.3L416 474.8zM15.1 95.1L160 37.2V423.6L32.9 474.5C17.1 480.8 0 469.2 0 452.2V117.4c0-9.8 6-18.6 15.1-22.3z"
          />
        </svg>
        56 Glassford Street Glasgow G11UL New York
      </p>
      <p class="icon-box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          class="icon"
        >
          <path
            d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
          />
        </svg>
        contact@example.com
      </p>
      <p class="icon-box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          class="icon"
        >
          <path
            d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
          />
        </svg>
        Monday to Saturday: 09.00 to 16.00
      </p>
    </div>
    <div class="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2239.2366874929535!2d-4.250819284112413!3d55.858559780581835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488846a1bd9f3a95%3A0x474b237644107774!2sClub%20Gym%20Wellness%2C%2056%20Glassford%20St%2C%20Glasgow%20G1%201UL%2C%20UK!5e0!3m2!1sen!2sge!4v1670493095715!5m2!1sen!2sge"
        width="600"
        height="450"
        style="border: 0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>

  <section class="contact-us section-p1">
    <form class="contact-form">
      <span>LEAVE A MESSAGE</span>
      <h2>We love to hear form you</h2>
      <InputComp
        v-for="(inputConfig, index) in inputConfigs"
        :key="index"
        :type="inputConfig.type"
        :placeholder="inputConfig.placeholder"
      />
      <textarea rows="10" placeholder="Your Message"></textarea>
      <button type="submit" class="normal">Submit</button>
    </form>
    <div class="people">
      <div v-for="person in people" :key="person.id">
        <img :src="person.image" :alt="person.name" />
        <p>
          <span>{{ person.name }}</span
          >{{ person.title }} <br />
          Phone: {{ person.phone }} <br />
          Email: {{ person.email }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-header {
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
.contact-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info {
  width: 40%;
}

.info h6 {
  font-size: 13px;
  padding: 20px 0;
  color: #818ea0;
  font-weight: 500;
}

.info h2 {
  font-size: 32px;
  line-height: 40px;
}

.info h5 {
  font-size: 20px;
  padding: 20px 0;
}

.info i {
  padding-right: 10px;
}

.contact-details .map {
  width: 55%;
  height: 400px;
}

.contact-details .map iframe {
  width: 100%;
  height: 100%;
}

.contact-us {
  display: flex;
  justify-content: space-between;
  margin: 30px;
  padding: 80px;
  border: 1px solid #e1e1e1;
  align-items: center;
}

.contact-us form {
  display: flex;
  width: 60%;
  flex-direction: column;
  align-items: center;
}

.contact-us span {
  font-size: 15px;
  font-weight: 400;
}

.contact-us h2 {
  margin: 15px 0;
}

.contact-us input {
  width: 100%;
  padding: 12px 15px;
  height: 50px;
  margin: 15px 0;
  outline: none;
  border: 1px solid #e1e1e1;
}

.contact-us textarea {
  width: 100%;
  outline: none;
  border: 1px solid #e1e1e1;
  padding: 12px 15px;
  margin-bottom: 20px;
}

.contact-us button {
  background-color: #088178;
  color: #fff;
}

.contact-us .people div {
  padding-bottom: 25px;
  display: flex;
  align-items: flex-start;
}

.contact-us .people img {
  width: 70px;
  height: 70px;
  object-fit: cover;
  margin-right: 20px;
}

.contact-us .people div p {
  margin: 0;
  font-size: 16px;
  line-height: 25px;
}

.contact-us .people div span {
  display: block;
  font-size: 15px;
  font-weight: 600;
  color: #000;
}

.icon {
  width: 20px;
  height: 20px;
}

.icon-box {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
