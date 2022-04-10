
import { uploadBytes, ref, listAll, getDownloadURL } from 'firebase/storage'
import { useEffect, useState } from 'react'
import {storage} from '../firebase-component/firebase'

function Post(){


    const [file,setFile]=useState(null);
    const [image,setImage]=useState([]);
    const [loading,setloading]=useState(false)

    
    const imageRef = ref(storage,'image/');

    const handleUpload = () => {
        setloading(true)
        const storageRef = ref(storage, `image/${file.name}`);
            uploadBytes(storageRef,file).then(()=>{
            loadingImage()
            setloading(false)

        })
    };



    function loadingImage(){
    
        listAll(imageRef).then((res)=>{
            res.items.forEach((item)=>{
                getDownloadURL(item).then((url)=>{
                    if(!image.includes(url)){
                        setImage((prev)=>[...prev,url])
                    }
                });
            });
        });
    };

    

    useEffect(()=>{
       loadingImage()
    },[]);

    return(
        <>
           <div className='container mt-5 pt-5'>
                <div className='row'>
                    <div className='col-sm'>
                        <h1 className='contentWords'>Post your photgraphy photos here!</h1>
                        <p className='contentWords'> It was a pleasure working with Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    </div>
                </div>
            </div>
            <div className='group-upload'>
                <input className='add' type="file" onChange={(e)=>{
                    setFile(e.target.files[0])
                }} />
                <button className='add' onClick={handleUpload}>{loading?"uploading":"upload"}</button>
            </div>
            <div className='group-pic'>
                {image.map((item) => {
                        return(
                            <img className='landpic rounded-3' src={item} alt="img"/>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Post