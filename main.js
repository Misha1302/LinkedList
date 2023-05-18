window.onload = main;

let list;
let valuesInp;
let listUl;

function main()
{
    valuesInp = document.getElementById('valuesInp');
    listUl = document.getElementById('list_ul');

    list = new LinkedList();
    
    document.getElementById('addToEnd').addEventListener('click',
        () => {
            if (valuesInp.value == "") return;

            list.addToEnd(valuesInp.value);
            valuesInp.value = "";
            printList(list);
        }
    );

    document.getElementById('getByIndex').addEventListener('click',
        () => {
            alert(list.getByIndex(valuesInp.value).value);
            valuesInp.value = "";
        }
    );
}

function printList(list)
{    
    listUl.innerHTML = "";

    let current = list.first;
    for (let ind = 0; ind < list.len; ind++)
    {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(current.value));
        listUl.appendChild(li);

        current = current.next;
    }
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
            return;
        }

        this.last = this.last.next = new RNode(value, null);
        this.len++;
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