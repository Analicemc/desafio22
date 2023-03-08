document.addEventListener('keydown', showEvents);

function showEvents(evt){
    evt.preventDefault();
    const spnEvtKey = document.getElementById('divEvtKey');
    const spnEvtKeyCode = document.getElementById('divEvtKeyCode');
    var key = evt.key;
    var keyCode = evt.keyCode;
    spnEvtKey.innerText = `event.key: ${key}`
    spnEvtKeyCode.innerText = `event.keyCode: ${keyCode}`;
}