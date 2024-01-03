<template>
  <div>
	<div class="main">

<!-- Sign up form -->
<section class="signup">
	<div class="container">
		<div class="signup-content">
			<div class="signup-form">
				<h2 class="form-title">Sign up</h2>
				<form method="POST" class="register-form" id="register-form">
					<div class="form-group">
						<label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
						<input type="text" name="name" id="name" placeholder="Tên đăng nhập" />
					</div>
					<div class="form-group">
						<label for="email"><i class="zmdi zmdi-email"></i></label>
						<input type="email" name="email" id="email" placeholder="Địa chỉ email" />
					</div>
					<div class="form-group">
						<label for="email"><i class="zmdi zmdi-phone"></i></label>
						<input type="email" name="email" id="email" placeholder="Số điện thoại" />
					</div>
					<div class="form-group">
						<label for="pass"><i class="zmdi zmdi-lock"></i></label>
						<input type="password" name="pass" id="pass" placeholder="Mật khẩu" />
					</div>
					<div class="form-group">
						<label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
						<input type="password" name="re_pass" id="re_pass" placeholder="Nhập lại mật khẩu" />
					</div>
					<div class="form-group">
						<input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
						<label for="agree-term" class="label-agree-term"><span><span></span></span>Tôi đồng ý với mọi điều khoản <a href="about" class="term-service">Điều khoản về chúng tôi</a></label>
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

export default {
 name: 'registerView',
}
</script>

<style>


</style>