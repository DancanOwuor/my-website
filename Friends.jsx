import { useRef, useState } from 'react'
import './Friends.css'

    export default function Friends(){
        const diva = useRef();
        const [home, setHome] = useState(false)

        function handleHome(){
        setHome(prevHome => !prevHome);
    }  
    return(
        <>
        <div ref={diva} className={`friends ${home ? 'home': ''}`}>
            <ul>
                <li>Ian</li>
                <li>Justin</li>
                <li>Emamanuel</li>
                <li>Dancan</li>
                <button onClick={handleHome}>Change Color</button>

            </ul>
        </div>
        </>
    )
}