import * as React from "react";
import {
    Card,
    Colors,
    Classes,
    Elevation,
    Button,
    H2,
    Intent,
    Navbar,
    NavbarHeading,
    NavbarGroup,
    NavbarDivider,
    FormGroup,
    ControlGroup,
    InputGroup,
    Icon} from "@blueprintjs/core";
import background from "../img/coming_soon.png";
import { Link } from "react-router-dom";
import { Popover2, Tooltip2 } from "@blueprintjs/popover2";
import { validateEmail, handleChange } from "./Signup.tsx";

interface ILoginState{
    showPassword: boolean
    password?: string
    emailValid?: boolean
}

export class Login extends React.Component<ILoginState> {
    constructor(props){
        super(props);
        this.state={
            showPassword: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        const lockPassword = (
            <Tooltip2 content={`${this.state.showPassword ? "Hide" : "Show"} Password`}>
                <Button
                    icon={this.state.showPassword ? "eye-open" : "eye-off"}
                    intent={Intent.PRIMARY}
                    minimal={true}
                    onClick={this.handleLockClick}
                />
            </Tooltip2>
        );
        console.log("this.state=", this.state)
        return (
            <div className={"bp4-dark"} >
                <Navbar>
                    <NavbarGroup>
                        <Link to={"/"}><NavbarHeading>My 3D Prints Online</NavbarHeading></Link>
                    </NavbarGroup>
                </Navbar>
                <div className={Classes.DIALOG_BODY}>
                    <Card style={{display: "block", margin: "0 auto", width:"400px"}}>
                    <H2 style={{paddingTop: "10px", fontFamily: "Arial", textAlign: "center", color: "orange"}}>Sign In</H2>
                    <p style={{textAlign: "center"}}> Not a member?
                        <Link to={"/signup"}><span style={{color: "orange"}}> Sign up</span></Link>
                    </p>
                    <form id={"loginform"}
                          method="post"
                          onSubmit={this.handleSubmit}>
                    <FormGroup
                        className={"bp4-intent-danger"}
                        helperText={this.state.emailId === undefined || this.state.emailValid ? "" : "Email not valid"}
                        label="Email ID"
                        labelFor="text-input"
                        labelInfo="(required)">
                        <InputGroup id="text-input"
                                    name="Email ID"
                                    placeholder="Enter your email ID"
                                    onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup
                        className={"bp4-intent-danger"}
                        helperText={this.state.password === undefined || this.state.passwordValid ? "" : "Password must be minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character:"}
                        label="Password"
                        labelFor="text-input"
                        labelInfo="(required)">
                        <InputGroup id="text-input"
                                    rightElement={lockPassword}
                                    name="Password"
                                    type={this.state.showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    onChange={this.handleChange}/>
                    </FormGroup>
                    <div>
                        <Button disabled={!(this.state.emailValid)}
                                outline={true}
                                large={true}
                                type="submit"
                                intent={Intent.PRIMARY}>Submit
                        </Button>
                        <p style={{float: "right", color: Colors.BLUE3, paddingTop: "10px"}}>Forgot Password?</p>
                    </div>
                    </form>
                    </Card>
                </div>
            </div>
        )
    }

    handleSubmit = (event: any) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        console.log("formData=", formData)
    }

    handleChange = (event) => {
        switch(event.target.name){
            case "Email ID":
                if (!validateEmail(event.target.value)){
                    this.setState({
                        emailValid: false,
                        emailId: event.target.value
                    })
                }
                else{
                    this.setState({
                        emailValid: true,
                        emailId: event.target.value
                    })
                }
                break;
            case "Password":
                if (!validatePassword(event.target.value)){
                    this.setState({
                        passwordValid: false,
                        password: event.target.value
                    })
                }
                else{
                    this.setState({
                        passwordValid: true,
                        password: event.target.value
                    })
                }
                break;
        }
    }
}

