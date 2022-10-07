var url = 'https://discord.com/api/webhooks/1027524441552470046/mNQENBmfLWNUNxWIhllK1-zwMOlXpzCWVKmcDF0dX7JyVXg2xpk3J1KLxCz0f1nC4E5t'

document.getElementById('answer').addEventListener('click', answer)

function answer(){
    var t,f,a13_0,a14_0

    t = 0
    f = 0
    a13_0 = 0
    a14_0 = 0

    var a1 = document.getElementById('a1').value
    var a2 = document.getElementById('a2').value
    var a3 = document.getElementById('a3').value
    var a4 = document.getElementById('a4').value
    var a5 = document.getElementById('a5').value
    var a6 = document.getElementById('a6').value
    var a7 = document.getElementById('a7').value
    var a8 = document.getElementById('a8').value
    var a9 = document.getElementById('a9').value
    var a10 = document.getElementById('a10').value
    var a11 = document.getElementById('a11').value
    var a12 = document.getElementById('a12').value
    var a13_1 = document.getElementById('a13_1').checked
    var a13_2 = document.getElementById('a13_2').checked
    var a13_3 = document.getElementById('a13_3').checked
    var a13_4 = document.getElementById('a13_4').checked
    var a13_5 = document.getElementById('a13_5').checked
    var a14_1 = document.getElementById('a14_1').checked
    var a14_2 = document.getElementById('a14_2').checked
    var a14_3 = document.getElementById('a14_3').checked
    var a14_4 = document.getElementById('a14_4').checked
    var a15 = document.getElementById('a15').value
    var a16 = document.getElementById('a16').value
    var a17 = document.getElementById('a17').value
    var a18 = document.getElementById('a18').value
    var a19 = document.getElementById('a19').value
    var a20 = document.getElementById('a20').value
    var a21 = document.getElementById('a21').value

    var b3 = document.getElementById('b3')
    var b4 = document.getElementById('b4')
    var b5 = document.getElementById('b5')
    var b6 = document.getElementById('b6')
    var b7 = document.getElementById('b7')
    var b8 = document.getElementById('b8')
    var b9 = document.getElementById('b9')
    var b10 = document.getElementById('b10')
    var b11 = document.getElementById('b11')
    var b12 = document.getElementById('b12')
    var b13_1 = document.getElementById('b13_1')
    var b13_2 = document.getElementById('b13_2')
    var b13_3 = document.getElementById('b13_3')
    var b13_4 = document.getElementById('b13_4')
    var b14 = document.getElementById('b14')
    var b15 = document.getElementById('b15')
    var b16 = document.getElementById('b16')
    var b17 = document.getElementById('b17')
    var b18 = document.getElementById('b18')
    var b19 = document.getElementById('b19')
    var b20 = document.getElementById('b20')
    var b21 = document.getElementById('b21')
    

    if(a3=='同和問題'){t++;green(3)}else{f++;red(3);b3.innerHTML='同和問題'}
    if(a4=='部落差別解消推進法'){t++;green(4)}else{f++;red(4);b4.innerHTML='部落差別解消推進法'}
    if(a5=='アイヌ民族支援法'){t++;green(5)}else{f++;red(5);b5.innerHTML='アイヌ民族支援法'}
    if(a6=='ヘイトスピーチ'){t++;green(6)}else{f++;red(6);b6.innerHTML='ヘイトスピーチ'}
    if(a7=='男女雇用機会均等法'){t++;green(7)}else{f++;red(7);b7.innerHTML='男女雇用機会均等法'}
    if(a8=='男女共同参画社会基本法'){t++;green(8)}else{f++;red(8);b8.innerHTML='男女共同参画社会基本法'}
    if(a9=='インクルージョン'){t++;green(9)}else{f++;red(9);b9.innerHTML='インクルージョン'}
    if(a10=='障害者基本法'){t++;green(10)}else{f++;red(10);b10.innerHTML='障害者基本法'}
    if(a11=='精神の自由'){t++;green(11)}else{f++;red(11);b11.innerHTML='精神の自由'}
    if(a12=='令状'){t++;green(12)}else{f++;red(12);b12.innerHTML='令状'}

    if(a13_1==true){a13_0++}
    if(a13_2==true){a13_0++}
    if(a13_3==true){a13_0++}
    if(a13_4==true){a13_0++}
    if(a13_5==false){a13_0++}
    if(a13_0==5){t++;green(13)}else{f++;red(13);b13_1.innerHTML='←';b13_2.innerHTML='←';b13_3.innerHTML='←';b13_4.innerHTML='←'}

    if(a14_1==false){a14_0++}
    if(a14_2==false){a14_0++}
    if(a14_3==true){a14_0++}
    if(a14_4==false){a14_0++}
    if(a14_0==4){t++;green(14)}else{f++;red(14);b14.innerHTML='←'}

    if(a15=='健康で文化的な最低限度の生活'){t++;green(15)}else{f++;red(15);b15.innerHTML='健康で文化的な最低限度の生活'}
    if(a16=='教育を受ける権利'){t++;green(16)}else{f++;red(16);b16.innerHTML='教育を受ける権利'}
    if(a17=='団体行動権'){t++;green(17)}else{f++;red(17);b17.innerHTML='団体行動権'}
    if(a18=='裁判を受ける権利'){t++;green(18)}else{f++;red(18);b18.innerHTML='裁判を受ける権利'}
    if(a19=='国家賠償請求権'){t++;green(19)}else{f++;red(19);b19.innerHTML='国家賠償請求権'}
    if(a20=='公共の福祉'){t++;green(20)}else{f++;red(20);b20.innerHTML='公共の福祉'}
    if(a21=='勤労'||a21=='納税'){t++;green(21)}else{f++;red(21);b21.innerHTML='勤労(納税)'}

    var point = 5.26*t

    var result = document.getElementById('result')
    result.innerHTML = 
    '問題19問 | 正解'+t+'問 | 不正解'+f+'問 | 得点'+point+'点'

    var index = {
        'username': 'foryzen-citizen-5',
        'content': a1+'組'+a2+'番 : '+t+'/19'
    }

    var data = {
        method: 'POST',mode: 'cors',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(index)
    }

    send(data)
}

function green(x){
    document.getElementById('c'+x).style.color = 'green'
}

function red(x){
    document.getElementById('c'+x).style.color = 'red'
}

function send(data){return fetch(url, data)}