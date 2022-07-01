<template>
    <h2 class="font-monospace">Products</h2>
    <isLoading :active="isLoading"></isLoading>
    <div class="d-grid d-flex justify-content-end">
        <button class="btn btn-light rounded-1 mb-3 text-end" @click.prevent="openModal(true)">Add</button>
    </div>
    <table class="table table-borderless">
        <thead class="bg-dark text-white">
            <tr class="align-middle text-center">
                <th scope="col" class="d-none d-lg-table-cell border border-2 border-white">Picture</th>
                <th scope="col" class="border border-2 border-white">Title</th>
                <th scope="col" class="d-none d-sm-table-cell border border-2 border-white">Category</th>
                <th scope="col" class="d-none d-lg-table-cell border border-2 border-white">Description</th>
                <th scope="col" class="d-none d-sm-table-cell border border-2 border-white">Price</th>
                <th scope="col" class="border border-2 border-white">Sale Price</th>
                <th scope="col" class="border border-2 border-white">Status</th>
                <th scope="col" class="border border-2 border-white">Edit</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for=" item in products" :key=" item.id " class="mb-3">
                <td class="d-none d-lg-table-cell w-50">
                  <div class="row">
                    <div class="col-6">
                      <img :src="item.mainImageUrl" alt="picture" class="img-fluid">
                    </div>
                    <div class="col-6">
                      <img :src="item.mainImageUrl2" alt="picture" class="img-fluid">
                    </div>
                  </div>
                </td>
                <td>{{ item.title }}</td>
                <td class="d-none d-sm-table-cell">{{ item.category }}</td>
                <td class="d-none d-lg-table-cell">{{ item.description }}</td>
                <td class="d-none d-sm-table-cell">{{currency(item.origin_price)}}</td>
                <td>{{currency(item.price)}}</td>
                <td v-if="item.is_enabled" class="text-success">Available</td>
                <td v-else class="text-danger">Invalid</td>
                <td @click="openModal(false,item)" role="button" class="text-center"><i class="fa-solid fa-pen-to-square text-info"></i></td>
            </tr>
        </tbody>
    </table>
    <ProductModal ref="modal" :item="tempItem" @update-item="updateItem" @delete-item="deleteItem"></ProductModal>
</template>

<script>
import ProductModal from './ModalProduct.vue'
import openModal from '@/mixins/OpenModal.vue'
import { currency, date } from '../methods/filters'

export default {
  mixins: [openModal],
  components: { ProductModal },
  data () {
    return {
      products: {},
      tempItem: {},
      isNew: false,
      isLoading: true
    }
  },
  methods: {
    currency,
    date,
    getProducts () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(api)
        .then(res => {
          this.isLoading = false
          this.products = res.data.products.reverse()
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateItem (item) {
      console.log(item)
      this.tempItem = item
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
      let httpMethod = 'post'
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
        httpMethod = 'put'
      }
      const modal = this.$refs.modal
      this.$http[httpMethod](api, { data: this.tempItem })
        .then(res => {
          modal.hideModal()
          if (res.data.success) {
            this.getProducts()
            this.emitter.emit('push-message', {
              style: 'success',
              title: 'Succeeded!',
              content: 'Renewed Product List!'
            })
          } else {
            this.emitter.emit('push-message', {
              style: 'danger',
              title: 'Failed',
              content: 'There are some problems...'
            })
          }
        })
    },
    deleteItem (item) {
      this.temItem = item
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
      this.$http.delete(api, { data: this.tempItem })
        .then(res => {
          const modal = this.$refs.modal
          modal.hideModal()
          this.getProducts()
        })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
