import React from 'react'
import styled from 'styled-components'
import Logo  from "../images/logo.svg"
import Spotimage from "../images/spot - image.svg"
import { ReactComponent as Apple } from "../images/apple.svg"
import { ReactComponent as Google } from "../images/google.svg"
import { ReactComponent as Freepick } from "../images/freepik-logo-.svg"
import { ReactComponent as Flat } from "../images/flaticon.svg"
import { ReactComponent as Cross } from "../images/cross - line.svg"
import { ReactComponent as Arrowimg } from "../images/arrow.svg"
import Patternimg  from "../images/pattern - color.svg"
import Menu from "../images/icons8-menu.svg"
import Close from "../images/icons8-close-window-30.png"


export default function Home() {
    return (
        <>
            <Homesection>
                <Wrapper>
                    <Header>
                        <H1>
                            <a href="#">
                            <img src={Logo} alt="Logo" />
                            </a>
                        </H1>
                        <Ul>
                            <Li><a href="#">Home</a></Li>
                            <Li><a href="#">About Us</a></Li>
                            <Li><a href="#">Awards</a></Li>
                            <Li><a href="#">Contact Us</a></Li>
                            <Li>
                                <Button>Get Start</Button>
                            </Li>
                        </Ul>
                        <Mobile onClick={active} id="icon">
                            <img src={Menu} alt="Menu" />
                        </Mobile>
                        <Mobileclose id="close" onClick={inactive}>
                            <img src={Close} alt="Close" />
                        </Mobileclose>
                        <Mobul id="mobileul">
                            <Mobli><A href="#">Home</A></Mobli>
                            <Mobli><A href="#">About Us</A></Mobli>
                            <Mobli><A href="#">Awards</A></Mobli>
                            <Mobli><A href="#">Contact Us</A></Mobli>
                            <Mobli>
                                <Mobbutton>Get Start</Mobbutton>
                            </Mobli>
                        </Mobul>
                    </Header>
                    <Global>
                        <Globaltop >
                            <Globalleft>
                                <Globalh3>
                                    2021 Global Design <B>Awards</B> Published
                                </Globalh3>
                                <Globalp>
                                    Here we published 2021 global design awards for the design competitions
                                </Globalp>
                                <Globalbutton>
                                    Already impressed?<br />
                                    <Bold>Get started today</Bold>
                                </Globalbutton>
                            </Globalleft>
                            <Globalright className="pattern">
                                <img src={Spotimage} alt="Spotimage" />
                            </Globalright>
                            <Pattern>
                                <img src={Patternimg} alt="Pattern" />
                            </Pattern>
                            <Patternt>
                                <img src={Patternimg} alt="Pattern" />
                            </Patternt>
                        </Globaltop>
                        <Globalbottom>
                            <Designul>
                                <List>
                                    <Listtop>
                                        <Icon>
                                            <Apple />
                                        </Icon>
                                        <Iconp>
                                            18 Jun 2020
                                        </Iconp>
                                    </Listtop>
                                    <Listmiddle>
                                        <H5>
                                            Gold Winner
                                        </H5>
                                        <Middlep>
                                            Apple Design Award 2020-21
                                        </Middlep>
                                        <Line>
                                            <Cross />
                                        </Line>
                                    </Listmiddle>
                                    <Listbottom>
                                        <Bottomp>
                                            United States
                                        </Bottomp>
                                        <Arrow>
                                            <Arrowimg />
                                        </Arrow>
                                    </Listbottom>
                                </List>
                                <List>
                                    <Listtop>
                                        <Icon>
                                            <Google />
                                        </Icon>
                                        <Iconp>
                                            08 Mar 2021
                                        </Iconp>
                                    </Listtop>
                                    <Listmiddle>
                                        <H5>
                                            Runner Up
                                        </H5>
                                        <Middlep>
                                            Google Design Award 2020-21
                                        </Middlep>
                                        <Line>
                                            <Cross />
                                        </Line>
                                    </Listmiddle>
                                    <Listbottom>
                                        <Bottomp>
                                            India,New Delhi
                                        </Bottomp>
                                        <Arrow>
                                            <Arrowimg />
                                        </Arrow>
                                    </Listbottom>
                                </List>
                                <List>
                                    <Listtop>
                                        <Icon>
                                            <Freepick />
                                        </Icon>
                                        <Iconp>
                                            18 Jun 2019
                                        </Iconp>
                                    </Listtop>
                                    <Listmiddle>
                                        <H5>
                                            Silver Award
                                        </H5>
                                        <Middlep>
                                            Freepik Best UI Award 2019-20
                                        </Middlep>
                                        <Line>
                                            <Cross />
                                        </Line>
                                    </Listmiddle>
                                    <Listbottom>
                                        <Bottomp>
                                            France
                                        </Bottomp>
                                        <Arrow>
                                            <Arrowimg />
                                        </Arrow>
                                    </Listbottom>
                                </List>
                                <List>
                                    <Listtop>
                                        <Icon>
                                            <Flat />
                                        </Icon>
                                        <Iconp>
                                            24 Feb 2020
                                        </Iconp>
                                    </Listtop>
                                    <Listmiddle>
                                        <H5>
                                            Special Jury
                                        </H5>
                                        <Middlep>
                                            Flaticon Design Award 2020-21
                                        </Middlep>
                                        <Line>
                                            <Cross />
                                        </Line>
                                    </Listmiddle>
                                    <Listbottom>
                                        <Bottomp>
                                            New York
                                        </Bottomp>
                                        <Arrow>
                                            <Arrowimg />
                                        </Arrow>
                                    </Listbottom>
                                </List>
                            </Designul>
                        </Globalbottom>
                    </Global>
                    <Formsection className="formsec">
                        <Formh3>
                            Want to get new design news
                        </Formh3>
                        <Formp>
                            Here is an comparison chart of us with thipsum tool,but at the end we win!
                        </Formp>
                        <Formform >
                            <Inputmail type="email" placeholder="Your email address">

                            </Inputmail>
                            <Submit type="submit" value="Get Started">
                                
                            </Submit>
                        </Formform>
                    </Formsection>
                    <Footer>
                        <Footerleft>
                            <Footerh1>
                                <a href="#">
                                    <img src={Logo} alt="Logo" />
                                </a>
                            </Footerh1>
                            <Footerp>
                                Apartment 0031 Broadmoor Ln,<br />Rotonda West Wood,<br />FL,33947
                            </Footerp>
                        </Footerleft>
                            <Footerul>
                                <Footerli><a href="#">Home</a></Footerli>
                                <Footerli><a href="#">About Us</a></Footerli>
                                <Footerli><a href="#">Awards</a></Footerli>
                                <Footerli><a href="#">Contact Us</a></Footerli>
                            </Footerul>
                            <Rightp>
                                Designed by <Steyp>www.steyp.in</Steyp>
                            </Rightp>
                    </Footer>
                </Wrapper>
            </Homesection>
        </>
    )
}
const Homesection = styled.section`
    background:#141414;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
`
const Wrapper = styled.section`
    width:90%;
    margin:0 auto;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
`
const Header = styled.header`
    padding:25px 0;
    display:flex;
    justify-content:space-between;
    align-items: center;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
`
const H1 = styled.h1`
    width: 30%;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
        width:45%;
    }
    @media all and (max-width: 360px){
    }
`
const Ul = styled.ul`
    display:flex;
    justify-content:space-between;
    width:45%;
    @media all and (max-width: 1280px){
        width:56%;
    }
    @media all and (max-width: 980px){
        width: 66%;
    }
    @media all and (max-width: 768px){
        display:none;
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
`
const Li = styled.li`
`
const Button = styled.a`
    border:2px solid #A14D9B;
    color:#D45945;
    padding:10px 25px;
    border-radius:10px;
    &:hover{
        border:2px solid #d45945;
        color:#A14D9B;
        cursor:pointer;
    }
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
`
const Global = styled.section`
    padding:0 0 50px 0;
    position:relative;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
`
const Globaltop = styled.div`
    display:flex;
    justify-content:space-between;
    margin-bottom:30px;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
        flex-wrap:wrap-reverse;
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
`
const Globalbottom = styled.div`
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
`
const Globalleft = styled.div`
    width:45%;
    padding:10% 0;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
        width:100%;
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
`
const Globalright = styled.div`
    width:50%;
    @media all and (max-width: 1280px){
        padding-top: 50px;
    }
    @media all and (max-width: 980px){
        width: 70%;
        margin: 0 auto;
        padding:0;
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
    
`
const Pattern = styled.div`
    position:absolute;
    z-index:0;
    filter:blur(30px);
    right:2%;    
    top: 0%;
    width:16%;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
        right: 10%;
        top: 10%;
    }
    @media all and (max-width: 768px){
        width:25%;
        right: 2%;
        top: 5%;
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }

`
const Patternt = styled.div`
    position:absolute;
    z-index:0;
    filter:blur(30px);
    right: 47%;
    top: 35%;
    width:16%;
    @media all and (max-width: 1280px){
        display:none;
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }

`
const Designul = styled.ul`
    display:flex;
    justify-content:space-between;
    @media all and (max-width: 1280px){
        flex-wrap:wrap;
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
`
const List = styled.li`
    border:2px solid #A14D9B;
    width:22%;
    padding:30px;
    border-radius:10px;
    &:hover{
        background:linear-gradient(to right,  #D45945 , #A14D9B);
        transform: scale(1.2);
        cursor:pointer;
    }
    @media all and (max-width: 1280px){
        width:30%;
        &:last-child{
            margin:30px auto 0 auto;
        }
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
        width:45%;
        &:nth-child(3n){
            margin-top:30px;
        }
        &:last-child{
            margin:30px 0 0 0;
        }
    }
    @media all and (max-width: 640px){
        width:100%;
        margin-bottom:30px;
        &:last-child{
            margin:0;
        }
        &:nth-child(3n){
            margin-top:0;
        }
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
`
const Globalh3 = styled.h3`
    font-size:45px;
    color:#fff;
    font-weight:700;
    width:75%;
    margin-bottom:35px;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
        width:100%;
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
        font-size: 35px;
        text-align: center;
    }
    @media all and (max-width: 360px){
    }
`
const Globalp = styled.p`
    color:#5B5A5D;
    font-size:20px;
    margin-bottom:35px;
    width:75%;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
        width:100%;
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
`
const Globalbutton = styled.a`
    background:linear-gradient(to right,  #D45945 , #A14D9B);
    padding:15px 25px;
    display:block;
    width:50%;
    text-align:center;
    border-radius:10px;
    color:#fff;
    &:hover{
        background:linear-gradient(to left,  #D45945 , #A14D9B);
        cursor:pointer;
    }
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
        margin:0 auto;
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
        width: 75%;
    }
    @media all and (max-width: 480px){
        width:100%;
    }
    @media all and (max-width: 360px){
    }
`
const B = styled.a`
    color:#D45945;
    font-weight:700;
    &:hover{
        cursor: pointer;
    }
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
`
const Bold = styled.b`
    font-weight:900;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
`
const Listtop = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:20px;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
`
const Listmiddle = styled.div`
`
const Middlep = styled.p`
    color:#fff;
    font-weight:700;
    font-size:18px;
    margin-bottom:20px;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
