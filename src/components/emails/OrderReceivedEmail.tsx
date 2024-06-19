import { ShippingAddress } from '@prisma/client'
import {Body, Column, Container, Head, Heading, Hr, Html, Img, Preview, Row, Section, Text} from '@react-email/components'
import React from 'react'

const OrderReceivedEmail = ({
  shippingAddress,
  orderId,
  orderDate,
} : {
  orderId: string,
  orderDate: string,
  shippingAddress: ShippingAddress
}) => {

  const baseUrl = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://bepperbox.vercel.app";

  return (
    <Html>
      <Head />
      <Preview>Your order summary and estimated delivery date</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={message}>
            <Img src={`${baseUrl}/bepis-3.png`} width="65" height="73" alt="bepper's cute face" style={{margin: "auto"}}/>
            <Heading style={global.heading}>
            <Text style={global.text}>
              We're preparing your order for deliver and will notify you once your package has been shipped. Delivery will usually take 5-7 business days after the package has been shipped.
            </Text>
            <Text style={{...global.text, marginTop: 24}}>
              If you have any questions regarding your order, feel free to contact customer support and we'll get back you within 24 hours.
            </Text>
            </Heading>
          </Section>
          <Hr style={global.hr}/>
          <Section style={global.defaultPadding}>
            <Text style={addressTitle}>
              Shipping to: {shippingAddress.name}
            </Text>
            <Text style={{...global.text, fontSize: 14}}>
              {shippingAddress.street}, {shippingAddress.city}, {shippingAddress.state} {shippingAddress.postalCode}
            </Text>
          </Section>
          <Hr style={global.hr}/>
          <Section style={global.defaultPadding}>
            <Row style={{display: "inline-flex", marginBottom: 40}}>
              <Column style={{width: 170}}>
                <Text style={global.paragraphWithBold}>
                  Order Number
                </Text>
                <Text style={track.number}>
                  {orderId}
                </Text>
              </Column>
              <Column style={{marginLeft: 20}}>
                <Text style={global.paragraphWithBold}>
                  Order Date
                </Text>
                <Text style={track.number}>
                  {orderDate}
                </Text>
              </Column>
            </Row>
          </Section>
          <Hr style={global.hr}/>
          <Section style={paddingY}>
            <Row>
              <Text style={{...footer.text, paddingTop: 30, paddingBottom: 30,}}>
                Contact customer support if you have any questions. (We won't be able to see replies to this email)
              </Text>
            </Row>
            <Row>
              <Text style={footer.text}>
                &copy; BepperBox, Inc. All Rights Reserved.
              </Text>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default OrderReceivedEmail

const paddingX = {
  paddingLeft: '40px',
  paddingRight: '40px',
}

const paddingY = {
  paddingTop: '22px',
  paddingBottom: '22px',
}

const paragraph = {
  margin: '0',
  lineHeight: '2',
}

const global = {
  paddingX,
  paddingY,
  defaultPadding: {
    ...paddingX,
    ...paddingY,
  },
  paragraphWithBold: { ...paragraph, fontWeight: 'bold' },
  heading: {
    fontSize: '32px',
    lineHeight: '1.3',
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: '-1px',
  } as React.CSSProperties,
  text: {
    ...paragraph,
    color: '#747474',
    fontWeight: '500',
  },
  button: {
    border: '1px solid #929292',
    fontSize: '16px',
    textDecoration: 'none',
    padding: '10px 0px',
    width: '220px',
    display: 'block',
    textAlign: 'center',
    fontWeight: 500,
    color: '#000',
  } as React.CSSProperties,
  hr: {
    borderColor: '#E5E5E5',
    margin: '0',
  },
}

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: '10px auto',
  width: '600px',
  maxWidth: '100%',
  border: '1px solid #E5E5E5',
}

const track = {
  container: {
    padding: '22px 40px',
    backgroundColor: '#F7F7F7',
  },
  number: {
    margin: '12px 0 0 0',
    fontWeight: 500,
    lineHeight: '1.4',
    color: '#6F6F6F',
  },
}

const message = {
  padding: '40px 74px',
  textAlign: 'center',
} as React.CSSProperties

const addressTitle = {
  ...paragraph,
  fontSize: '15px',
  fontWeight: 'bold',
}

const footer = {
  policy: {
    width: '166px',
    margin: 'auto',
  },
  text: {
    margin: '0',
    color: '#AFAFAF',
    fontSize: '13px',
    textAlign: 'center',
  } as React.CSSProperties,
}