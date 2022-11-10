import { useState } from 'react';
import { GRID_SECTION_ROW_SIZE } from '../../pages/Dashboard/styles';
import Profile from '../Profile';

import { Container } from "./styles";

const Card = ({ image }) => {
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
            <div>
                <img 
                    onLoad={getImageSize} 
                    src={image} 
                    alt="" 
                />
                <p>Banco de dados do sistema financeiro do Banco do Brasil</p>
            </div>

            <div>
                <Profile />
                <span>Tsunode</span>
            </div>
        </Container>
    )
} 

export default Card;