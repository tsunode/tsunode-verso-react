import { useState } from 'react';
import { GRID_SECTION_ROW_SIZE } from '../../pages/Dashboard/styles';
import Profile from '../Profile';

import { Container } from "./styles";

const Card = ({ thumbUrl, title, link, user }) => {
    const [imageSize, setImageSize] = useState(30);

    function getImageSize(event) {
        const { height } = event.target;

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
                    <Profile />
                    <span>{user.name} {user.surname}</span>
                </div>
            </a>
        </Container>
    )
} 

export default Card;