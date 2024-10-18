import './header.css'


const Header = () => {
    return (
        <div>
            <div className="d-flex justify-content-between bg-danger p-3">
                <div className="justify-content-start">
                    <h1 className="text-white ms-5">Dhruvin</h1>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <ul>
                        <li className='me-3'><a href="#">Home</a></li>
                        <li className='me-3'><a href="#">About Us</a></li>
                        <li className='me-3'><a href="#">Services</a></li>
                        <li className='me-3'><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="d-flex justify-content-end align-items-center ms-5">
                    <a href="#">Olá</a>
                </div>
            </div>
        </div>
    )
}

export default Header