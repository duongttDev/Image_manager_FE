<template>
  <div>
    <div
      class="tm-hero d-flex justify-content-center align-items-center"
      data-parallax="scroll"
      data-image-src="@/assets/img/hero.jpg"
    >
      <form class="d-flex tm-search-form">
        <input
          class="form-control tm-search-input"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success tm-search-btn" type="submit">
          <i class="fas fa-search"></i>
        </button>
      </form>
    </div>
    <div class="container-fluid tm-container-content tm-mt-60">
      <div class="row mb-4">
        <h2 class="col-2 tm-text-primary">Latest Photos</h2>
        <div class="col-12 d-flex justify-content-end align-items-center">
          Page {{ currentPage }} of {{ totalPage }}
        </div>
      </div>
      <div class="row tm-mb-90 tm-gallery">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5"
        >
          <figure class="effect-ming tm-video-item">
            <img :src="item.url" alt="Image" class="img-fluid" />
            <figcaption
              class="d-flex align-items-center justify-content-center"
            >
              <h2>{{ item.name }}</h2>
              <a href="photo-detail">View more</a>
            </figcaption>
          </figure>
          <div class="d-flex justify-content-between tm-text-gray">
            <span class="tm-text-gray-light">{{ item.createAt }}</span>
            <span>{{ item.view }} views</span>
          </div>
        </div>
      </div>

      <div class="row tm-mb-90">
        <div
          class="col-12 d-flex justify-content-between align-items-center tm-paging-col"
        >
          <a
            href="javascript:void(0);"
            class="btn btn-primary tm-btn-prev mb-2 "
            :class="{ disabled: currentPage === 1 }"
            @click="changePage(currentPage - 1)"
            >Previous</a
          >
          <div class="tm-paging d-flex">
            <a
              v-for="page in totalPage"
              :key="page"
              href="javascript:void(0);"
              class="tm-paging-link"
              :class="{ active: page === currentPage }"
              @click="changePage(page)"
            >
              {{ page }}</a
            >
          </div>
          <a
            href="javascript:void(0);"
            class="btn btn-primary tm-btn-next"
            :class="{ disabled: currentPage === totalPage }"
            @click="changePage(currentPage + 1)"
            >Next Page</a
          >
        </div>
      </div>
      <!-- row -->
    </div>
  </div>

  <!-- container-fluid, tm-container-content -->
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      items: [], // Mảng để lưu trữ các mục được tải từ API
      currentPage: 1, // Biến để lưu trữ trang hiện tại
      totalPage: 1,
    };
  },

  mounted() {
    this.loadItems(); // Gọi hàm để tải các mục khi component được mount
  },

  methods: {
    async loadItems() {
      try {
        const response = await axios.get(
          `http://localhost:8081/api/image/list?index-page=${this.currentPage}&size=2`
        ); // Thay 'ĐƯỜNG_DẪN_API_CỦA_BẠN' bằng đường dẫn API thực tế của bạn
        // Kiểm tra xem response có trường data không
        if (response.data && response.data.data && response.data.data.content) {
          this.items = response.data.data.content; // Cập nhật dữ liệu 'items' với dữ liệu nhận được từ API
          this.totalPage = response.data.data.totalPage;
        } else {
          console.error("Response không chứa dữ liệu cần thiết.");
        }
      } catch (error) {
        console.error("Lỗi khi tải các mục:", error);
      }
    },

    changePage(newPage) {
      console.log("page : "+newPage);
      console.log("cur - page : "+this.currentPage);
      if (newPage >= 1 && newPage <= this.totalPage) {
        this.currentPage = newPage;
        this.loadItems();
      }
    },
  },

  name: "HomeView",
};
</script>

<style>
</style>