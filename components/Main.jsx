import React from 'react'

export default function Main(props) {
    // console.log(props)
    return (
        <main>
            <div className='item--area'>
                <h2>{props.items.title}</h2>
                <img src={`./images/${props.items.image}`} />
                <div className='btn'>
                    <a className='web' target='_blank' href={props.items.url}>View Website</a>
                    <a className='git' target='_blank' href={props.items.github}>Github Repo</a>
                </div>
            </div>
        </main>
    )
}