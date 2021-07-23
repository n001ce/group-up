import { Router } from 'express'
import passport from 'passport'

export {
  router
}

const router = Router()

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
)

router.get(
  '/google/oauth2callback',
  passport.authenticate('google', {
    successRedirect: '/profile',
    failureRedirect: '/auth/google',
  })
)

router.get('/logout', function (req, res) {
  req.logout()
  res.redirect('/')
})

