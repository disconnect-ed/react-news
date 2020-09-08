import React, {useState} from "react";
import {Modal, Radio} from "antd";

export const ModalComonent = ({modal, handleOk, handleCancel, newsCategory}) => {
    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
    };

    const [state, setState] = useState(newsCategory)

    return (
        <Modal
            title="Basic Modal"
            visible={modal}
            onOk={() => handleOk(state)}
            onCancel={handleCancel}
        >
            <h4>Сортировка по категориям</h4>
            <Radio.Group onChange={(e) => setState(e.target.value)} value={state} style={{width: '100%'}}>
                <div style={{display: "flex", justifyContent: 'space-around'}}>
                    <div>
                        <Radio style={radioStyle} value={''}>По умолчанию</Radio>
                        <Radio style={radioStyle} value={'business'}>Бизнес</Radio>
                        <Radio style={radioStyle} value={'entertainment'}>Развлечения</Radio>
                        <Radio style={radioStyle} value={'general'}>Главные</Radio>
                    </div>
                    <div>
                        <Radio style={radioStyle} value={'health'}>Здоровье</Radio>
                        <Radio style={radioStyle} value={'science'}>Наука</Radio>
                        <Radio style={radioStyle} value={'sports'}>Спорт</Radio>
                        <Radio style={radioStyle} value={'technology'}>Технологии</Radio>
                    </div>
                </div>
            </Radio.Group>
        </Modal>
    )
}