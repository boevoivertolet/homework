import React from 'react'
import c from './Message.module.css'

type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}


function Message(props: MessageDataType) {
    return (
        <>
            <div className={c.message}>
                <div className={c.empty}>
                    <div className={c.hack}><img className={c.image} src={props.avatar} alt={props.name}/></div>
                </div>

                <div className={c.content}>
                    <div className={c.name}>{props.name}</div>

                    <div className={c.text}>{props.message}</div>
                    <div className={c.time}>{props.time}</div>
                </div>

            </div>


        </>
    )
}

export default Message;
