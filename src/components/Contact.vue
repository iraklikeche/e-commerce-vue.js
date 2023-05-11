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
      <p>
        <i class="fa-solid fa-map"></i>56 Glassford Street Glasgow G11UL New
        York
      </p>
      <p><i class="fa-solid fa-envelope"></i>contact@example.com</p>
      <p><i class="fa-solid fa-phone"></i>contact@example.com</p>
      <p>
        <i class="fa-regular fa-clock"></i>Monday to Saturday: 09.00 to 16.00
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
</style>