`
const Listbottom = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
`
const H5 = styled.h5`
    font-weight:900;
    color:#5B5A5D;
    margin-bottom:10px;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
`
const Icon = styled.div`
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
`
const Iconp = styled.p`
    color:#5B5A5D;
    font-weight:700;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
`
const Line = styled.div`
    margin-bottom:20px;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
`
const Bottomp = styled.p`
    color:#fff;
    font-weight:500;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
`
const Arrow = styled.div`
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
`
const Formsection = styled.section`
    padding:75px 50px;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
        padding:50px 20px;
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
`
const Formh3 = styled.h3`
    color:#fff;
    font-weight:700;
    font-size:45px;
    width:40%;
    margin-bottom:30px;
    @media all and (max-width: 1280px){
        width:75%;
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
        width:90%;
    }
    @media all and (max-width: 640px){
        width:100%;
    }
    @media all and (max-width: 480px){
        font-size: 35px;
        text-align: center;
    }
    @media all and (max-width: 360px){
    }
`
const Formp = styled.p`
    margin-bottom:30px;
    width:30%;
    color:#5B5A5D;
    @media all and (max-width: 1280px){
        width:75%;
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
        width:90%;
    }
    @media all and (max-width: 640px){
        width:100%;
    }
    @media all and (max-width: 480px){
        text-align: center;
    }
    @media all and (max-width: 360px){
    }
`
const Formform = styled.form`
    width:30%;
    position:relative;
    background:url("../images/Footer - image.png");
    @media all and (max-width: 1280px){
        width: 50%;
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
        width:75%;
    }
    @media all and (max-width: 640px){
        width:90%;
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
`
const Inputmail = styled.input`
    background:#fff;
    padding:15px 25px;
    width:90%;
    border-radius:10px;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
`
const Submit = styled.input`
    background:linear-gradient(to right,  #D45945 , #A14D9B);
    padding:15px 25px;
    color:#fff;
    font-weight:700;
    border-radius:10px;
    position:absolute;
    right:0;
    &:hover{
        cursor:pointer;
        background:linear-gradient(to left,  #D45945 , #A14D9B);
    }
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
        padding: 15px 10px;
    }
`
const Footer = styled.footer`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:25px 0 50px;
    @media all and (max-width: 1280px){
        flex-wrap:wrap;
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
`
const Footerleft = styled.div`
    width:40%;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
        width:50%;
        margin:25px auto;
        text-align:center;
    }
    @media all and (max-width: 640px){
        width:75%;
    }
    @media all and (max-width: 480px){
        width:90%;
    }
    @media all and (max-width: 360px){
    }
`
const Footerp = styled.p`
    color:#5B5A5D;
    margin-top:20px;
    @media all and (max-width: 1280px){
        margin-top: 30px;
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
`
const Rightp = styled.p`
    color:#5B5A5D;
    text-align:center;
    margin:0 auto;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
`
const Steyp = styled.a`
    color: #D45945;
    &:hover{
        cursor:pointer;
    }
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
`
const Footerul = styled.ul`
    display:flex;
    justify-content:space-between;
    width:45%;
    border-right:2px solid #5b5a5d;
    padding:15px 25px;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
        width: 60%;
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
        width:90%;
        margin:0 auto;
        margin-bottom:25px;
    }
    @media all and (max-width: 480px){
        flex-wrap:wrap;
    }
    @media all and (max-width: 360px){
    }
`
const Footerh1 = styled.h1`
    width: 30%;
    @media all and (max-width: 1280px){
        width: 52%;
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
        margin:0 auto;
    }
    @media all and (max-width: 640px){
        width: 70%;
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
`
const Footerli = styled.li`
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
        width:50%;
        &:nth-child(1){
            margin-bottom:20px;
        }
        &:nth-child(2){
            margin-bottom:20px;
        }
    }
    @media all and (max-width: 360px){
        width:50%;
        &:last-child{
            margin:20px 0 0 0;
        }
        &:nth-child(3n){
            margin-top:20px;
        }
    }
`
const Mobile = styled.div`
    display:none;
    border:2px solid  #A14D9B;
    padding:5px;
    border-radius:10px;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
        display:block;
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
`
const Mobul = styled.ul`
    display:none;
    padding:40px 25px;
    border:2px solid #d45945;
    width:40%;
    border-radius:10px;
    position:fixed;
    top: 25%;
    right: -90%;
    transition: all 0.4s ease-in;
    background: linear-gradient(to right, #A14D9B, #5B5A5D );
    z-index: 10;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
        display:block;
    }
    @media all and (max-width: 640px){
        width:60%
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
        width: 75%;
    }
`
const Mobli = styled.li`
    display:none;
    margin-bottom:25px;
    &:last-child{
        margin-bottom:0;
    }
    color:#fff;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
        display:block;
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
`
const Mobileclose = styled.div`
    display:none;
    border:2px solid  #A14D9B;
    padding:5px;
    border-radius:10px;
    position:fixed;
    top: 25%;
    right: -50%;
    width: 38px;
    transition: all 0.4s ease-in;
    z-index: 10;
    background: linear-gradient(to right, #A14D9B, #5B5A5D );
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
        display:block;
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
`
const A = styled.a`
    color:#fff;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
        display:block;
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
`
const Mobbutton = styled.a`
    border:2px solid #d45945;
    color:#D45945;
    padding:10px 25px;
    border-radius:10px;
    text-align:center;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
        display:block;
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
`
function active() {
    var menu = document.getElementById("mobileul");
    var close = document.getElementById("close");
    var icon = document.getElementById("icon");
    icon.addEventListener('click', () =>{
        menu.classList.add("active");
    });
    icon.addEventListener('click', () =>{
        close.classList.add("active");
    });
}
function inactive() {
    var menu = document.getElementById("mobileul");
    var close = document.getElementById("close");
    close.addEventListener('click', () =>{
        menu.classList.remove("active");
    });
    close.addEventListener('click', () =>{
        close.classList.remove("active");
    });
}
