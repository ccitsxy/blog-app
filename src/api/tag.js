import request from '@/plugins/axios'

/**
 * GET /tag : 查询所有标签
 *
 * @return 标签列表
 */
export function findAllTags () {
  return request({
    method: 'get',
    url: '/tag'
  })
}

/**
 * GET /tag/{page}/{size} : 查询所有标签并分页
 *
 * @param page 页号 (required)
 * @param size 分页大小 (required)
 * @return 标签列表 (分页)
 */
export function findAllByPage (page, size) {
  return request({
    method: 'get',
    url: `/tag/${page}/${size}`
  })
}

/**
 * GET /tag/{tid} : 按id查询标签
 *
 * @param tid 标签id (required)
 * @return 标签
 */
export function findByTid (tid) {
  return request({
    method: 'get',
    url: `/tag/${tid}`
  })
}

/**
 * POST /tag : 新建或修改标签
 *
 * @param tag 标签
 */
export function createOrUpdateTag (tag) {
  return request({
    method: 'post',
    url: '/tag',
    dara: tag
  })
}
