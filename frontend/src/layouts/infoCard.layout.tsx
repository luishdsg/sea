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
                            icon={<img src="../assets/img/user.png" alt="Avatar" />}
                        />
                    }
                    description={
                        <div className=" mh-400 h-100 overflow-auto">
                            <Text className="text-secondary ">
                                Meu coração está firme, ó Deus!
                                Cantarei e louvarei, ó Glória minha!

                                2Acordem, harpa e lira!
                                Despertarei a alvorada.

                                3Eu te darei graças, ó Senhor, entre os povos;
                                cantarei louvores entre as nações,

                                4porque o teu amor leal
                                se eleva muito acima dos céus;
                                a tua fidelidade alcança as nuvens!

                                5Sê exaltado, ó Deus, acima dos céus;
                                estenda-se a tua glória sobre toda a terra!

                                6Salva-nos com a tua mão direita
                                e responde-nos,
                                para que sejam libertos aqueles a quem amas.

                                7Do seu santuário Deus falou:
                                "No meu triunfo dividirei Siquém
                                e repartirei o vale de Sucote.
                            </Text>
                        </div>
                    }
                />
            </Card>
        </Row>
    );
};

export default InfoCard;
