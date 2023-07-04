'use client'
import { useEffect } from "react"
import ReactCountryFlag from "react-country-flag"
import CountryList from 'country-list-with-dial-code-and-flag'
import { useState } from "react"
export default function CountryFlag({callCode}){
const [code, setCode] = useState("")
useEffect(()=>{
    const testCode = callCode.slice(0, 4)
    if(testCode.length >=3){
        const code = CountryList.findByDialCode(testCode)
        setCode(code[0])
    }
  

}, [callCode])
    

    
            

        

    console.log(code?.dial_code);
    return (
        <div><ReactCountryFlag countryCode = {code?.code && code.code || "ng"} svg/></div>
    )
}
