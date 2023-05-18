
export default function Newsfeed(){
    const img = undefined;
    return (
        <div className="w-72 h-72">
            <div className="">
                {img?<img src="" alt="news image"></img>:<div className="w-full h-56 bg-blue-400 rounded flex justify-center items-center">대체 이미지</div>}
            </div>
            <div>
                <p className="font-medium text-xl">위에 이름을 책상을 노루, 별에도 버리었습니다.</p>
            </div>
        </div>
    )
}