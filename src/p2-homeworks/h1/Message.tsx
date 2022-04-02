import React from 'react'


type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}


function Message(props: MessageDataType) {
    return (
        <>
            <div className='message'>
                <div className='empty'>
                    <div className='hack'><img className='image' src={props.avatar} alt={props.name}/></div>
                </div>

                <div className='content'>
                    <div className='name'>{props.name}</div>

                    <div className='text'>{props.message}</div>
                    <div className='time'>{props.time}</div>
                </div>

            </div>


        </>
    )
}

export default Message;
