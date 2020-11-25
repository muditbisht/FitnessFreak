const express = require("express");
const router = express.Router();
const { isAuthenticated } = require("../Middlewares");
const {
    postAnswerHandler,
    postQuestionHandler,
    getOneQuestionHandler,
    getQuestionsHandler,
    addVoteHandler,
    editVoteHandler,
    saveBookMark,
    isBookMarked,
    getTypeOfQuestionsHandler 
} = require('../Handlers').QuestionHandler;


router.use(isAuthenticated);
router.get("/getQuestions", getQuestionsHandler);
router.get("/getQuestions/:id", getOneQuestionHandler);
router.post("/postQuestion", postQuestionHandler);
router.post("/postAnswer", postAnswerHandler);
router.post("/votes/byUser", addVoteHandler);
router.post("/votes/editVote", editVoteHandler);
router.post("/saveBookMark",saveBookMark);
router.post("/isBookMarked",isBookMarked);
router.get("/:name", getTypeOfQuestionsHandler);
module.exports = router;