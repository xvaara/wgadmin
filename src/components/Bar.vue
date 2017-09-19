<template>
  <div class="bar">
    <div class="dropdown">
      <button class="dropbtn"><icon name="cog"></icon> Console</button>
      <div class="dropdown-content">
        <a class="link" href="/etusivu?op=viewActiveSessions"><img src="http://www.webgui.org/extras/adminConsole/small/activeSessions.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Active Sessions</a>
        <a class="link" href="http://www.webgui.org/addons"><img src="http://www.webgui.org/extras/adminConsole/small/addons.png" style="border: 0px; vertical-align: middle;" alt="icon"> Addons</a>
        <a class="link" href="/etusivu?op=manageAdSpaces"><img src="http://www.webgui.org/extras/adminConsole/small/advertising.gif" style="border: 0px; vertical-align: middle; display: none !important;" alt="icon" hidden=""> Advertising</a>
        <a class="link" href="/etusivu?op=assetHistory"><img src="http://www.webgui.org/extras/adminConsole/small/assetHistory.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Asset History</a>
        <a class="link" href="/etusivu?op=assetManager"><img src="http://www.webgui.org/extras/adminConsole/small/assets.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Assets</a>
        <a class="link" href="/etusivu?op=manageCache"><img src="http://www.webgui.org/extras/adminConsole/small/cache.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Cache</a>
        <a class="link" href="/etusivu?func=manageClipboard"><img src="http://www.webgui.org/extras/adminConsole/small/clipboard.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Clipboard</a>
        <a class="link" href="/etusivu?op=listReplacements"><img src="http://www.webgui.org/extras/adminConsole/small/contentFilters.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Content Filters</a>
        <a class="link" href="/etusivu?func=manageMetaData"><img src="http://www.webgui.org/extras/adminConsole/small/contentProfiling.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Content Profiling</a>
        <a class="link" href="/etusivu?op=listDatabaseLinks"><img src="http://www.webgui.org/extras/adminConsole/small/databases.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Databases</a>
        <a class="link" href="/etusivu?op=filePump"><img src="http://www.webgui.org/extras/adminConsole/small/filePump.png" style="border: 0px; vertical-align: middle;" alt="icon"> File Pump</a>
        <a class="link" href="/etusivu?op=listGraphicsOptions"><img src="http://www.webgui.org/extras/adminConsole/small/graphics.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Graphics</a>
        <a class="link" href="/etusivu?op=listGroups"><img src="http://www.webgui.org/extras/adminConsole/small/groups.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Groups</a>
        <a class="link" href="/etusivu?op=viewInbox"><img src="http://www.webgui.org/extras/adminConsole/small/inbox.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Inbox</a>
        <a class="link" href="/etusivu?op=listLDAPLinks"><img src="http://www.webgui.org/extras/adminConsole/small/ldap.gif" style="border: 0px; vertical-align: middle;" alt="icon"> LDAP Connections</a>
        <a class="link" href="/etusivu?op=viewLoginHistory"><img src="http://www.webgui.org/extras/adminConsole/small/loginHistory.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Login History</a>
        <a class="link" href="/etusivu?op=passiveAnalytics;func=editRuleflow"><img src="http://www.webgui.org/extras/adminConsole/small/passiveAnalytics.png" style="border: 0px; vertical-align: middle;" alt="icon"> Passive Analytics</a>
        <a class="link" href="/etusivu?op=manageCron"><img src="http://www.webgui.org/extras/adminConsole/small/cron.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Scheduler</a>
        <a class="link" href="/etusivu?op=editSettings"><img src="http://www.webgui.org/extras/adminConsole/small/settings.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Settings</a>
        <a class="link" href="/etusivu?shop=admin"><img src="http://www.webgui.org/extras/adminConsole/small/shop.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Shop</a>
        <a class="link" href="/etusivu?op=spectreStatus"><img src="http://www.webgui.org/extras/adminConsole/small/spectre.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Spectre</a>
        <a class="link" href="/etusivu?op=viewStatistics"><img src="http://www.webgui.org/extras/adminConsole/small/statistics.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Statistics</a>
        <a class="link" href="/etusivu?op=viewHelpIndex"><img src="http://www.webgui.org/extras/adminConsole/small/help.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Template Help</a>
        <a class="link" href="/etusivu?func=manageTrash"><img src="http://www.webgui.org/extras/adminConsole/small/trash.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Trash</a>
        <a class="link" href="/etusivu?op=switchOffAdmin"><img src="http://www.webgui.org/extras/adminConsole/small/adminConsoleOff.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Turn admin off.</a>
        <a class="link" href="/etusivu?op=editProfileSettings"><img src="http://www.webgui.org/extras/adminConsole/small/userProfiling.gif" style="border: 0px; vertical-align: middle;" alt="icon"> User Profiling</a>
        <a class="link" href="/etusivu?op=listUsers"><img src="http://www.webgui.org/extras/adminConsole/small/users.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Users</a>
        <a class="link" href="/etusivu?op=manageVersions"><img src="http://www.webgui.org/extras/adminConsole/small/versionTags.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Version Tags</a>
        <a class="link" href="/etusivu?op=manageWorkflows"><img src="http://www.webgui.org/extras/adminConsole/small/workflow.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Workflow</a>
      </div>
    </div>
    <div class="dropdown">
      <button class="dropbtn"><icon name="plus"></icon> New Content</button>
      <div class="dropdown-content">
        <p class="dropdown-title">Basic</p>
        <a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Wobject::Article"><img src="http://www.webgui.org/extras/assets/small/article.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Article</a>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Wobject::Calendar"><img src="http://www.webgui.org/extras/assets/small/calendar.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Calendar</a>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Wobject::DataForm"><img src="http://www.webgui.org/extras/assets/small/dataForm.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Data Form</a>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Wobject::DataTable"><img src="http://www.webgui.org/extras/assets/small/DataTable.gif" style="border: 0px; vertical-align: middle;" alt="icon"> DataTable</a>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::FilePile"><img src="http://www.webgui.org/extras/assets/small/filePile.gif" style="border: 0px; vertical-align: middle;" alt="icon"> File Pile</a>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Wobject::Folder"><img src="http://www.webgui.org/extras/assets/small/folder.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Folder</a>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Wobject::Map"><img src="http://www.webgui.org/extras/assets/small/maps.png" style="border: 0px; vertical-align: middle;" alt="icon"> Map</a>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Wobject::Layout"><img src="http://www.webgui.org/extras/assets/small/layout.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Page Layout</a>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Wobject::Poll"><img src="http://www.webgui.org/extras/assets/small/poll.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Poll</a>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Wobject::Search"><img src="http://www.webgui.org/extras/assets/small/search.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Search</a>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Snippet"><img src="http://www.webgui.org/extras/assets/small/snippet.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Snippet</a>
