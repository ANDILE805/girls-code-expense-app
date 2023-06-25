import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import "./Expense.css"

export const Expense: FC = () => {
    const { amount } = useParams()
    const [spent, setSpent] = useState<number>(100)


    return <div className="expense-container">
        <div className="summary">
            <div className="balance">
                <label>Balance</label>
                <p>{Number(amount) - spent}</p>
            </div>
            <div className="spent">
                <label>Spent</label>
                <p>{spent}</p>
            </div>
        </div>
        <div className="add-container">
            <button>Add</button>
        </div>
        <div className="items-container">
            <div className="new-item">
                <div>
                <label>Item name</label>
                <input type="text" />
                </div>
                <div>
                <label>Item price</label>
                <input type="number" />
                </div>
                <div className="item-buttons">
                <button>Ok</button>
                <button>Cancel</button>
                </div>
            </div>
            <div className="items">
                <ul>
                    <li>Apple: R{spent}</li>
                </ul>
            </div>
        </div>
    </div>
}