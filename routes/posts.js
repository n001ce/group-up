import { Router } from 'express'
const router = Router()
import * as postsCtrl from '../controllers/posts.js'

/* GET users listing. */
router.get('/', postsCtrl.index)
router.get('/:id', postsCtrl.show)
router.post('/', postsCtrl.create)
router.get('/new', postsCtrl.new)
router.put('/:id/show', postsCtrl.update)
router.delete('/:id/show', postsCtrl.delete)
router.post('/search', isLoggedIn, postsCtrl.search)


export {
  router
}