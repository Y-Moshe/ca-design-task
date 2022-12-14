<template>
  <article class="review">
    <p>{{ txt }}</p>
    <div class="review-profile">
      <img :src="user.profileUrl" alt="">
      <div>
        <span>{{ user.username }}</span>
        <span>{{ user.position }}</span>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    txt: String,
    user: Object
  }
}
</script>