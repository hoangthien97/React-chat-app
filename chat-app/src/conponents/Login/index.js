import React from 'react';
import {Row, Col, Button, Typography} from 'antd';
import {auth} from '../../firebase/config';
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";

const {Title} = Typography;
const fbProvider = new FacebookAuthProvider();

export default function Login() {
    const handleFbLogin = () => {
        signInWithPopup(auth, fbProvider);
    }

    auth.onAuthStateChanged((user) => {
        console.log(user);
    });

    return (
        <div>
            <Row justify='center' style={{height: 800}}>
                <Col span={8}>
                    <Title style={{textAlign: 'center'}} level={3}>
                        Fun Chat
                    </Title>
                    <Button style={{width: '100%', marginBottom: 5}}>
                        Đăng nhập bằng Google</Button>
                    <Button style={{width: '100%'}} onClick={handleFbLogin}>Đăng nhập bằng Facebook</Button>
                </Col>
            </Row>
        </div>
    )
}