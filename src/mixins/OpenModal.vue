<script>
export default {
  methods: {
    openModal (isNew, item) {
      if (isNew) {
        this.tempItem = {}
        this.tempItem.status = 'new'
      } else {
        this.tempItem = { ...item }
        this.tempItem.status = 'edit'
      }
      this.isNew = isNew
      const modal = this.$refs.modal
      modal.showModal()
    }
  }
}
</script>
