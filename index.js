const spy = ['Guadalupe', 'Ollie', 'Aki']
function writeCards(spy){

    const surprise = []
    for (let i = 0; i<spy.length; i++ ){

        surprise.push (`Thank you, ${spy[i]}, for the wonderful surprise gift!`)
        console.log(surprise)

    }

    return surprise;
}

function countDown (){
    for (let p = 10; p>=0; p--){
        console.log(p)
    }
}

countDown()