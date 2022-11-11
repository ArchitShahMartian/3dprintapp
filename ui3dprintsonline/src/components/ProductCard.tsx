import * as React from "react";
import { Card, Elevation, Button, H4, H3, Intent } from "@blueprintjs/core";
import background from "../img/coming_soon.png";

export class ProductCard extends React.Component {
    render() {
        // const columns = this.state.columns.map(col => col.getColumn(this.getCellData, this.sortColumn));
        return (
            <div style={{display: 'flex'}}>
                <Card interactive={true}
                      elevation={Elevation.TWO}
                      style={{width: "250px", height: "auto", padding: '0px', backgroundColor: '#393f4a', borderRadius: "20px", marginRight: "20px"}}>
                    <img src={ background } style={{overflow: 'hidden', width: "100%", height: "175px", borderTopLeftRadius: "20px", borderTopRightRadius: "20px"}} alt=''/>
                    <H4 style={{textAlign: 'left', paddingLeft: '10px', color: 'orange'}}>Lithophane Cube Lamp</H4>
                    <p style={{textAlign: 'left', paddingLeft: '10px', overflow: 'hidden'}}>
                        Build your own Lithophane Lamp cube with photos of you and your loved ones
                    </p>
                    <div style={{display: 'flex'}}>
                        <H3 style={{textAlign: 'left', paddingLeft: '10px', color: 'orange'}}>84$</H3>
                        {/*<Button style={{marginLeft: '120px', backgroundColor: 'orange'}}> Add to Cart</Button>*/}
                    </div>
                </Card>
                <Card interactive={true}
                      elevation={Elevation.TWO}
                      style={{width: "250px", height: "auto", padding: '0px', backgroundColor: '#393f4a', borderRadius: "20px", marginRight: "20px"}}>
                    <img src={ background } style={{overflow: 'hidden', width: "100%", height: "175px", borderTopLeftRadius: "20px", borderTopRightRadius: "20px"}} alt=''/>
                    <H4 style={{textAlign: 'left', paddingLeft: '10px', color: 'orange'}}>Lithophane Cylindrical Lamp</H4>
                    <p style={{textAlign: 'left', paddingLeft: '10px', overflow: 'hidden'}}>
                        Build your own Lithophane Lamp cube with photos of you and your loved ones
                    </p>
                    <div style={{display: 'flex'}}>
                        <H3 style={{textAlign: 'left', paddingLeft: '10px', color: 'orange'}}>84$</H3>
                        {/*<Button style={{marginLeft: '120px', backgroundColor: 'orange'}}> Add to Cart</Button>*/}
                    </div>
                </Card>
                <Card interactive={true}
                      elevation={Elevation.TWO}
                      style={{width: "250px", height: "auto", padding: '0px', backgroundColor: '#393f4a', borderRadius: "20px", marginRight: "20px"}}>
                    <img src={ background } style={{overflow: 'hidden', width: "100%", height: "175px", borderTopLeftRadius: "20px", borderTopRightRadius: "20px"}} alt=''/>
                    <H4 style={{textAlign: 'left', paddingLeft: '10px', color: 'orange'}}>Lithophane Spherical Lamp</H4>
                    <p style={{textAlign: 'left', paddingLeft: '10px', overflow: 'hidden'}}>
                        Build your own Lithophane Lamp cube with photos of you and your loved ones
                    </p>
                    <div style={{display: 'flex'}}>
                        <H3 style={{textAlign: 'left', paddingLeft: '10px', color: 'orange'}}>84$</H3>
                        {/*<Button style={{marginLeft: '120px', backgroundColor: 'orange'}}> Add to Cart</Button>*/}
                    </div>
                </Card>
            </div>
        )
    }
}
