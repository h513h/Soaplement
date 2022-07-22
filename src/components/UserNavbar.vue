<template>
    <nav class="navbar navbar-expand-lg bg-light sticky-top">
        <div class="container-fluid">
            <router-link class="navbar-brand font-monospace text-dark" to="/">Soaplement</router-link>
            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span><i class="fa-solid fa-bars"></i></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                  <router-link class="nav-link text-center" to="/products">Products</router-link>
                  <!-- <router-link class="nav-link text-center" to="/wishlist">Wishlist</router-link> -->
                  <router-link class="nav-link text-center position-relative" to="/shoppingcart" v-model="carts.length">
                    <i class="fa-solid fa-basket-shopping"></i>
                    <span class="position-absolute top-50 translate-middle p-1 bg-danger border border-light rounded-circle" :class="{'d-none':isCartEmpty}">
                      <span class="visually-hidden">New alerts</span>
                    </span>
                  </router-link>
              </div>
            </div>
        </div>
    </nav>
</template>

<script>
import CartDetail from '@/mixins/CartDetailMixins.vue'

export default {
  mixins: [CartDetail]
}
</script>
