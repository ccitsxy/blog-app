import request from '@/plugins/axios'

/**
 * GET /category : 查询所有标签
 *
 * @return 标签列表
 */
export function findAllCategories () {
  return request({
    method: 'get',
    url: '/category'
  })
}

/**
 * GET /category/{page}/{size} : 查询所有分类并分页
 *
 * @param page 页号 (required)
 * @param size 分页大小 (required)
 * @return 标签列表 (分页)
 */
export function findAllByPage (page, size) {
  return request({
    method: 'get',
    url: `/category/${page}/${size}`
  })
}

/**
 * GET /category/{cid} : 按id查询分类
 *
 * @param cid 分类id (required)
 * @return 分类
 */
export function findAllByCid (cid) {
  return request({
    method: 'get',
    url: `/category/${cid}`
  })
}

/**
 * POST /category : 新建或修改分类
 *
 * @param category 分类
 */
export function createOrUpdateCategory (category) {
  return request({
    method: 'post',
    url: '/category',
    data: category
  })
}

/**
 * DELETE /category/{cid}
 *
 * @param cid 分类id
 */
export function deleteCategory (cid) {
  return request({
    method: 'delete',
    url: `/category/${cid}`
  })
}
