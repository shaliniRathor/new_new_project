function home(req,res){
    res.send({message:"serch your product"})
}

function menu(req,res){
    res.send({message:"all items"})
}

function contact_us(req,res){
    res.send({phone_no: "8585993617"})
}

function about_us(req,res){
    res.send({message:"our all information are here"})
}

function help(req,res){
    res.send({message:"how can we help us"})
}

function addToCart(req,res){
    const info = req.params
    console.log(info);
    res.send({message:"add to all your favroute items" ,info,})
}


function lists (req,res){
    res.send({lists: "all items are available"})
}

function newArrivals (req,res){
    res.send({ new: "new arrivals are here"})
}

exports.home=home
exports.menu=menu
exports.contact_us=contact_us
exports.about_us=about_us
exports.help=help
exports.lists=lists
exports.newArrivals=newArrivals
exports.addToCart=addToCart