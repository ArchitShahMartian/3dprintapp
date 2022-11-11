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
import { User } from "../services/api/User.ts"

interface ISignupState{
    showPassword: boolean
    firstName?: string
    lastname?: string
    password?: string
    confirmPassword?: string
    emailValid?: boolean
    passwordValid?: boolean
}

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validatePassword = (password) => {
  return String(password)
    .match(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    );
};

export class Signup extends React.Component<ISignupState> {
    constructor(props){
        super(props);
        this.state={
            showPassword: false,
            showConfirmpassword: false,
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

        return (
            <div className={"bp4-dark"} >
                <Navbar>
                    <NavbarGroup>
                        <Link to={"/"}><NavbarHeading>My 3D Prints Online</NavbarHeading></Link>
                    </NavbarGroup>
                </Navbar>
                <div className={Classes.DIALOG_BODY}>
                    <Card style={{display: "block", margin: "0 auto", width:"400px"}}>
                    <H2 style={{paddingTop: "10px", fontFamily: "Arial", textAlign: "center", color: "orange"}}>Sign up</H2>
                    <p style={{textAlign: "center"}}> Already a member?
                        <Link to={"/login"}><span style={{color: "orange"}}> Sign in</span></Link>
                    </p>
                    <form id={"loginform"}
                          method="post"
                          onSubmit={this.handleSubmit}>
                        <FormGroup
                            // helperText="Helper text with details..."
                            label="First Name"
                            labelFor="text-input">
                            <InputGroup id="text-input"
                                        name="First Name"
                                        value={this.state.firstName}
                                        placeholder="Enter First Name"
                                        onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup
                            // helperText="Helper text with details..."
                            label="Last Name"
                            labelFor="text-input">
                            <InputGroup id="text-input"
                                        name="Last Name"
                                        value={this.state.lastName}
                                        placeholder="Enter Last Name"
                                        onChange={this.handleChange}/>
                        </FormGroup>
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
                        <FormGroup
                            className={"bp4-intent-danger"}
                            helperText={this.state.password === this.state.confirmPassword ? "" : "Password doesn't not match"}
                            label="Confirm Password"
                            labelFor="text-input"
                            labelInfo="(required)">
                            <InputGroup id="text-input"
                                        rightElement={lockPassword}
                                        name="Confirm Password"
                                        type={this.state.showPassword ? "text" : "password"}
                                        placeholder="Re-Enter your password"
                                        onChange={this.handleChange}/>
                        </FormGroup>
                        <div>
                            <Button disabled={!(this.state.emailValid && this.state.passwordValid && (this.state.password === this.state.confirmPassword))}
                                    outline={true}
                                    large={true}
                                    type="submit"
                                    value={"submit"}
                                    intent={Intent.PRIMARY}>Submit
                            </Button>
                        </div>
                    </form>
                    </Card>
                </div>
            </div>
        )
    }

    handleSubmit = (event: any) => {
        event.preventDefault()
        const formData = new FormData(event.target);
        const headers = {
            'Content-Type': 'multipart/form-data',
            'X-CSRFToken': Cookies.get('csrftoken'),
            'Accept': 'application/json'
        }
        User.signup(formData, {headers: headers}).then((response: any) => {
            console.log("User=", response)
            // this.setState({
            //     productList: response.data.data
            // });
        })
    }

    handleChange = (event) => {
        switch(event.target.name){
            case "First Name":
                this.setState({
                    firstName: event.target.value
                })
                break;
            case "Last Name":
                this.setState({
                    lastName: event.target.value
                })
                break;
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
            case "Confirm Password":
                this.setState({
                    confirmPassword: event.target.value
                })
        }
    }

    private handleLockClick = () => this.setState({ showPassword: !this.state.showPassword });
    // private handleFirstName = () => this.setState({ firstName: })
}

