<template>
  <div class="bar">
    

    <div class="dropdown" v-if="config.adminPlugins">
      <button class="dropbtn"><icon name="cog"></icon>Console</button>
      <div class="dropdown-content">
        <span v-for="subitem in config.adminPlugins">
          <a class="link" :href="subitem.url" v-if="subitem.url"><img :src="subitem['icon.small']" style="border: 0px; vertical-align: middle;" alt="icon"> {{ subitem.title }}</a>
          <p class="dropdown-title" v-else> {{ subitem.title }}</p>
        </span>
      </div>
    </div>

    <div class="dropdown" v-if="versionTags">
      <button class="dropbtn"><icon name="cog"></icon>Versiontags</button>
      <div class="dropdown-content">
        <span v-for="subitem in versionTags">
          <a class="link" :href="subitem.joinUrl"><img :src="subitem['icon']" style="border: 0px; vertical-align: middle;" alt="icon"> {{ subitem.name }}
          <a class="versionedit" :href="subitem.editUrl">[edit]</a></a>
        </span>
      </div>
    </div>

    <div class="dropdown" v-if="clipboard">
      <button class="dropbtn"><icon name="cog"></icon>Clipboard</button>
      <div class="dropdown-content">
        <span v-for="subitem in clipboard">
          <a class="link" :href="subitem.url" @click.prevent="paste(subitem.assetId)" v-if="subitem.url"><img :src="subitem.icon" style="border: 0px; vertical-align: middle;" alt="icon"> {{ subitem.title }}</a>
          <p class="dropdown-title" v-else> {{ subitem.title }}</p>
        </span>
      </div>
    </div>

    <div class="dropdown" v-if="config.newContentTabs" v-for="item in config.newContentTabs">
        <button class="dropbtn"><icon :name="item.icon || 'plus'"></icon> {{ item.title }}</button>      <div class="dropdown-content">
        <span v-for="subitem in item.items">
          <a class="link" :href="'?' + subitem.url" v-if="subitem.url"><img :src="subitem.icon" style="border: 0px; vertical-align: middle;" alt="icon"> {{ subitem.title }}</a>
          <p class="dropdown-title" v-else> {{ subitem.title }}</p>
        </span>
      </div>
    </div>

  </div>
</template>

<script>

const menuData = require('@/menu.json')

export default {
  name: 'AdminPanels',
  props: ['config', 'clipboard', 'versionTags', 'currentAsset'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      menuData: menuData
    }
  },
  created () {
    var elems = document.getElementsByClassName('adminOn')
    var i = elems.length
    while (i--) {
      elems[i].style.display = 'block'
    }
    var YAHOO = window.YAHOO
    var getWebguiProperty = window.getWebguiProperty
    var self = this
    window.parent = window
    // Create the toolbars
    var viewWin = window
    // Inject some dependencies
    YAHOO.util.Get.css(
      [
        getWebguiProperty('extrasURL') + 'yui/build/menu/assets/skins/sam/menu.css',
        getWebguiProperty('extrasURL') + 'yui/build/button/assets/skins/sam/button.css'
      ],
      {
        win: viewWin
      }
    )
    YAHOO.util.Get.script(
      [
        getWebguiProperty('extrasURL') + 'yui/build/yahoo-dom-event/yahoo-dom-event.js',
        getWebguiProperty('extrasURL') + 'yui/build/utilities/utilities.js',
        getWebguiProperty('extrasURL') + 'yui/build/element/element-min.js',
        getWebguiProperty('extrasURL') + 'yui/build/container/container-min.js',
        getWebguiProperty('extrasURL') + 'yui/build/animation/animation-min.js',
        getWebguiProperty('extrasURL') + 'yui/build/menu/menu-min.js',
        getWebguiProperty('extrasURL') + 'yui/build/json/json-min.js',
        getWebguiProperty('extrasURL') + 'yui/build/button/button-min.js',
        getWebguiProperty('extrasURL') + 'yui/build/selector/selector-min.js',
        getWebguiProperty('extrasURL') + 'admin/admin.js',
        getWebguiProperty('extrasURL') + 'admin/toolbar.js'
      ],
      {
        win: viewWin,
        onSuccess: function (data) {
          // We have to create these menus within the correct window context
          data.win.WebGUI.Toolbar.createAll()
        }
      }
    )

    // For layout types, create draggable handlers
    if (this.currentAsset.className === 'WebGUI::Asset::Wobject::Layout') {
      YAHOO.util.Get.css(
        [
          getWebguiProperty('extrasURL') + 'draggable.css'
        ],
        {
          win: viewWin
        }
      )
      YAHOO.util.Get.script(
        [
          getWebguiProperty('extrasURL') + 'yui/build/yahoo-dom-event/yahoo-dom-event.js',
          getWebguiProperty('extrasURL') + 'yui/build/utilities/utilities.js',
          getWebguiProperty('extrasURL') + 'yui/build/element/element-min.js',
          getWebguiProperty('extrasURL') + 'yui/build/connection/connection-debug.js',
          getWebguiProperty('extrasURL') + 'yui/build/selector/selector-min.js',
          getWebguiProperty('extrasURL') + 'yui/build/animation/animation-min.js',
          getWebguiProperty('extrasURL') + 'yui/build/dragdrop/dragdrop-min.js',
          getWebguiProperty('extrasURL') + 'admin/layout.js'
        ],
        {
          win: viewWin,
          onSuccess: function (data) {
            window.layout = new data.win.WebGUI.Layout(
              data.win.document.body,
              {
                url: self.currentAsset.url + '?func=setContentPositions;'
              }
            )
          }
        }
      )
    }
    window.admin.tabBar = new window.YAHOO.widget.TabView('tabBar')
    window.admin.currentAssetDef = this.currentAsset
    window.frames['view'] = window
  },
  destroyed () {
    var elems = document.getElementsByClassName('wg-admin-toolbar')
    var i = elems.length
    while (i--) {
      // elems[i].style.display = 'none'
      elems[i].removeChild(elems[i].firstChild)
    }
    elems = document.getElementsByClassName('draggable')
    i = elems.length
    while (i--) {
      // elems[i].style.display = 'none'
      elems[i].parentNode.removeChild(elems[i])
    }
  },
  methods: {
    paste (assetId) {
      window.admin.pasteAsset(assetId)
      this.parent.loadAdminData()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Dropdown Button */
.dropbtn {
    background-color: #4CAF50;
    color: white;
    padding: 8px;
    font-size: 16px;
    border: none;
    cursor: pointer;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
    position: relative;
    display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    overflow: scroll;
}

/* Links inside the dropdown */
.dropdown-content a {
    color: black;
    padding: 0px 6px;
    text-decoration: none;
    display: block;
    text-align: left;
    width: 100%;
}

.versionjoin {
  width: 70% !important;
  display: inline !important;
}
.versionedit {
  width: 30% !important;
  display: inline !important;
  float: right;
}

.dropdown-title {
    border-bottom: 1px solid #bbbbbb;
    color: black;
    font-weight: bold;
    font-size: 12px;
    margin-bottom: 5px;
    margin-top: 5px;
    font-family: sans-serif;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #f1f1f1}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
    display: block;
    overflow: scroll;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
    background-color: #3e8e41;
}
</style>

