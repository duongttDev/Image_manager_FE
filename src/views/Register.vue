<template>
	<div>
		<div class="main">

			<!-- Sign up form -->
			<section class="signup">
				<div class="container">
					<div class="signup-content">
						<div class="signup-form">
							<h2 class="form-title">Đăng kí</h2>
							<form @submit.prevent="register" class="register-form" id="register-form">
								<div class="form-group">
									<label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
									<input v-model="name" type="text" name="name" id="name" placeholder="Họ và tên" />
								</div>
								<div class="form-group">
									<label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
									<input v-model="username" type="text" name="username" id="name" placeholder="Tên đăng nhập" />
								</div>
								<div class="form-group">
									<label for="email"><i class="zmdi zmdi-email"></i></label>
									<input v-model="email" type="email" name="email" id="email" placeholder="Địa chỉ email" />
								</div>
								<div class="form-group">
									<label for="email"><i class="zmdi zmdi-phone"></i></label>
									<input v-model="phone"  type="number" name="phone" id="email" placeholder="Số điện thoại" />
								</div>
								<div class="form-group">
									<label for="pass"><i class="zmdi zmdi-lock"></i></label>
									<input v-model="password" type="password" name="password" id="pass" placeholder="Mật khẩu" />
								</div>
								<div class="form-group">
									<label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
									<input v-model="re_password" type="password" name="re_password" id="re_pass" placeholder="Nhập lại mật khẩu" />
								</div>
								<div class="form-group">
									<input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
									<label for="agree-term" class="label-agree-term"><span><span></span></span>Tôi đồng ý
										với mọi điều khoản <a href="about" class="term-service">Điều khoản về chúng
											tôi</a></label>
								</div>
								<!-- Display error message -->
								<div v-if="errorMessage" style="color: red;" class="form-group error-message">
									{{ errorMessage }}
								</div>
								<div class="form-group form-button">
									<input type="submit" name="signup" id="signup" class="form-submit" value="Register" />
								</div>
							</form>
						</div>
						<div class="signup-image">
							<figure><img src="@/assets/img/signup-image.jpg" alt="sing up image"></figure>
							<a href="/" class="signup-image-link">Bạn đã có tài khoản</a>
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
	name: 'registerView',
	data() {
		return {
			username:'',
			name:'',
			password:'',
			email:'',
			phone:'',
			re_password:'',
			errorMessage: '',
		}
	},

	methods: {
		async register(){
			const role = 'user';
			if(this.password != this.re_password){
				this.errorMessage = 'mật khẩu với nhập lại mật khẩu không đúng';
				return;
			}

			try {
				const response = await axios.post('http://localhost:8081/api/auth/register', {
					username: this.username,
					password: this.password,
					name: this.name,
					phone: this.phone,
					email: this.email,
					role: role,
				});
				console.log(response)

				// Xử lý response khi đăng kí thành công
				const mess = response.data.message;
				const code = response.data.code;

				if(code !== 200){
					this.errorMessage = mess;
					return;
				}

				alert(mess);
				// Redirect hoặc thực hiện các hành động sau khi đăng nhập thành công
				this.$router.push({ path: 'login' });

				
			} catch (error) {
				// Xử lý lỗi khi đăng nhập thất bại
				// Hiển thị thông báo lỗi từ response
				if (error.response && error.response.data && error.response.data.message) {
					this.errorMessage = error.response.data.message;
				} else {
					this.errorMessage = 'Đã có lỗi xảy ra khi đăng kí.';
				}
			}

		}
	}

}
</script>

<style></style>