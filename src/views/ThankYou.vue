<template>
    <Navbar></Navbar>
    <div class="vh-30 overflow-hidden">
      <img src="https://images.unsplash.com/photo-1531120364508-a6b656c3e78d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop" alt="products list" class="img-fluid">
    </div>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-md-6 text-center">
                <h2 class="font-monospace text-center">Order succeeded!</h2>
                <img src="https://images.unsplash.com/photo-1487712010531-65e9aa8b4b1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop" alt="thank you" class="img-fluid">
                <button type="button" class="btn btn-link text-center text-secondary" @click.prevent="turnToProductsPage">Go to shopping</button>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>

<script>
import NavbarAndFooter from '@/mixins/NavbarAndFooterMixin.vue'

export default {
  mixins: [NavbarAndFooter],
  methods: {
    turnToProductsPage () {
      this.$router.push('/products')
    }
  }
}
</script>
