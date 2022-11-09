import Card from "../../components/Card"

import { Section } from "./styles";

import teste1 from '../../assets/teste1.jpg';
import teste2 from '../../assets/teste2.jpg';
import teste3 from '../../assets/teste3.jpg';
import teste4 from '../../assets/teste4.gif';
import teste5 from '../../assets/teste5.gif';

const Dashboard = () => {
    return(
        <Section>
              <ul>
                <Card image={teste1} />
                <Card image={teste2} />
                <Card image={teste3} />
                <Card image={teste4} />
                <Card image={teste5} />
            </ul>
        </Section>
    )
}

export default Dashboard