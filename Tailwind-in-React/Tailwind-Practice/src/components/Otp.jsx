import { useRef } from "react";

export const Otp = () => {
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();

    return (
        <div className="flex justify-center">
            <SubBox reference={ref1} onDone={() => {ref2.current.focus()}}/>
            <SubBox reference={ref2} onDone={() => {ref3.current.focus()}}/>
            <SubBox reference={ref3} onDone={() => {ref4.current.focus()}}/>
            <SubBox reference={ref4} onDone={() => {ref5.current.focus()}}/>
            <SubBox reference={ref5} onDone={() => {ref6.current.focus()}}/>
            <SubBox reference={ref6} onDone={() => {ref6.current.focus()}}/>
        </div>
        
    )

    function SubBox({reference, onDone}) {
        return (
            <div>
                <input ref={reference} onChange={(e) => onDone()} className=" p-3 w-[33px] h-[40px] bg-teal-900 text-white rounded-lg m-1 outline-none" />
            </div>
        )
    }
} 