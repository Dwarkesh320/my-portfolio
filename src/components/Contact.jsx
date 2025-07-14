
const Contact = () => {
    return (
    
    <div className="contact-page">
        <div className="contact-form">
            <div>
            <h1>Contact me </h1>
            <form>
                
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="tel" placeholder="phone" />
                <input type="submit" value="Ping me" />

            </form>
            </div>
        </div>


    </div> );
}
export default Contact;