import * as React from "react";
import {
    Button,
    H6, H5,
    Colors,
    Classes,
    Checkbox,
    Navbar,
    NavbarHeading,
    NavbarGroup,
    NavbarDivider,
    Icon,
    Intent,
    IconSize,
    ControlGroup,
    InputGroup} from "@blueprintjs/core";
import { SplitPane } from "react-multi-split-pane";
import { ProductCard } from "./ProductCard.tsx";
import { Link } from "react-router-dom";
// import background from "../img/coming_soon.png";

export class Page extends React.Component {

    render() {
        // const columns = this.state.columns.map(col => col.getColumn(this.getCellData, this.sortColumn));
        return (
            <div className={"bp4-dark"}>
                {/*<Navbar style={{backgroundColor: "#181818"}}>*/}
                <SplitPane
                    split="horizontal"
                    minSize={10}
                    defaultSizes={[5, 90, 5 ]}
                >
                <Navbar>
                    <NavbarGroup>
                        <Link to={"/"}><NavbarHeading className={"title"}>My 3D Prints Online</NavbarHeading></Link>
                    </NavbarGroup>
                    <NavbarGroup className={"bp4-align-center"} style={{marginLeft: '300px'}}>
                      <ControlGroup {...this.state}>
                        <InputGroup placeholder="Search Products..." />
                          <Button icon="arrow-right" intent={Intent.PRIMARY}>Search</Button>
                      </ControlGroup>
                    </NavbarGroup>
                    {/*<NavbarGroup className={"bp4-align-right"}>*/}
                    {/*    <Button className={Classes.MINIMAL} icon="home" text="Home" />*/}
                    {/*    <Button className={Classes.MINIMAL} icon="document" text="Files" />*/}
                    {/*    <Button style={{marginRight: "10px"}}><Icon icon={"user"} size={20} style={{paddingRight: "15px", paddingLeft: "10px"}}/>Hello, User</Button>*/}
                    {/*    <Link to={"login"}><Button intent={Intent.PRIMARY} style={{marginRight: '10px'}}>*/}
                    {/*        <Icon icon={"log-in"} size={15} style={{paddingRight: "15px", color: "white"}}/>Login</Button>*/}
                    {/*    </Link>*/}
                    {/*     <Button style={{backgroundColor: 'orange'}}>*/}
                    {/*          <Icon icon={"shopping-cart"} size={20} style={{paddingRight: "15px", color: "white"}}/>Cart*/}
                    {/*     </Button>*/}
                    {/*</NavbarGroup>*/}
                </Navbar>
                    <div className={"split-pane"} style={{ alignItems: 'center', width:"100%", height:"100%", padding: "20px"}}>
                    {/*<div className={"split-pane"} style={{display:"flex", align: 'center', width:"100%", height:"100%", padding: "20px"}}>*/}
                        <ProductCard/>
                    </div>
                <div style={{padding: "10px", backgroundColor: "#383e47", width: "100%", height: "100%"}}>
                  <H6 style={{textAlign: "center"}}>Made by <span style={{color: Colors.RED3}}>Archit Shah</span></H6>
                </div>
                </SplitPane>
            </div>
            // <div style={{letterSpacing: '3px'}}>
            //     <p style={{fontSize: 'small'}}>SITE UNDER CONSTRUCTION</p>
            //     <h2>PRINTING SOON</h2>
            // </div>
        )
    }
}
