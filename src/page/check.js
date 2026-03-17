"use client";
import { useState } from "react";

export default function Check() {
    const [name, setName] = useState("");
    const [score, setScore] = useState("");
    const [data, setData] = useState([]);
    const [mode, setMode] = useState("all");

    const handleAdd = () => {
        const newItem = {
            name: name,
            score: Number(score)
        };

        setData([...data, newItem]); 
        setName("");
        setScore("");
    };

    const filteredData = data.filter(item => {
        if (mode === "all") return true;
        if (mode === "pass") return item.score >= 50;
        if (mode === "fail") return item.score < 50;
    });

    return (
        <div>
            <h1>Name:</h1>
            <input
                placeholder="Enter name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 w-full mb-3"
            />

            <h1>Score:</h1>
            <input
                placeholder="Enter score..."
                value={score}
                onChange={(e) => setScore(e.target.value)}
                className="border p-2 w-full mb-3"
            />

            <button onClick={handleAdd} className="bg-blue-500 text-white p-2 mb-3">
                Add
            </button>

            {/* แสดงข้อมูล */}
            {data.map((item, index) => (
                <div key={index}>
                    {item.name} - {item.score}
                </div>
            ))}

            <button onClick={() => setMode("all")} className="bg-blue-300 text-white p-2 m-3">All</button>
            <button onClick={() => setMode("pass")} className="bg-green-500 text-white p-2 m-3">Pass</button>
            <button onClick={() => setMode("fail")} className="bg-red-500 text-white p-2 m-3">Fail</button>


            {/* แสดงข้อมูลที่กรองแล้ว (condition) ? "Value if True" : "Value if False" */}
            {filteredData.length > 0 ? (filteredData.map((item, index) => (
                <div key={index}>
                    {item.name} - {item.score}
                </div>
            ))) 
            : (
                <div>No data found</div>
            )}
        </div>
    );
}