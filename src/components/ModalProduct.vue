<template>
  <div class="modal" tabindex="-1" ref="modal" id="editModal">
      <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header bg-primary text-white">
                <h5 class="modal-title"> {{tempItem.status}} Product</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <Form @submit="onSubmit">
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="title" class="form-label">Title</label>
                      <Field type="text" class="form-control" id="title" name="title" v-model="tempItem.title" :rules="validateRequired"/>
                      <ErrorMessage name="title" class="text-warning" />
                    </div>
                    <div class="row gx-4">
                        <div class="mb-3 col-sm-6 col-md-3">
                          <label for="category" class="form-label">Category</label>
                          <Field type="text" class="form-control" id="category" name="category" v-model="tempItem.category" :rules="validateRequired"/>
                          <ErrorMessage name="category" class="text-warning" />
                        </div>
                        <div class="mb-3 col-sm-6 col-md-3">
                          <label for="price" class="form-label">Unit</label>
                          <Field type="text" class="form-control" id="unit" name="unit" v-model="tempItem.unit" :rules="validateRequired"/>
                          <ErrorMessage name="unit" class="text-warning" />
                        </div>
                        <div class="mb-3 col-sm-6 col-md-3">
                          <label for="origin_price" class="form-label">Price</label>
                          <Field type="number" class="form-control" id="origin_price" name="origin_price" v-model.number="tempItem.origin_price" :rules="validateRequired"/>
                          <ErrorMessage name="origin_price" class="text-warning" />
                        </div>
                        <div class="mb-3 col-sm-6 col-md-3">
                          <label for="price" class="form-label">Special offer</label>
                          <Field type="number" class="form-control" id="price" name="price" v-model.number="tempItem.price" :rules="validateRequired"/>
                          <ErrorMessage name="price" class="text-warning" />
                        </div>
                    </div>
                    <hr>
                    <div class="mb-3">
                        <label for="content" class="form-label">Characteristic</label>
                        <textarea type="text" class="form-control" id="content" v-model="tempItem.characteristic"></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="content" class="form-label">Content</label>
                        <textarea type="text" class="form-control" id="content" v-model="tempItem.content"></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="description" class="form-label">Description</label>
                        <textarea type="text" class="form-control" id="description" v-model="tempItem.description"></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="content" class="form-label">How to use</label>
                        <textarea type="text" class="form-control" id="content" v-model="tempItem.use"></textarea>
                    </div>
                    <div class="mb-3">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox"
                                  :true-value="1"
                                  :false-value="0"
                                  id="is_enabled" v-model="tempItem.is_enabled">
                          <label class="form-check-label" for="is_enabled">Available</label>
                        </div>
                    </div>
                    <hr>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                          <label for="image" class="form-label">Upload an pictures by url</label>
                          <input type="text" class="form-control" id="image" v-model="tempItem.mainImageUrl" required>
                    </div>
                    <div class="mb-3">
                        <label for="customFile" class="form-label">or upload pictures</label>
                        <input type="file" id="customFile" class="form-control" ref="fileInput" @change="uploadFile">
                    </div>
                    <img class="img-fluid" alt="product image" :src="tempItem.mainImageUrl" v-if="tempItem.mainImageUrl">
                    <div class="mb-3">
                        <label for="image" class="form-label">Upload an pictures by url</label>
                        <input type="text" class="form-control" id="image" v-model="tempItem.mainImageUrl2" required>
                    </div>
                    <div class="mb-3">
                        <label for="customFile" class="form-label">or upload pictures</label>
                        <input type="file" id="customFile" class="form-control" ref="fileInput" @change="uploadFile">
                    </div>
                    <img class="img-fluid" alt="product image" :src="tempItem.mainImageUrl2" v-if="tempItem.mainImageUrl">
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
          <h5 class="modal-title">Delete Item</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          Are you sure to delete <span class="fw-bold text-uppercase">{{tempItem.title}}</span>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#editModal">Back</button>
          <button class="btn btn-danger" @click="deleteItem">Delete</button>
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
    uploadFile () {
      const uploadedFile = this.$refs.fileInput.files[0]
      const formData = new FormData()
      formData.append('file-to-upload', uploadedFile)
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`
      this.$http.post(api, formData)
        .then(res => {
          if (res.data.success) {
            this.tempItem.imageUrl = res.data.imageUrl
          }
        })
    },
    updateItem () {
      this.$emit('update-item', this.tempItem)
    }
  }
}
</script>
