import React from "react";
import {Card} from 'antd';

const {Meta} = Card;


export const ArticleCard = ({title, url, urlToImage, description, onClick}) => {
    return (
            <Card
                hoverable
                style={{width: 350, marginBottom: 50}}
                cover={<img alt="example" src={urlToImage}/>}
                onClick={() => onClick(url)}
            >
                <Meta title={title} description={description}/>
            </Card>)
}