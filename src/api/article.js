import request from '@/plugins/axios'

/**
 * GET /article : 查询所有文章
 *
 * @return 文章列表
 */
export function findAllArticles () {
  return request({
    method: 'get',
    url: '/article'
  })
}

/**
 * GET /article/{page}/{size} : 查询所有文章并分页
 *
 * @param page 页号 (required)
 * @param size 分页大小 (required)
 * @return 文章列表 (分页)
 */
export function findAllByPage (page, size) {
  return request({
    method: 'get',
    url: `/article/${page}/${size}`
  })
}

/**
 * GET /article/category/{cid}/{page}/{size} : 按分类查询所有文章并分页
 *
 * @param cid  分类id (required)
 * @param page 页号 (required)
 * @param size 分页大小 (required)
 * @return 文章列表 (分页)
 */
export function findAllByCategory (cid, page, size) {
  return request({
    method: 'get',
    url: `/article/category/${cid}/${page}/${size}`
  })
}

/**
 * GET /article/tag/{tid}/{page}/{size} : 按标签查询所有文章并分页
 *
 * @param tid  标签id (required)
 * @param page 页号 (required)
 * @param size 分页大小 (required)
 * @return 文章列表 (分页)
 */
export function findAllByTag (tid, page, size) {
  return request({
    method: 'get',
    url: `/article/tag/${tid}/${page}/${size}`
  })
}

/**
 * GET /article/archive/{year}/{month}/{page}/{size} : 按归档查询所有文章并分页
 *
 * @param year  年 (required)
 * @param month 月 (required)
 * @param page  页号 (required)
 * @param size  分页大小 (required)
 * @return 文章列表 (分页)
 */
export function findAllByArchive (year, month, page, size) {
  return request({
    method: 'get',
    url: `/article/archive/${year}/${month}/${page}/${size}`
  })
}

/**
 * GET /article/{aid} : 按id查询文章
 *
 * @param aid 文章id (required)
 * @return 文章
 */
export function getArticleByAid (aid) {
  return request({
    method: 'get',
    url: `/article/${aid}`
  })
}

/**
 * GET /article/archive : 查询所有归档
 *
 * @return 归档列表
 */
export function archiveAll () {
  return request({
    method: 'get',
    url: '/article/archive'
  })
}

/**
 * POST /article : 新建或修改文章
 *
 * @param article 文章
 */
export function createOrUpdateArticle (article) {
  return request({
    method: 'post',
    url: '/article',
    data: article
  })
}
