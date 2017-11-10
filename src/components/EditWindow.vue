<template>
  <modal name="edit-window" width="80%" height="80%" :resizable="true"
    :adaptive="true"
    @before-open="beforeOpen">
    <iframe id="editWindow" :src="src" frameborder="0" width="100%" height="100%"></iframe>
  </modal>
</template>
<script>
export default {
  name: 'EditWindow',
  data () {
    return {
      src: ''
    }
  },
  methods: {
    beforeOpen (event) {
      console.log('Event:', event)
      console.log('Params:', event.params)
      if (event.params.src) {
        this.src = event.params.src
      }
    }
  }
}
</script>