<template>
  <div>
    <div class="grid">
      <div class="item1">
        <v-img
          src="https://picsum.photos/510/300?random"
          aspect-ratio="1.7"
        />
      </div>
      <div class="item2">
        <v-img
          src="https://picsum.photos/510/300?random"
          aspect-ratio="1.7"
        />
      </div>
      <div class="item3">
        <v-img
          src="https://picsum.photos/511/300?random"
          aspect-ratio="1.7"
        />
      </div>
      <div class="item4">
        <v-img
          src="https://via.placeholder.com/150"
          aspect-ratio="1.7"
        />
      </div>
      <div class="item5">
        <v-img
          src="https://picsum.photos/510/300?random"
          aspect-ratio="1.7"
        />
      </div>
      <div class="item6"></div>
      <div class="item7"></div>
      <div class="item8"></div>
      <div class="item9"></div>
      <div class="item10"></div>
      <div class="item11"></div>
      <div class="item12"></div>
      <div class="item13"></div>
      <div class="item14"></div>
      <div class="item15"></div>
      <div class="item16"></div>
      <div class="item17"></div>
      <div class="item18"></div>
      <div class="item19"></div>
      <div class="item20"></div>
      <div class="item21"></div>
      <div class="item22"></div>
      <div class="item23"></div>
      <div class="item24"></div>
      <div class="item25"></div>
      <div class="item26"></div>
      <div class="item27"></div>
      <div class="item28"></div>
      <div class="item29"></div>
      <div class="item30"></div>
      <div class="item31"></div>
      <div class="item32"></div>
      <div class="item33"></div>
      <div class="item34"></div>
      <div class="item35"></div>
      <div class="item36"></div>
      <div class="item37"></div>
      <div class="item38"></div>
      <div class="item39"></div>
      <div class="item40"></div>
      <div class="item41"></div>
      <div class="item42"></div>
      <div class="item43"></div>
      <div class="item44"></div>
    </div>
    <v-btn
      class="mt-3"
      rounded
      color="primary"
      style="color: rgba(0, 0, 0, 0.87); font-weight: 700"
      dark
      @click="$router.push('/galeria')"
      v-text="'Powrót'"
    />
  </div>
</template>

<script>
  export default {
    name: 'GalleryIndividual',
  }
</script>

<style lang="css">
.grid {
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-column-gap: 4px;
  grid-row-gap: 4px;
  background-color: #ffcc33;
}
.item1 {
  grid-column: 1 / span 2;
  grid-row: 1 / span 3;
  background-color: #1c1c1c;
}
.item2 {
  background-color: #1c1c1c;
  grid-row: 2 / span 3;
}
.item3 {
  background-color: #1c1c1c;
  grid-column: 3;
  grid-row: 3 / span 4;
}
</style>
