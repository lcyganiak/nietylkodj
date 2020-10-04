<template>
  <div>
    <form
      class="contact-form"
      @submit.prevent="sendEmail"
    >
      <base-info-card
        :title="title"
        :subtitle="subtitle"
        space="4"
        class="red--text"
        color="primary"
      />
      <v-text-field
        v-model="formEmial.user_name"
        label="Imię i nazwisko"
        name="from_name"
        class="main"
        dense
        filled
        outlined
        required
      />
      <v-text-field
        v-model="formEmial.telefon"
        label="Telefon (opcjonalnie)"
        name="from_tele"
        dense
        outlined
      />
      <v-text-field
        v-show="false"
        v-model="formEmial.robo"
        label="Nie wypełniaj jak nie jesteś człowiekiem"
        dense
        outlined
      />
      <v-text-field
        v-model="formEmial.user_email"
        label="E-mail"
        name="from_email"
        type="email"
        required
        dense
        outlined
      />

      <v-textarea
        v-model="formEmial.message"
        label="Jak możemy pomóc?"
        outlined
        dense
        name="message_html"
        required
      />
      <div
        class="grid"
      >
        <v-checkbox
          v-model="checkbox"
          class="xd"
          style="width: 30%"
        />
        <span class="regulamin">
          Wyrażam zgodę na przetwarzanie moich danych zamieszczonych w niniejszym formularzu, zgodnie z ustawą o ochronie danych osobowych w celu udzielenia odpowiedzi na wpisane zapytanie. Oświadczam, że zapoznałem się z
          <span
            class="modal"
            @click="openModal(0)"
          >
            Klauzulą informacyjną
          </span> i
          <span
            class="modal"
            @click="openModal(1)"
          >
            Polityką prywatności
          </span>.
        </span>
      </div>
      <base-btn
        :color="!theme.isDark ? 'primary' : 'white'"
        outlined
        type="submit"
      >
        Wyślij wiadomość
      </base-btn>
    </form>
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      :top="true"
      color="rgba(0, 0, 0, 0.54)"
      style="color: primary"
      transition="scale-transition"
      rounded="pill"
    >
      {{ textSnackbar }}

      <template v-slot:action="{ attrs }">
        <v-btn
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-snackbar
      v-model="snackbarError"
      :timeout="timeout"
      :top="true"
      color="rgba(0, 0, 0, 0.54)"
      style="color: primary"
      transition="scale-transition"
      rounded="pill"
    >
      {{ textSnackbarError }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="red"
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        max-width="600px"
        max-height="1000px"
      >
        <v-card
          max-width="600px"
          class="mx-auto mb-8 primary"
          outlined
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title
                style="font-size: 15px; font-weight: 700; color: menuColor"
              />
            </v-list-item-content>
            <div v-html="toModal" />
          </v-list-item>
          <v-card-actions>
            <v-btn
              text
              style="font-size: 15px; font-weight: 700; color: menuColor"
              @click="dialog = false"
            >
              Zamknij
            </v-btn>
            <v-spacer />
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
  import emailjs from 'emailjs-com'
  import coursesService from '@/service/nietylkodj.service.js'
  import * as R from 'ramda'
  export default {
    name: 'BaseContactForm',

    // Injected from the Vuetify Themeable mixin
    inject: ['theme'],
    props: {
      subtitle: String,
      title: {
        type: String,
        default: 'Zapraszamy serdecznie do kontaktu',
      },
    },
    data () {
      return {
        formEmial: {
          user_name: '',
          telefon: '',
          user_email: '',
          message: '',
          robo: '',
        },
        checkbox: false,
        snackbar: false,
        snackbarError: false,
        timeout: 3000,
        textSnackbar: 'Wiadomości została wysłana',
        textSnackbarError: 'Niestety nie udał osię wysłać wiadomości',
        dialog: false,
        pp: [],
        toModal: '',
      }
    },
    created () {
      this.setUp()
    },

    methods: {
      async setUp () {
        try {
          this.pp = R.propOr(null, 'data', await coursesService.polityki())
          console.log(this.pp)
        } catch (err) {
          console.log(err)
        }
      },
      sendEmail (e) {
        if (this.formEmial.robo === '' && this.checkbox) {
          emailjs.sendForm('piotrlamus_gmail_com', 'template_7zbclMgH', e.target, 'user_DLgdcpuwd8noaDxb8mvaG')
            .then((result) => {
              this.snackbar = true
              this.formEmial = {
                user_name: '',
                telefon: '',
                user_email: '',
                message: '',
                robo: '',
              }
            }, (error) => {
              console.log(error)
              this.snackbarError = true
              e.target = ''
            })
        }
      },
      openModal (number) {
        this.dialog = true
        this.toModal = this.pp[number].description
      },
    },
  }
</script>
<style >

  .regulamin {
    font-size: 11px;
    color: rgb(248, 204, 61);
    margin-top: 13px;
    margin-bottom: 13px;
  }
.v-text-field--outlined fieldset {

 border-color: rgb(248, 204, 61);

}
.theme--light.v-input input, .theme--light.v-input textarea {
  color:rgb(248, 204, 61);
}
.theme--light.v-input label {
  color:rgb(248, 204, 61);
}
.mdi-checkbox-blank-outline::before {
  color:rgb(248, 204, 61);
}
.xd {
  width: 30%;
}
.grid {
  display: grid;
  grid-template-columns: 10% 90%;
}
.modal {
  text-decoration: underline;
  cursor: pointer;
}
.pol {
  color: cadetblue;
}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
.grid {
  display: grid;
  grid-template-columns: auto;
}
}
</style>
