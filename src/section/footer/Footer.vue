<template>
  <div class="footer-ctn">
    <div class="footer">
      <div class="footer-section">
        <div class="footer-contact">
          <a href="">
            <img src="./phone.svg" alt="" />
            (33) 4737 4976
          </a>
          <span>o</span>
          <a href="" class="footer-btn"> Applicar ahora </a>
        </div>
        <div class="social-logos">
          <a href="">
            <img src="./youtube.svg" alt="" />
          </a>
          <a href="">
            <img src="./linkedin.svg" alt="" />
          </a>
          <a href="">
            <img src="./twitter.svg" alt="" />
          </a>
          <a href="">
            <img src="./facebook.svg" alt="" />
          </a>
        </div>
      </div>
      <div class="footer-dvd"></div>
      <div class="footer-section footer-section-addr">
        <div class="site-map">
          <div>
            <div class="footer-font-md">PitchBull</div>
            <a href="">Aplica</a>
            <a href="">Despachos de Cobranza</a>
          </div>
          <div>
            <div class="footer-font-md">Recursos</div>
            <a href="">Simulador</a>
            <a href="">Preguntas Frecuentes</a>
            <a href="">Conócenos</a>
            <a href="">Blog</a>
            <a href="">Seguridad</a>
          </div>
          <div>
            <div class="footer-font-md">Legal</div>
            <a href="">Términos y Condiciones de uso de la plataforma</a>
            <a href="">Aviso de Privacidad</a>
          </div>
        </div>
        <div class="footer-dvd footer-hide-lg"></div>
        <div class="footer-addr">
          <div>Blvd. Puerta de Hierro N. 5153,</div>
          <div>Piso 2, Suite 233 A</div>
          <div>Fracc. Puerta de Hierro</div>
          <div>45116, Zapopan Jalisco.</div>
        </div>
      </div>
      <div class="footer-dvd"></div>
      <div class="footer-section">
        <div class="footer-ssl">
          <div>
            Capítulo2 es un sitio web seguro. Asegura encriptación punto a
            punto.
          </div>
          <div class="footer-ssl-link">
            <a href="">
              <img src="./ssl.jpg" alt="" />
            </a>
            <span
              >SSL (Capa de conexión segura) Certificado privado de
              encriptación.
            </span>
          </div>
        </div>
        <div>
          <div class="footer-friend-links">
            <a href="/UNE" target="_blank">
              <img class="une" src="./UNE.png" alt="" />
            </a>
            <a>
              <img class="cnbv" src="./cnbv.png" alt="" />
            </a>
            <a>
              <img class="afico" src="./asofom.png" alt="Logo de ASOFOM" />
            </a>
            <a>
              <img class="kpmg" src="./kpmg.png" alt="Logo de KPMG" />
            </a>
          </div>
          <div class="footer-friend-links">
            <a href="/buro" target="_blank">
              <img class="buro" src="./buro.png" alt="" />
            </a>
            <a>
              <img class="condusef" src="./condusef.png" alt="" />
            </a>
            <a>
              <img
                class="grumexo"
                src="./fin-ekonomi.png"
                alt="Logo de FinEkonomi"
              />
            </a>
            <a>
              <img
                class="al-goodbody"
                src="./goodbody.png"
                alt="Logo de A&L Goodbody"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="footer-dvd"></div>
      <div class="footer-desc">
        PITCHBULL MÉXICO, Sociedad Anónima Promotora de Inversión de Capital
        Variable, Sociedad Financiera de Objeto Múltiple, Entidad No Regulada
        (“PITCHBULL”), para su constitución y operación con tal carácter, no
        requiere de autorización de la Secretaría de Hacienda y Crédito Público,
        no obstante, se encuentra sujeta a la supervisión de la Comisión
        Nacional Bancaria y de Valores, únicamente para efectos de lo dispuesto
        por el artículo 56 de la Ley General de Organizaciones y Actividades
        Auxiliares del Crédito.
      </div>
      <div class="footer-desc">
        A partir del 25 de septiembre de 2019, por así convenir a nuestros
        intereses, dejamos de llevar a cabo operaciones de financiamiento
        colectivo y continuaremos ofreciendo crédito que se financiará
        únicamente a través de recursos propios y/o de dinero institucional. Por
        tanto, siguiendo el segundo párrafo de la Octava Transitoria de la Ley
        para Regular las Instituciones de Tecnología Financiera, nos
        abstendremos de continuar prestando nuestros servicios para la
        celebración de nuevas Operaciones mediante el financiamiento colectivo y
        realizaremos únicamente los actos tendientes a la conclusión de las
        Operaciones existentes reguladas en esta Ley.
      </div>
      <div class="footer-desc">
        © PitchBull 2022. Todos los derechos reservados.
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.footer-ctn {
  color: #ffffff;
  background-color: #006853;
  font-size: 12px;
  font-family: Lato system-ui;
  display: flex;
  justify-content: center;
}
a {
  color: #ffffff;
  text-decoration: none;
  display: flex;
  align-items: center;
}
.footer {
  padding: 24px 16px;
  width: 100%;
}
.footer-font-md {
  font-size: 16px;
  font-weight: 700;
}
.footer-font-lg {
  font-size: 24px;
  font-weight: 700;
}
.footer-dvd {
  height: 1px;
  background-color: #fff;
  width: 100%;
  margin-top: 24px;
  margin-bottom: 24px;
}
.footer-btn {
  height: 40px;
  width: 160px;
  font-size: 20px;
  font-weight: 700;
  font-family: Lato system-ui;
  background-color: #e7641c;
  color: #ffffff;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  &:hover {
    background-color: #ff8c56;
  }
}
.footer-section {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.footer-contact,
.social-logos {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.footer-addr {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer-ssl {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    max-width: 250px;
    text-align: center;
  }
}
.footer-ssl-link {
  display: flex;
  align-items: center;
  max-width: 250px;
}
.footer-friend-links {
  display: flex;
  justify-content: space-between;
  img {
    max-height: 24px;
  }
  .al-goodbody {
    max-height: 20px;
  }
}
.site-map {
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.footer-desc {
  text-align: center;
}
@media (min-width: 1200px) {
  .footer {
    padding: 30px 48px;
  }
  .footer-btn {
    font-size: 14px;
  }
  .footer-hide-lg {
    display: none;
  }
  .footer-section {
    flex-direction: row;
  }
  .footer-section-addr {
    flex-direction: row-reverse;
    text-align: left;
  }
  .footer-addr {
    align-items: flex-start;
    text-align: left;
  }
  .footer-ssl {
    div {
      text-align: left;
    }
  }
  .social-logos {
    align-items: center;
    width: auto;
    a {
      margin-left: 40px;
    }
  }
  .footer-contact {
    align-items: center;
    width: auto;
    > * {
      margin-right: 40px;
    }
  }
  .site-map {
    flex-direction: row;
    align-items: self-start;
    div {
      align-items: flex-end;
      max-width: 150px;
      text-align: right;
      margin-left: 100px;
    }
  }
  .footer-friend-links {
    display: flex;
    justify-content: space-between;
    .al-goodbody {
      max-height: 28px;
    }
    img {
      max-height: 32px;
      margin-left: 32px;
    }
  }
}
@media (min-width: 1700px) {
  .footer {
    padding: 30px 60px;
    width: 1700px;
  }
}
</style>
