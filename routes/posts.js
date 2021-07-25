import { Router } from 'express'
const router = Router()
import * as postsCtrl from '../controllers/posts.js'

/* GET users listing. */
router.get('/', isLoggedIn, postsCtrl.index)
router.get('/new', isLoggedIn, postsCtrl.new)
router.get('/:id', isLoggedIn, postsCtrl.show)
router.post('/', isLoggedIn, postsCtrl.create)
router.put('/:id/show', isLoggedIn, postsCtrl.update)
router.delete('/:id/show', isLoggedIn, postsCtrl.delete)
router.post('/search', isLoggedIn, postsCtrl.search)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

export {
  router
}