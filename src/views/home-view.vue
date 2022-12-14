<script setup>
import feature from '../components/feature.vue'
import review from '../components/review.vue'
</script>

<template>
  <section class="home-page">
    <div class="welcome">
      <img src="../assets/images/illustration-intro.png" alt="">
      <h1>All your files in one secure location, accessible anywhere.</h1>
      <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
      <button>Get Started</button>
    </div>

    <section class="feature-list">
      <feature v-for="feature in features"
        :iconType="feature.iconType"
        :subtitle="feature.subtitle"
        :description="feature.description"
      />
    </section>

    <section class="productivity">
      <img src="../assets/images/illustration-stay-productive.png" alt="">
      <div class="productivity-desc">
        <h3>Stay productive, wherever you are</h3>
        <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
        <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
        <a href="#">See how Fylo works <icon type="icon-arrow" /></a>
      </div>
    </section>

    <section class="review-list">
      <review v-for="review in reviews"
       :txt="review.txt"
       :user="review.user"
      />
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          iconType: 'icon-access-anywhere',
          subtitle: 'Access your files, anywhere',
          description: 'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.'
        },
        {
          iconType: 'icon-security',
          subtitle: 'Security you can trust',
          description: '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.'
        },
        {
          iconType: 'icon-collaboration',
          subtitle: 'Real-time collaboration',
          description: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.'
        },
        {
          iconType: 'icon-any-file',
          subtitle: 'Store any type of file',
          description: 'Whether you\'re sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.'
        }
      ],
      reviews: [
        {
          txt: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
          user: {
            username: 'Satish Patel',
            position: 'Founder & CEO, Huddle',
            profileUrl: '/src/assets/images/profile-1.jpg'
          }
        },
        {
          txt: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
          user: {
            username: 'Bruce McKenzie',
            position: 'Founder & CEO, Huddle',
            profileUrl: '/src/assets/images/profile-2.jpg'
          }
        },
        {
          txt: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
          user: {
            username: 'Iva Boyd',
            position: 'Founder & CEO, Huddle',
            profileUrl: '/src/assets/images/profile-3.jpg'
          }
        }
      ]
    }
  }
}
</script>
