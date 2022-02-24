function printdate(){
    let date = new Date()
    console.log(date)
    
    }
    
    function printmonth(){
    let d = new Date()
    console.log(d.getMonth())
    }
     function getBatchinfo(){
    console.log("Thorium, W3D1, the topic for today is Nodejs module system")
     }
    
    module.exports.printdate=printdate
    module.exports.printmonth=printmonth
    module.exports.getBatchinfo = getBatchinfo