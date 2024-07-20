// auth.route.js
import express from 'express';
import { signin, signup } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    await signup(req, res);
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.post('/signin', async( req, res)=>{
  try{
    await signin(req, res);

  }
  catch(error) {
    console.error('Signin error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
})

export default router;
