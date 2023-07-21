import RootLayout from "@/components/Layouts/RootLayout";


const NewsDetailPage = ({ news }) => {

    return (
        <div>
            <h1>{news?.title}</h1>
        </div>
    )
}

export default NewsDetailPage;

NewsDetailPage.getLayout = (page) => {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}

export const getStaticPaths = async () => {
    const res = await fetch(`http://localhost:5000/news`)
    const newses = await res.json();

    const paths = newses.map((news) => ({
        params: {
            newsId: news.id.toString(),
        }
    }))

    return {
        paths,
        fallback: false
        /**
         * fallback: false means if id not exist , return to 404 page
         * fallback: true means if id exist ,not redirent to 404 page and wait loading.... 
         * fallback : 'blocking' means if id exist ,not redirent to 404 page and not wait loading.... 
         * conclusion: initial state e is false and if has big amount data set true.
         */
    }
}

export const getStaticProps = async (context) => {
    const { newsId } = context.params;
    const res = await fetch(`http://localhost:5000/news/${newsId}`)
    const data = await res.json();
    return {
        props: {
            news: data
        },
        revalidate: 10,
    }
}