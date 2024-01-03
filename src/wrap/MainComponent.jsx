import React from "react";
import './scss/Main.scss'
import Section1Component from './main/Section1Component'
import Section2Component from './main/Section2Component'
import Section3Component from './main/Section3Component'
import Section4Component from './main/Section4Component'
import Section5Component from './main/Section5Component'
import Section6Component from './main/Section6Component'

import { useSelector } from "react-redux";

export default function MainComponent(){

    const selector = useSelector((state)=>state);

    return (
        <main id="main">
            
            
            <Section1Component />
            <Section2Component />
            <Section3Component />
            <Section4Component />
            <Section5Component />
            <Section6Component />
        </main>
    )
}