import axios from "axios"
import { useEffect, useState } from "react"
import { Backend_URL } from "../config"


export const useBlogs =() =>{
    const [loading,setLoading] = useState(true)
    const [blog,setBlog] = useState([])

    useEffect(()=>{
        axios.get(`${Backend_URL}/blog/bulk`,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        })
     .then(res=>{
            setBlog(res.data)
            setLoading(false)
        })
    },[])

    return{
        blog,
        loading
    }
}
export const useBlog =({id}:{id:string}) =>{
    const [loading,setLoading] = useState(true)

    type BlogDetails = {
        title: string,
        description: string,
        author: string,
        quote: string,
        time : number,
        authorId: string,
      }
    
      const [blogData, setBlogData] = useState<BlogDetails>({
        title: "",
        description: "",
        author: "",
        quote: "",
        time : 0,
        authorId: "",
      })
    
      useEffect( ()=>{
        axios.get(`${Backend_URL}/blog/`+id, {
          headers: {
            Authorization:localStorage.getItem("token"),
          },
        }).then((res)=>{
          setBlogData({
            title: res.data.title,
            description: res.data.description,
            author: ((res.data.author.name)?res.data.author.name:"Anonymous Author"),
            quote: ((res.data.author.quote)?res.data.author.quote:"In three words I can sum up everything I've learned about life: it goes on."),
            time : res.data.dateCreated,
            authorId: res.data.authorId,
          })
          setLoading(false)
        })
    },[])

    return{
        title: blogData.title,
    description: blogData.description,
    author: blogData.author,
    quote: blogData.quote,
    time : blogData.time,
    authorId: blogData.authorId,
        loading
    }
}