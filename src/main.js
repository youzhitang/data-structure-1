const divScreen = document.querySelector('#screen')
const btnCreateNumber = document.querySelector('#createNumber')
const btnCallNumber = document.querySelector('#callNumber')
const spanNewNumber = document.querySelector('#newNumber')
const spanQueue = document.querySelector('#queue')

let n = 0
let queue = []

btnCreateNumber.onclick = () => {
    n += 1
    //queue.push.call(n)
    queue.push.call(queue, n)
    //把n push到queue里
    spanNewNumber.innerText = n
    spanQueue.innerText = JSON.stringify(queue)
}

btnCallNumber.onclick = () => {
    if (queue.length === 0) {
        alert('没有人在排队了')
        return
    }
    const m = queue.shift.call(queue);
    // shift的对象是queue
    divScreen.innerText = `请 ${m} 号就餐`
    spanQueue.innerText = JSON.stringify(queue)
}

