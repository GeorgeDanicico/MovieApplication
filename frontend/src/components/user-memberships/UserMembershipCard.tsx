import axios from '@/utils/axios';
import { Button, Card, CardBody, CardHeader, Image } from '@nextui-org/react';
import React, { useEffect } from 'react'

interface MembershipCardProps {
    id: number,
    name: string,
    description: string,
    sold: boolean,
    price: number,
    entries: number,
    duration: number
}

export const UserMembershipCard: React.FC<MembershipCardProps> = (props) => {
    const handleChoseSubscription = async () => {
        try {
            // Make a request to the backend to subscribe the user to the selected subscription
            const response = await axios.post(`/user/purchase/${props.id}`, {});
            if (response?.data?.checkoutLink) {
                window.location.href = response.data.checkoutLink;
            }

        } catch (err) {
        }
        finally {
        }
    }

    useEffect(() => {
        console.log(props);
    }, [])

    return (
        <Card className="py-4 mr-10 w-[350px] h-[400px]">
          <CardHeader className=" pt-2 flex-col items-start text-lg font-bold">
            <p className="">{props.name}</p>
            <p className="text-4xl text-linear-gradient">{props.price}<span className="text-sm"> RON</span></p>
          </CardHeader>
          <CardBody className=" py-2">

            <Button 
                onClick={() => handleChoseSubscription()}
                className="bg-linear-gradient text-white text-lg"
            >
                Cumpara
                </Button>

            <div className="mt-5">
                <p className="font-bold">Beneficii:</p>
                <ul>
                    <li>{props.entries} intrari valabile</li>
                    <li>{props.duration} zile valabil</li>
                    <li>Acces la toate evenimentele</li>
                    <li>Access la toate salile</li>
                </ul>
            </div>
          </CardBody>
        </Card>
      );
}