<p class="dropdown-title">Community</p>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Wobject::Collaboration"><img src="http://www.webgui.org/extras/assets/small/collaboration.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Collaboration System</a>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Wobject::Gallery"><img src="http://www.webgui.org/extras/assets/small/photoGallery.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Gallery</a>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Wobject::Matrix"><img src="http://www.webgui.org/extras/assets/small/matrix.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Matrix</a>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Wobject::MessageBoard"><img src="http://www.webgui.org/extras/assets/small/messageBoard.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Message Board</a>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Wobject::Collaboration::Newsletter"><img src="http://www.webgui.org/extras/assets/small/newsletter.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Newsletter</a>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Wobject::StoryArchive"><img src="http://www.webgui.org/extras/assets/small/storyarchive.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Story Archive</a>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Wobject::StoryTopic"><img src="http://www.webgui.org/extras/assets/small/storytopic.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Story Topic</a>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Wobject::Survey"><img src="http://www.webgui.org/extras/assets/small/survey.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Survey (beta)</a>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Wobject::WikiMaster"><img src="http://www.webgui.org/extras/assets/small/wikiMaster.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Wiki</a>

<p class="dropdown-title">Intranet</p>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Wobject::Dashboard"><img src="http://www.webgui.org/extras/assets/small/dashboard.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Dashboard (beta)</a>

