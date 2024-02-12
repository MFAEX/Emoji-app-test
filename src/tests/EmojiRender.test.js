import React from 'react';
import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import emojiList from '../emojiList.json'
import App from '../App'

describe("Emoji listesinin render edilmesi", () =>{

    let emojiList;
    beforeEach(() => {
        render(<App/>);
        // emojiList json dosyasının içinde ki ilk 20 item render edilir
        emojiList = [...document.querySelectorAll('.emoji-item')].slice(0, 20);
    });

    test("Başarılı şekilde render işlemi kontrolü", ()=>{
        //listenin içinde ki her item kontrol edilir 
        emojiList.map((item)=>{
            expect(screen.getByText(item.title)).toBeInDocument();
        })
    });
});