<template>
  <!-- POST LIST START -->
  <section class="posts">
    <div class="container">
      <div class="posts-type">Latest Posts</div>
      <div class="columns is-multiline">
        <div
          class="column is-12-mobile is-6-tablet is-4-widescreen is-6-desktop"
          v-for="exchange in exchanges"
          :key="exchange.id"
        >
          <div class="item post-card bottom-border">
            <a class="item-link" href="#">
              <figure
                class="image is-2by1 item-figure background-img"
                :style="{
                  'background-image': `url(${exchange.image})`,
                }"
                alt=""
              ></figure>
              <div class="item-featured">
                <div class="exchange-color">
                  <font-awesome-icon icon="star" />
                </div>
              </div>
            </a>
            <div class="item-tags">
              <a
                class="button is-rounded"
                href="#"
                title="Some Title"
                v-for="tag in exchange.tags"
                :key="tag"
                >#{{ tag }}</a
              >
            </div>
            <h2 class="title item-title is-size-4 has-text-weight-extra-bold">
              <a class="item-link" href="#">{{ exchange.title }}</a>
            </h2>
            <div class="level">
              <div class="level-left">
                <div class="item-author">{{ exchange.user }}</div>
              </div>
              <div class="level-right">27th December 2019</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- POST LIST END -->
</template>

<script>
export default {
  // Computed is to show reactive data
  computed: {
    exchanges() {
      return this.$store.state.exchange.exchanges;
    },
  },
  // start work when program start run (run before created)
  mounted() {
    return this.$store.dispatch("exchange/getExchanges");
  },
};
</script>

<style lang="scss" scoped>
.posts {
  padding-top: 70px;
}
.posts-type {
  font-size: 34px;
  margin-bottom: 10px;
  font-weight: bold;
}
.exchange-color {
  color: #ffbc8c;
  height: 25px;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
