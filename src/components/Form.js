import React, { useState, useRef} from 'react'

export default function Form() {
    const file = useRef()
    const [fileState, setFileState] = useState(null)
    const formSubmit = (e) =>{
     e.preventDefault()
     setFileState(file.current.files[0].name)
    }
    return (
        <div>
            <form onSubmit={formSubmit} method="post" encType="multipart/form-data">
                <input type="file" ref={file} name="avatar" />
                <input type="submit" value="Submit"/>
            </form>
            {fileState}
        </div>
    )
}
