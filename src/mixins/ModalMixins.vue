<script>
import Modal from 'bootstrap/js/dist/modal'

export default {
  emits: ['update-item', 'delete-item'],
  props: {
    item: {
      type: Object,
      default () { return {} }
    }
  },
  watch: {
    item () {
      this.tempItem = this.item
    }
  },
  data () {
    return {
      modal: {},
      tempItem: {}
    }
  },
  methods: {
    showModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
      this.deleteModal.hide()
    },
    deleteItem () {
      this.$emit('delete-item', this.tempItem)
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal)
    this.deleteModal = new Modal(this.$refs.deleteModal)
  }
}
</script>
