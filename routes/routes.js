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
  res.render('pages/challenges/fizzbuzz', {title: 'Fizzbuzz Challenge'})
})

// PALINDROME
router.get('/challenges/palindrome', (req,res) => {
  res.render('pages/challenges/palindrome', { title: 'Palindrome Challenge' })
})

// ANAGRAM
router.get('/challenges/anagram', (req,res) => {
  res.render('pages/challenges/anagram', { title: 'Anagram Challenge' })
})

// TITLE-CASE
router.get('/challenges/title-case', (req,res) => {
  res.render('pages/challenges/title-case', { title: 'Title Case Challenge' })
})

// REPEAT-STRING
router.get('/challenges/repeat-string', (req,res) => {
  res.render('pages/challenges/repeat-string', { title: 'Repeat String Challenge' })
})

// LONGEST WORD
router.get('/challenges/longest-word', (req,res) => {
  res.render('pages/challenges/longest-word', { title: "Longest Word Challenge"})
})

// INSERTION SORT
router.get('/challenges/insertion-sort', (req,res) => {
  res.render('pages/challenges/insertion-sort', { title: 'Insertion Sort Challenge'})
})

// MERGE SORT
router.get('/challenges/merge-sort', (req,res) => {
  res.render('pages/challenges/merge-sort', { title: 'Merge Sort Challenge'})
})

// QUICK SORT
router.get('/challenges/quick-sort', (req,res) => {
  res.render('pages/challenges/quick-sort', { title: 'Quick Sort Challenge'})
})

// SELECTION SORT
router.get('/challenges/selection-sort', (req,res) => {
  res.render('pages/challenges/selection-sort', { title: 'Selection Sort Challenge'})
})
// BUBBLE SORT
router.get('/challenges/bubble-sort', (req,res) => {
  res.render('pages/challenges/bubble-sort', { title: 'Bubble Sort Challenge'})
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