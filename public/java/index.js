const addBtn = document.getElementById('addBtn');
const tab = document.getElementById('tab')
const body = document.getElementById('body')
const main = document.getElementById('main')

async function getData() {


    const response = await fetch('/getData',
        {
            method: 'GET'
        });
    response.json().then((r) => {
        r.map((e) => {

            const tr = document.createElement('tr');

            const td_2 = document.createElement('td');
            const td_3 = document.createElement('td');
            td_3.className = 'descClass'
            td_3.style.wordBreak = 'break-all';
            td_3.style.textAlign = 'justify';
            const td_4 = document.createElement('td');

            const tArea = document.createElement('p');
            const p_title = document.createElement('p');
            const p_action = document.createElement('p');

            p_title.style.marginTop = '10%'


            tArea.style.textAlign = 'center';
            tArea.style.marginTop = '3%';
            const p_date = document.createElement('p');
            p_date.style.marginTop = '25%'

            const td_5 = document.createElement('td');



            const save = document.createElement('button');
            save.style.height = '30px'
            save.style.fontSize = '13px'
            save.style.textTransform = 'uppercase';
            save.style.fontWeight = '700'
            save.style.width = '100%';



            const del = document.createElement('button');
            del.style.height = '30px'
            del.style.fontSize = '13px'
            del.style.textTransform = 'uppercase';
            del.style.fontWeight = '700';
            del.style.color = 'black'
            del.style.width = '100%'
            del.style.marginTop = '10%'


            save.setAttribute("type", "button");
            save.innerText = 'Save';
            save.className = `btn btn-warning`;

            del.setAttribute("type", "button");
            del.innerText = 'delete';
            del.className = `btn btn-danger`





            p_title.innerText = e.title;
            tArea.innerText = e.description;
            p_date.innerText = e.date.slice(0, 10);

            del.addEventListener('click', (e) => {

                tr.remove();

            })

            td_2.appendChild(p_title)
            td_5.style.display = 'flex';
            td_5.style.flexDirection = 'column';

            td_5.style.gap = '10px';

            td_3.appendChild(tArea);
            td_4.appendChild(p_date);
            td_5.appendChild(p_action);
            td_5.appendChild(p_action);
            p_action.appendChild(save);
            p_action.appendChild(del)




            tr.appendChild(td_2);
            tr.appendChild(td_3);
            tr.appendChild(td_4);
            tr.appendChild(td_5);


            tab.appendChild(tr);
        })
    }

    ).catch((err) => console.log(err))

}

getData()

addBtn.addEventListener('click', (e) => {

    const tr = document.createElement('tr');

    const td_2 = document.createElement('td');
    const td_3 = document.createElement('td');
    td_3.className = 'descClass'
    td_3.style.wordBreak = 'break-all';
    td_3.style.textAlign = 'justify';
    const td_4 = document.createElement('td');

    const tArea = document.createElement('p');
    const p_title = document.createElement('p');
    const p_action = document.createElement('p');

    p_title.style.marginTop = '10%'


    tArea.style.textAlign = 'center';
    tArea.style.marginTop = '3%';
    const p_date = document.createElement('p');
    p_date.style.marginTop = '25%'

    const td_5 = document.createElement('td');


    const title = document.createElement('input')
    title.style.outline = 'none'
    title.style.border = 'none'
    title.style.marginTop = '10%';
    title.style.backgroundColor = 'aliceblue';
    // title.style.borderBottom = '1px solid ';


    const description = document.createElement('textarea');
    description.rows = 2;
    description.cols = 30;
    description.style.width = '85%';
    description.style.border = 'none';
    description.style.backgroundColor = 'aliceblue';


    description.style.outline = 'none'
    // description.style.border = 'none'

    const desFeild = document.getElementById('desFeild')
    const date = document.createElement('input');
    const save = document.createElement('button');
    save.style.height = '30px'
    save.style.fontSize = '13px'
    save.style.textTransform = 'uppercase';
    save.style.fontWeight = '700'
    save.style.width = '100%';



    const del = document.createElement('button');
    del.style.height = '30px';
    del.style.fontSize = '13px';
    del.style.textTransform = 'uppercase';
    del.style.fontWeight = '700';
    del.style.color = 'black';
    del.style.width = '100%';
    del.style.marginTop = '20%';

    date.setAttribute("type", "date");
    date.style.width = '15%';
    date.style.marginTop = '10%';

    save.setAttribute("type", "button");
    save.innerText = 'Save';
    save.className = `btn btn-warning`;

    del.setAttribute("type", "button");
    del.innerText = 'delete';
    del.className = `btn btn-danger`;


    save.addEventListener('click', async (e) => {

        if (save.innerText == 'SAVE') {

            if ((title.value != undefined && title.value != null && title.value != '') &&
                (description.value != undefined && description.value != null && description.value != '') &&
                (date.value != undefined && date.value != null && date.value != '')) {
                p_title.innerText = title.value;
                tArea.innerText = description.value;
                p_date.innerText = date.value
                save.innerText = 'Edit'

                await fetch('/Postdata', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(
                        {
                            title: title.value,
                            description: description.value,
                            date: date.value
                        }
                    )
                })
            }
            else {
                var alerts = document.createElement('div');
                alerts.style.position = 'absolute'
                alerts.style.top = '10px'
                alerts.style.left = '40%'
                alerts.className = 'alert alert-warning alert-dismissible fade show';
                alerts.role = 'alert';
                body.appendChild(alerts);
                if (!title.value) {


                    alerts.innerHTML = 'Please fill title before proceeding !';
                    setTimeout(() => {
                        alerts.remove()
                    }, 2000);

                    // <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                }
                else if (!description.value) {
                    alerts.innerHTML = 'Please fill description before proceeding !';
                    setTimeout(() => {
                        alerts.remove()
                    }, 2000);
                }
                else if (!date.value) {
                    alerts.innerHTML = 'Please fill date before proceeding !';
                    setTimeout(() => {
                        alerts.remove()
                    }, 2000);
                }
                else {

                }
            }
        }
        else {

            // var t = description.value;
            // description.contentEditable = true;
            description.value
            td_3.innerText = date.value
            save.innerText = 'EDIT'

            // description.contentEditable = false
        }
    })
    del.addEventListener('click', (e) => {
        tr.remove();

    })

    td_2.appendChild(p_title)
    td_5.style.display = 'flex';
    td_5.style.flexDirection = 'column'
    td_5.style.gap = '10px'

    td_3.appendChild(tArea);
    p_title.appendChild(title)
    tArea.appendChild(description)
    td_4.appendChild(p_date);
    td_5.appendChild(p_action);
    td_5.appendChild(p_action);
    p_action.appendChild(save);
    p_action.appendChild(del)
    p_date.appendChild(date)




    tr.appendChild(td_2);
    tr.appendChild(td_3);
    tr.appendChild(td_4);
    tr.appendChild(td_5);


    tab.appendChild(tr);


})












