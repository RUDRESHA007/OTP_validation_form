const express = require('express')
const app = express();
const bodyParser = require('body-parser');
var ejs = require('ejs');
var path = require('path');
var alert = require('alert');
const port = 3000



const public_path = path.join(__dirname, '../public')
app.use(express.static(public_path + '/css'))
app.use(express.static(public_path + '/js'))
app.use(express.static(public_path + '/tools'))



//dynamiclly pass data using ejs
let html_path = path.join(__dirname, '../template/views')
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.set('views', html_path);

//body parser initialization
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {


  res.render('index', { data: '' });


})


app.get('/validation', (req, res) => {
  
  const email = req.query.email
  const select = req.query.option
  const obj = {
    email: email,
    option: select
  }
  function generateOTP() {

    // Declare a digits variable
    // which stores all digits
    var digits = '0123456789';
    var OTP = '';
    for (let i = 0; i < 5; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
  }
  const gen_otp = generateOTP()

  alert(`your generated otp is : ${gen_otp}`)
  res.render('otp_validation', {
    error: '',
    'gen_otp': gen_otp,
    data:obj
  });


})
app.post('/entered_otp', (req, res) => {
  const num1 = req.body.t1
  const num2 = req.body.t2
  const num3 = req.body.t3
  const num4 = req.body.t4
  const num5 = req.body.t5
  const gen_otp = req.body.gen_otp
  const entered_otp = `${num1}${num2}${num3}${num4}${num5}`

  if (gen_otp === entered_otp) {
    res.render('success.html');

  }
  else {
    res.render('otp_validation.html',
      {
        error: 'wrong otp',
        gen_otp: gen_otp
      })

  }


})
app.get('/otp', (req, res) => {



})











app.listen(port, err => {
  if (err)
    throw err
  console.log('Server listening on port', port)
})