const degbugModel = (is_test, game) => {
    if (!is_test && window.pased) {
        return
    }
    [pased, font, parachuteNum, time, starNum,playerType] = [window]
    // 初始化
    const reset = () => {
        time = 1
        pased = false
        font = 50
        parachuteNum = 10
        starNum = 0
        playerType = 1
    }
    reset()
    // 暂停功能
    window.addEventListener('keydown', (event) => {
        if (event.key == 'p' || event.key == ' ' ) {
            pased = !pased
        }
    })
    let jian = e('#set-font-jian')
    let jia = e('#set-font-jia')
    let stop = e('#set-game-stop')
    let go = e('#set-game-go')
    let music = e('#set-game-music')
    let setAduio = e('#game-audio')
    let rankingReset = e('.ranking-reset')
    jia.addEventListener('click', (event)=> {
        font+=2
        if (font >= 70) {
            font = 70
        }
    })
    jian.addEventListener('click', (event)=> {
        font-=2
        if (font <= 45) {
            font = 45
        }
    })
    stop.addEventListener('click', (event)=> {
        pased = true
    })
    go.addEventListener('click', (event)=> {
        pased = false
    })
    music.addEventListener('click', (event)=> {
        if( !setAduio.paused) {
            setAduio.pause()
        } else {
            setAduio.play()
        }
    })
    // 重新开始
    rankingReset.addEventListener('click', (event)=> {
        e('.ranking').style.display = 'none'
        let s = SceneStart.new(game)
        game.replaceScene(s)
        log(game)
    })
    // 减少燃油
    setInterval( ()=> {
        if(window.pased) {
            return
        }
        // 时间
        time++
        //
        if (parachuteNum > 0) {
            parachuteNum--
        }

        // 燃油耗尽
        if (parachuteNum <= 0) {
            setAduio.src = 'sound/finish.mp3'
            setAduio.loop = false

            let s = SceneEnd.new(game)
            game.replaceScene(s)
            reset()
        }

    }, 1000)


    //
    sendAjax()

}


// 发送ajax
let sendAjax = (send) => {

    // 填写表单发送ajax
    $('#send').click(function () {

        window.starNum = window.starNum==0 ? 1 : window.starNum




        let username = e('#username').value
        window.name = username
        let time = window.time

        if (!username) {
            alert('Please keydowns Input username!')
            return
        }
        e('.ranking').style.display = 'block'

        $.ajax({
            type: 'POST',
            data: {
                name: username,
                time: time,
                stars: window.starNum
            },
            url: 'php/register.php',
            success: function (res) {
                let result = JSON.parse(res)
                GameRanking(result)
            },
            error: function(err) {
                log(JSON.stringify(err))
            },
        })
    })

}

// 排名
let GameRanking = (result) => {
    let tbody = e('#ranking-table > tbody')

    tbody.innerHTML = ''


    // sort方法排序
    result.sort(function(a,b){
        var s = Number(a.stars)
        var t = Number(b.stars)
        if(s > t ) return -1
        if(s < t ) return 1
    })
    let resultObjct = []
    for (let i=0; i<result.length; i++) {
        result[i]['id'] = i+1
        resultObjct[i] = result[i]
        window.resultObjct = resultObjct
    }


    let sortRanking = () => {
        // 第一名到第四名
        for (let i=0; i<=3; i++)  {
            let tr = document.createElement('tr')
            let InnerHTML = resultObjct[i] || '————————'
            InnerHTML['time'] = InnerHTML['time'] +'s'
            for (let j=0; j<4; j++) {
                let td = document.createElement('td')
                tr.appendChild(td)
                td.innerHTML =  Object.values(InnerHTML)[j] || '————————'
                tbody.appendChild(tr)
            }
        }
    }

        let currentName = window.name
        let currentTime = window.time
        let currentStars = window.starNum

        if (currentStars < window.resultObjct[0].stars && currentStars < window.resultObjct[1].stars && currentStars < window.resultObjct[2].stars && currentStars < window.resultObjct[3].stars) {
            sortRanking()
            let pai = [localStorage.ranking, currentName, currentTime+'s', currentStars]
            // 当前名
            if(!localStorage.ranking) {
                localStorage.ranking = 5
            } else {
                localStorage.ranking = Number(localStorage.ranking) + 1
            }

            let tr = document.createElement('tr')
            tr.style.background = '#61b796'
            tr.style.fontWeight = '800'
            tr.style.color = '#000'
            for (let i=0;i<=3; i++) {
                let td = document.createElement('td')
                tr.appendChild(td)
                td.innerHTML = pai[i]
            }
            tbody.appendChild(tr)
        } else {
            sortRanking()
        }



}
