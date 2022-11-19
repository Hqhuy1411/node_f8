
class NewController {

    // [Get] /news
    index (req, res){
        res.render('hello')
    }

    // [Get] /news/:slug
    show (req, res){
        res.render('NEW DETAILS')
    }
}
module.exports = new NewController;