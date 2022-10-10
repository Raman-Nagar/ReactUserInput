import { useRef, useState } from "react";
export default function Usermarks() {
    let p = useRef(null)
    let c = useRef(null)
    let m = useRef(null)
    let h = useRef(null)
    let e = useRef(null)
    const [mark, setMark] = useState("")
    const [per, setPer] = useState(0)
    const [tot, setTot] = useState(0)

    function Result(event) {
        var arr = [+p.current.value, +c.current.value, +m.current.value, +h.current.value, +e.current.value]

        var tot = (+p.current.value + +c.current.value + +m.current.value + +h.current.value + +e.current.value)
        var per = (tot / 5)
        var c1 = 0,c2 = "";
        var s = 0, r = "";
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 33) {
                c1++
                c2+=arr[i]
            }
        }
        if (c1 === 1) {
            if (c2 > 27) {
                r = ("pass with grace = " +(c2=33-c2)+" "+(tot=tot+c2)+" "+(per=tot/5))
            }
            else {
                r = "suply"
            }
        }
        else if (c1 === 0) {
            r = "pass"
        }
        else {
            r = "fail"
            
        }
        setTot(tot)
        setPer(per)
        setMark(r)
        event.preventDefault()
    }
    return (
        <div>
            <form onSubmit={Result} >
                <input type="text" ref={p} placeholder="enter physics marks" />
                <br /><br />
                <input type="text" ref={c} placeholder="enter chemistry marks" />
                <br /><br />
                <input type="text" ref={m} placeholder="enter mahts marks" />
                <br /><br />
                <input type="text" ref={h} placeholder="enter hindi marks" />
                <br /><br />
                <input type="text" ref={e} placeholder="enter physics marks" />
                <br /><br />
                <input type="submit" value="click" />
                <h3>Result = {mark}</h3>
                <h3>Total = {tot}</h3>
                <h3>Percentage = {per}</h3>
            </form>
        </div>
    )
}