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
                      style={{width: "275px", height: "340px", padding: '0px', backgroundColor: '#393f4a', borderRadius: "20px", marginRight: "20px"}}>
                    <img src={ background } style={{overflow: 'hidden', width: "100%", height: "175px", borderTopLeftRadius: "20px", borderTopRightRadius: "20px"}} alt=''/>
                    <H4 style={{textAlign: 'left', paddingLeft: '10px'}}>Lithophane Lamp</H4>
                    <p style={{textAlign: 'left', paddingLeft: '10px', overflow: 'hidden'}}>Teri Yaadein Mulakateeee main kaise kahu chahat ki mulakateee... Kabhi toh paas mere aao kabhi toh nazre mujhko churao kabhi to...  </p>
                    <div style={{display: 'flex'}}>
                        <H3 style={{textAlign: 'left', paddingLeft: '10px', color: 'orange'}}>84$</H3>
                        <Button style={{marginLeft: '120px', backgroundColor: 'orange'}}> Add to Cart</Button>
                    </div>
                </Card>
                <Card interactive={true}
                      elevation={Elevation.TWO}
                      style={{width: "275px", height: "340px", padding: '0px', backgroundColor: '#393f4a', borderRadius: "20px", marginRight: "20px"}}>
                    <img src={ background } style={{overflow: 'hidden', width: "100%", height: "175px", borderTopLeftRadius: "20px", borderTopRightRadius: "20px"}} alt=''/>
                    <H4 style={{textAlign: 'left', paddingLeft: '10px'}}>Lithophane Lamp</H4>
                    <p style={{textAlign: 'left', paddingLeft: '10px', overflow: 'hidden'}}>Teri Yaadein Mulakateeee main kaise kahu chahat ki mulakateee... Kabhi toh paas mere aao kabhi toh nazre mujhko churao kabhi to...  </p>
                    <div style={{display: 'flex'}}>
                        <H3 style={{textAlign: 'left', paddingLeft: '10px', color: 'orange'}}>84$</H3>
                        <Button style={{marginLeft: '120px', backgroundColor: 'orange'}}> Add to Cart</Button>
                    </div>
                </Card>
                <Card interactive={true}
                      elevation={Elevation.TWO}
                      style={{width: "275px", height: "340px", padding: '0px', backgroundColor: '#393f4a', borderRadius: "20px", marginRight: "20px"}}>
                    <img src={ background } style={{overflow: 'hidden', width: "100%", height: "175px", borderTopLeftRadius: "20px", borderTopRightRadius: "20px"}} alt=''/>
                    <H4 style={{textAlign: 'left', paddingLeft: '10px'}}>Lithophane Lamp</H4>
                    <p style={{textAlign: 'left', paddingLeft: '10px', overflow: 'hidden'}}>Teri Yaadein Mulakateeee main kaise kahu chahat ki mulakateee... Kabhi toh paas mere aao kabhi toh nazre mujhko churao kabhi to...  </p>
                    <div style={{display: 'flex'}}>
                        <H3 style={{textAlign: 'left', paddingLeft: '10px', color: 'orange'}}>84$</H3>
                        <Button style={{marginLeft: '120px', backgroundColor: 'orange'}}> Add to Cart</Button>
                    </div>
                </Card>
                <Card interactive={true}
                      elevation={Elevation.TWO}
                      style={{width: "275px", height: "340px", padding: '0px', backgroundColor: '#393f4a', borderRadius: "20px", marginRight: "20px"}}>
                    <img src={ background } style={{overflow: 'hidden', width: "100%", height: "175px", borderTopLeftRadius: "20px", borderTopRightRadius: "20px"}} alt=''/>
                    <H4 style={{textAlign: 'left', paddingLeft: '10px'}}>Lithophane Lamp</H4>
                    <p style={{textAlign: 'left', paddingLeft: '10px', overflow: 'hidden'}}>Teri Yaadein Mulakateeee main kaise kahu chahat ki mulakateee... Kabhi toh paas mere aao kabhi toh nazre mujhko churao kabhi to...  </p>
                    <div style={{display: 'flex'}}>
                        <H3 style={{textAlign: 'left', paddingLeft: '10px', color: 'orange'}}>84$</H3>
                        <Button style={{marginLeft: '120px', backgroundColor: 'orange'}}> Add to Cart</Button>
                    </div>
                </Card>

            </div>
        )
    }
}
