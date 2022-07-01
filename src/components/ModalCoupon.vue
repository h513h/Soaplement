<template>
  <div class="modal" tabindex="-1" ref="modal" id="editModal">
      <div class="modal-dialog">
          <div class="modal-content text-white">
              <div class="modal-header bg-primary">
                  <h3 class="modal-title"> {{tempItem.status}} Coupon</h3>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <Form @submit="onSubmit">
                <div class="modal-body text-dark">
                    <div class="row">
                        <div class="mb-3">
                            <label for="title" class="form-label text-dark">Title</label>
                            <Field type="text" class="form-control" id="title" name="title" v-model="tempItem.title" :rules="validateRequired"/>
                            <ErrorMessage name="title" class="text-warning" />
                        </div>
                        <div class="mb-3">
                            <label for="code" class="form-label">Code</label>
                            <Field type="text" class="form-control" id="code" name="code" v-model="tempItem.code" :rules="validateRequired"/>
                            <ErrorMessage name="code" class="text-warning" />
                        </div>
                        <div class="mb-3 d-flex justify-content-between">
                            <div class="col-5 col-md-3">
                                <label for="discount" class="form-label">Discount%</label>
                                <Field type="number" class="form-control" id="discount" name="discount" v-model.number="tempItem.percent" :rules="validateRequired"/>
                                <ErrorMessage name="discount" class="text-warning" />
                            </div>
                            <div class="col-6 p-0 d-flex justify-content-end align-items-end">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox"
                                            :true-value="1"
                                            :false-value="0"
                                            id="is_enabled" v-model="tempItem.is_enabled"/>
                                    <label class="form-check-label" for="is_enabled">
                                        Available
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" v-if="tempItem.status === 'new'">Close</button>
                    <button type="button" class="btn btn-outline-danger" data-bs-toggle="modal" href="#deleteModal" v-else>Delete</button>
                    <button type="submit" class="btn btn-primary">Confirm</button>
                </div>
              </Form>
          </div>
      </div>
  </div>
  <div class="modal fade" id="deleteModal" tabindex="-1" ref="deleteModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-danger">
          <h3 class="modal-title">Delete Item</h3>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          Are you sure to delete <span class="fw-bold text-uppercase">{{tempItem.title}}</span>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#editModal">Back</button>
          <button class="btn btn-danger" @click.prevent="deleteItem">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixins from '../mixins/ModalMixins.vue'
import { Form, Field, ErrorMessage } from 'vee-validate'

export default {
  mixins: [modalMixins],
  components: {
    Form,
    Field,
    ErrorMessage
  },
  methods: {
    onSubmit (values) {
      this.updateItem()
    },
    validateRequired (value) {
      if (!value) {
        return 'This field is required'
      }
      return true
    },
    updateItem () {
      const date = new Date()
      date.setMonth(date.getMonth() + 3)
      this.tempItem.due_date = date.getTime()
      this.$emit('update-item', this.tempItem)
    }
  }
}
</script>
