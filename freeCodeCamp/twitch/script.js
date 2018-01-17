
const users = ["freecodecamp","ESL_SC2", "OgamingSC2", "cretetion", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var globalUserStreamData    = [];//online and username
var globalUserChannelData   = [];//all other info

// make ajax call to find out if user is online- function should pass true or false
//make ajax call with userdata to get logo, url stream, and if account exists

makeAjax(`https://api.twitch.tv/kraken/streams/`, users,(res) => {
    res.forEach((userObj) => {
        var userData = {}
        // console.log(userObj)

        // get user name in url
        let user = userObj._links.self
        // seperate to get username alone
        let userName = getUserName(user)
        // push to blank object
        userData['username'] = userName

        // check if useronline
        if(userObj.stream != null){
            userData['online'] = true;
        } else {
            userData['online'] = false
        }

        // get user live feed
        // if(userObj.stream != null){
        //     let feed = userObj.stream.channel.url
        //     userData['feed'] = feed;
        // } else {
        //     userData['feed'] = "offline";
        // }
        // if(userObj.stream != null){
        //     let game = userObj.stream.channel.game
        //     userData['game'] = game;
        // } else {
        //     userData['feed'] = null;
        // }
        // if(userObj.stream != null){
        //     let logo = userObj.stream.channel.logo
        //     userData['logo'] = logo;
        // } else  {
        //     userData['logo'] = "offline"
        // }
        //
        // console.log(userData)
        // var html = makeHTML(userData)
        // displayResults(html,"#results")

        globalUserStreamData.push(userData)
    })
})

makeAjax(`https://api.twitch.tv/kraken/channels/`, users,(res) => {

        // callback does not return a value here
        setOnlineStatus(res,() => {
          // make html out of user data
            let html = makeHTML(globalUserChannelData)
            // // put html into display logic
            displayResults(html, "#results")
            // select all classes in nodelist
            let feeds = document.querySelectorAll('.feed')
            let resultsContainers = document.querySelectorAll('.results-container')
            // loop through json
            globalUserChannelData.forEach((user,index) => {
                // if true, use index to set that one to addclass
                if(user.online === true){
                    feeds[index].classList.add('online')
                }
                if(user.online === true){
                    resultsContainers[index].classList.add('alert-success')
                } else {
                    resultsContainers[index].classList.add('alert-info')

                }

            })
        })

})


// on call to /channel make userObj, and call array merge logic
function setOnlineStatus(response,callback){
    response.forEach((userObj) => {
        // console.log(userObj)
        let userData = {}
        // check user is active
        if(userObj.status != null){
            let userName = userObj.display_name;
            let status = userObj.status;
            let feed = userObj.url;
            let logo = userObj.logo;
            userData = {
                'username':userName,
                'status':status,
                'feed': feed,
                'logo':logo
            }
        } else {
            // stop if value is null
            return
        }
        // push to global array
        globalUserChannelData.push(userData)
    })
    // settimeout before calling running displayLogic
    setTimeout(function(){
        callback(displayLogic(globalUserChannelData))
    },0010)
}
function makeAjax(url, arr, callback){
    let results = [];
    arr.forEach((i) => {
        let myHeaders = new Headers();
        myHeaders.append('Client-ID','g8oo57hf3026alyweepj1ov6rg6p5q')
        let options = {
            method: 'GET',
            headers: myHeaders,
        }
        fetch(`${url}/${i}`,options)
        .then(blob => blob.json ())
        .then((data) => { results.push(data)})

    })
    // returns an array
    setTimeout(function(){
        callback(results)
    },1000)
}



function getUserName(str){
    str = str.match(/([^/]*)$/)[1]
    return str
}

// checks each array for user and adds online status- leaving one main array
function displayLogic(){
    // loop streams to check if online
    globalUserStreamData.forEach((stream) => {
        // console.log(stream.online)
        if(stream.online === true){
        // if online, add attr to channel data
            var sameUser = globalUserChannelData.find((val) => {
                // make toLowerCase, check for undefined
                if(val != undefined){
                    return val.username.toLowerCase() == stream.username.toLowerCase()
                }
            })
            if(sameUser != undefined){
                sameUser['online'] = true;
            }
        } else {
        // if offline, add attr to channel data
            var sameUser = globalUserChannelData.find((val) => {
                if(val != undefined){
                    return val.username.toLowerCase() === stream.username.toLowerCase()
                }
            })
            if(sameUser != undefined){
                sameUser['online'] = false;
            }
        }
    })

}


// takes block of html and appends to css id
function displayResults(html,domNode){
    // make id a selectable node
    var domNode = document.querySelector(domNode);
    // select all containers
    var div = document.querySelectorAll('.results-container');
    //
    // add class to all divs in block
    if(div != null){
        // since first is null
        div.forEach(i => i.classList.add('show'))
    }
    // insertAdjacentHTML new api works - innerHTML does not- before end is part of api
    domNode.insertAdjacentHTML('beforeend',html);
}
function makeHTML(arr){
    var markup = arr.map((user) => {
        // console.log(user.username)
        return `
        <div class="results-container hidden">
            <li class="list-item title node">${user.username}</li>
            <li class="list-item status">${user.status}</li>
            <li class="list-item"><a class="feed" href=${user.feed}>feed</a></li>
            <li class="list-item"><img class="logo" src=${user.logo}></li>
            </div>
            `
    }).join('')
    return markup
}









// Old ajax function
// })
// function makeAjax(url, callback){
//     let results = [];
//     let myHeaders = new Headers();
//     myHeaders.append('Client-ID','g8oo57hf3026alyweepj1ov6rg6p5q')
//     let options = {
//         method: 'GET',
//         headers: myHeaders,
//     }
//
//     users.forEach((user) => {
//         // console.log(user)
//         fetch(`https://api.twitch.tv/kraken/streams/${user}`,{
//             method: 'GET',
//             headers: {
//                 'CLIENT-ID':'g8oo57hf3026alyweepj1ov6rg6p5q'
//             }
//         })
//         .then(blob => blob.json ())
//         .then((data) => {
//             console.log(data)
//         })
//     })
    // setTimeout(function(){
    //     callback(results)
    // },1000)

// makeAjax('https://api.twitch.tv/kraken/channels/twitch',(res) => {
//     console.log(res)
// })
