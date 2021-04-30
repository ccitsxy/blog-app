<template>
  <v-app>
    <v-main>
      <v-container fluid fill-height>
        <v-layout class="align-center justify-center">
          <v-flex xs12 sm8 md6 lg5 xl3>
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>登录</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form ref="login_form">
                  <v-text-field
                    label="账号"
                    name="username"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="loginForm.username"
                    :rules="[rules.required]"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="密码"
                    name="password"
                    prepend-icon="mdi-lock"
                    :type="passwordDisplay ? 'text' : 'password'"
                    v-model="loginForm.password"
                    :append-icon="passwordDisplay ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="passwordDisplay = !passwordDisplay"
                    :rules="[rules.required]"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  text
                  to="/register"
                  color="primary"
                >注册
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                  :loading="loginLoading"
                  color="primary"
                  @click="userLogin"
                >登录
                </v-btn
                >
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'Login',
  data: () => ({
    passwordDisplay: false,
    loginLoading: false,
    loginForm: {
      username: 'admin',
      password: 'admin'
    },
    rules: {
      required: value => !!value || 'Required.'
    }
  }),
  methods: {
    userLogin () {
      const _this = this
      if (!_this.$refs.login_form.validate()) return
      // 表单验证成功
      _this.loginLoading = true
      this.$http.post(process.env.VUE_APP_BASE_API +
        '/user/login', this.loginForm).then((response) => {
        this.token = response.data
        console.log(this.token)
      })
    }
  }
}
</script>
