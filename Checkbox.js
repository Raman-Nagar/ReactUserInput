import { useRef, useState } from "react";

export default function Checkbox() {

    const a = useRef(null)
    const b = useRef(null)
    const c = useRef(null)
    const [d1, setD1] = useState("")

    function Written(event) {
        var d1 = [a.current, b.current, c.current]
        var c1 = ""
        for (let i = 0; i < d1.length; i++) {
            if (d1[i].checked) {
                c1 += d1[i].value + ", "
            }
        }
        setD1(c1)
        event.preventDefault()
    }
    return (
        <div>
            <form onSubmit={Written}>
                <input type="checkbox" ref={a} value="C" />C<br />
                <input type="checkbox" ref={b} value="C++" />C++<br />
                <input type="checkbox" ref={c} value="Java" />Java<br />
                <input type="submit" value="Choose language" />
                <h3>{d1}</h3>
            </form>
        </div>
    )
}