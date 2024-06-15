
import Layout from '../../Components/Layout/Layout'
import Heropage from '../../Components/HeroPage/Heropage'
import Categorypage from '../../Components/Category/Categorypage'
import Homeproduct from '../../Components/Homeproduct/Homeproduct'
import Track from '../../Components/Track/Track'
import Testimonial from '../../Components/Testimonial/Testimonial'
import Loader from '../../Components/Loader/Loader'



export default function Homepage() {

    return (
        <Layout>
            <Heropage />
            <Categorypage />
            <Homeproduct />
            <Track />
            <Testimonial />
            <Loader/>
        </Layout>
    )
}
