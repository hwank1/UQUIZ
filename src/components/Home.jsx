import { useState } from "react"
import { useNavigate } from "react-router-dom";


const Quizlayout = "text-3xl font-semibold text-center text-slate-900 mb-6"


function Home () {
    const [nickname , setNickname] = useState("");

    const handleNickname = (e) => {
    setNickname(e.target.value);
  };



    const navigate = useNavigate("");

    const handleStart = () => {
        if(!nickname){
            alert("닉네임 입력은 필수입니다.")
        } else {
            navigate(`/quiz/${nickname}`)
        }
    }

    return (
    <div className="min-h-dvh grid place-items-center bg-slate-50 p-4">
        <div className="w-full max-w-md rounded-2xl bg-white shadow-[0_10px30px-10px_rgba(0,0,0,0.2)] border border-slate-100 p-8">
            <div>
                <p className={Quizlayout}>
                    UQuiz?</p>
            </div>
            <input 
            value={nickname}
            type="text"
            placeholder="닉네임을 입력하세요"
            onChange={handleNickname}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4  "
            />
            <button onClick={handleStart}
            className="mt-5 w-40 mx-auto block rounded-xl bg-blue-600 py-3 text-white font-medium hover:bg-blue-700 active:scale-[0.99] focus:outline-none focus:ring-4 focus:ring-blue-200 transition">시작하기</button>
        </div>
    </div>
    )
}



export default Home;