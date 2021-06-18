import Head from 'next/head';
import faker from 'faker';
import Menu from "../components/Menu";
import {Button} from "@material-ui/core";

const FirstPage = () => {
    return <>
        <Head><title>First Pages</title></Head>
        <Menu />
        <h1>First Page</h1>
        <div>Fake name: {faker.name.findName()}</div>
        <Button>Dummy button</Button>
    </>;
}

export default FirstPage;