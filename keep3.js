{/* <button id="addBtn"> */ }

let addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', () => {
    addNote();
})




function saveNote() {
    let notes = document.querySelectorAll('.note textarea')
    let data = []
    notes.forEach((note) => {
        data.push(note.value)
        console.log(data);
    })
    if (data.length == 0) {

        localStorage.removeItem('notes')
    } else {

        localStorage.setItem('notes', JSON.stringify(data))
    }


}


(
    function () {

        let lsNote = JSON.parse(localStorage.getItem('notes'));

        if (lsNote == null) {

            addNote()
        }
        else {
            lsNote.forEach((lsNote) => {
                addNote(lsNote);
            })

        }

    }
)()

// <div class="note">
//     <div class="tool">
//         <i class="fas fa-save"></i>
//         <i class="fas fa-trash"></i>
//     </div>
//     <textarea></textarea>
// </div>
function addNote(text = '') {

    // <div id="main"></div>

    const main = document.querySelector('#main');

    let note = document.createElement('div');

    let html = ` <div class="note">
        <div class="tool">
            <i class=" save fas fa-save"></i>
             <i class="trash fas fa-trash"></i>
        </div>
        <textarea>${text}</textarea>
     </div>`



    note.insertAdjacentHTML('afterbegin', html);

    main.appendChild(note);


    // <i class=" trash fas fa-trash"></i>

    let trash = note.querySelector('.trash');
    trash.addEventListener('click', () => {
        note.remove()
        saveNote()
    })



    // <i class=" save fas fa-save"></i>
    let save = note.querySelector('.save');

    save.addEventListener('click', () => {
        saveNote();
    })

    note.querySelector("textarea").addEventListener(
        "focusout",
        function () {
            saveNote()
        }
    )

}



