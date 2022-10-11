<template>
  <div class="header-ctn" id="app-header">
    <div class="header">
      <a href="/" class="header-left">
        <img
          class="logo"
          src="/assets/brand-logo.svg"
          height="71"
          alt="Brand logo"
        />
      </a>
      <div class="header-right">
        <div class="header-nav">
          <a href="/productos">Productos</a>
          <a href="/simulador-de-préstamos">Simulador</a>
          <a href="/preguntas-frecuentes/">Preguntas frecuentes</a>
          <a href="/conocenos/">Conócenos</a>
          <a href="/blog/">Blog</a>
        </div>
        <div class="header-user">
          <a class="btn-tertiary btn-outline" href="/funding/login/index.xhtml">
            Ingresar
          </a>
          <a class="btn-tertiary" href="/prestamo/solicitar.xhtml/">
            Aplicar ahora
          </a>
        </div>
      </div>
      <a href="" class="icon-button header-toggle">
        <div class="icon text-primary toggle-list">
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 1C0 0.447715 0.447715 0 1 0H19C19.5523 0 20 0.447715 20 1C20 1.55228 19.5523 2 19 2H1C0.447715 2 0 1.55228 0 1ZM0 7.00016C0 6.44788 0.447715 6.00016 1 6.00016H19C19.5523 6.00016 20 6.44788 20 7.00016C20 7.55245 19.5523 8.00016 19 8.00016H1C0.447715 8.00016 0 7.55245 0 7.00016ZM1 11.9995C0.447715 11.9995 0 12.4472 0 12.9995C0 13.5518 0.447715 13.9995 1 13.9995H19C19.5523 13.9995 20 13.5518 20 12.9995C20 12.4472 19.5523 11.9995 19 11.9995H1Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div class="icon text-primary toggle-close">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.778451 14.7789C0.348874 15.2084 0.348874 15.9049 0.778451 16.3345C1.20803 16.7641 1.90451 16.7641 2.33409 16.3345L8.55625 10.1123L14.7788 16.3349C15.2084 16.7645 15.9049 16.7645 16.3344 16.3349C16.764 15.9053 16.764 15.2088 16.3344 14.7793L10.1119 8.55671L16.3348 2.33379C16.7644 1.90422 16.7644 1.20774 16.3348 0.778159C15.9052 0.348582 15.2087 0.348582 14.7792 0.778159L8.55625 7.00107L2.33372 0.778551C1.90415 0.348974 1.20767 0.348975 0.778089 0.778551C0.348513 1.20813 0.348513 1.90461 0.77809 2.33419L7.00061 8.55671L0.778451 14.7789Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
function headerFunc() {
  const headerCtn = document.querySelector("#app-header")!;
  const toggle = headerCtn.querySelector(".header-toggle")!;
  const menu = headerCtn.querySelector(".header-right")!;

  toggle.addEventListener("click", (e) => {
    e.preventDefault();

    toggle.classList.toggle("open");
    menu.classList.toggle("open");
  });
}
onMounted(() => {
  headerFunc();
});
</script>
<style lang="scss" scoped>
$var-breakpoints-xs: 0px;
$var-breakpoints-md: 834px;
$var-breakpoints-lg: 1200px;
$var-breakpoints-xl: 1400px;
$var-breakpoints-xxl: 1700px;
$var-breakpoints-xxxl: 1920px;

a {
  text-decoration: none;
  white-space: nowrap;
  word-break: keep-all;
  color: #404040;
}
svg {
  color: #006853;
}
.logo {
  height: 40px;
}
img {
  display: block;
}
.header-ctn {
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  background-color: #fffffff8;
}

.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 48px;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
}

.btn-tertiary {
  color: #ffffff;
  width: 160px;
}

.header-right {
  position: absolute;
  width: 100%;
  left: 0;
  top: 48px;
  overflow: hidden;
  transition: 0.2s ease all;
  height: 0;

  &.open {
    padding-top: 56px;
    height: calc(100vh - 48px);
    background-color: #fffffff8;
  }
}
.header-nav,
.header-user {
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    font-size: 20px;
    font-weight: 700;
    font-family: Lato system-ui;
    margin-bottom: 56px;
  }
}

.header-toggle {
  .toggle-list {
    display: flex;
  }
  .toggle-close {
    display: none;
  }
  &.open {
    .toggle-list {
      display: none;
    }
    .toggle-close {
      display: flex;
    }
  }
}

@media (min-width: 1200px) {
  .logo {
    height: 58px;
  }
  .btn-tertiary {
    width: 120px;
  }
  .header {
    width: $var-breakpoints-lg;
    height: 80px;
  }
  .header-right,
  .header-right.open {
    display: flex;
    padding-top: 0;
    left: initial;
    top: initial;
    flex-direction: row;
    height: auto;
    position: relative;
    justify-content: flex-end;
    a {
      margin-bottom: 0;
    }
  }
  .header-nav,
  .header-user {
    flex-direction: row;
    margin-left: 32px;
    a {
      font-size: 14px;
    }
  }
  .header-toggle {
    display: none;
  }
  .header-nav a {
    margin-left: 32px;
  }
  .header-user a {
    margin-left: 16px;
  }
}

@media (min-width: $var-breakpoints-xl) {
  .header {
    width: $var-breakpoints-xl;
  }
}

@media (min-width: $var-breakpoints-xxl) {
  .header {
    width: $var-breakpoints-xxl;
  }
}

@media (min-width: $var-breakpoints-xxxl) {
  .header {
    width: $var-breakpoints-xxxl;
  }
}

@media (max-width: $var-breakpoints-xl) {
  a {
    font-size: 20px;
  }
}
//

[class^="btn"] {
  cursor: pointer;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
  min-width: 120px;
  white-space: nowrap;
  word-break: keep-all;
  font-size: 14px;
  font-weight: 700;
  font-family: Lato, sans-serif;
}

.btn-tertiary {
  background-color: #e7641c;
  color: #fff;
  height: 40px;
}
.btn-tertiary:hover {
  background-color: #ff8c56;
}
.btn-tertiary:active {
}

.btn-tertiary.btn-outline {
  background-color: transparent;
  border: 2px solid #e7641c;
  color: #e7641c;
}
.btn-tertiary.btn-outline:hover {
  background-color: #ffede7;
}
</style>
<style lang="scss">
body {
  padding-top: 48px;
  @media screen and (min-width: 1200px) {
    padding-top: 80px;
  }
}
</style>
