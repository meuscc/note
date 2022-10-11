<template>
  <header class="custom-class">
    <div class="ctn">
      <div class="header flex justify-between items-center">
        <a href="/">
          <img
            class="logo"
            src="../../assets/brand-logo.svg"
            width="322"
            height="71"
            alt="Brand logo"
          />
        </a>
        <div class="text-[2.0rem] font-bold [&>*]:ml-[40px]">
          <a href="http://pitchbull.mx/productos">Productos</a>
          <a href="http://pitchbull.mx/simulador-de-préstamos">Simulador</a>
          <a href="https://pitchbull.mx/preguntas-frecuentes/"
            >Preguntas frecuentes</a
          >
          <a href="https://pitchbull.mx/conocenos/">Conócenos</a>
          <a href="https://www.pitchbull.mx/blog/">Blog</a>
        </div>
        <div class="flex flex-nowrap space-x-4">
          <a
            class="btn-secondary font-normal h-[61px] px-[18px] flex items-center"
            href="https://www.pitchbull.mx/funding/login/index.xhtml"
            >Ingresar</a
          >
          <a
            class="btn-tertiary font-bold h-[61px] px-[18px] flex items-center"
            href="https://www.pitchbull.mx/prestamo/solicitar.xhtml/"
            >Aplicar ahora</a
          >
        </div>
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
@import "/src/styles/mixins/responsive";
:root {
  --v-layout-header-height: var(--v-layout-header-height-xs);
}
@include devices(tablet) {
  :root {
    --v-layout-header-height: var(--v-layout-header-height-md);
  }
}
@include devices(desktop) {
  :root {
    --v-layout-header-height: var(--v-layout-header-height-lg);
  }
}
a {
  color: var(--s-text-main);
  text-decoration: none;
  white-space: nowrap;
  word-break: keep-all;
}

.header {
  height: var(--v-layout-header-height);
}

.logo {
  height: 40px;
  @include devices(tablet) {
    height: 58px;
  }
}
</style>
