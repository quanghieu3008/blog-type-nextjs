import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import styles from '../styles/index.module.css';
import { useRouter } from 'next/router'
const Cards = ({ items }: any) => {
    const router = useRouter()
    const url = items.fields.image.fields.file.url
    console.log(items, "items datê");
    console.log(url, 'url');
    const handleNext = () => {
        // e.preventDefault()
        router.push('/detailBlogs/' + items.fields.slug)
    }
    return (
        <div >
            <Card className={styles.cards} onClick={handleNext} style={{ width: '20rem', margin: '1.5rem' }}>
                <Card.Img variant="top" src={url} />
                <Card.Body>
                    <Card.Title style={{fontSize:"18px"}}>{items.fields.title}</Card.Title>
                    <p className={styles.textSize} >
                            {items.fields.date}
                        </p>
                    <div className={styles.cardDetail}>
                        <Link href={'/detailBlogs/' + items.fields.slug}>
                            <a>Tác giả : {items.fields.tacgia}</a>
                        </Link>

                        </div>
                </Card.Body>
            </Card>
        </div>
    )
}
export default Cards