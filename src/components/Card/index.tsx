import { SyntheticEvent, useState } from 'react';
import { IProject } from '../../pages/Dashboard';
import { GRID_SECTION_ROW_SIZE } from '../../pages/Dashboard/styles';
import Profile from '../Profile';

import { Container } from "./styles";

interface ITargetImage {
    height: number
}

const Card = ({ thumbUrl, title, link, user }: IProject) => {
    const [imageSize, setImageSize] = useState(30);

    function getImageSize(event: SyntheticEvent<HTMLImageElement, Event>) {
        const { height } = event.target as unknown as ITargetImage;

        const GRID_CONTENT_SPAN_SIZE = 4;
        
        const size = Math.round(
            (height / GRID_SECTION_ROW_SIZE) + GRID_CONTENT_SPAN_SIZE
        )

        setImageSize(size);
    }

    return(
        <Container size={imageSize}>
            <a href={link} target='_blank' rel='noreferrer'>
                <div>
                    <img 
                        onLoad={getImageSize} 
                        src={thumbUrl} 
                        alt={title}
                    />
                    <p>{title}</p>
                </div>

                <div>
                    <Profile size={35} />
                    <span>{user.name} {user.surname}</span>
                </div>
            </a>
        </Container>
    )
} 

export default Card;