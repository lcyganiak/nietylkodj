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
      <p class="regulamin">
        *Dane wpisane w formularzu kontaktowym będą wykorzystywane do jednorazowego kontaktu i nie będą gromadzone ani przetwarzane.
      </p>
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
  </div>
</template>

<script>
  import emailjs from 'emailjs-com'
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
        snackbar: false,
        snackbarError: false,
        timeout: 2000,
        textSnackbar: 'Wiadomości została wysłana',
        textSnackbarError: 'Niestety nie udał osię wysłać wiadomości',
      }
    },
    methods: {
      sendEmail (e) {
        if (this.formEmial.robo === '') {
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
    },
  }
</script>
<style >

  .regulamin {
    font-size: 11px;
    color: rgb(248, 204, 61)
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
</style>
