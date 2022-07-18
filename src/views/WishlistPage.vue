<template>
    <Navbar></Navbar>
    <div class="vh-30 overflow-hidden">
      <img src="https://images.unsplash.com/photo-1496661415325-ef852f9e8e7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop" alt="products list" class="img-fluid">
    </div>
    <div class="container my-3 my-sm-5 font-monospace">
        <div class="row justify-content-center mb-sm-3">
            <div class="col-lg-8">
              <button type="button" class="btn btn-link p-0 mb-3 mb-sm-5" @click.prevent="backToLastPage"><i class="fa-solid fa-arrow-left"></i></button>
              <div>
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
                      <!-- <tr v-for="item in wishlist" :key="item.id">
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
                      </tr> -->
                    </tbody>
                  </table>
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
  data () {
    return {
      wishlist: {}
    }
  },
  methods: {
    currency,
    date,
    backToLastPage () {
      this.$router.go(-1)
    },
    turnToProductsPage () {
      this.$router.push('/products')
    }
  },
  created () {
    this.emitter.on('wishlisting', (wishlist) => {
      this.wishlist = wishlist
    })
    console.log(this.wishlist)
  }
}
</script>
