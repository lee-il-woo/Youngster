import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Dropdown from "./Dropdown"

const locations = {
    title: '지역',
    list: ['서울','경기','세종','부산','대구','인천','광주','대전','울산','강원','충북','충남','전북','전남','경북','경남','제주']
}
const welfares = {
    title: '복지정책',
    list: ['취업지원','창업지원','주거,금융','생활,복지','정책참여','코로나19']
}

export default function Search(){
    const navigate = useNavigate()
    const [location,setLocation] = useState('')
    const [welfare,setWelfare] = useState('')
    return(
        <div className="w-screen flex justify-center flex-col items-center text-center">
            <div className="flex items-center">
                <div className="mr-3">
                    <Dropdown menu={locations} title={location} setTitle={setLocation}/>
                </div>
                <div className="mx-3">
                    <Dropdown menu={welfares} title={welfare} setTitle={setWelfare}/>
                </div>
                <div className="ml-3">
                    <button onClick={()=>{console.log(location,welfare)}}>검색</button>
                </div>
            </div>
            <button onClick={()=>{navigate('/searchwelfare')}} className="h-12 flex flex-nowrap items-center bg-purple-400 rounded px-6 mt-5">
                <div className="w-full">내게 맞는 복지 찾기</div>
            </button>
        </div>
    )
}