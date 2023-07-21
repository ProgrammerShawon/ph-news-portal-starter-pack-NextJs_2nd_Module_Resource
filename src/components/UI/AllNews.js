import { Button, Card, Col, Row } from 'antd';
import Link from 'next/link';
const { Meta } = Card;
const AllNews = ({ allNews }) => (
    <>
        <h1 style={{
            textAlign: 'center',
            marginTop: '100px',
            fontSize: 60,
        }}>#TODAY HIGHLIGHT</h1>
        <Row

            style={{ marginBottom: '80px', marginTop: "80px" }}
            gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
            }}
        >
            {
                allNews?.map((news) => {
                    return (
                        <Col className="gutter-row" xs={24} sm={12} md={8} lg={6}>
                            <Card
                                hoverable
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    
                                }}
                                cover={<img alt="example" style={{ height: '300px' }} src={news?.image_url} />}
                            >
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height:'100%'
                                }}>
                                    <h1 style={{
                                        flexGrow: 'auto',
                                    }}>{news?.title}</h1>

                                    <div
                                        style={{
                                            margin: '20px 0px',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            gap: '10px',
                                            flexGrow: 'auto',
                                        }}
                                    >
                                        <span>{news?.release_date}</span>
                                        <span>{news?.comment_count} Comments</span>
                                        <span>{news?.category}</span>
                                    </div>

                                    <p>{news?.description}</p>
                                    <div style={{
                                        flexGrow: 1,
                                        display: 'flex',
                                        alignItems: 'end',
                                    }} >

                                        <Link href={`/news/${news?.id}`} style={{
                                            width:'100%',                             
                                        }}>
                                        <Button
                                            style={{
                                                width: '100%',
                                                borderRadius: 0,
                                                margin: '20px 0px',
                                                backgroundColor: 'black',
                                                color: 'white',

                                            }}
                                        >Read More</Button>
                                        </Link>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    )
                })
            }

        </Row>

    </>
);
export default AllNews;
