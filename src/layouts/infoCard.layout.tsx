import React from "react";
import { Card, Avatar, Row, Typography } from "antd";

const { Meta } = Card;
const { Text } = Typography;

const InfoCard: React.FC = () => {
    return (
        <Row className="my-3">
            <Card className="" bordered={false}>
                <Meta
                    avatar={
                        <Avatar
                            size={64}
                            style={{ backgroundColor: "#d9d9d9" }}
                            icon={<img src="https://twirpz.wordpress.com/wp-content/uploads/2015/06/twitter-avi-gender-balanced-figure.png" alt="Avatar" />}
                        />
                    }
                    description={
                        <div className=" mh-400 h-100 overflow-auto">
                            <Text className="text-secondary ">
                                Meu coração está firme, ó Deus!
                                Cantarei e louvarei, ó Glória minha!
                                Acordem, harpa e lira!
                                Despertarei a alvorada.
                                Eu te darei graças, ó Senhor, entre os povos;
                                cantarei louvores entre as nações,
                                porque o teu amor leal
                                se eleva muito acima dos céus;
                                a tua fidelidade alcança as nuvens!
                                Sê exaltado, ó Deus, acima dos céus;
                                estenda-se a tua glória sobre toda a terra!
                                Salva-nos com a tua mão direita
                                e responde-nos,
                                para que sejam libertos aqueles a quem amas.
                            </Text>
                        </div>
                    }
                />
            </Card>
        </Row>
    );
};

export default InfoCard;
