<template>
    <Navbar></Navbar>
    <div class="vh-30 overflow-hidden">
      <img src="https://images.unsplash.com/photo-1496661415325-ef852f9e8e7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop" alt="products list" class="img-fluid">
    </div>
    <div class="container my-3 my-sm-5 font-monospace">
        <div class="row justify-content-center mb-sm-3">
            <div class="col-lg-8">
              <button type="button" class="btn btn-link p-0 mb-3 mb-sm-5" @click.prevent="backToLastPage"><i class="fa-solid fa-arrow-left"></i></button>
              <h2 class="mb-3">Shopping List</h2>
              <div  v-if="isCartEmpty" class="vh-50 mt-5 d-flex justify-content-center align-items-center" style="background: url('https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop') center center">
                <h3 class="text-white">Your shopping cart is empty...</h3>
                <button class="btn btn-link text-white p-0 fs-3">Let's go to shopping</button>
              </div>
              <div v-else>
                <div class="row mb-3 justify-content-evenly text-center text-success">
                  <div class="col-3">
                    <div class="fs-4">●</div>
                  </div>
                  <div class="col-3">
                    <div class="fs-4">◯</div>
                  </div>
                  <div class="col-3">
                    <div class="fs-4">◯</div>
                  </div>
                </div>
                <isLoading :active="isLoading"></isLoading>
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col"></th>
                        <th scope="col">Item</th>
                        <th scope="col">Price</th>
                        <th scope="col">Qty</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in carts" :key="item.id">
                        <td class="align-middle"><button type="button" class="btn btn-delete border-0 p-0 me-3 align-self-center" @click.prevent="deleteItem(item.id)"><i class="fa-solid fa-xmark"></i></button></td>
                        <td class="align-middle">{{item.product.title}}</td>
                        <td class="align-middle">{{item.product.price}}</td>
                        <td class="align-middle">{{item.qty}}</td>
                        <td class="p-0">
                          <div class="d-grid">
                            <button class="btn btn-link text-secondary btn-sm text-decoration-none mb-2" @click.prevent="renewQty(true, item.qty, item.id, item.product_id)"><i class="fa-solid fa-plus"></i></button>
                            <button class="btn btn-link text-secondary btn-sm text-decoration-none" @click.prevent="renewQty(false, item.qty, item.id, item.product_id)"><i class="fa-solid fa-minus"></i></button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="col-md-4 d-flex">
                    <div class="input-group align-self-center mb-3">
                      <input type="text" class="form-control" placeholder="discount code" v-model="couponCode">
                      <button class="btn btn-primary" type="button" @click.prevent="useCoupon(couponCode)"><i class="fa-solid fa-piggy-bank"></i></button>
                    </div>
                </div>
                <p class="mb-3 text-danger">{{couponMessage}}</p>
                <p class="mb-3">Total: <span class="me-2" :class="{'text-decoration-line-through': sum !== discountSum}">${{currency(sum)}}</span><span class="text-danger" v-if="sum !== discountSum">${{currency(discountSum)}}</span></p>
                <div class="d-flex justify-content-between">
                  <button class="btn btn-link text-secondary p-0 rounded-1" @click.prevent="turnToProductsPage">Shopping more</button>
                  <button class="btn btn-success rounded-1" @click.prevent="goToReceipt">Go to Next</button>
                </div>
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
    <Footer></Footer>
</template>

<script>
import NavbarAndFooter from '@/mixins/NavbarAndFooterMixin.vue'
import CartDetail from '@/mixins/CartDetailMixins.vue'
import GetProducts from '@/mixins/GetProductsMixins.vue'
import AddItemToCart from '@/mixins/AddItemToCartMixins.vue'
import Card from '@/components/ItemCard.vue'
import { currency, date } from '../methods/filters'

export default {
  mixins: [NavbarAndFooter, CartDetail, GetProducts, AddItemToCart],
  components: { Card },
  methods: {
    currency,
    date,
    backToLastPage () {
      this.$router.go(-1)
    },
    turnToProductsPage () {
      this.$router.push('/products')
    }
  }
}
</script>
