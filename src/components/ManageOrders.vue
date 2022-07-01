<template>
    <h2 class="font-monospace">Order</h2>
    <isLoading :active="isLoading"></isLoading>
    <table class="table table-borderless">
        <thead class="bg-dark text-white">
            <tr class="align-middle text-center">
                <th scope="col" class="border border-2 border-white">Order No</th>
                <th scope="col" class="border border-2 border-white">Order Date</th>
                <th scope="col" class="border border-2 border-white">Name</th>
                <th scope="col" class="border border-2 border-white">Note</th>
                <th scope="col" class="border border-2 border-white">Amount</th>
                <th scope="col" class="border border-2 border-white">Status</th>
                <th scope="col" class="border border-2 border-white">Check</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="order in orders" :key="order.id">
                <td>{{order.id}}</td>
                <td>{{date(order.create_at)}}</td>
                <td class="text-center">{{ order.user.name }}</td>
                <td>{{ order.message }}</td>
                <td class="text-center">{{currency(order.total) }}</td>
                <td class="text-center text-success" v-if="order.is_paid">Paid</td>
                <td class="text-center text-danger" v-else>Wait payment</td>
                <td class="text-center" @click="openModal(order)" role="button"><i class="fa-solid fa-circle-info text-info"></i></td>
            </tr>
        </tbody>
    </table>
    <OrderModal ref="orderModal" :item="tempOrder"></OrderModal>
</template>
<script>
import OrderModal from './ModalOrder.vue'
import { currency, date } from '../methods/filters'

export default {
  components: { OrderModal },
  data () {
    return {
      orders: {},
      tempOrder: {},
      pagination: {},
      isLoading: true
    }
  },
  methods: {
    currency,
    date,
    getOrders (page = 1) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/orders?page=${page}`
      this.$http.get(api)
        .then(res => {
          this.isLoading = false
          this.orders = res.data.orders
          this.pagination = res.data.pagination
        })
        .catch(err => {
          console.log(err)
        })
    },
    openModal (order) {
      this.tempOrder = { ...order }
      const orderModal = this.$refs.orderModal
      orderModal.showModal()
    }
  },
  created () {
    this.getOrders()
  }
}
</script>
