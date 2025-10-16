<template>
  <div>
    <section class="contact-us min-h-300 my-10 px-10 xl:px-20">
      <div class="flex max-w-screen-xxl mx-auto flex-wrap min-h-600">
        <div class="w-full md:w-1/2">
          <h1 class="text-3xl sm:text-6xl text-fidsy_main_3 md:text-center md:pr-15">Get in touch</h1>
        </div>
        <div class="w-full md:w-1/2">
          <template v-if="success">
            <div class="pt-7 success-bg min-h-500 bg-no-repeat bg-right bg-contain">
              <h3 class="my-5 md:my-0 text-[28px]">Thanks for reaching out!</h3>
              <div class="mt-2">One of our team will be in touch soon.</div>
              <IconButton class="mt-10 mx-auto" text="Send another" icon="mail" filled @click="success = false" />
            </div>
          </template>
          <template v-else>
            <h2 class="my-4 md:my-0 text-xl font-500 sm:font-400 sm:text-4xl tracking-wide">We value your input and appreciate your interest in <span class="text-fidsy_main_2">Fidsy</span></h2>
            <div class="mt-4">Our team is dedicated to providing you with the best possible support and assistance.</div>
            <div class="mt-4">
              <div class="flex flex-wrap">
                <div class="w-full sm:w-1/2 pr-0 sm:pr-2 mt-4 mb-2">
                  <Input v-model="firstName" :error="firstNameError ? 'This field is required' : ''" label="First Name" class="w-full" @keyup="firstNameError = false" />
                </div>
                <div class="w-full sm:w-1/2 pr-0 sm:pl-2 mt-4 mb-2">
                  <Input v-model="lastName" :error="lastNameError ? 'This field is required' : ''" label="Last Name" class="w-full" @keyup="lastNameError = false" />
                </div>
                <div class="w-full pr-0 mt-4 mb-2">
                  <Input v-model="email" type="email" :error="emailError ? 'A valid email address is required' : ''" label="Email" class="w-full" @keyup="emailError = false" />
                </div>
                <div class="w-full sm:w-1/2 pr-0 sm:pr-2 mt-4 mb-2">
                  <Input v-model="organisation" label="Organisation (Optional)" class="w-full" />
                </div>
                <div class="w-full sm:w-1/2 pr-0 sm:pl-2 mt-4 mb-2">
                  <Input v-model="position" label="Position (Optional)" class="w-full" />
                </div>
                <div class="w-full mt-4 mb-2">
                  <Textarea v-model="message" :error="messageError ? 'This field is required' : ''" label="Message" class="w-full min-h-100" @keyup="messageError = false" />
                </div>
                <div class="flex justify-between w-full mt-4 mb-2 flex-wrap">
                  <span class="text-red-600 italic text-13 w-full mb-4 md:my-0 md:w-auto">{{ error }}</span>
                  <IconButton class="mx-auto md:ml-auto" text="Send message" icon="mail" filled @click="submit" />
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
/* global grecaptcha */
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import { contactForm } from '../helpers/api';
import { isEmail, isEmpty } from '../helpers/validators';
import IconButton from '../components/ui/IconButton';

export default {
  name: 'Contact',
  components: { IconButton, Textarea, Input },
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      organisation: '',
      position: '',
      message: '',
      success: false,
      firstNameError: false,
      lastNameError: false,
      emailError: false,
      messageError: false,
      error: '',
    };
  },
  methods: {
    submit() {
      this.error = '';
      this.firstNameError = false;
      this.lastNameError = false;
      this.emailError = false;
      this.messageError = false;

      if (isEmpty(this.firstName)) {
        this.firstNameError = true;
      }
      if (isEmpty(this.lastName)) {
        this.lastNameError = true;
      }
      if (isEmpty(this.email) || !isEmail(this.email)) {
        this.emailError = true;
      }
      if (isEmpty(this.message)) {
        this.messageError = true;
      }

      if (this.firstNameError || this.lastNameError || this.emailError || this.messageError) {
        return;
      }

      try {
        grecaptcha.ready(() => {
          grecaptcha.execute('6LdCk70ZAAAAACBtGDiMQ7MXhLoh1656k3O6FyQM', { action: 'submit' }).then(async (token) => {
            const response = await contactForm(this.firstName, this.lastName, this.email, this.organisation, this.position, this.message, token);

            if (response.status === 200) {
              this.success = true;
              this.firstName = '';
              this.lastName = '';
              this.email = '';
              this.organisation = '';
              this.position = '';
              this.message = '';
              window.scrollTo(0, 0);
            } else {
              this.error = 'Failed to send your message. Please try again shortly.';
            }
          });
        });
      } catch (e) {
        this.error = 'Failed to send your message. Please try again shortly.';
      }
    },
  },
};
</script>
<style lang="scss">
.contact-us {
  background-image: url('@/assets/image/contact/contact-us-bg.png');
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: auto 80%;
}
.success-bg {
  background-image: url('@/assets/image/contact/success-bg.png');
}
</style>
