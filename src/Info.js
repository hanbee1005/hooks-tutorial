import React, { useState } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    const onChnageName = (e) => {
        setName(e.target.value);
    }

    const onChnageNickname = (e) => {
        setNickname(e.target.value);
    }

    return (
        <div>
            <div>
                <input value={name} onChange={onChnageName} placeholder='name' />
                <input value={nickname} onChange={onChnageNickname} placeholder='nickname' />
            </div>
            <div>
                <div>
                    <b>이름: </b> {name}
                </div>
                <div>
                    <b>닉네임: </b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;