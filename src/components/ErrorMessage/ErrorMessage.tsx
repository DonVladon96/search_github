import ErrorImg from '../../assets/ErrorImages.jpg'
import './ErrorMessage.css'
function ErrorMessage() {
    return (
        <div>
            <h1>Такого пользователя не существует</h1>
            <img
                src={ErrorImg}
                alt='ErrorIMG'
                className='Error__image'
            />
        </div>
    );
}

export default ErrorMessage;
