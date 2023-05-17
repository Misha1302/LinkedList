window.onload = main;

let list;
let valuesInp;
let listH;

function main()
{
    valuesInp = document.getElementById('valuesInp');
    listH = document.getElementById('listH');

    list = new LinkedList();
    list.onChange = 
        () => listH.innerHTML = list.toString();
    
    document.getElementById('addToEnd').onclick = 
        () => list.addToEnd(valuesInp.value);
    document.getElementById('getByIndex').onclick = 
        () => alert(list.getByIndex(valuesInp.value).value);
}

class LinkedList
{
    first = null;
    last = null;
    len = 0;
    onChange = null;

    addToEnd(value) 
    {
        if (this.len == 0)
        {
            this.first = this.last = new RNode(value, null);
            this.len++;
            this.callOnChange();
            return;
        }

        this.last.next = new RNode(value, null);
        this.last = this.last.next;
        this.len++;
        this.callOnChange();
    }

    getByIndex(value)
    {
        let current = this.first;
        for (let ind = 0; ind < value; ind++)
        {
            current = current.next;
        }
        return current;
    }

    toString()
    {
        let s = "";
        let current = this.first;
        for (let ind = 0; ind < this.len; ind++)
        {
            s += String(current.value) + "->";
            current = current.next;
        }
        return s.substring(0, s.length - 2);
    }

    getFirst = () => this.first;
    getLast = () => this.first;
    callOnChange = () => { if (this.onChange != null) this.onChange(); }
}

class RNode 
{
    value;
    next;

    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}