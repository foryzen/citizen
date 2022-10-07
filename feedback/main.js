var url = 'https://discord.com/api/webhooks/1027840897322332160/6BSmyFnyFMzbb-QKFHnqXaaIySxBGYvwJ951qJNg5t4HQ6hrPt00I_W24qXIqM52AM3_'

function foryzen(){
    var name = document.getElementById('name').value
    var feedback = document.getElementById('feedback').value

    if(name==''){
        name = 'foryzen-citizen-feedback'
    }

    if(feedback==''){
        alert('フィードバックを入力してください。')
    }else{
        var index = {
            'username': name,
            'content': feedback
        }
        
        var data = {
            method: 'POST',mode: 'cors',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(index)
        }

        send(data)
    }
}

function send(data){return fetch(url, data)}