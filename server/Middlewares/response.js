module.exports = function response(req, res) {
    return res.send({
        isAuthenticated: req.isAuthenticated(),
        ...res.data
    });
}