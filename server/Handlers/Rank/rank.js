const { Ques, Ans, User, Tag } = require("../../Models");
const hasUserOwnProperty = require("../Question/utilis").hasUserOwnProperty

module.exports.getRankByCategory = async function(req, res) {

    const category = req.params.name;
    let obj = {isAuthenticated : true,
                    data : ""}
    try{
        const users = await User.find({}, "username score").exec()
    
        console.log("users = ", users)
        let result =  users.map((user) => {
        let index = hasUserOwnProperty(user, category)
        console.log(`category = ${category} and index = ${index}`)
        if(index !== -1)
        {
            console.log("userScore = ",user.score[index].score)
            return {_id : user._id, username : user.username, score : user.score[index].score};
        }
         })
        console.log("result = ", result)
        result.sort((x, y) => x.score > y.score);
        obj.data = result;
    }
    catch(err){
         console.log("err in getting Rank By category ", err);
        obj.data = err;
        obj.isAuthenticated = false;
    }
    finally{
        return res.send(obj);
    }

}

