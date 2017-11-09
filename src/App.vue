<template>
<span>
  <div ref="adminElement" id="adminElement">
    <div ref="dragAdmin" id="dragAdmin"><icon name="arrows"></icon></div>
    <div class="adminButton" @click="showBar = !showBar">ADMIN</div>
    <panels v-if="showBar" :config="config" :clipboard="clipboard" :versionTags="versionTags" :currentAsset="currentAsset"></panels>
  </div>
    <modal name="edit" width="80%" height="80%" :resizable="true">
      <iframe src="http://mhx.fi/wgadmin/edit.html" frameborder="0" width="100%" height="100%"></iframe>
    </modal>
    </span>
</template>

<script>
import Panels from './components/Panels'

import axios from 'Axios'

var pos = {}

export default {
  name: 'Admin',
  components: {
    Panels
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
    this.$refs.adminElement.style.left = '60px'
    window.adminEdit = () => {
      this.$modal.show('edit')
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
    top: 30;
    left: 30;
    /* width: 100%; */
    /* min-width: 600px; */
    z-index: 99999;
    background: #23282d;
}

.adminButton {
    padding: 8px;
    font-size: 16px;
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