<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Wobject::InOutBoard"><img src="http://www.webgui.org/extras/assets/small/iob.gif" style="border: 0px; vertical-align: middle;" alt="icon"> In/Out Board</a>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Wobject::MultiSearch"><img src="http://www.webgui.org/extras/assets/small/multiSearch.gif" style="border: 0px; vertical-align: middle;" alt="icon"> MultiSearch</a>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Wobject::ProjectManager"><img src="http://www.webgui.org/extras/assets/small/projManagement.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Project Manager (beta)</a>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Wobject::StockData"><img src="http://www.webgui.org/extras/assets/small/stockData.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Stock Data</a>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Wobject::Thingy"><img src="http://www.webgui.org/extras/assets/small/thingy.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Thingy</a>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Wobject::TimeTracking"><img src="http://www.webgui.org/extras/assets/small/timetrack.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Time Tracker (beta)</a>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Wobject::UserList"><img src="http://www.webgui.org/extras/assets/small/userlist.gif" style="border: 0px; vertical-align: middle;" alt="icon"> User List</a>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Wobject::WeatherData"><img src="http://www.webgui.org/extras/assets/small/weatherData.gif" style="border: 0px; vertical-align: middle;" alt="icon"> WeatherData</a>
<p class="dropdown-title">Prototypes</p>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Wobject::Article;prototype=lo0v6Bv9tNh8U1yAQsaxoA"><img src="http://www.webgui.org/extras/assets/small/article.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Artikkeli tietopankki</a>
<p class="dropdown-title">Shop</p>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Sku::Ad"><img src="http://www.webgui.org/extras/assets/small/adsku.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Ad Sales</a>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Sku::Donation"><img src="http://www.webgui.org/extras/assets/small/Donation.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Donation</a>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Wobject::EventManagementSystem"><img src="http://www.webgui.org/extras/assets/small/ems.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Event Manager</a>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Sku::FlatDiscount"><img src="http://www.webgui.org/extras/assets/small/FlatDiscount.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Flat Discount Coupon</a>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Sku::Product"><img src="http://www.webgui.org/extras/assets/small/product.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Product</a>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Wobject::Shelf"><img src="http://www.webgui.org/extras/assets/small/Shelf.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Shelf</a>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Sku::Subscription"><img src="http://www.webgui.org/extras/assets/small/subscription.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Subscription</a>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Sku::ThingyRecord"><img src="http://www.webgui.org/extras/assets/small/thingyRecord.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Thingy Record</a>
<p class="dropdown-title">Utilities</p>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Wobject::AssetReport"><img src="http://www.webgui.org/extras/assets/small/assets.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Asset Report</a>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Wobject::Carousel"><img src="http://www.webgui.org/extras/assets/small/Carousel.png" style="border: 0px; vertical-align: middle;" alt="icon"> Carousel</a>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::File"><img src="http://www.webgui.org/extras/assets/small/file.gif" style="border: 0px; vertical-align: middle;" alt="icon"> File</a>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Wobject::HttpProxy"><img src="http://www.webgui.org/extras/assets/small/httpProxy.gif" style="border: 0px; vertical-align: middle;" alt="icon"> HTTP Proxy</a>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::File::Image"><img src="http://www.webgui.org/extras/assets/small/file.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Image</a>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Wobject::Navigation"><img src="http://www.webgui.org/extras/assets/small/navigation.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Navigation</a>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Redirect"><img src="http://www.webgui.org/extras/assets/small/redirect.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Redirect</a>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::RichEdit"><img src="http://www.webgui.org/extras/assets/small/richEdit.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Rich Edit</a>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Wobject::SQLReport"><img src="http://www.webgui.org/extras/assets/small/sqlReport.gif" style="border: 0px; vertical-align: middle;" alt="icon"> SQL Report</a>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Wobject::SyndicatedContent"><img src="http://www.webgui.org/extras/assets/small/syndicatedContent.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Syndicated Content</a>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::Template"><img src="http://www.webgui.org/extras/assets/small/template.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Template</a>
<a class="link" href="/etusivu?func=add;class=WebGUI::Asset::File::ZipArchive"><img src="http://www.webgui.org/extras/assets/small/file.gif" style="border: 0px; vertical-align: middle;" alt="icon"> Zip Archive</a><br></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
    background-color: #3e8e41;
}
</style>
<style>
</style>
