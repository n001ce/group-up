import { Router } from 'express'
import * as statsCtrl from '../controllers/stats.js'

export {
  router
}

const router = Router()


router.post('/search', isLoggedIn, statsCtrl.search)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}