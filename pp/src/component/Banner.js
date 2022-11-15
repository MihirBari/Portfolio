import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImage from "../assets/img/header-img.svg"
import { useEffect, useState } from "react"



export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsdeleting] = useState(false)
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const [index, setIndex] = useState(1);
    const toRotate = ["web development", "Web designing", "Java developer"]
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
      },[text])
 
/*
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, fullText - 1) : fullText.substring(0, fullText + 1)

        setText(updateText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updateText === fullText) {
            setIsdeleting(true)
            setDelta(period)
        }
        else if (isDeleting && updateText === '') {
            setIsdeleting(false);
            setLoopNum(loopNum + 1)
            setDelta(500);
        }
    } */

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsdeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsdeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(500);
        } else {
          setIndex(prevIndex => prevIndex + 1);
        }
      }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center" >
                    <Col xs={12} md={6} xl={7} >
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>{`Hi I'm Mihir Bari`}<br></br><span className="wrap">{text}</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium nulla adipisci,
                            sit deserunt laudantium quasi tempore impedit dolore numquam non, iure omnis pariatur earum.</p>
                        <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25} /> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5} >
                        <img src={headerImage} alt="Header" />
                    </Col>
                </Row>
            </Container>

        </section>
    )
}