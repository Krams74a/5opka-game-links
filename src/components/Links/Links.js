import React from 'react';
import {MDBBtn, MDBIcon} from "mdb-react-ui-kit";
import {Button, Card, ListGroup} from "react-bootstrap";
import GOOGLE_DRIVE_ICON from "../../assets/images/Google_Drive_icon.png";
import TELEGRAM_ICON from "../../assets/images/Telegram_icon.png";
import APP_GALLERY_ICON from "../../assets/images/Huawei_AppGallery_icon.png";
import GALAXY_STORE_ICON from "../../assets/images/Galaxy_Store_icon.png";


const Links = ({isDarkTheme, setIsDarkTheme}) => {
    return (
        <div className={"linksCard"} style={
            {

            }
        }>
            <div style={{position: "fixed", right: "10px", zIndex: "1"}}>
                <MDBBtn size="lg" className='m-1' floating
                        style={
                            {
                                backgroundColor: `${isDarkTheme ? "white" : "black"}`,
                                color: `${isDarkTheme ? "black" : "white"}`
                            }
                        }
                        onClick={() => {
                            setIsDarkTheme(!isDarkTheme)
                        }}>
                    <MDBIcon size="lg" fas icon={`${isDarkTheme ? "sun" : "moon"}`}/>
                </MDBBtn>
            </div>
            <Card bg={isDarkTheme ? "dark" : "white"} text={isDarkTheme ? "white" : "dark"}
                  style={{marginBottom: "20px"}}>
                <Card.Body>
                    <Card.Title style={{textDecoration: "underline"}}>Описание игры</Card.Title>
                    <Card.Text>
                        Игра про стримера - 5opka (Пятёрка). В данной игре вам предстоит уворачиваться от
                        падающих
                        предметов, либо же подбирать полезные предметы. Игра наполнена мемами и отсылками на
                        Пятёрку, а также на игру Майнкрафт.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card bg={isDarkTheme ? "dark" : "white"} text={isDarkTheme ? "white" : "dark"}
                  style={{marginBottom: "20px"}}>
                <Card.Header
                    style={{borderBottom: `${isDarkTheme ? "2px solid rgb(76 76 76)" : "2px solid #dfdfdf"}`}}>СКАЧАТЬ
                    FLASH DOWN</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item style={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: `${isDarkTheme ? "rgb(38,38,38)" : "white"}`,
                        color: `${isDarkTheme ? "white" : "black"}`,
                        borderBottom: `${isDarkTheme ? "2px solid rgb(76 76 76)" : "2px solid #dfdfdf"}`
                    }}>
                        <div style={{height: "30px", width: "30px", marginRight: "15px"}}>
                            <img src={GOOGLE_DRIVE_ICON} style={{height: "100%", width: "100%"}}/>
                        </div>
                        <div style={{flex: "1"}}>
                            APK Файл
                        </div>
                        <Button
                            onClick={() => window.open("https://drive.google.com/file/d/1GHqmV0_6UAHdr2mUewAYrh4W4hA-Shln/view?usp=sharing", '_blank')}>Перейти</Button>
                    </ListGroup.Item>
                    <ListGroup.Item style={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: `${isDarkTheme ? "rgb(38,38,38)" : "white"}`,
                        color: `${isDarkTheme ? "white" : "black"}`,
                        borderBottom: `${isDarkTheme ? "2px solid rgb(76 76 76)" : "2px solid #dfdfdf"}`
                    }}>
                        <div style={{height: "30px", width: "30px", marginRight: "15px"}}>
                            <img src={TELEGRAM_ICON} style={{height: "100%", width: "100%"}}/>
                        </div>
                        <div style={{flex: "1"}}>
                            Telegram
                        </div>
                        <Button onClick={() => window.open("https://t.me/SopkaGame", '_blank')}>Перейти</Button>
                    </ListGroup.Item>
                    <ListGroup.Item style={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: `${isDarkTheme ? "rgb(38,38,38)" : "white"}`,
                        color: `${isDarkTheme ? "white" : "black"}`,
                        borderBottom: `${isDarkTheme ? "2px solid rgb(76 76 76)" : "2px solid #dfdfdf"}`
                    }}>
                        <div style={{height: "30px", width: "30px", marginRight: "15px"}}>
                            <img src={APP_GALLERY_ICON} style={{height: "100%", width: "100%"}}/>
                        </div>
                        <div style={{flex: "1"}}>
                            App Gallery
                        </div>
                        <Button
                            onClick={() => window.open("https://appgallery.huawei.com/app/C106714959", '_blank')}>Перейти</Button>
                    </ListGroup.Item>
                    <ListGroup.Item style={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: `${isDarkTheme ? "rgb(38,38,38)" : "white"}`,
                        color: `${isDarkTheme ? "white" : "black"}`
                    }}>
                        <div style={{height: "30px", width: "30px", marginRight: "15px"}}>
                            <img src={GALAXY_STORE_ICON} style={{height: "100%", width: "100%"}}/>
                        </div>
                        <div style={{flex: "1"}}>
                            Galaxy Store
                        </div>
                        <Button
                            onClick={() => window.open("https://apps.samsung.com/appquery/appDetail.as?appId=com.FGG.FlashDown", '_blank')}>Перейти</Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
            <Card bg={isDarkTheme ? "dark" : "white"} text={isDarkTheme ? "white" : "dark"}
                  style={{height: "350px", marginBottom: "20px"}}>
                <Card.Body>
                    <Card.Title style={{textDecoration: "underline"}}>Видео об игре</Card.Title>
                    <iframe
                        width="100%"
                        height="90%"
                        src={`https://www.youtube.com/embed/QMCg7gfA5V4`}
                        frameBorder="0"
                        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                </Card.Body>
            </Card>
            <Card bg={isDarkTheme ? "dark" : "white"} text={isDarkTheme ? "white" : "dark"}>
                <Card.Body style={{padding: "10px"}}>
                    <MDBBtn size="lg" className='m-1' floating style={{backgroundColor: '#2AABEE'}}
                            href='https://t.me/SopkaGame' target="_blank">
                        <MDBIcon size="lg" fab icon='telegram-plane'/>
                    </MDBBtn>
                    <MDBBtn size="lg" className='m-1' floating style={{backgroundColor: '#ed302f'}}
                            href='https://www.youtube.com/c/Крамс' target="_blank">
                        <MDBIcon size="lg" fab icon='youtube'/>
                    </MDBBtn>
                    <MDBBtn size="lg" className='m-1' floating style={{backgroundColor: '#4c75a3'}}
                            href='https://vk.com/flashdown' target="_blank">
                        <MDBIcon size="lg" fab icon='vk'/>
                    </MDBBtn>
                    <MDBBtn size="lg" className='m-1' floating style={{backgroundColor: '#7289d9'}}
                            href='https://discord.gg/H6EGVhG' target="_blank">
                        <MDBIcon size="lg" fab icon='discord'/>
                    </MDBBtn>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Links;
