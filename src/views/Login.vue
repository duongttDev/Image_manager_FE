<template>
	<div>
		<div class="main">

			<!-- Sign up form -->
			<section class="signup">
				<div class="container">
					<div class="signup-content">
						<div class="signup-form">
							<h2 class="form-title">Đăng ký</h2>
							<form @submit.prevent="login" class="register-form" id="register-form">
								<div class="form-group">
									<label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
									<input v-model="username" type="text" name="name" id="username"
										placeholder="Tên đăng nhập" />
								</div>
								<div class="form-group">
									<label for="pass"><i class="zmdi zmdi-lock"></i></label>
									<input v-model="password" type="password" name="pass" id="pass"
										placeholder="Mật khẩu" />
								</div>

								<div class="form-group form-button">
									<input type="submit" name="signup" id="signup" class="form-submit" value="Đăng nhập" />
								</div>
								<!-- Display error message -->
								<div v-if="errorMessage" style="color: red;" class="form-group error-message">
									{{ errorMessage }}
								</div>
							</form>
						</div>
						<div class="signup-image">
							<figure><img src="@/assets/img/signup-image.jpg" alt="sing up image"></figure>
							<a href="register" class="signup-image-link">Bạn chưa có tài khoản</a>
						</div>
					</div>
				</div>
			</section>


		</div>
	</div>
</template>

<script>
import '@/assets/fonts/material-icon/css/material-design-iconic-font.min.css';
import '@/assets/styles/style-login.css';
import axios from 'axios';

export default {
	name: 'loginView',
	data() {
		return {
			username: '',
			password: '',
			errorMessage: '',
		};
	},

	methods: {
		async login() {
			try {
				const response = await axios.post('http://localhost:8081/api/auth/login', {
					username: this.username,
					password: this.password,
				});
				console.log(response)

				// Xử lý response khi đăng nhập thành công
				const token = response.data.data.token;

				// Lưu token vào localStorage hoặc Vuex để sử dụng sau này
				sessionStorage.setItem('token', token);

				alert('Đăng nhập thành công');
				// Redirect hoặc thực hiện các hành động sau khi đăng nhập thành công
				this.$router.push({ path: 'home' });

				
			} catch (error) {
				// Xử lý lỗi khi đăng nhập thất bại
				// Hiển thị thông báo lỗi từ response
				if (error.response && error.response.data && error.response.data.message) {
					this.errorMessage = error.response.data.message;
				} else {
					this.errorMessage = 'Đã có lỗi xảy ra khi đăng nhập.';
				}
			}
		},
	},

}
</script>

<style></style>