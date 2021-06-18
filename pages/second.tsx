import Head from 'next/head';
import faker from "faker";
import Menu from "../components/Menu";
import {Button} from "@material-ui/core";

const SecondPage = () => {
    return <>
        <Head><title>Second Page</title></Head>
        <Menu />
        <h1>Second Page</h1>
        <div>Fake name: {faker.name.findName()}</div>
        <Button>Dummy button</Button>
    </>;
}

export default SecondPage;