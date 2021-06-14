const express = require('express')
const PortfolioSchema = require('../model/portfolio-contact')
const router = express.Router();

// HOME ROUTE
router.get('/', (req,res) => {
  res.render('pages/index.ejs')
})

// ROUTE FOR THE CONTACT FORM
router.post('/add-message', (req,res) => {
  let portfolioForm = new PortfolioSchema({
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message,
  })

  portfolioForm.save((err) => {
    if(err){
      console.error(err)
      res.json({message: err.message})
    } else {
      res.redirect('/')
    }
  })
})

// CHALLENGES ROUTES
// FIZZBUZZ
router.get('/challenges/fizzbuzz', (req,res) => {
  res.render('pages/challenges/fizzbuzz')
})

// PALINDROME
router.get('/challenges/palindrome', (req,res) => {
  res.render('pages/challenges/palindrome')
})

// ANAGRAM
router.get('/challenges/anagram', (req,res) => {
  res.render('pages/challenges/anagram')
})

// TITLE-CASE
router.get('/challenges/title-case', (req,res) => {
  res.render('pages/challenges/title-case')
})

// REPEAT-STRING
router.get('/challenges/repeat-string', (req,res) => {
  res.render('pages/challenges/repeat-string')
})

// LONGEST WORD
router.get('/challenges/longest-word', (req,res) => {
  res.render('pages/challenges/longest-word')
})


// BLOG ROUTES

// FIRST BLOG
router.get('/blog/how-to-use-coingecko-api', (req,res) => {
  res.render('pages/blogs/first-blog')
})

// SECOND BLOG
router.get('/blog/tips-on-solving-coding-challenges', (req,res) => {
  res.render('pages/blogs/second-blog')
})

// THIRD BLOG
router.get('/blog/tips-on-improving-web-design', (req,res) => {
  res.render('pages/blogs/third-blog')
})

// PORTFOLIO RESUME ROUTE
router.get('/resume', (req,res) => {
  res.render('partials/resume/resume')
})

// 404 PAGE

module.exports = router;