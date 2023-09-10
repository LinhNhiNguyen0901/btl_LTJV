import { useEffect, useState } from "react";
import { Container, Nav, NavDropdown, Navbar, Spinner } from "react-bootstrap";
import Api, { endpoints } from "../../../configs/Api";

const Jobs = () => {
    const [tag, setTag] = useState(null);
    const [job, setJob] = useState(null);

    useEffect(() => {
        const loadTag = async () => {
            // let res = await fetch("http://localhost:8080/apjob_javaBTL/api/tags/");
            // let data = await res.json();
            let res = await Api.get(endpoints['tags'])

            setTag(res.data);
        }

        const loadJob = async() => {
            try {
                let res = Api.get(endpoints['recruiment-news']);
                setJob(res.data);
            } catch (ex) {
                console.error(ex);
            }
               
        }

        loadTag();
        loadJob();
    }, [])

    if(tag == null)
        return <Spinner animation="grow" variant="info"/>;

    if(job == null)
        return <Spinner animation="grow" variant="info"/>;


    return <>
        <Navbar expand="lg" className="bg-body-tertiary" >
            <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Tags" id="basic-nav-dropdown">
                        {tag.map(t => <NavDropdown.Item href="#action/3.1" key={t.id}>{t.name}</NavDropdown.Item>)}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <ul>
            {job.map(j => <li key={j.id}>{j.title}</li>)}
        </ul>
    </>
}

export default Jobs;