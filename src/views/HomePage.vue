<template>
  <div class="container mt-5 bg-dark text-white p-3 rounded-2 card">
    <div class="d-flex justify-content-end">
      <button class="btn btn-sm btn-primary" @click="$router.push({ name: 'NewBookmark' })">+ &nbsp;Create Bookmark</button>
    </div>
    <table class="table table-dark table-striped table-hover text-white">
      <thead>
        <tr>
          <th>Sequence</th>
          <th>Title</th>
          <th>URL</th>
          <th>Description</th>
          <th style="width: 100px !important" class="text-center">Delete</th>
        </tr>
      </thead>
      <tbody class="t-ow">
        <tr v-for="(bookmarkItem, index) in bookmarkList" :key="bookmarkItem.id">
          <td>{{ index + 1 }}</td>
          <td>{{ bookmarkItem.title }}</td>
          <td>
            <a :href="bookmarkItem.url" target="_blank">{{ bookmarkItem.url }}</a>
          </td>
          <td>{{ bookmarkItem.description }}</td>
          <td class="text-center" style="width: 100px !important">
            <button class="btn btn-sm btn-danger" @click="deleteBookmark(bookmarkItem)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bookmarkList: [],
    };
  },
  created() {
    this.$appAxios.get("/bookmarks").then(async (res) => {
      this.bookmarkList = (await res.data) || [];
    });
  },
  methods: {
    deleteBookmark(bookmark) {
      this.$appAxios.delete(`/bookmarks/${bookmark.id}`).then((res) => {
        this.bookmarkList = this.bookmarkList.filter((b) => b.id !== bookmark.id);
        console.log(res);
      });
    },
  },
};
</script>
<style>
table {
  table-layout: fixed;
  width: 100%;
}

td {
  word-wrap: break-word;
}
</style>
