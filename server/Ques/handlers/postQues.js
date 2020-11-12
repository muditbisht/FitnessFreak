const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const CLIENT_LOGIN_PAGE_URL = "http://localhost:3000";
const CLIENT_HOME_PAGE_URL = "http://localhost:3000/feed/app";
const { Ques, User } = require("../../Models");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.post("/", (req, res) => {

    const user_id = req.user.id;
    const category = req.body.category;
    const tags = req.body.tags;
    const question = req.body.Ques;


    const ques = new Ques({
        question: question,
        upDown: [],
        answers: [],
        categoryName: category,
        userId: user_id,
        tags: tags
    })

    ques.save(err => {

        if (err) return res.redirect(CLIENT_LOGIN_PAGE_URL);

        User.findById(user_id).exec((err, user) => {

            user.question.push(ques._id);
            user.save(err => {
                if (err) return res.redirect(CLIENT_LOGIN_PAGE_URL)
                return res.redirect(CLIENT_HOME_PAGE_URL);
            })
        })
    })
})



module.exports = router