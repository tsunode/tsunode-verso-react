import { forwardRef, useEffect, useState } from "react";
import { AiTwotoneCamera } from "react-icons/ai";

import { Container } from "./styles";
import { IInputFileProps } from "./types";

export const InputFile = forwardRef<HTMLInputElement, IInputFileProps>((
    { label, id, watchFile, ...rest }, ref) => {
    const [previewImage, setPreviewImage]= useState<string>();
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        if(watchFile && watchFile.length) {
            setPreviewImage(URL.createObjectURL(watchFile[0]))
            setIsDragging(false)
        }

    }, [watchFile])

    return(
        <Container
            onDragOver={() => setIsDragging(true)}
            onDragLeave={() => setIsDragging(false)}  
            isDragging={isDragging}
        >
            <input type="file" id={id} multiple={false} ref={ref} {...rest} />

            {
                previewImage ?
                    <img src={previewImage} alt="Pré visualização da imagem" />
                    :
                    <>
                        <label htmlFor={id}>
                            <AiTwotoneCamera />
                            {label}
                        </label>
                        <p>Clique aqui ou arraste uma imagem</p>
                    </>
            }
        </Container>
    )
})  