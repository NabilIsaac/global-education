<template>
<div id="app">

  <div class="flex flex-col flex-grow w-screen max-w-full max-h-full overflow-x-hidden">

    <Nav/>
      <div class="mt-22">
        <router-view/>
      </div>
    <Footer/>
  </div>

</div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Home',
  components: {
    Nav,
    Footer
  }
}
</script>
