class LinkedList {
    first = null
    last = null
    length = 0

    addToEnd(value) {
        if (this.length == 0) {
            this.first = this.last = new RNode(value, null)
            this.length++
            return
        }

        this.last.next = new RNode(value, null)
        this.last = this.last.next
        this.length++
    }

    getByIndex(index) {
        let current = this.first
        for (let i = 0; i < index; i++) {
            current = current.next
        }
        return current
    }

    getFirst = () => this.first

    getLast = () => this.first
}

class RNode {
    value
    next

    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

const list = new LinkedList()

const addToEnd = (value) => {
    list.addToEnd(value)
    showList(list)
}

const getByIndex = (index) => { alert(list.getByIndex(index).value) }

const showList = (list) => {
    showListAsString(list, listRoot)
    showListAsUL(list, listRoot)
}

const showListAsString = (list, root) => root.innerText = buildStringFromList(list)

const buildStringFromList = (list) => {
    let s = ''
    let current = list.first
    for (let i = 0; i < list.length; i++) {
        s += current.value

        if (i < list.length - 1)
            s += '->'

        current = current.next
    }

    return s
}

const showListAsUL = (list, root) => {
    const ulTag = document.createElement("ul")

    let current = list.first

    for (let i = 0; i < list.length; i++) {
        const liTag = document.createElement("li")
        const text = document.createTextNode(current.value)
        liTag.appendChild(text)
        ulTag.appendChild(liTag)

        current = current.next
    }

    root.appendChild(ulTag)
}
