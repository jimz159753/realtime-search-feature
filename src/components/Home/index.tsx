import SearchInput from "@/components/SearchInput";
import { useState } from "react";
import { IUser } from "../../pages/api/data.interface";
import { UserList } from "@/components/UserList";
import { users } from "../../pages/api/data";

export default function Home() {
    const [input, setInput] = useState('')
    const [data, setData] = useState<IUser[]>(users)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase()
        const filteredData = users.filter(el => el.username.toLowerCase().startsWith(value))
        setInput(value)
        setData(filteredData)
    }

    return (
        <div className="flex justify-center items-center flex-col gap-5">
            <SearchInput handleChange={handleChange} value={input} />
            <UserList users={data} />
        </div>
    );
}
