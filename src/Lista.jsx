import React from 'react'
import './App.css'

function Kepek({ tipus, db, id, mappa }) {
    let kepek = [];
    for (let i = 0; i < db; i++) kepek.push(<img key={id+"x"+i} src={tipus + ".png"} />);
    if(mappa == true) kepek.push(<img key={id} src="mappa.png" />)
    return kepek;
}

export default function Lista({ list }) {
    return (
        <div className='lista'>
            {list.map(x => <p key={x.id}>
                <Kepek tipus={x.tipus} db={x.db} mappa={x.mappa}/>
            </p>)}
        </div>
    )
}
