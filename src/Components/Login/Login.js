import { Button } from 'react-bootstrap';
import { auth, provider } from '../../firebase-config';
import { signInWithPopup } from 'firebase/auth';

import { useNavigate } from 'react-router-dom';

function Login({setIsAuth}) {
    let navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            setIsAuth(true);
            navigate("/");
        });
    }

    return (
        <div className="login-page">
            <Button onClick={signInWithGoogle}>Sign in with Google</Button>
        </div>
    );
}

export default Login;