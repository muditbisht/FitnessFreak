module.exports.userAnswerSerializer = function(user) {
    return user.answer.map(ans => ({
        _id: ans._id,
        answer: ans.answer,
        vote: {
            up: ans.vote_count.up,
            down: ans.vote_count.down
        },
        user: {
            _id: user._id,
            username: user.username,
            first_name: user.first_name,
            last_name: user.last_name,
            profile_image: user.profile_image
        },
        question: {
            _id: ans.quesId._id,
            title: ans.quesId.title,
            question: ans.quesId.question,
            category: ans.quesId.categoryName,
            tags: ans.quesId.tags,
            attachments: ans.quesId.attachments,
            posted_at: ans.quesId.created_at,
            user: {
                _id: ans.quesId.userId._id,
                username: ans.quesId.userId.username,
                first_name: ans.quesId.userId.first_name,
                last_name: ans.quesId.userId.last_name,
                profile_image: ans.quesId.userId.profile_image
            }
        }
    }));
}