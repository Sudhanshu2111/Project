import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    const role = "student"; //replace with role from session
    const tabs = [
        { name: "Notices", path: `/${role}/notices`, role: ["student", "faculty"] },
        { name: "Time Table", path: `/${role}/timetable`, role: ["student", "faculty"] },
        { name: "Assignments", path: `/${role}/assignments`, role: ["student", "faculty"] },
        { name: "Quiz", path: `/${role}/quiz`, role: ["student", "faculty"] },
        { name: "Live Chat", path: `/${role}/livechat`, role: ["student", "faculty"] },
        { name: "Group Chat", path: `/${role}/groupchat`, role: ["student", "faculty"] },
        { name: "Notes", path: `/${role}/notes`, role: ["student", "faculty"] },
        { name: "Teachers", path: `/${role}/faculties`, role: ["student", "faculty"] }
    ]
    return (
        <div className="w-48 bg-[#13202d] text-gray-50">
            <div className="fji flex-col my-4 w-full gap-3 h-full">
                <div className="h-7">
                    <span className="font-medium text-lg">
                        <Link href={`/${role}`}>College Connect</Link>
                    </span>
                </div>
                <div className="seprator h-[0.5px] bg-gray-300 block w-10/12"></div>
                <div className='fcji h-full w-full [&>div]:w-3/5 text-left'>
                    <div className="h-[87%] whitespace-nowrap scroll flex flex-col gap-2">
                        {tabs.map((tab, index) => {
                            return (
                                <Link key={index} href={tab.path} className='whitespace-nowrap hover:bg-[#13202d] hover:opacity-60 cursor-pointer'>{tab.name}</Link>
                            )
                        })}
                    </div>
                    <div className='whitespace-nowrap hover:bg-[#13202d] hover:opacity-60 cursor-pointer'>
                        <button className="ul cursor-pointer text-center w-11/12" type="button">Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar