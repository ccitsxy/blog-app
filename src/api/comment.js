import request from '@/plugins/axios'

/**
 * GET /comment/article/{aid}/{page}/{size} : 按文章ID查询所有评论并分页
 *
 * @param aid  文章ID (required)
 * @param page  页号 (required)
 * @param size  分页大小 (required)
 * @return 评论列表 (分页)
 */
export function findAllCommentsByAid (aid, page, size) {
  return request({
    method: 'get',
    url: `/comment/article/${aid}/${page}/${size}`
  })
}
