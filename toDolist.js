
document.getElementById('btnAdd').addEventListener('click', addList);
document.getElementById('btnDelAll').addEventListener('click', delAllEle);
document.getElementById('btnDelLast').addEventListener('click', delLastEle);
document.getElementById('DeleteSel').addEventListener('click', delSelected);


function addList() {
    var contents = document.querySelector('.text-basic');
    if(!contents.value) {
        alert('내용을 입력해주세요');
        contents.focus();
        return false;
    }

    let tr = document.createElement('tr');
    let input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('class', 'btn-chk');

    var td01 = document.createElement('td');
    td01.appendChild(input);
    tr.appendChild(td01);

    var td02 = document.createElement('td');
    td02.innerHTML = contents.value;
    tr.appendChild(td02);

    document.getElementById('listBody').appendChild(tr);
    contents.value='';
    contents.focus();

}

function delAllEle() {
    let list = document.getElementById('listBody');
    let listChild = list.childNodes;
    for(let t of listChild) {
        if (t.nodeType == 1 ) {
            list.removeChild(t);
        }
    }


}

function delLastEle() {

}

function delSelected() {


}

