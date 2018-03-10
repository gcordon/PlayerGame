const log = console.log.bind(console)
const e = (el) => (document.querySelector(el))
const randomBetween = (start, end) => {
    let n = Math.random() * (end - start + 1)
    return Math.floor(n + start)
}

let images = {
    // 飞机
    player1: 'img/player/player1.png',
    player2: 'img/player/player2.png',
    player3: 'img/player/player3.png',
    player4: 'img/player/player4.png',
    // 云
    cloud0: 'img/cloud/cloud0.png',
    cloud1: 'img/cloud/cloud1.png',
    cloud2: 'img/cloud/cloud2.png',
    cloud3: 'img/cloud/cloud3.png',
    cloud4: 'img/cloud/cloud4.png',
    cloud5: 'img/cloud/cloud5.png',
    cloud6: 'img/cloud/cloud6.png',
    // 鸟
    bird1: 'img/bird-1-8/1.png',
    bird2: 'img/bird-1-8/2.png',
    bird3: 'img/bird-1-8/3.png',
    bird4: 'img/bird-1-8/4.png',
    bird5: 'img/bird-1-8/5.png',
    bird6: 'img/bird-1-8/6.png',
    bird7: 'img/bird-1-8/7.png',
    bird8: 'img/bird-1-8/8.png',

    bird_a_1: 'img/bird-1-8/Bird A/1.png',
    bird_a_2: 'img/bird-1-8/Bird A/2.png',
    bird_a_3: 'img/bird-1-8/Bird A/3.png',
    bird_a_4: 'img/bird-1-8/Bird A/4.png',

    bird_b_1: 'img/bird-1-8/Bird B/1.png',
    bird_b_2: 'img/bird-1-8/Bird B/2.png',
    bird_b_3: 'img/bird-1-8/Bird B/3.png',
    bird_b_4: 'img/bird-1-8/Bird B/4.png',


    bird_c_1: 'img/bird-1-8/Bird C/1.png',
    bird_c_2: 'img/bird-1-8/Bird C/2.png',
    bird_c_3: 'img/bird-1-8/Bird C/3.png',
    bird_c_4: 'img/bird-1-8/Bird C/4.png',
    // 降落伞
    parachute1: 'img/parachute/parachute1.png',
    parachute2: 'img/parachute/parachute2.png',

    // 星星
    star1: 'img/star/1.png',
    star2: 'img/star/2.png',
    star3: 'img/star/3.png',
    star4: 'img/star/4.png',
    star5: 'img/star/5.png',
    star6: 'img/star/6.png',
    star7: 'img/star/7.png',

    // copy
    copy: 'img/copy/copy.png',
}



let linGame = LinGame.instance(30, images, (game)=> {
    let s = SceneStart.new(game)
    game.runWithScene(s)
})
degbugModel(true, linGame)
