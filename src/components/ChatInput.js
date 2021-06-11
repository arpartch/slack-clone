import { Button } from '@material-ui/core';
import React, { useRef, useState } from 'react';
import styled from "styled-components";
import { db } from '../firebase';
import firebase from 'firebase';

function ChatInput({channelName, channelId}) {
    const [input, setInput] = useState('');

    const sendMessage = (e) => {
        e.preventDefault();

        // if (!channelId) {
        //     return false;
        // }

        db.collection('rooms').doc(channelId).collection("messages").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: 'Athena',
            userImage:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia-exp1.licdn.com%2Fdms%2Fimage%2FC4D03AQETMOuU_cPjEg%2Fprofile-displayphoto-shrink_200_200%2F0%2F1604615046182%3Fe%3D1624492800%26v%3Dbeta%26t%3DMO39cYeAdyYnE5ulYYQcb7f4q1SvYgSlrSh_Xec3ovM&imgrefurl=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fathena-partch&tbnid=klSEMZHdPE269M&vet=12ahUKEwjgkNLvoo7xAhWai54KHXDiAYYQMygAegQIARAy..i&docid=2aLq_6vEY8L6WM&w=200&h=200&itg=1&q=athena%20partch&ved=2ahUKEwjgkNLvoo7xAhWai54KHXDiAYYQMygAegQIARAy",
        });

        setInput('');
    };


    return <ChatInputContainer>
        <form>
            <input value={input} 
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Message #${channelName}`}/>
            <Button hidden type='submit' onClick={sendMessage}>
                SEND
            </Button>
        </form>
    </ChatInputContainer>
}

export default ChatInput;

const ChatInputContainer = styled.div`
border-radius: 20px;

> form {
    position: relative;
    display: flex;
    justify-content: center;
}

> form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
}

> form > button {
    display: none !important;
}

`;
