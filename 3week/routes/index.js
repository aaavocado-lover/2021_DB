/*var express = require('express');
var router = express.Router();

// GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express!' });
});

module.exports = router;*/


import express from "express";
import sql from "../database/sql";

const router = express.Router();
router.get('/', async function(req, res, next){

  const student = await sql.getUsers()
  //console.log(student);
  res.render('index', {
    title: '사용자 목록',
    student
  });
});

module.exports = router;