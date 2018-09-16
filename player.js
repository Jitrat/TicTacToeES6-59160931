class Player{
    //               dafault parameter
    //                      |
    //                      v
    constructor(name = "unknown"){
        this.name = name

    }

    getName(){
        return  this.name
    }
}

module.exports = Player