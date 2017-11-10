<template>
  <modal name="tree-window" width="80%" height="80%" :resizable="true"
    :adaptive="true"
    @before-open="beforeOpen">
      <div id="treeTab">
        <div id="treeCrumbtrail"></div>
        <div id="treeDataTableContainer"></div>
        <div id="treeBottom">
            <div id="treeButtons">
                <input type="button" id="treeUpdate" value="Update" />
                <input type="button" id="treeDelete" value="Delete" />
                <input type="button" id="treeCut" value="Cut" />
                <input type="button" id="treeCopy" value="copy" />
                <input type="button" id="treeDuplicate" value="Duplicate" />
                <input type="button" id="treeCreateShortcut" value="Create Shortcut" />
            </div>
            <div id="treePagination"></div>
        </div>
    </div>
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
        this.$nextTick(() => {
          setTimeout(() => {
            window.admin.tree = new window.WebGUI.Admin.Tree(window.admin)
            window.admin.tree.goto(this.src)
          }, 1000)
        })
      }
    }
  }
}
</script>