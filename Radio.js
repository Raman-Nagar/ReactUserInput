import { useRef } from "react";

export default function Radio() {

    const a = useRef(null)
    const b = useRef(null)
    const c = useRef(null)
    const d = useRef(null)

    function Action(event) {
        var d1 = [a.current, b.current, c.current, d.current]
        var c1 = "";
        for (let i = 0; i < d1.length; i++) {
            if (d1[i].checked) {
                c1 += d1[i].value
            }
        }
        document.body.style.backgroundColor = c1
        event.preventDefault()
    }
    return (
        <div>
            <form onSubmit={Action}>
                <input type="radio" ref={a} name="r1" value="red" />red<br />
                <input type="radio" ref={b} name="r1" value="green" />green<br />
                <input type="radio" ref={c} name="r1" value="yellow" />yellow<br />
                <input type="radio" ref={d} name="r1" value="white" />white<br />
                <input type="submit" value="Change Color" />
            </form>
        </div>
    )
}