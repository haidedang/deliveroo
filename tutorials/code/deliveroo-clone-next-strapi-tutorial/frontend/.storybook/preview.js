import "../styles/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Button,
  Card,
  CardBody,
  CardColumns,
  CardImg,
  CardSubtitle
} from "reactstrap";
/* import React from 'react'
import {addDecorator, configure} from '@storybook/react'; 
import ApolloWrapper from "../lib/provider"


configure(require.context("../components", true, /\.stories\.js$/), module );

const GlobalWrapper = storyFn => (
  <ApolloWrapper>
    {storyFn()}
  </ApolloWrapper>

)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
}

addDecorator(GlobalWrapper) */