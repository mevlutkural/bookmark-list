<template>
  <div class="container mt-5 bg-dark text-white p-3 rounded-2 card px-5 pt-4">
    <form>
      <div class="form-group">
        <div class="mb-3">
          <label for="title">Title</label>
          <input id="title" type="text" placeholder="Title..." class="form-control" v-model="bookmarkData.title" required />
        </div>
        <div class="mb-3">
          <label for="title">URL</label>
          <input type="url" placeholder="https://..." class="form-control" v-model="bookmarkData.url" required />
        </div>
        <div class="mb-3">
          <label for="title">Description</label>
          <textarea type="text" placeholder="Description..." class="form-control" v-model="bookmarkData.description" required></textarea>
        </div>
      </div>
    </form>
    <div class="d-flex justify-content-start"></div>
    <div class="d-flex justify-content-between">
      <button class="btn btn-primary float-start" @click="$router.push({ name: 'HomePage' })">Home</button>
      <div>
        <button class="btn btn-danger" @click="$router.go(-1)">Cancel</button>
        <button class="ms-2 btn btn-success" @click="save">Save</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bookmarkData: {
        title: null,
        url: null,
        description: null,
      },
    };
  },
  methods: {
    save() {
      this.$appAxios.post("/bookmarks", this.bookmarkData).then(() => {
        this.resetBookmarkData();
      });
    },
    resetBookmarkData: function () {
      Object.keys(this.bookmarkData).forEach((key) => (this.bookmarkData[key] = null));
    },
  },
};
</script>
