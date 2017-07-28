import React from 'react';
import FontAwesome from 'react-fontawesome';
import {
  FooterWrapper,
  FooterContent,
  Text,
  Link
} from './elements';

function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <Text>{"Den Glade Høvel AS"}</Text>
        <Text>{"Linddalsveien 20"}</Text>
        <Text>{"4950 Risør"}</Text>
      </FooterContent>
      <FooterContent>
        <Text>{"Kontakt"}</Text>
        <Link
          href={"mailto:johnandersen@dengladehoevel.no"}
          >
          {"E-post"}
        </Link>
      </FooterContent>
      <FooterContent>
        <Text>{"Mobilnr:"}</Text>
        <Text>{"91774345"}</Text>
      </FooterContent>
      <FooterContent>
        <Text>{"Følg oss på"}</Text>
        <Link
          href={"https://www.facebook.com/dengladehovel/"}
          target={"_blank"}
          >
          <FontAwesome name={"facebook-official"}/>
          {" Facebook"}
        </Link>
      </FooterContent>

    </FooterWrapper>
  );
}

export default Footer;
