<template>
  <div class="vh-30 overflow-hidden">
      <img src="https://images.unsplash.com/photo-1629838315663-33f681b1f9a1" alt="products list" class="img-fluid">
  </div>
  <div class="container my-5">
      <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
              <router-link class="breadcrumb-item" to="/homepage">Home</router-link>
              <router-link class="breadcrumb-item active" to="/products" aria-current="page">Products</router-link>
              <li class="breadcrumb-item active" aria-current="page">{{product.title}}</li>
          </ol>
      </nav>
      <div class="row justify-content-evenly mt-3">
          <div class="col-md-5 mb-3">
              <img :src="product.mainImageUrl2" alt="product picture" class="img-fluid">
          </div>
          <div class="col-md-5">
              <div class="row">
                  <div class="col-6">
                      <h2 class="font-monospace">{{ product.title }}</h2>
                      <p>{{ product.characteristic }}</p>
                  </div>
                  <div class="col-6">
                      <img :src="product.mainImageUrl" alt="material" class="img-fluid">
                  </div>
              </div>
              <p class="text-decoration-line-through fs-3 m-0 font-monospace">{{ product.origin_price }}</p>
              <p class="text-danger ml-2 fs-5 font-monospace">${{ product.price }}</p>
              <div class="row mt-3 justify-content-center">
                  <div class="col-md-10 d-flex text-center">
                      <div class="col-4">
                          <button type="button" class="btn btn-outline-secondary" @click="minusNum"><i class="fa-solid fa-minus"></i></button>
                      </div>
                      <div class="col-4">
                          <input type="number" v-model="num" class="w-100 h-100 text-center border-0">
                      </div>
                      <div class="col-4">
                          <button type="button" class="btn btn-outline-secondary" @click="addNum"> <i class="fa-solid fa-plus"></i></button>
                      </div>
                  </div>
              </div>
              <div class="d-grid mt-3">
                  <button class="btn btn-primary d-block rounded-0" @click.prevent="addCart(product.id)" :class="{'disabled' : this.status.loadingItem === product.id}">
                      <div class="spinner-border spinner-border-sm" role="status" v-if="this.status.loadingItem === product.id">
                          <span class="visually-hidden">Loading...</span>
                      </div>
                      Add to car
                  </button>
              </div>
          </div>
      </div>
      <div class="container">
          <div class="row justify-content-center">
              <div class="col-md-10">
                  <ul class="list-group mt-5">
                  <li class="list-group-item border-0">
                      <h3 class="font-monospace">What is it for you</h3>
                      <p>{{ product.description }}</p>
                  </li>
                  <li class="list-group-item border-0">
                      <h3 class="font-monospace">How to use</h3>
                      <p>{{ product.use }}</p>
                  </li>
                  <li class="list-group-item border-0">
                      <h3 class="font-monospace"> Ingredients</h3>
                      <p>{{ product.content }}</p>
                  </li>
              </ul>
              </div>
          </div>
      </div>
      <div class="container overflow-auto py-5">
          <h4 class="font-monospace my-3">You might like</h4>
          <div class="row flex-nowrap">
              <Card/>
          </div>
      </div>
  </div>
</template>

<script>
import GetProducts from '@/mixins/GetProductsMixins.vue'
import Card from '@/components/ItemCard.vue'
export default {
  mixins: [GetProducts],
  components: { Card },
  data () {
    return {
      num: 1,
      status: {
        loadingItem: ''
      }
    }
  },
  watch: {
    $route () {
      const id = this.$route.params.product
      this.getProduct(id)
    }
  },
  methods: {
    addNum () {
      this.num += 1
    },
    minusNum () {
      if (this.num > 1) {
        this.num -= 1
      }
    },
    addCart (id) {
      this.status.loadingItem = id
      const cart = {
        product_id: id,
        qty: this.num
      }
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.post(api, { data: cart })
        .then(res => {
          this.status.loadingItem = ''
          this.num = 1
        })
    }
  },
  created () {
    const id = this.$route.params.product
    this.getProduct(id)
  }
}
</script>
