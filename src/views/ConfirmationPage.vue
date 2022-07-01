<template>
    <Navbar></Navbar>
    <div class="vh-30 overflow-hidden">
      <img src="https://images.unsplash.com/photo-1496661415325-ef852f9e8e7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop" alt="products list" class="img-fluid">
    </div>
    <div class="container my-3 my-sm-5 font-monospace">
        <div class="row justify-content-center mb-sm-3">
            <div class="col-lg-10">
                <h2 class="mb-3">Confirmation</h2>
                <div class="row mb-3 justify-content-evenly text-center text-success">
                  <div class="col-3">
                    <div class="fs-4">●</div>
                  </div>
                  <div class="col-3">
                    <div class="fs-4">●</div>
                  </div>
                  <div class="col-3">
                    <div class="fs-4">●</div>
                  </div>
                </div>
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Price</th>
                        <th scope="col">Qty</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, key) in items" :key="key">
                        <td class="align-middle">{{item.product.title}}</td>
                        <td class="align-middle">{{item.final_total}}</td>
                        <td class="align-middle">{{item.qty}}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <table class="table mt-3">
                    <tbody>
                        <tr>
                            <th scope="row">Name</th>
                            <td>{{receipt.name}}</td>
                        </tr>
                        <tr>
                            <th scope="row">Tel</th>
                                <td>{{receipt.tel}}</td>
                            </tr>
                        <tr>
                            <th scope="row">E-mail</th>
                            <td>{{receipt.email}}</td>
                        </tr>
                        <tr>
                            <th scope="row">Address</th>
                            <td>{{receipt.address}}</td>
                        </tr>
                        <tr>
                            <th scope="row">Note</th>
                            <td>{{order.message}}</td>
                        </tr>
                    </tbody>
                </table>
                <div class="text-center">
                    <button class="btn btn-primary" @click="checkOut"><span>Total: {{order.total}}</span>   <i class="fa-solid fa-basket-shopping"></i>   Go to pay</button>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>

<script>
import NavbarAndFooter from '@/mixins/NavbarAndFooterMixin.vue'

export default {
  mixins: [NavbarAndFooter],
  data () {
    return {
      orderId: {},
      order: {},
      items: {},
      receipt: {}
    }
  },
  methods: {
    getOrder () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`
      this.$http.get(api)
        .then(res => {
          this.order = res.data.order
          this.items = this.order.products
          this.receipt = this.order.user
        })
        .catch(err => {
          console.log(err)
        })
    },
    checkOut () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`
      this.$http.post(api)
        .then(res => {
          this.$router.push('/thankyou')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.orderId = this.$route.params.orderId
    this.getOrder()
  }
}
</script>
