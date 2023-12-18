<template>
  <div>
    <div class="container-fluid tm-container-content tm-mt-60">
      <div class="row mb-4">
        <h2 class="col-12 tm-text-primary">Thêm mới ảnh</h2>
      </div>
      <div class="row tm-mb-90">
        <div class="col-xl-4 col-lg-5 col-md-6 col-sm-12">
          <div class="tm-bg-gray tm-video-details">
            <p class="mb-4"></p>

            <form class="tm-search-form">
              <label class="mt-4 tm-text-primary">Tên:</label>
              <input
                class="form-control"
                type="text"
                placeholder="Nhập tên của ảnh"
                aria-label="Search"
              />

              <br />
              <label class="tm-text-primary">Miêu tả:</label>
              <input
                class="form-control"
                type="text"
                placeholder="Nhập miêu tả"
                aria-label="Search"
              />
              <br />

              <label class="tm-text-primary">URL của ảnh:</label>
              <input
                class="form-control"
                type="text"
                v-model="url"
                placeholder="Nhập url của ảnh"
                aria-label="Search"
              />
              <br />

              <!-- Chỗ hiển thị thông tin ảnh -->
              <div class="mb-4 d-flex flex-wrap">
                <div class="mr-4 mb-2">
                  <span class="tm-text-gray-dark">Dimension: </span>
                  <span class="tm-text-primary">{{ imageInfo.dimension }}</span>
                </div>
                <div class="mr-4 mb-2">
                  <span class="tm-text-gray-dark">Format: </span>
                  <span class="tm-text-primary">{{ imageInfo.format }}</span>
                </div>
              </div>

              <button
                class="btn btn-outline-success tm-search-btn"
                type="submit"
              >
                Thêm mới
              </button>
              <br /><br /><br />
            </form>
          </div>
        </div>

        <div class="col-xl-8 col-lg-7 col-md-6 col-sm-12">
          <img
            :src="url"
            alt="Hãy chèn link vào để hiển thị ảnh"
            style="border: 3px dashed red"
            class="img-fluid w-50"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddView",
  data() {
    return {
      url: "",
      imageInfo: {
        dimension: "",
        format: "",
      },
    };
  },

  methods: {
    updateImageInfo() {
      const img = new Image();
      img.onload = () => {
        this.imageInfo.dimension = img.width + "x" + img.height;
        this.imageInfo.format = "Unknown"; // You may want to enhance this logic based on image type
      };
      img.onerror = () => {
        console.error("Error loading image:", this.url);
        this.imageInfo.dimension = "N/A";
        this.imageInfo.format = "N/A";
      };
      img.src = this.url;
    },
  },
  watch: {
    url: "updateImageInfo", // Watch for changes in 'url' and update image info
  },
};
</script>

<style>
</style>