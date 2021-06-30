<template>
  <v-app>
    <v-main>
      <v-container fluid fill-height>
        <v-layout class="align-center justify-center">
          <v-flex xs12 sm8 md6 lg5 xl3>
            <v-card class="elevation-12">
              <v-card-title class="primary white--text mb-8">
                注册
              </v-card-title>
              <v-card-text>
                <v-form ref="login_form">
                  <v-text-field
                    label="用户名"
                    name="username"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="registerForm.username"
                    :rules="[rules.required]"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    label="密码"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="registerForm.password"
                    :rules="[rules.required]"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  text
                  to="/login"
                  color="primary"
                >登录
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                  :loading="loginLoading"
                  color="primary"
                  @click="userRegister"
                >注册
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
import { register } from '@/api/user'

import { sync } from 'vuex-pathify'

export default {
  name: 'Register',
  components: {
    AppFooter: () => import('@/components/Footer')
  },
  data () {
    return {
      loginLoading: false,
      registerForm: {
        username: 'admin',
        password: 'admin'
      },
      rules: {
        required: v => !!v || '不能为空'
      }
    }
  },
  computed: {
    ...sync('user', [
      'token'
    ])
  },
  methods: {
    userRegister () {
      const _this = this
      if (!_this.$refs.login_form.validate()) return
      // 表单验证成功
      register(this.registerForm).then((response) => {
        _this.token = response.data
        _this.loginLoading = true
        _this.$dialog.message.success('注册成功，请进行登录')
        _this.$router.push('/login')
      })
    }
  }
}
</script>
