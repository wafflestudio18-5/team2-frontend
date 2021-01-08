import Header from '../Story/Header'
import Footer from '../Story/Main/Footer'

const User = ({showModal, userinfo, logged_in, me}) => {
    return(
        <div>
            <Header showModal={showModal} userinfo={userinfo} logged_in={logged_in} me={me}/>
            <Footer />
        </div>
    )
}

export default User