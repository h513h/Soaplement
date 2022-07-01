<template>
  <div class="modal" tabindex="-1" ref="modal" id="editModal">
      <div class="modal-dialog modal-xl">
          <div class="modal-content">
          <div class="modal-header bg-primary text-white">
              <h3 class="modal-title font-monospace">Order No. {{tempItem.id}}</h3>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <table class="table">
              <tbody>
                <tr>
                  <th scope="row">Order Date</th>
                  <td>{{date(tempItem.create_at)}}</td>
                </tr>
                <tr>
                  <th scope="row">Name</th>
                  <td>{{user.name}}</td>
                </tr>
                <tr>
                  <th scope="row">e-mail</th>
                  <td>{{user.email}}</td>
                </tr>
                <tr>
                  <th scope="row">Address</th>
                  <td>{{user.address}}</td>
                </tr>
                <tr>
                  <th scope="row">Order Details</th>
                  <td>
                    <table class="table table-sm">
                      <thead>
                        <tr>
                          <th>Product Name</th>
                          <th>Qty</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for=" (product, key) in products" :key="key">
                          <td>{{product.product.title}}</td>
                          <td>{{product.qty}}</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Amount</th>
                  <td>{{currency(tempItem.total)}}</td>
                </tr>
                <tr>
                  <th scope="row">Note</th>
                  <td>{{tempItem.message}}</td>
                </tr>
                <tr>
                  <th scope="row">Paid</th>
                  <td v-if="tempItem.is_paid">Paid {{date(tempItem.paid_date)}}</td>
                  <td v-else>Not paid</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Confirm</button>
          </div>
          </div>
      </div>
  </div>
</template>
<script>
import Modal from 'bootstrap/js/dist/modal'
import { currency, date } from '../methods/filters'

export default {
  props: {
    item: {
      type: Object,
      default () { return {} }
    }
  },
  watch: {
    item () {
      this.tempItem = this.item
      this.user = this.tempItem.user
      this.products = this.tempItem.products
    }
  },
  data () {
    return {
      modal: {},
      tempItem: {},
      user: {},
      products: {}
    }
  },
  methods: {
    currency,
    date,
    showModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    },
    updateItem () {
      this.$emit('update-item', this.tempItem)
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal)
  }
}
</script>
