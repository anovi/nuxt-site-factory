<template>
  <div class="row">
    <div class="col-12">
      <button id="facebook" class="promo__share facebook" type="button" @click="onShareButtonClick">
        <svg class="promo__share-icon" width="18px" height="32px" viewBox="0 0 18 32" version="1.1"
        xmlns="http://www.w3.org/2000/svg">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-197.000000, -92.000000)">
            <g transform="translate(166.000000, 81.000000)">
              <path fill="#D8D8D8"
              d="M45.2628571,16.3028571 C42.7942857,16.3028571 42.3371429,17.4 42.3371429,19.0457143 L42.3371429,22.7028571 L48.1885714,22.7028571 L47.0914286,28.3714286 L41.9714286,28.3714286 L42.2457143,43 L36.12,43 L36.12,28.3714286 L31,28.3714286 L31,22.7028571 L36.12,22.7028571 L36.12,18.4971429 C36.12,13.6514286 39.2285714,11 43.8,11 C45.9942857,11 47.8228571,11.1828571 48.3714286,11.1828571 L48.3714286,16.3028571 L45.2628571,16.3028571 Z"
              id="icons/facebook"></path>
            </g>
          </g>
        </g>
      </svg>
      <span class="promo__share-label" v-t="'share'"></span>
    </button>
    <button id="vkontakte" class="promo__share vk" type="button" @click="onShareButtonClick">
      <svg class="promo__share-icon" width="36px" height="21px" viewBox="0 0 36 21" version="1.1"
      xmlns="http://www.w3.org/2000/svg">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-398.000000, -99.000000)">
          <g transform="translate(376.000000, 81.000000)">
            <path fill="#D8D8D8"
            d="M39.0888889,37.9 L41.1888889,37.9 C41.1888889,37.9 41.7888889,37.8 42.1888889,37.5 C42.4888889,37.2 42.4888889,36.6 42.4888889,36.6 C42.4888889,36.6 42.4888889,33.8 43.7888889,33.4 C45.0888889,33 46.6888889,36.1 48.4888889,37.3 C49.7888889,38.2 50.7888889,38 50.7888889,38 L55.4888889,37.9 C55.4888889,37.9 57.8888889,37.7 56.7888889,35.8 C56.6888889,35.6 56.0888889,34.4 53.2888889,31.8 C50.3888889,29.1 50.7888889,29.5 54.2888889,24.8 C56.3888889,21.9 57.2888889,20.2 56.9888889,19.4 C56.6888889,18.7 55.1888889,18.9 55.1888889,18.9 L49.8888889,18.9 C49.8888889,18.9 49.4888889,18.8 49.1888889,19 C48.8888889,19.2 48.6888889,19.6 48.6888889,19.6 C48.6888889,19.6 47.8888889,21.8 46.7888889,23.7 C44.4888889,27.7 43.4888889,27.9 43.0888889,27.6 C42.1888889,27 42.3888889,25.3 42.3888889,24.1 C42.3888889,20.3 42.9888889,18.6 41.2888889,18.2 C40.6888889,18.1 40.2888889,18 38.7888889,18 C36.8888889,18 35.2888889,18 34.3888889,18.4 C33.7888889,18.7 33.2888889,19.3 33.5888889,19.4 C33.8888889,19.4 34.6888889,19.6 35.0888889,20.2 C35.5888889,20.9 35.5888889,22.6 35.5888889,22.6 C35.5888889,22.6 35.9888889,27.2 34.9888889,27.8 C34.2888889,28.2 33.2888889,27.4 31.1888889,23.8 C30.0888889,22 29.2888889,19.9 29.2888889,19.9 C29.2888889,19.9 29.0888889,19.5 28.8888889,19.3 C28.5888889,19.1 28.0888889,19 28.0888889,19 L23.0888889,19 C23.0888889,19 22.3888889,19 22.0888889,19.3 C21.8888889,19.6 22.0888889,20.2 22.0888889,20.2 C22.0888889,20.2 25.9888889,29.3 30.3888889,33.9 C34.3888889,38.2 39.0888889,37.9 39.0888889,37.9 L39.0888889,37.9 Z"
            id="icons/vk"></path>
          </g>
        </g>
      </g>
    </svg>
    <span class="promo__share-label" v-t="'share'"></span>
    </button>
    <button id="twitter" class="promo__share twitter" type="button" @click="onShareButtonClick">
      <svg class="promo__share-icon" width="33px" height="26px" viewBox="0 0 33 26" version="1.1"
      xmlns="http://www.w3.org/2000/svg">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-610.000000, -95.000000)">
          <g transform="translate(586.000000, 81.000000)">
            <path fill="#D8D8D8"
            d="M52.7,20.5 L52.7,21.3 C52.7,30 46.1,40 34.1,40 C30.4,40 26.9,38.9 24,37.1 C24.5,37.2 25,37.2 25.6,37.2 C28.7,37.2 31.5,36.2 33.8,34.4 C30.9,34.3 28.5,32.4 27.7,29.8 C28.1,29.9 28.5,29.9 28.9,29.9 C29.5,29.9 30.1,29.8 30.6,29.7 C27.6,29.1 25.3,26.4 25.3,23.3 L25.3,23.2 C26.2,23.7 27.2,24 28.3,24 C26.5,22.8 25.4,20.8 25.4,18.5 C25.4,17.3 25.7,16.2 26.3,15.2 C29.5,19.2 34.4,21.8 39.8,22.1 C39.7,21.6 39.6,21.1 39.6,20.6 C39.6,17 42.5,14 46.2,14 C48.1,14 49.8,14.8 51,16.1 C52.5,15.8 53.9,15.3 55.2,14.5 C54.7,16 53.7,17.3 52.3,18.1 C53.6,17.9 54.9,17.6 56.1,17.1 C55.1,18.4 54,19.5 52.7,20.5 L52.7,20.5 L52.7,20.5 Z"
            id="icons/twitter"></path>
          </g>
        </g>
      </g>
    </svg>
    <span class="promo__share-label" v-t="'tweet'"></span>
    </button>
    <button id="google" class="promo__share google" type="button" @click="onShareButtonClick">
      <svg class="promo__share-icon" width="32px" height="31px" viewBox="0 0 32 31" version="1.1"
      xmlns="http://www.w3.org/2000/svg">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-803.000000, -93.000000)">
          <g fill="#D8D8D8" transform="translate(777.000000, 81.000000)">
            <path d="M40.6,13.9 C40.9,14.2 41.2,14.6 41.5,15.1 C41.8,15.5 42,16.1 42.2,16.6 C42.4,17.2 42.5,17.9 42.5,18.7 C42.5,20.2 42.2,21.3 41.6,22.2 C41.3,22.6 41,23 40.7,23.4 L39.6,24.5 C39.4,24.8 39.2,25 39,25.4 C38.8,25.7 38.7,26.1 38.7,26.6 C38.7,27 38.8,27.4 39.1,27.7 C39.3,28 39.5,28.2 39.7,28.4 L41,29.5 C41.8,30.2 42.5,31 43.2,31.8 C43.8,32.7 44.1,33.8 44.1,35.2 C44.1,37.2 43.3,38.9 41.6,40.4 C39.9,41.999999 37.4,42.799998 34.1,42.799998 C31.4,42.799998 29.3,42.2 28,41 C26.6,39.9 26,38.6 26,37 C26,36.2 26.2,35.4 26.7,34.5 C27.1,33.6 27.9,32.8 29,32.1 C30.3,31.3 31.6,30.8 33,30.6 C34.4,30.4 35.5,30.3 36.4,30.2 C36.1,29.8 35.9,29.4 35.6,29 C35.3,28.6 35.2,28.1 35.2,27.5 C35.2,27.1 35.2,26.8 35.3,26.6 C35.4,26.3 35.5,26.1 35.5,25.9 C35.1,26 34.6,26 34.2,26 C32.1,26 30.5,25.3 29.5,24 C28.4,22.8 27.8,21.3 27.8,19.7 C27.8,17.7 28.6,15.9 30.2,14.3 C31.3,13.3 32.5,12.7 33.6,12.4 C34.8,12.1 35.9,12 36.9,12 L44.7,12 L42.3,13.5 L39.9,13.5 C40,13.3 40.3,13.6 40.6,13.9 Z M57.7,27.2 L53.3,27.2 L53.3,31.6 L51.1,31.6 L51.1,27.2 L46.7,27.2 L46.7,25 L51.1,25 L51.1,20.6 L53.3,20.6 L53.3,25 L57.7,25 L57.7,27.2 Z M36.5,13.8 C35.9,13.3 35.2,13.1 34.4,13.1 C33.3,13.1 32.5,13.6 31.8,14.4 C31.2,15.3 30.9,16.3 31,17.4 C31,18.9 31.4,20.4 32.2,22 C32.6,22.7 33.1,23.4 33.7,23.9 C34.3,24.4 35.1,24.7 35.9,24.7 C36.9,24.7 37.8,24.3 38.5,23.5 C38.8,23 39,22.5 39.1,21.9 C39.2,21.4 39.2,20.9 39.2,20.5 C39.2,18.9 38.8,17.3 38,15.6 C37.6,14.9 37.1,14.3 36.5,13.8 Z M36.3,31.2 C36.1,31.2 35.6,31.2 34.8,31.3 C34,31.4 33.2,31.6 32.3,31.9 C32.1,32 31.8,32.1 31.5,32.3 C31.1,32.5 30.8,32.7 30.4,33 C30,33.3 29.7,33.7 29.5,34.2 C29.2,34.7 29.1,35.3 29.1,36.1 C29.1,37.5 29.7,38.7 31,39.6 C32.2,40.5 33.8,41 35.8,41 C37.6,41 39,40.6 40,39.7 C40.9,38.9 41.4,37.9 41.4,36.6 C41.4,35.6 41.1,34.7 40.4,33.9 C39.7,33.2 38.7,32.3 37.2,31.2 L36.3,31.2 Z"
            id="icons/google-plus"></path>
          </g>
        </g>
      </g>
    </svg>
    <span class="promo__share-label" v-t="'share'"></span>
    </button>
  </div>
