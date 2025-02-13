import address from '../assets/images/address.png';

export default function Contact() {
    return (
        <div className='contact'>
            <h1>Contact Information</h1>
            <p style={{margin: "16px 0 0 0"}}>Find us at: </p>
            <h4 style={{color: "coral", marginBottom: "15px"}}>456 Culinary Avenue Gourmet Town, 1010 Vienna, Austria</h4>
            <img src={address} alt="Headrquarters" />
        </div>
    )
}