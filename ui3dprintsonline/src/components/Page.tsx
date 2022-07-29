import * as React from "react";
import {
    H6,
    Card,
    Button,
    Navbar,
    NavbarHeading,
    NavbarGroup,
    NavbarDivider,
    Menu,
    MenuItem } from "@blueprintjs/core";
import {
    Table,
    Column,
    Cell,
    Utils,
    ColumnHeaderCell } from "@blueprintjs/table";
import { Popover2 } from "@blueprintjs/popover2";
import background from "../img/coming_soon.png";

export class Page extends React.Component {

    render() {
        // const columns = this.state.columns.map(col => col.getColumn(this.getCellData, this.sortColumn));
        return (
            <div style={{letterSpacing: '3px'}}>
                <p style={{fontSize: 'small'}}>SITE UNDER CONSTRUCTION</p>
                <h2>PRINTING SOON</h2>
            </div>
        )
    }
}