</div>
</template>


<style lang="stylus">

.promo__share
    padding: 16px 25px 14px 50px
    margin-right: 5px
    border-radius: 50px
    border: 1px solid #E3E3E3
    background: transparent
    outline: none
    margin-bottom: 20px
    position: relative
    cursor: pointer

    +media-up('md')
        margin-right: 20px
        padding: 16px 40px 14px 70px

    &:hover
        background-color: rgba(0, 0, 0, 0.05)
        path
            fill: #BBBEC1

    .promo__share-icon
        position: absolute
        top: 11px
        left: 20px
        transform: scale(0.8)
        +media-up('md')
            transform: none
            top: 11px
            left: 30px

    &.vk
        .promo__share-icon
            left: 10px
            top: 15px
            +media-up('md')
                left: 23px
                top: 18px

    &.twitter
        .promo__share-icon
            top: 14px
            left 14px
            +media-up('md')
                left 22px

    &.google
        .promo__share-icon
            left: 15px
            top: 12px
            +media-up('md')
                left: 26px

.promo__share-label
    @extend $small-font-size
    color: #43464c
    position: relative
    top: -2px

</style>


<script>
  export default {
    components: {
    },

    methods: {

      onShareButtonClick(e) {
        e.preventDefault();
        this[e.target.getAttribute('id')]();
      },


      popupWindow(url, title, width, height) {
        var left = (screen.width / 2) - (width / 2);
        var top = (screen.height / 2) - (height / 2);
        return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left);
      },


      getOgTitle() {
        var ogTitle;
        var metaTags = document.getElementsByTagName('meta');
        for (var metaIndex = 0; metaIndex < metaTags.length; metaIndex++) {
          if (metaTags[metaIndex].getAttribute('property') == 'og:title') {
            ogTitle = metaTags[metaIndex].getAttribute('content');
          }
        }
        return ogTitle;
      },


      getOgDescription() {
        var ogDescription;
        var metaTags = document.getElementsByTagName('meta');
        for (var metaIndex = 0; metaIndex < metaTags.length; metaIndex++) {
          if (metaTags[metaIndex].getAttribute('property') == 'og:description') {
            ogDescription = metaTags[metaIndex].getAttribute('content');
          }
        }
        return ogDescription;
      },


      getTwitterText() {
        var twitterText;
        var metaTags = document.getElementsByTagName('meta');
        for (var metaIndex = 0; metaIndex < metaTags.length; metaIndex++) {
          if (metaTags[metaIndex].getAttribute('name') == 'twitter:text') {
            twitterText = metaTags[metaIndex].getAttribute('content');
          }
        }
        return twitterText;
      },


      getPageUrl() {
        return encodeURIComponent(window.location.href);
      },


      facebook() {
        var url = "https://www.facebook.com/sharer/sharer.php?u=" + this.getPageUrl();
        this.popupWindow(url, '', 626, 500);
      },


      vkontakte() {
        var url = 'http://vkontakte.ru/share.php?';
        url += 'url=' + this.getPageUrl();
        url += '&title=' + encodeURIComponent(this.getOgTitle());
        url += '&description=' + encodeURIComponent(this.getOgDescription());
        this.popupWindow(url, '', 626, 500);
      },


      twitter() {
        var url = "https://twitter.com/home?status=" + encodeURIComponent(this.getTwitterText() || (this.getOgTitle() + ' ' + window.location.href));
        this.popupWindow(url, '', 500, 253);
      },


      google() {
        var url = "https://plus.google.com/share?url=" + this.getPageUrl();
        this.popupWindow(url, '', 500, 600);
      }

    }
  }
</script>
