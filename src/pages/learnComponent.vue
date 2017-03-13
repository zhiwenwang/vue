<template>
  <div id="jumbotron">
    <nav-bar>
      <div slot="right">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Email">
        </div>
        <div class="form-group">
          <input type="password" class="form-control" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-success">Sign in</button>
      </div>
    </nav-bar>
    <jumbotron />
    <container :items="items" />
  </div>
</template>

<script>
import NavBar from '../components/navbar.vue';
import Jumbotron from '../components/jumbotron.vue';
import Container from '../components/container.vue';

export default {
  data () {
    return {
      items: [
        {
          title: 'Heading',
          info: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ',
          btntext: 'View details »'
        },
        {
          title: 'Heading',
          info: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ',
          btntext: 'View details »'
        },
        {
          title: 'Heading',
          info: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
          btntext: 'View details »'
        },
      ],
    }
  },
  components: {
    NavBar,
    Jumbotron,
    Container
  }
}
</script>

<style>
  /* Move down content because we have a fixed navbar that is 50px tall */
  #jumbotron {
    padding-top: 50px;
    padding-bottom: 20px;
  }
</style>