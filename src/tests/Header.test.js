import React from 'react';
import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'


describe("Başlık kısmı render edilme işlemi", () =>{
    let emojiSearch;
    
    beforeEach(()=> {
        //App componenti render etme
        render(<App />);

        //Sayfadaki emoji search yazısını bulmak için
        emojiSearch = screen.getByText("Emoji Search");
    });

    test("Başlık render edilmesi", () =>{
        //Yazı var mı diye render 

        expect(emojiSearch).toBeInTheDocument();
    });
});