<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="gt-nav">
    <div class="navbar-lg">
      <a class="navbar-brand" href="#" id="gt-brand">
        <img src="../assets/img/GT logo.png" alt="GT logo" class="logo"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
    <div class="navbar-md">
      <b-navbar-toggle type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </b-navbar-toggle>
      <a class="navbar-brand" href="#" id="gt-brand">
        <img src="../assets/img/GT logo.png" alt="GT logo" class="logo"></a>
    </div>

    <b-collapse is-nav id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item" data-id="stores">
          <a class="nav-link"  href="javascript:void(0);" data-id="#stores">推薦商家</a>
        </li>
        <li class="nav-item" data-id="news">
          <a class="nav-link"  href="javascript:void(0);" data-id="#news">新聞趣事</a>
        </li>
        <li class="nav-item" data-id="activities">
          <a class="nav-link"  href="javascript:void(0);" data-id="#activities">活動聚會</a>
        </li>
        <li class="nav-item" data-id="idea">
          <a class="nav-link"  href="javascript:void(0);" data-id="#idea">零廢棄理念</a>
        </li>
        <li class="nav-item" data-id="about">
          <a class="nav-link"  href="javascript:void(0);" data-id="#about">關於我們</a>
        </li>
        <!-- <li class="nav-item">
          <a class="nav-link"  href="javascript:void(0);" href="map.html">綠色地圖</a>
        </li> -->
      </ul>
    </b-collapse is-nav>
  </nav>
</template>

<style>
.navbar-md{
  display: none;
  background-color: #ffffff;
}
.logo {
  height:30px;
  width:100px;
}

nav#gt-nav {
  padding: 0 1rem;
  border-bottom: 2px solid #44AD47;
  background-color: white;
}

nav a#gt-brand {
  width: 150px;
}

.navbar-nav li {
  padding: 0 20px;
}

.navbar-nav li.active {
  
  border-bottom: 3px solid #44AD47;
}
.navbar-light .navbar-nav .active>.nav-link, .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .show>.nav-link.active{
  color: #44AD47;
}

.navbar-toggler{
  border: none;
}

@media screen and (max-width:991px){
  .hide-only-in-lg{
    display: block;
  }
  .hide-only-in-md{
    display: none;
  }
  /*--navbar--*/
  nav#gt-nav{
    padding: 0;
    background-color: #D8E8DA;
  }
  .nav-item{
    border: solid 1px #ffffff;
  }
  .nav-link{
    padding: 20px;
  }
  .navbar-md{
    display: block;
    width: 100%;
  }
  .navbar-lg{
    display: none;
  }
}
</style>