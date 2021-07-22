export {
    index,
  }
  
  function index(req, res) {
    res.render('index', {
      title: 'Group Up',
      user: req.user ? req.user : null 
    })
  }
