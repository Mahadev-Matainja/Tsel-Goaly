import React, {PureComponent} from 'react';
import { Link } from 'react-router-dom';
import { post } from '../../api';
import imgSuccess from '../../assets/img/sucess.png';
import imgError from '../../assets/img/error.png';
class EmailVerification extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            processing: false,
            success: false,
            error: false
        }
    }
    componentDidMount() {
        this.setState({processing: true});
        const _this = this;
        const key = this.props.match.params.key;
        const payload = new FormData();
        payload.append('key', key);
        post('useractivate', payload)
        .then(res => {
            if (res.data.success === 1) {
                _this.setState({processing: false, success: true});
            } else {
                _this.setState({processing: false, error: true});
            }
        })
        .catch(err=>console.log(err));
    }
    render() {
        const { processing, success, error } = this.state;
        return(
            <div style={{
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                {processing && <div style={{
                    padding: '0 10px',
                    borderRadius: '3px',
                    lineHeight: '50px',
                    letterSpacing: '1px',
                    display: 'flex',
                    alignItems: 'center',
                    transition: `all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)`
                }}>
                        <svg width='30px' height='30px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="uil-ring">
                            <rect x="0" y="0" width="100" height="100" fill="none" className="bk"></rect>
                            <defs>
                                <filter id="uil-ring-shadow" x="-100%" y="-100%" width="300%" height="300%">
                                    <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0"></feOffset>
                                    <feGaussianBlur result="blurOut" in="offOut" stdDeviation="0"></feGaussianBlur>
                                    <feBlend in="SourceGraphic" in2="blurOut" mode="normal"></feBlend>
                                </filter>
                            </defs>
                            <path d="M10,50c0,0,0,0.5,0.1,1.4c0,0.5,0.1,1,0.2,1.7c0,0.3,0.1,0.7,0.1,1.1c0.1,0.4,0.1,0.8,0.2,1.2c0.2,0.8,0.3,1.8,0.5,2.8 c0.3,1,0.6,2.1,0.9,3.2c0.3,1.1,0.9,2.3,1.4,3.5c0.5,1.2,1.2,2.4,1.8,3.7c0.3,0.6,0.8,1.2,1.2,1.9c0.4,0.6,0.8,1.3,1.3,1.9 c1,1.2,1.9,2.6,3.1,3.7c2.2,2.5,5,4.7,7.9,6.7c3,2,6.5,3.4,10.1,4.6c3.6,1.1,7.5,1.5,11.2,1.6c4-0.1,7.7-0.6,11.3-1.6 c3.6-1.2,7-2.6,10-4.6c3-2,5.8-4.2,7.9-6.7c1.2-1.2,2.1-2.5,3.1-3.7c0.5-0.6,0.9-1.3,1.3-1.9c0.4-0.6,0.8-1.3,1.2-1.9 c0.6-1.3,1.3-2.5,1.8-3.7c0.5-1.2,1-2.4,1.4-3.5c0.3-1.1,0.6-2.2,0.9-3.2c0.2-1,0.4-1.9,0.5-2.8c0.1-0.4,0.1-0.8,0.2-1.2 c0-0.4,0.1-0.7,0.1-1.1c0.1-0.7,0.1-1.2,0.2-1.7C90,50.5,90,50,90,50s0,0.5,0,1.4c0,0.5,0,1,0,1.7c0,0.3,0,0.7,0,1.1 c0,0.4-0.1,0.8-0.1,1.2c-0.1,0.9-0.2,1.8-0.4,2.8c-0.2,1-0.5,2.1-0.7,3.3c-0.3,1.2-0.8,2.4-1.2,3.7c-0.2,0.7-0.5,1.3-0.8,1.9 c-0.3,0.7-0.6,1.3-0.9,2c-0.3,0.7-0.7,1.3-1.1,2c-0.4,0.7-0.7,1.4-1.2,2c-1,1.3-1.9,2.7-3.1,4c-2.2,2.7-5,5-8.1,7.1 c-0.8,0.5-1.6,1-2.4,1.5c-0.8,0.5-1.7,0.9-2.6,1.3L66,87.7l-1.4,0.5c-0.9,0.3-1.8,0.7-2.8,1c-3.8,1.1-7.9,1.7-11.8,1.8L47,90.8 c-1,0-2-0.2-3-0.3l-1.5-0.2l-0.7-0.1L41.1,90c-1-0.3-1.9-0.5-2.9-0.7c-0.9-0.3-1.9-0.7-2.8-1L34,87.7l-1.3-0.6 c-0.9-0.4-1.8-0.8-2.6-1.3c-0.8-0.5-1.6-1-2.4-1.5c-3.1-2.1-5.9-4.5-8.1-7.1c-1.2-1.2-2.1-2.7-3.1-4c-0.5-0.6-0.8-1.4-1.2-2 c-0.4-0.7-0.8-1.3-1.1-2c-0.3-0.7-0.6-1.3-0.9-2c-0.3-0.7-0.6-1.3-0.8-1.9c-0.4-1.3-0.9-2.5-1.2-3.7c-0.3-1.2-0.5-2.3-0.7-3.3 c-0.2-1-0.3-2-0.4-2.8c-0.1-0.4-0.1-0.8-0.1-1.2c0-0.4,0-0.7,0-1.1c0-0.7,0-1.2,0-1.7C10,50.5,10,50,10,50z" fill="#4d0053" filter="url(#uil-ring-shadow)">
                                <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" repeatCount="indefinite" dur="1s"></animateTransform>
                            </path>
                        </svg>
                        <span style={{
                            marginLeft: '20px',
                            fontSize: '16px',
                            color: '#000'
                        }}>Please Wait...</span>
                </div>}
                {success && <div style={{textAlign: 'center'}}>
                    <img src={imgSuccess} style={{width: '100px', height: '100px'}}/>
                    <div style={{
                        marginTop: '20px',
                        fontSize: '15px',
                        letterSpacing: '1px'
                    }}>Email verification successful!</div>
                    <div style={{marginTop: '30px'}}>
                        <Link to='/login'>Login</Link>
                    </div>
                </div>}
                {error && <div style={{textAlign: 'center'}}>
                    <img src={imgError} style={{width: '100px', height: '100px'}}/>
                    <div style={{
                        marginTop: '20px',
                        fontSize: '15px',
                        letterSpacing: '1px'
                    }}>Email Verification link expired!</div>
                </div>}
            </div>    
        )
    }
};

export default EmailVerification;