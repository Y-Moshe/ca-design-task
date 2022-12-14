<template>
  <article class="feature">
    <icon :type="iconType" />
    <h3>{{ subtitle }}</h3>
    <p>{{ description }}</p>
  </article>
</template>

<script>
export default {
  props: {
    iconType: String,
    subtitle: String,
    description: String,
  }
}
</script>