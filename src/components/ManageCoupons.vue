<template>
    <h2 class="font-monospace">Coupons</h2>
    <isLoading :active="isLoading"></isLoading>
    <div class="d-grid d-flex justify-content-end">
        <button class="btn btn-light rounded-1 mb-3 text-end" @click.prevent="openModal(true)">Add</button>
    </div>
    <table class="table table-borderless">
        <thead class="bg-dark text-white">
            <tr class="align-middle text-center">
                <th scope="col" class="border border-2 border-white">Title</th>
                <th scope="col" class="border border-2 border-white">Code</th>
                <th scope="col" class="border border-2 border-white">Discount off%</th>
                <th scope="col" class="border border-2 border-white">Status</th>
                <th scope="col" class="border border-2 border-white">Edit</th>
            </tr>
        </thead>
        <tbody>
            <tr class="align-middle" v-for="coupon in coupons" :key="coupon.id">
                <td>{{coupon.title}}</td>
                <td>{{coupon.code}}</td>
                <td>{{coupon.percent}}</td>
                <td class="text-success" v-if="coupon.is_enabled">Available</td>
                <td class="text-danger" v-else>Invalid</td>
                <td @click.prevent="openModal(false, coupon)" role="button" class="text-center"><i class="fa-solid fa-pen-to-square text-info"></i></td>
            </tr>
        </tbody>
    </table>
    <CouponModal ref="modal" :item="tempItem" @update-item="updateItem" @delete-item="deleteItem"></CouponModal>
</template>

<script>
import CouponModal from '@/components/ModalCoupon.vue'
import openModal from '@/mixins/OpenModal.vue'

export default {
  mixins: [openModal],
  components: { CouponModal },
  data () {
    return {
      coupons: {},
      pagination: {},
      tempItem: {},
      isNew: false,
      isLoading: true
    }
  },
  methods: {
    getCoupons (page = 1) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`
      this.$http.get(api)
        .then(res => {
          this.isLoading = false
          this.coupons = res.data.coupons
          console.log(res)
          this.pagination = res.data.pagination
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateItem (item) {
      this.tempItem = item
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`
      let httpMethod = 'post'
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`
        httpMethod = 'put'
      }
      const modal = this.$refs.modal
      this.$http[httpMethod](api, { data: this.tempItem })
        .then(res => {
          modal.hideModal()
          if (res.data.success) {
            console.log(res.data.message)
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
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`
      this.$http.delete(api, { data: this.tempItem })
        .then(res => {
          const modal = this.$refs.modal
          modal.hideModal()
          this.getCoupons()
        })
    }
  },
  created () {
    this.getCoupons()
  }
}
</script>
