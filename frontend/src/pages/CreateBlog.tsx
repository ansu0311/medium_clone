import axios from "axios"
import { useState } from "react"
import { Backend_URL } from "../config"
import { useNavigate } from "react-router-dom"
import { NavBarBlog } from "../components/NavBar"

export function CreateBlog() {
  const iconSize = "w-16 h-16"
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const navigate = useNavigate()

  return (
    <div className="flex justify-center w-screen bg-[#F6DFC1]">
    <div className="w-screen lg:w-[1280px] px-5 pt-4 flex flex-col h-min-screen">
      <NavBarBlog homePage={false} blogPage={false}/>
      <div className="grid grid-cols-12 py-16">
        <div className="col-span-2 pr-2 text-right my-2">
          <button onClick={async () =>{
            if(title != null && description != null)
            {
              try{
              const res = await axios.post(`${Backend_URL}/blog`,{title, description},{
                headers:{
                  Authorization:localStorage.getItem("token")
              },
              });
              navigate(`/blog/${res.data.id}`)
            }catch (err:any) {
              alert(err.message)
            }}
            else {
              alert("Please fill in all fields")
            }
          }} className={`${iconSize} bg-transparent text-5xl border-2 border-[#FFA079] text-[#FFA079] rounded-full outline-none hover:border-none hover:bg-[#FFA079] hover:text-black`} type="submit">
          <div className="pb-3">+</div></button>
        </div>
        <div className="flex flex-col col-span-8">
        <input type="text" id="Title" onChange={(e) =>{setTitle(e.target.value)}} className="block bg-transparent text-5xl my-1 w-full text-gray-900 border-none focus:outline-none focus:ring-none focus:border-none " placeholder="Title"></input>
        <textarea id="Description" onChange={(e) =>{setDescription(e.target.value)}} className="block bg-transparent h-[65vh] resize-y py-2.5 w-full text-2xl text-gray-900 border-none focus:outline-none rounded-lg focus:ring-none focus:border-none " placeholder="Tell Your Story..."></textarea>
        </div>
      </div>
    </div>
    </div>
  )
}
