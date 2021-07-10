import React, { useEffect, useState } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    // 마운트, 업데이트 모두 사용
    useEffect(() => {
        console.log('렌더링이 완료되었습니다.');
        console.log({
            name,
            nickname
        });
    });

    // 마운트될 때만 실행
    useEffect(() => {
        console.log('마운트될 때만 실행됩니다.');
    }, []);

    // 특정 값이 변경될 때만 사용 (name)
    useEffect(() => {
        console.log(name);
    }, [name]);

    // 언마운트되기 전이나 업데이트 되기 전 실행
    // useEffect(() => {
    //     console.log('update');
    //     console.log(name);
    //     return () => {
    //         console.log('cleanup');
    //         console.log(name);
    //     };
    // });

    // 언마운트될 때만 실행
    useEffect(() => {
        console.log('update');
        console.log(name);
        return () => {
            console.log('cleanup');
            console.log(name);
        };
    }, []);

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