import React, {useEffect, useState} from "react";
import {ArticleCard} from "./ArticleCard";
import {Col, Pagination, Row, Space, Spin} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getNews} from "../../redux/actions/news-action";

export const ArticlesCardsContainer = () => {

    const dispatch = useDispatch()
    const articles = useSelector(state => state.news.articles)
    const isLoading = useSelector(state => state.news.isLoading)
    const totalResults = useSelector(state => state.news.totalResults)
    const newsCountry = useSelector(state => state.news.newsCountry)
    const currentPage = useSelector(state => state.news.currentPage)
    const newsCategory = useSelector(state => state.news.newsCategory)


    useEffect( () => {
        dispatch(getNews(newsCountry, 1, newsCategory))
    }, [newsCountry, newsCategory])

    const onClick = (href) => {
        window.open(href, '_blank')
    }

    const onPageChange = (page) => {
        dispatch(getNews(newsCountry, page, newsCategory))
    }

    if (isLoading) {
        return <Space size="middle"><Spin size="large" /></Space>
    }

    const posts = articles.map((item, index) => <Col span={8}>
        <ArticleCard {...item} onClick={onClick} key={item.publishedAt} /></Col>)
    return (
        <div className='site-card-wrapper'>
            <Row gutter={16}>
                {posts}
            </Row>
            <Pagination current={currentPage} defaultCurrent={1} pageSize={12} onChange={(page) => onPageChange(page)} total={totalResults} />
        </div>
    )
}