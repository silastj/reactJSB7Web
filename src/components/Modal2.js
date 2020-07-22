import React, {useState} from 'react';
import  styled from 'styled-components';
import Modal from './Modal';

const Button = styled.button`
    width:100px;
`;




function ModalOne() {

    const [modalVisible, setModalVisible] = useState(false);

    const handleButtonClick = () => {
        setModalVisible(true);
    }

    return(
            <>
            <Button onClick={handleButtonClick}>Abrir Modal</Button>
            <Modal visible={modalVisible} setVisible={setModalVisible}>            
                    <h1>Testando 123...</h1>          
            </Modal> 
           
            </>
    );
}

export default ModalOne;