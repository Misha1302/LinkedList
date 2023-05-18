class LinkedList {
    first = null
    last = null
    length = 0

    addToEnd(value) {
        if (this.length == 0) {
            this.first = this.last = new RNode(value)
            this.length++
            return
        }

        this.last.next = new RNode(value)
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

    insert(index, value) {
        value = new RNode(value)

        if (index == 0)
        {
            value.next = this.first
            this.first = value
            this.length++
            return
        }
        
        value.next = this.getByIndex(index)
        this.getByIndex(index - 1).next = value
        this.length++
    }

    removeAt(index) {
        if (index == 0)
        {
            this.first = this.first.next
            this.length--
            return
        }
        
        this.getByIndex(index - 1).next = this.getByIndex(index).next
        this.length--
    }

    containsValue(value) {
        let current = this.first

        for (let i = 0; i < this.length; i++) {
            if (current.value == value)
                return true
            current = current.next
        }

        return false
    }

    clearList()
    {
        this.first = null
        this.length = 0
    }

    getFirst = () => this.first
    getLast = () => this.last
}

class RNode {
    value
    next

    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}

const list = new LinkedList()

const addToEnd = (value) => {
    list.addToEnd(value)
    showList(list)
}

const addFirst = (value) => {
    list.insert(0, value)
    showList(list)
}

const clearList = () => {
    list.clearList()
    showList(list)
}

const insert = (ind, value) => {
    list.insert(ind, value)
    showList(list)
}

const length = () => {
    alert(list.length)
}

const getFirst = () => {
    alert(list.getFirst().value)
}

const getLast = () => {
    alert(list.getLast().value)
}

const containsValue = (value) => {
    alert(list.containsValue(value))
}

const removeAt = (ind) => {
    list.removeAt(ind)
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
