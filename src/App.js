import './App.css';
import React from "react";
import {Card, ListGroup, Button} from "react-bootstrap"

function App() {
  return (
    <div>
        <div className={"linksCard"}>
            <Card>
                <Card.Header>СКАЧАТЬ FLASH DOWN</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <div>
                            APK Файл
                        </div>
                        <Button onClick={() => window.open("https://drive.google.com/file/d/1jHUQNt1KiLzHuUjtfSm-ThNO0z2mrqAg/view?usp=sharing", '_blank')}>Скачать</Button>
                    </ListGroup.Item>
                    <ListGroup.Item style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <div>
                            Telegram
                        </div>
                        <Button onClick={() => window.open("https://t.me/SopkaGame", '_blank')}>Скачать</Button>
                    </ListGroup.Item>
                    <ListGroup.Item style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <div>
                            App Gallery
                        </div>
                        <Button onClick={() => window.open("https://appgallery.huawei.com/app/C106714959", '_blank')}>Скачать</Button>
                    </ListGroup.Item>
                    <ListGroup.Item style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <div>
                            Galaxy Store
                        </div>
                        <Button onClick={() => window.open("https://t.me/SopkaGame", '_blank')}>Скачать</Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    </div>
  );
}

export default App;
