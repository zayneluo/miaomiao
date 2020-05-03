<template>
  <div>
    <Header>喵喵电影</Header>
    <div id="content">
      <div class="movie_menu">
        <router-link class="city_name"
                     to="/movie/city"
                     tag="div"
                     active-class="active">
          <span>大连</span><i class="iconfont icon-lower-triangle"></i>
        </router-link>
        <div class="hot_swtich">
          <router-link class="hot_item"
                       to="/movie/nowplaying"
                       tag="div"
                       active-class="active">正在热映</router-link>
          <router-link class="hot_item"
                       to="/movie/commingsoon"
                       tag="div"
                       active-class="active">即将上映</router-link>
        </div>
        <router-link class="search_entry"
                     to="/movie/search"
                     tag="div"
                     active-class="active">
          <i class="iconfont icon-sousuo"></i>
        </router-link>
      </div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../../components/Header'
import Footer from '../../components/Footer'
export default {
  name: 'Movie',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
#content {
  flex: 1;
  overflow: auto;
  margin-bottom: 50px;
  /* position: relative; */
  display: flex;
  flex-direction: column;
}
#content .movie_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  z-index: 10;
}
.movie_menu .city_name {
  margin-left: 20px;
  height: 100%;
  line-height: 45px;
}
.movie_menu .city_name.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .city_name.router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .hot_swtich {
  display: flex;
  height: 100%;
  line-height: 45px;
}
.movie_menu .hot_item {
  font-size: 15px;
  color: #666;
  width: 80px;
  text-align: center;
  margin: 0 12px;
  font-weight: 700;
}
.movie_menu .hot_item.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .hot_item.router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry {
  margin-right: 20px;
  height: 100%;
  line-height: 45px;
}
.movie_menu .search_entry.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry.router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry i {
  font-size: 24px;
  color: red;
}
</style>
