<template>
<span>
  <div ref="adminElement" id="adminElement">
    <div ref="dragAdmin" id="dragAdmin"><icon name="arrows"></icon></div>
    <div class="adminButton" @click.prevent="showBar = !showBar">ADMIN</div>
    <panels v-if="showBar" :config="config" :clipboard="clipboard" :versionTags="versionTags" :currentAsset="currentAsset"></panels>
    <edit-window></edit-window>
    <tree-window></tree-window>
  </div>

    </span>
</template>

<script>
import Panels from './components/Panels'
import EditWindow from './components/EditWindow.vue'
import TreeWindow from './components/TreeWindow.vue'

import axios from 'Axios'

var pos = {}

export default {
  name: 'Admin',
  components: {
    Panels,
    EditWindow,
    TreeWindow
  },
  data () {
    return {
      showBar: false,
      config: {},
      clipboard: [],
      versionTags: [],
      currentAsset: {}
    }
  },
  mounted () {
    this.$refs.dragAdmin.addEventListener('mousedown', this.mouseDown, false)
    window.addEventListener('mouseup', this.mouseUp, false)
    this.$refs.adminElement.style.top = '60px'
    this.$refs.adminElement.style.left = '0px'
    window.adminEdit = (url) => {
      this.$modal.show('edit-window', {src: url})
    }
    this.getAdminData()
  },
  methods: {
    getAdminData () {
      axios.get('/?op=admin&json=1').then((res) => {
        this.config = res.data
      })
      axios.get('/?op=admin;method=getClipboard').then((res) => {
        this.clipboard = res.data
      })
      axios.get('/?op=admin&method=getVersionTags').then((res) => {
        this.versionTags = res.data
      })
      if (window.WG) {
        if (window.WG.currentAssetId) {
          axios.get('/?op=admin;method=getAssetData;assetId=' + window.WG.currentAssetId).then((res) => {
            window.WG.currentAssetDef = res.data
            this.currentAsset = res.data
          })
        }
      }
    },
    mouseUp () {
      window.removeEventListener('mousemove', this.divMove, true)
    },
    mouseDown (e) {
      var div = this.$refs.adminElement
      pos.X = e.clientX
      pos.Y = e.clientY
      pos.divTop = div.style.top
      pos.divLeft = div.style.left
      pos.divTop = pos.divTop.replace('px', '')
      pos.divLeft = pos.divLeft.replace('px', '')
      pos.diffX = pos.X - pos.divLeft
      pos.diffY = pos.Y - pos.divTop
      // console.log('down', pos)
      window.addEventListener('mousemove', this.divMove, true)
    },
    divMove (e) {
      var div = this.$refs.adminElement
      div.style.position = 'absolute'
      var y = e.clientY - pos.diffY
      var x = e.clientX - pos.diffX
      // console.log('move', pos, x, y)
      div.style.top = y + 'px'
      div.style.left = x + 'px'
    }
  }
}
</script>

<style>
#adminElement {
    color: #ccc;
    /* height: 32px; */
    position: fixed;
    top: 60;
    left: 0;
    /* width: 100%; */
    /* min-width: 600px; */
    z-index: 99999;
    background: #23282d;
}

.adminButton {
    padding: 8px;
    font-size: 16px;
    cursor: pointer;
}
#adminElement div {
  float: left;
}

#dragAdmin {
  cursor: move;
  padding: 8px;
  font-size: 16px;
}



</style>




