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
          <a class="link" :href="subitem.joinUrl"><img :src="subitem['icon']" style="border: 0px; vertical-align: middle;" alt="icon"> {{ subitem.name }}</a>
          <a class="link" :href="subitem.editUrl">[edit]</a>
        </span>
      </div>
    </div>

    <div class="dropdown" v-if="clipboard">
      <button class="dropbtn"><icon name="cog"></icon>Clipboard</button>
      <div class="dropdown-content">
        <span v-for="subitem in clipboard">
          <a class="link" :href="subitem.url" v-if="subitem.url"><img :src="subitem.icon" style="border: 0px; vertical-align: middle;" alt="icon"> {{ subitem.title }}</a>
          <p class="dropdown-title" v-else> {{ subitem.title }}</p>
        </span>
      </div>
    </div>

    <div class="dropdown" v-if="config.newContentTabs" v-for="item in config.newContentTabs">
        <button class="dropbtn"><icon :name="item.icon || 'plus'"></icon> {{ item.title }}</button>      <div class="dropdown-content">
        <span v-for="subitem in item.items">
          <a class="link" :href="subitem.url" v-if="subitem.url"><img :src="subitem.icon" style="border: 0px; vertical-align: middle;" alt="icon"> {{ subitem.title }}</a>
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
  props: ['config', 'clipboard', 'versionTags'],
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
  },
  destroyed () {
    var elems = document.getElementsByClassName('adminOn')
    var i = elems.length
    while (i--) {
      elems[i].style.display = 'none'
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

