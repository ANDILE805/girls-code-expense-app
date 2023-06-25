import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { IItem } from "./types";
import { Button, TextInput } from "../../components";

export const Expense: FC = () => {
    const storedItems = localStorage.getItem('items')
    const storedAmount = localStorage.getItem('amount')
    const { amount } = useParams()
    const [itemName, setItemName] = useState<string>('')
    const [itemPrice, setItemPrice] = useState<number>(0)
    const [items, setItems] = useState<IItem[]>(storedItems ? JSON.parse(storedItems) as IItem[] : [])
    const [spent, setSpent] = useState<number>(() => {
        if(storedItems) {
            let storedSpent = 0;
            (JSON.parse(storedItems) as IItem[]).forEach(storedItem => {
                storedSpent = storedSpent + storedItem.price
            });

            return storedSpent
        }
        
        return 0
    })

    const originalAmount = storedAmount || amount

    const addItem = () => {
        if (!itemName || !itemPrice) {
            return;
        }

        const newItems = [...items, { name: itemName, price: itemPrice }]
        let newSpent = 0
        newItems.forEach(newItem => {
            newSpent = newSpent + newItem.price
        });

        localStorage.setItem('items', JSON.stringify(newItems))
        setItems(newItems)
        setSpent(newSpent)
        setItemName('')
        setItemPrice(0)
    }

    const cancelItem = () => {
        setItemName('')
        setItemPrice(0)
    }

    const deleteItem = (name: string, price: number) => {
        const newItems: IItem[] = items.filter((item) => item.name !== name && item.price !== price)
        localStorage.setItem('items', JSON.stringify(newItems))
        setItems(newItems)
        setSpent(spent - price)
    }

    return <div className="h-screen flex flex-col justify-center items-center">
        <div className="mb-8 w-1/2 flex flex-col gap-4">
            <div className="flex flex-row justify-between p-2 bg-green-400">
                <label className="font-bold">Original:</label>
                <p className="font-bold">R {originalAmount}</p>
            </div>
            <div className="flex flex-row justify-between p-2 bg-amber-400">
                <label className="font-bold">Spent:</label>
                <p className="font-bold">R {spent}</p>
            </div>
            <div className="flex flex-row justify-between p-2 bg-blue-400">
                <label className="font-bold">Balance:</label>
                <p className="font-bold">R {Number(originalAmount) - spent}</p>
            </div>
        </div>
        <div className="w-1/2 flex flex-col gap-4">
            <div className="flex flex-col gap-4">
                <div className="w-full flex flex-row gap-2">
                    <label className="w-1/3">Item name:</label>
                    <TextInput
                        type="text"
                        value={itemName}
                        textUpdate={(text) => setItemName(text)}
                        full
                    />
                </div>
                <div className="w-full flex flex-row gap-2">
                    <label className="w-1/3">Item price(R):</label>
                    <TextInput
                        type="number"
                        value={`${itemPrice}`}
                        textUpdate={(text) => setItemPrice(text ? Number(text) : 0)}
                        full
                    />
                </div>
                <div className="flex flex-row gap-2">
                    <Button action={addItem} label="Add" />
                    <Button action={cancelItem} label="cancel" secondary />
                </div>
            </div>
            <div className="my-8 w-full flex flex-col gap-4">
                <div
                    className="w-full flex flex-row justify-between"
                >
                    <p className="font-bold">Item name</p> <p className="font-bold">Item price</p> <p className="font-bold">Remove</p>
                </div>
                {items.map((item) => {
                    return <div
                        className="w-full flex flex-row justify-between items-center"
                        key={item.name + item.price}
                    >
                        <p>{item.name}</p> <p>R {item.price}</p> <Button action={() => deleteItem(item.name, item.price)} label="x" secondary />
                    </div>
                })}

            </div>
        </div>
    </div>
}