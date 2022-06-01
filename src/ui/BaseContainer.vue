<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  padding: 1rem 15rem;
}

@media screen and (max-width: 1180px) {
  .container {
    padding: 1rem 8rem;
  }
}
@media screen and (max-width: 910px) {
  .container {
    padding: 1rem 3rem;
  }
}
@media screen and (max-width: 730px) {
  .container {
    padding: 1rem 1rem;
  }
}
</style>