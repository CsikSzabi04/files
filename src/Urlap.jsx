import React from 'react'
import './App.css'


export default function Urlap({ add }) {
    return (
        <div className=''>
            <div className='inp'>
                <span>Fájltípus:
                    <select name="" id="tipus" defaultValue="jpeg">
                        <option value="jpeg">*.jpeg</option>
                        <option value="docx">*.docx</option>
                        <option value="html">*.html</option>
                        <option value="txt">*.txt</option>
                    </select>
                </span>
                <span className='db'>
                    Darab:
                    <input type="radio" name="db" id="egy" defaultChecked /> <span htmlFor="egy">Egy</span>
                    <input type="radio" name="db" id="ketto" />  <span htmlFor="ketto">Kettő</span>
                    <input type="radio" name="db" id="harom" />  <span htmlFor="harom">Három</span>
                </span>
                <span>
                    <input type="checkbox" name="mappa" id="map" defaultChecked /> Mappával
                </span>
                <span>
                    <input type="button" value="Hozzáad" className='add' onClick={add} />
                </span>
            </div>

        </div>
    )
}
