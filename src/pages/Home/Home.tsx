import { FC, useState } from "react";
import "./Home.css"
import { useNavigate } from "react-router-dom";
export const Home: FC = () => {
    const [amount, setAmount] = useState<number>()
    const navigate = useNavigate()

    const submit = () => {
        if (!amount) {
            return;
        }

        navigate(`/expense/${amount}`)
    }

    return <div className="home-container">
        <div className="title-container"><p>Title</p></div>
        <div className="budget-container">
            <label>Budget</label>
            <input
                type="number"
                value={amount}
                onChange={(event) => setAmount(event.target.value ? Number(event.target.value) : undefined)}
            />
        </div>
        <div>
            <strong>Amount: </strong>{amount}
        </div>
        <div className="budget-submit-container">
            <button onClick={submit}>Submit</button>
        </div>
    </div>
}