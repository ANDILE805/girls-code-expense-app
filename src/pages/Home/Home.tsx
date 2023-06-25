import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextInput } from "../../components";

export const Home: FC = () => {
    const [amount, setAmount] = useState<number>(0)
    const navigate = useNavigate()

    const submit = () => {
        if (!amount) {
            return;
        }

        localStorage.setItem('amount', `${amount}`)
        localStorage.setItem('items', JSON.stringify([]))

        navigate(`/expense/${amount}`)
    }

    return <div className="h-screen w-full flex flex-col justify-center items-center">
        <div className="mb-24"><h1 className="text-4xl text-sky-500">Budget App!</h1></div>
        <div className="my-2">
            <label className="mr-4"> <strong> Please enter your budget (R):</strong></label>
            
            <TextInput type="number" value={`${amount}`} textUpdate={(text) => setAmount(text ? Number(text) : 0)} />
        </div>
        <div className="my-2">
            <strong>Your budget amount is: R </strong>{amount}
        </div>
        <div className="my-2">
            <Button action={submit} label="Submit" />
        </div>
    </div>
}