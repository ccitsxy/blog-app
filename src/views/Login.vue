<template>
  <v-app>
    <v-main>
      <v-container fluid fill-height>
        <v-layout class="align-center justify-center">
          <v-flex xs12 sm8 md6 lg5 xl3>
            <v-card class="elevation-12">
              <v-card-title class="primary white--text mb-8">
                登录
              </v-card-title>
              <v-card-text>
                <v-form ref="login_form">
                  <v-text-field
                    label="用户名"
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
    <app-footer path="/" name="博客"/>
  </v-app>
</template>

<script>
import { login } from '@/api/user'

import { sync } from 'vuex-pathify'

export default {
  name: 'Login',
  components: {
    AppFooter: () => import('@/components/Footer')
  },
  data () {
    return {
      passwordDisplay: false,
      loginLoading: false,
      loginForm: {
        username: 'admin',
        password: 'admin'
      },
      rules: {
        required: value => !!value || 'Required.'
      }
    }
  },
  computed: {
    ...sync('user', [
      'token'
    ])
  },
  methods: {
    userLogin () {
      const _this = this
      if (!_this.$refs.login_form.validate()) return
      // 表单验证成功
      login(_this.loginForm).then((response) => {
        _this.token = response.data
        localStorage.setItem('token', _this.token)
        _this.loginLoading = true
        _this.$dialog.message.success('登录成功', {
          position: 'top',
          timeout: 500
        })
        _this.$router.push('/')
      })
    }
  }
}
</script>
