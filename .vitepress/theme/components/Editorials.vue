<script lang="ts" setup>
import { data as editorials } from "../static-data/editorials.data";
import PostItem from "./PostItem.vue";
</script>

<template>
  <div v-for="post in editorials">
    <PostItem
      :title="post.title"
      :date="post.date"
      :url="post.url"
      :excerpt="post.excerpt"
    />
  </div>
</template>
