import request from '@/plugins/axios'

/**
 * GET /user : 查询所有用户
 *
 * @return 用户列表
 */
export function findAllUsers () {
  return request({
    method: 'get',
    url: '/user'
  })
}

/**
 * POST /user/login : 登录
 *
 * @param user 用户
 * @return token
 */
export function login (user) {
  return request({
    method: 'post',
    url: '/user/login',
    data: user
  })
}
/**
 * POST /user/login : 登录
 *
 * @param user 用户
 */
export function register (user) {
  return request({
    method: 'post',
    url: '/user/register',
    data: user
  })
}
