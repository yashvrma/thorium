let logger = require('../logger/logger')
const express = require('express');
const router = express.Router();
let formatter = require("./validator/formatter")
let helper = require("./util/helper")
const lodash = require('lodash')

router.get('/test-me', function (req, res) {
    logger.welcome()
    formatter.val()
    helper.printdate()
    helper.printmonth()
    helper.getBatchinfo()
    res.send('My First ever api')
});
router.get('/hello', function (req, res) {
    let arr = ["jan", "feb", "march","april","may", "june", "july", "august", "sept", "october", "november", "december" ]
    console.log(lodash.chunk(arr,4));

    let arr2 =[1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    console.log(lodash.takeRightWhile(arr2));

    let first = [9, 7, 6, 5, 4, 8, 5,]
    let second = [7, 5, 6, 4, 12, 13]
    let third =[9, 8, 6, 5, 4, 12, 11]
    let fourth = [10, 14, 9, 8, 7, 5, 6]
    let fifth = [20, 11, 5, 7, 6, 32, 45]

    console.log(lodash.union(first,second,third,fourth,fifth));

    let pairs = [['horror', 'The shining'], ['drama', 'Titanic'], ['Thriller', 'Baaz']];
    console.log(lodash.fromPairs(pairs));
    res.send('my first lodash')

})
module.exports = router;