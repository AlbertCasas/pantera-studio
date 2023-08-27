<template>
  <div class="footer">
    <div class="footer-content">
				<div class="footer-info">
					<h1>MAIL</h1>
					<p>hello.panterastudio@gmail.com</p>
				</div>
				<div class="footer-info">
					<h1>PHONE</h1>
					<p>+34 695 664 603</p>
				</div>
        <div class="footer-info">
					<h1>SOCIAL MEDIA</h1>
					<a href="https://www.instagram.com/_panterastudio/" target="_blank">Instagram</a>
					<a href="https://www.behance.net/pantera_studio" target="_blank">Behance</a>
				</div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
* {
    background-color: #0d0d0d;
}

.footer {
    height: 100px;
    width: 100%;
    background-color: #0d0d0d;
}

.footer-content {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 24px;
	padding: 24px;
}

.footer-info {
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 16px;
}
h1 {
	font-size: 24px;
	font-weight: 900;
	cursor: default;
}
p {
	font-size: 24px;
	font-weight: 500;
	cursor: default;
}

a {
	font-size: 24px;
	font-weight: 500;
	color: white;
	text-decoration: none;
}

@media only screen and (max-width: 1000px) {
    
h1 {
	font-size: 16px;
}
p {
	font-size: 16px;
}

a {
	font-size: 16px;
}
}

@media only screen and (max-width: 750px) {
h1 {
	font-size: 16px;
}
p {
	font-size: 16px;
}

a {
	font-size: 16px;
}
}


</style>